import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { IAppState } from 'src/app/store/models';
import { timeParameter } from 'src/app/store/selectors';
import { mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-time-count',
  templateUrl: './time-count.component.html',
  styleUrls: ['./time-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeCountComponent {
  parameter$: Observable<string | undefined>;

  nextFriday$: Observable<Date>;

  weekendLabel$: Observable<string>;
  pictureUrl$: Observable<string>;

  weekPicture = 'https://media.giphy.com/media/evB90wPnh5LxG3XU5o/giphy.gif';
  captainPicture =
    'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F414%2F503%2Feac.jpg';
  weekEndTeamPicture =
    'https://i.giphy.com/media/xT8qB308txoPb4P9Ze/giphy.webp';

  constructor(private store: Store<IAppState>) {
    this.parameter$ = this.store.select(timeParameter);

    this.nextFriday$ = this.parameter$.pipe(
      map((value: string | undefined) => this.getParameterNextFriday(value))
    );

    const timerPushWithNextFriday$: Observable<Date> = timer(0, 1000).pipe(
      switchMap(() => this.nextFriday$)
    );

    this.weekendLabel$ = timerPushWithNextFriday$.pipe(
      map((nextFriday: Date) => this.getWeekEndLabel(nextFriday))
    );

    this.pictureUrl$ = timerPushWithNextFriday$.pipe(
      map((nextFriday: Date) => this.getPictureUrl(nextFriday))
    );
  }

  isWeekEnd(currentDate: Date, nextFriday: Date): boolean {
    if (
      currentDate.getDay() === Weekday.Saturday ||
      currentDate.getDay() === Weekday.Sunday ||
      (currentDate.getDay() === Weekday.Friday &&
        currentDate.getHours() > nextFriday.getHours()) ||
      (currentDate.getDay() === Weekday.Friday &&
        currentDate.getHours() == nextFriday.getHours() &&
        currentDate.getMinutes() >= nextFriday.getMinutes())
    ) {
      return true;
    }

    return false;
  }

  getParameterNextFriday(value: string | undefined): Date {
    const defaultTime = '1723';
    const timeFormat = /^(\d{2})(\d{2})$/;
    let time: string = value === undefined ? defaultTime : (value as string);
    console.log('time: ->' + time + '<-');

    time = timeFormat.test(time) ? time : defaultTime;

    const regexResult = timeFormat.exec(time);

    if (regexResult == null) throw 'boom';

    const timeHours = parseInt(regexResult[1]);
    const timeMinutes = parseInt(regexResult[2]);

    const now = new Date(Date.now());

    const nextFriday = this.getNextFriday(
      new Date(now.toDateString()),
      timeHours,
      timeMinutes
    );

    return nextFriday;
  }

  getWeekEndLabel(nextFriday: Date): string {
    //const now = new Date(Date.parse('2022-12-16T18:30:00'));
    const now = new Date(Date.now());

    if (this.isWeekEnd(now, nextFriday)) {
      return "C'est le week-end";
    }

    const diff = nextFriday.getTime() - now.getTime();

    console.debug(`diff: ${diff}`);
    // calculer le nombre de jours, d'heures et de minutes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((diff % (1000 * 60)) / 1000);

    return `Encore ${days} jour(s) ${hours} heures, ${minutes} minutes et ${secondes} secondes`;
  }

  getPictureUrl(nextFriday: Date): string {
    const now = new Date(Date.now());
    //const now = new Date(Date.parse('2022-12-14T18:30:00'));

    if (this.isWeekEnd(now, nextFriday)) {
      return this.weekEndTeamPicture;
    }

    if (now.getDay() === Weekday.Wednesday) {
      return this.captainPicture;
    }

    return this.weekPicture;
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
