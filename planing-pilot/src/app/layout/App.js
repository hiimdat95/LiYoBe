import React, { Component } from 'react';
import Tools from "features/tools/Tools";
import './App.css';

import {
  Header,Container
} from "semantic-ui-react";
import TabBarContainer from 'features/tabs/TabBarContainer';
import UnitInfo from "features/unitInfo/UnitInfo";
import Pilots from "features/pilots/Pilots";
import Mechs from "features/mechs/Mechs";
import UnitOrganization from "features/unitOrganization/UnitOrganization";
import ModalManager from "features/modals/ModalManager";
import ContextMenuManager from "features/contextMenus/ContextMenuManager";

class App extends Component {
  render() {
    const tabs=[
      {name : "unitInfo", label : "Unit Info", component : UnitInfo,},
      {name : "pilots", label : "Pilots", component : Pilots,},
      {name : "mechs", label : "Mechs", component : Mechs,},
      {name : "unitOrganization", label : "Unit Organization", component : UnitOrganization},
      {name : "tools", label : "Tools", component : Tools},
    
    ]
    return (
      <div className="App">
        <ModalManager />
        <ContextMenuManager />
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
