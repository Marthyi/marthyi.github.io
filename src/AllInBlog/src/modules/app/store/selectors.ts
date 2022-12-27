import * as fromRouter from "@ngrx/router-store";
import { getSelectors } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState, IAppState, SelectedPost } from "./models";

/*
* HOME SELECTORS
*/

const getHome = (state: { app: IAppState }) => {
  return state.app.home;
};

const createHomeStateSelector = function <T>(
  selector: (state: HomeState) => T
) {
  //debugger;
  return createSelector(getHome, selector);
};

export const selectRouter = createFeatureSelector<
  fromRouter.RouterReducerState<any>
>("router");

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  //selectRouteDataParam, // factory function to select a route data param
  selectUrl, // select the current url
  selectTitle, // select the title if available
} = getSelectors();

export const timeParameter = selectQueryParam('time');

export const selectPosts = createHomeStateSelector((p) => {
  return p.posts;
});
export const selectHomeStateStatus = createHomeStateSelector((p) => p.status);

/*
* POST SELECTORS
*/

const selectedPostId = selectRouteParam("post");

export const selectedPost = createSelector(selectedPostId, (p) => {

  if (p) {
    let title = decodeURI(p).replace(/\d{4}-\d{2}-\d{2}/, " ");
    title = title.replace(/-/gi, " ");

    return <SelectedPost>{
      url: "/assets/posts/" + decodeURI(p) + ".md",
      title: title,
    };
  }

  return null;

});
