import {createReducer} from "common/utils/reducerUtils";
import {DATA_LOADED} from "features/tools/toolConstants";
import {UNIT_INFO_UPDATE} from "./unitInfoConstants";

const initialState = {
    name : "N/A",
    affiliation : "",
};
function updateUnitInfo(state, payload){
    return{
        ...state,
        ...payload,
    };
}

function dataLoaded(state, payload) {
    const {unit} = payload;
     return unit;
}
export default createReducer(initialState, {
    [DATA_LOADED] : dataLoaded,
    [UNIT_INFO_UPDATE] : updateUnitInfo,
});  