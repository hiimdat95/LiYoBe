import { Model, attr } from "redux-orm";

export default class MechDesign extends Model {
    static get fields() {
        return {
            id : attr(),
        };
    }
    static parse(designData) {
        return this.upsert(designData);
    }

    toJSON() {
        return { ...this.ref };
    }

    updateFrom(otherMech) {
        this.update(otherMech.ref);
    }
}
MechDesign.modelName = "MechDesign"; 