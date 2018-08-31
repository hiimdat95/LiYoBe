import { createSelector } from "reselect";

import schema from "app/schema";

export const selectEntities = data => data.entities;

export const getEntitiesSession = createSelector(
    selectEntities,
    entities => schema.from(entities)
);