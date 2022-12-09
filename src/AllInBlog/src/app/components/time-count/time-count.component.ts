import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { IAppState } from 'src/app/store/models';
import { timeParameter } from 'src/app/store/selectors';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-time-count',
  templateUrl: './time-count.component.html',
  styleUrls: ['./time-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeCountComponent {
  parameter$: Observable<string | undefined>;
  weekendLabel$: Observable<string>;

  constructor(private store: Store<IAppState>) {
    this.parameter$ = this.store.select(timeParameter);
    this.weekendLabel$ = this.getWekendLabel();
  }

  getWekendLabel(): Observable<string> {
    const x = timer(0, 1000).pipe(
      mergeMap(_ =>
        this.parameter$.pipe(
          map((value: string | undefined) => this.thisIsWeekEnd(value))
        )
      )
    );

    return x;
  }

  thisIsWeekEnd(value: string | undefined): string {
    const defaultTime = '1723';
    const timeFormat = /^(\d{2})(\d{2})$/;
    let time: string = value === undefined ? defaultTime : (value as string);
    console.log('time: ->' + time + '<-');

    time = timeFormat.test(time) ? time : defaultTime;

    const regexResult = timeFormat.exec(time);

    if (regexResult == null) throw '654';

    const timeHours = parseInt(regexResult[1]);
    const timeMinutes = parseInt(regexResult[2]);

    const now = new Date(Date.now());
    //const now = new Date(Date.parse('2022-12-08T18:30:00'));

    const currentDay = now.getDay();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    if (
      currentDay === Weekday.Saturday ||
      currentDay === Weekday.Sunday ||
      (currentDay === Weekday.Friday && currentHours > timeHours) ||
      (currentDay === Weekday.Friday &&
        currentHours == timeHours &&
        currentMinutes >= timeMinutes)
    ) {
      return "C'est le week-end";
    }

    const t1date = this.getNextFriday(
      new Date(now.toDateString()),
      timeHours,
      timeMinutes
    );

    const t1 = t1date.getTime();
    const t2 = now.getTime();

    const diff = t1 - t2;

    console.debug(`diff: ${diff}`);
    // calculer le nombre de jours, d'heures et de minutes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((diff % (1000 * 60)) / 1000);

    return `Encore ${days} jour(s) ${hours} heures, ${minutes} minutes et ${secondes} secondes`;
  }

  getNextFriday(date: Date, hours: number, minutes: number): Date {
    // déterminer le jour de la semaine actuel (0 = dimanche, 1 = lundi, etc.)
    const day = date.getDay();

    // calculer le nombre de jours jusqu'au prochain vendredi
    let daysUntilFriday = 5 - day;
    if (day > 5) {
      daysUntilFriday += 7;
    }

    // ajouter les jours jusqu'au prochain vendredi à la date actuelle
    date.setDate(date.getDate() + daysUntilFriday);
    date.setHours(hours);
    date.setMinutes(minutes);

    // retourner la nouvelle date
    return date;
  }
}

enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
