import { ActionReducerMap, createAction, createReducer, on, props } from "@ngrx/store";
import { PostModel } from '../services/serviceModels/serviceModels';
import { HomeState, HomeStateStatus, IAppState, initialState } from "./models";

export interface LoadedPostsModel{
  posts: PostModel[];
}

export const StateActions = {
  Home: {
    loadPosts: createAction("[Home] Load Posts"),
    loadedPosts: createAction("[Home] Loaded Posts", props<LoadedPostsModel>())
  }
};

function LoadPostsAction(state: HomeState): HomeState {
  return {
    ...state,
    status: HomeStateStatus.isLoading,
  };
}

function LoadedPostsAction(state: HomeState, rq : LoadedPostsModel): HomeState {
  return {
    ...state,
    posts: rq.posts,
    status: HomeStateStatus.Loaded,
  };
}

export const applicationStateReducer = createReducer<HomeState>(
  initialState,
  on(StateActions.Home.loadPosts, LoadPostsAction),
  on(StateActions.Home.loadedPosts, LoadedPostsAction)
);

export const reducers: ActionReducerMap<IAppState> = {
  home: applicationStateReducer,
};
