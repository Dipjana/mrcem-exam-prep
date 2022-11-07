import { createFeatureSelector, createSelector } from "@ngrx/store";
import { createReduxDevtoolsExtension } from "@ngrx/store-devtools/src/provide-store-devtools";
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) =>{
    return state.showLoading;
})