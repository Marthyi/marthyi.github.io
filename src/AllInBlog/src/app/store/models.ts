import { PostModel } from "../services/serviceModels/serviceModels";

export interface IAppState {
  home: HomeState;
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
