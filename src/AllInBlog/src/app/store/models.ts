import { PostModel } from "../services/serviceModels/serviceModels";
import { RouterReducerState } from "@ngrx/router-store";

export interface IAppState {
  home: HomeState;
  router: RouterReducerState<any>;
}

export enum HomeStateStatus {
  isLoading = 1,
  Loaded = 2,
  Error = 3,
}

export interface HomeState {
  posts: PostModel[];
  status: HomeStateStatus;
}

export const initialState: HomeState = {
  status: HomeStateStatus.Loaded,
  posts: [],
};

export interface SelectedPost {
  title: string;
  url: string;
}
