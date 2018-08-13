import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { TopMenu } from '../../shared/top-menu';
import { Sibar } from '../../shared/sibar-menu';
import   '../../../assets/css/Style.css';
import   '../../../assets/css/style-responsive.css';
// import '../../../assets/css/font.css';
import '../../../assets/css/lightbox.css';
import '../../../assets/css/minimal.css';
import '../../../assets/css/monthly.css';
import '../../../assets/css/morris.css';
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