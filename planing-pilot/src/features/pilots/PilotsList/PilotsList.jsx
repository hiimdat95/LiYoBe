import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";

import schema from "app/schema";


import { selectPilot } from "../pilotsActions";
import { selectCurrentPilot } from "../pilotsSelectors";

const mapState = (state) => {
    const session = schema.from(state.entities);
    const { Pilot } = session;

    //Extract a list of IDs for each Pilot entry
    const pilots = Pilot.all().withModels.map(pilotModel => pilotModel.getId());

    const currentPilot = selectCurrentPilot(state);

    //Return the list of pilot IDs and the current pilot ID as props
    return { pilots, currentPilot };
}

//Make an object full of action creators that can be passed to connect
//and bound up, instead of writing a separate mapDispatch function
const actions = {
    selectPilot,
};
export class PilotsList extends Component {
    render() {
        // const {pilots, onPilotClicked, currentPilot} = this.props;
        const { pilots = [], selectPilot, currentPilot } = this.props;

        const pilotRows = pilots.map(pilotID => (
            <PilotsListRow
                pilotID={pilotID}
                key={pilotID}
                onPilotClicked={selectPilot}
                selected={pilotID === currentPilot}
            />
        ));
        console.log(pilotRows);
        return (
            <Table celled>
                <PilotsListHeader />
                <Table.Body>
                    {pilotRows}
                </Table.Body>
            </Table>
        )
    }
}

export default connect(mapState, actions)(PilotsList);
