import { combineReducers } from "redux";
import { reduceReducer } from "common/utils/reducerUtils";

import entitiesReducer from "./entitiesReducer";
import editingEntitiesReducer from "./editingEntitiesReducer";
import tabReducer from "features/tabs/tabReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechsReducer from "features/mechs/mechsReducer";

import entityCrudReducer from "features/entities/entityReducer";
import editingFeatureReducer from "features/editing/editingReducer";
import modalsReducer from "features/modals/modalReducer";
import contextMenuReducer from "features/contextMenus/contextMenuReducer";

const combinedReducer = combineReducers({
    entities: entitiesReducer,
    editingEntities : editingEntitiesReducer,
    pilots: pilotsReducer,
    mechs: mechsReducer,
    tabs: tabReducer,
    modals: modalsReducer,
    contextMenu : contextMenuReducer
});

const rootReducer = reduceReducer(
    combinedReducer,
    entityCrudReducer,
    editingFeatureReducer,
    unitInfoReducer,
);

export default rootReducer;