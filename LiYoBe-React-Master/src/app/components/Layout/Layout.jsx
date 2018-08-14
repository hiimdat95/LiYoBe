import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Header } from '../../shared/header';
import { LeftAside } from '../../shared/left-aside';
import '../../../assets/css/Style.css';
import '../../../assets/css/style-responsive.css';
// import '../../../assets/css/font.css';
import '../../../assets/css/lightbox.css';
import '../../../assets/css/minimal.css';
import '../../../assets/css/monthly.css';
import '../../../assets/css/morris.css';
import 'font-awesome/css/font-awesome.min.css';
// import NavMenu from './NavMenu';

class Layout extends React.Component {
  render() {
    return (
      <section id="container">
        <header className="topbar">
          <Header />
        </header>
        <aside>
          <LeftAside className="left-sidebar" />
        </aside>
      </section>
    );
  }
}
export { Layout };