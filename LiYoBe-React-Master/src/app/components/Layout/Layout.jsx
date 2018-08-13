import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { TopMenu } from '../../shared/top-menu';
import { Sibar } from '../../shared/sibar-menu';
import   '../../../assets/css/Style.css'
// import NavMenu from './NavMenu';

class Layout extends React.Component {
  render() {
    return (
      <section id="container">
        <header className="header fixed-top clearfix">
          <TopMenu />
        </header>
        <aside>
          <Sibar />
        </aside>
      </section>
    );
  }
}
export { Layout };