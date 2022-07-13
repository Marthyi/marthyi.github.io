import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionCreator, Creator } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { PostService } from "../services/post.service";
import { PostModel } from "../services/serviceModels/serviceModels";
import { LoadedPostsModel, StateActions } from "./actions";

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private ps: PostService) {}

  
  $increment = createEffect(() => this.onAction(StateActions.Home.loadPosts).pipe(
    switchMap((p) =>
      this.ps
        .getPosts()
        .pipe(
          switchMap((posts) =>
            of(
              StateActions.Home.loadedPosts(<LoadedPostsModel>{
                posts: this.order(posts),
              })
            )
          )
        )
    )
  ));

  private compareDate(a: PostModel, b: PostModel): number {
    return a.creationDate.valueOf() - b.creationDate.valueOf();
  }

  private order(data: PostModel[]): PostModel[] {
    if (data && data.length > 1) {
      return data.sort((a, b) => this.compareDate(b,a));
    }
    return data;
  }

  private onAction<
    TActionType extends string,
    TActionParameter extends Creator,
    TActionCreator extends ActionCreator<TActionType, TActionParameter>,
    TAction = ReturnType<TActionCreator>
  >(action: TActionCreator): Observable<TAction> {
    return this.actions$.pipe(ofType(action));
  }
}
