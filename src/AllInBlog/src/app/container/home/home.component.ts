import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { PostModel } from "src/app/services/serviceModels/serviceModels";
import { StateActions } from 'src/app/store/actions';
import { HomeStateStatus, IAppState } from 'src/app/store/models';
import { selectHomeStateStatus, selectPosts } from 'src/app/store/selectors';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public STATES = HomeStateStatus;
  public posts$: Observable<PostModel[]>;
  public status$: Observable<HomeStateStatus>;

  constructor(private store: Store<IAppState>) {

    this.posts$ = this.store.select(selectPosts);
    this.status$ = this.store.select(selectHomeStateStatus);     

    this.store.dispatch(StateActions.Home.loadPosts());
  }

 
}
