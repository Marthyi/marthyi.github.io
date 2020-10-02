import { createSelector } from "@ngrx/store";
import { PostModel } from "../services/serviceModels/serviceModels";
import { HomeState, IAppState } from "./models";

const getHome = (state: IAppState) => state.home;

const createHomeStateSelector = function <T>(
  selector: (state: HomeState) => T
) {
  return createSelector(getHome, selector);
};


export const selectPosts = createHomeStateSelector((p) => p.posts);
export const selectHomeStateStatus = createHomeStateSelector((p) => p.status);