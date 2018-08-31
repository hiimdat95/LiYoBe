import { combineReducers } from "redux";
import { reduceReducer } from "common/utils/reducerUtils";

import entitiesReducer from "./entitiesReducer";
import tabReducer from "features/tabs/tabReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechsReducer from "features/mechs/mechsReducer";

import entityCrudReducer from "features/entities/entityReducer";

const combinedReducer = combineReducers({
    entities: entitiesReducer,
    unitInfo: unitInfoReducer,
    pilots: pilotsReducer,
    mechs: mechsReducer,
    tabs: tabReducer,
});

const rootReducer = reduceReducer(
    combinedReducer,
    entityCrudReducer,
);

export default rootReducer;