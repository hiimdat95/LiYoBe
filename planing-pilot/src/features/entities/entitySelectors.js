import { createSelector } from "reselect";

import orm from "app/schema";

export const selectEntities = data => data.entities;

export const getEntitiesSession = createSelector(
    selectEntities,
    entities => orm.session(entities)
);