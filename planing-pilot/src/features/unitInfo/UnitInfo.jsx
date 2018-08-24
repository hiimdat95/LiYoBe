import React, { Component } from 'react';

import { connect } from "react-redux";
import { Form, Dropdown, Segment } from 'semantic-ui-react';
import { selectUnitInfo } from "./unitInfoSelectors";

const FACTIONS = [
    //skip other entries
    { value: "cc", text: "Capellan Confederation" },
    { value: "dc", text: "Draconis Combine" },
    { value: "wd", text: "Wolf's Dragoons" },
]
const mapState = (state) => ({
    unitInfo: selectUnitInfo(state),
});
class UnitInfo extends Component {
    render() {
        const { unitInfo } = this.props;
        const { name, affiliation } = unitInfo;
        return (
            <Segment attached="bottom">
                <Form size="large">
                    <Form.Field name="name" width={6}>
                        <label>Unit Name</label>
                        <input type="text" placeholder="Name" onChange={() => { }} value={name} />
                    </Form.Field>
                    <Form.Field name="affiliation" width={6}>
                        <label>Affiliation</label>
                        <Dropdown
                            selection
                            options={FACTIONS}
                            value={affiliation}
                        />
                    </Form.Field>
                </Form>
            </Segment>
        )
    }
}
export default connect(mapState)(UnitInfo);