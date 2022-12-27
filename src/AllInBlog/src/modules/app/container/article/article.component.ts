import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IAppState, SelectedPost } from "@app/store/models";
import { selectedPost } from '@app/store/selectors';


@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  post$: Observable<SelectedPost|null>;

  constructor(private store: Store<IAppState>) {

    this.post$ = this.store.select(selectedPost);    
  }
}
