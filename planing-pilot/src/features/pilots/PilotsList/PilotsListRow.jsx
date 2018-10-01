import React from "react";
import {connect} from "react-redux";
import {
    Table,
    Button,
    Icon,
} from "semantic-ui-react";
import _ from "lodash";

import { getEntitiesSession } from "features/entities/entitySelectors";
import { deleteEntity } from "features/entities/entityActions";

const mapState = (state, ownProps) => {
    const session = getEntitiesSession(state);
    const {Pilot} = session;

    let pilot;
    
    if(Pilot.hasId(ownProps.pilotID)){
        const pilotModel = Pilot.withId(ownProps.pilotID);

     
        pilot = {
            ...pilotModel.ref
        };

   
        const {mech} = pilotModel;


        if(mech && mech.type){
            pilot.mechType = mech.type.id;
        }
    }
    return {pilot};
}

const actions = {
    deleteEntity,
};

const PilotsListRow = ({pilot={}, onPilotClicked=_.noop, selected, deleteEntity}) => {
    const {
        id = null,
        name = "",
        rank = "",
        age = "",
        gunnery = "",
        piloting = "",
        mechType = "",
    } = pilot;

    const onDeleteClicked = (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteEntity("Pilot", id);
    }

    const onRowClicked = () => onPilotClicked(id);

    return (
        <Table.Row  onClick={() => onRowClicked(id)} active={selected}>
            <Table.Cell>
                {name}
            </Table.Cell>
            <Table.Cell>
                {rank}
            </Table.Cell>
            <Table.Cell>
                {age}
            </Table.Cell>
            <Table.Cell>
                {gunnery}/{piloting}
            </Table.Cell>
            <Table.Cell>
                {mechType}
            </Table.Cell>

            <Table.Cell>
                <Button
                    compact
                    basic
                    circular
                    size="tiny"
                    color="red"
                    icon={<Icon  name="delete" />}
                    onClick={onDeleteClicked}
                >
                </Button>
            </Table.Cell>

        </Table.Row>
    );
}
export default connect(mapState, actions)(PilotsListRow);