import React, { Component } from 'react';
import './App.css';

import {
  Header,Container,Menu
} from "semantic-ui-react";
import TabBarContainer from 'features/tabs/TabBarContainer';
import UnitInfo from "features/unitInfo/UnitInfo";
import Pilots from "features/pilots/Pilots";
import Mechs from "features/mechs/Mechs";
import UnitOrganization from "features/unitOrganization/UnitOrganization";


// const UnitInfo = () => <div> UnitInfo content</div>
// const Pilots = () => <div> Pilots content</div>
// const Mechs = () => <div> Mechs content</div>
// const UnitOrgranization = () => <div> UnitOrgranization content</div>
class App extends Component {
  render() {
    const tabs=[
      {name : "unitInfo", label : "Unit Info", component : UnitInfo,},
      {name : "pilots", label : "Pilots", component : Pilots,},
      {name : "mechs", label : "Mechs", component : Mechs,},
      {name : "unitOrganization", label : "Unit Organization", component : UnitOrganization}
    ]
    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">Planing hot</Header>
        </div>
        <Container>
          <TabBarContainer tabs={tabs} size="massive"/>
        </Container>
      </div>
    );
  }
}

export default App;
