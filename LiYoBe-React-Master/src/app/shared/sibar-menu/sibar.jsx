import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Sibar extends React.Component {
	render() {
		return (
			<div id="sidebar" className="nav-collapse">
				<div className="leftside-navigation">
					<ul className="sidebar-menu" id="nav-accordion">
						<li>
							<a className="active" href="index.html">
								<i className="fa fa-dashboard"></i>
								<span>Dashboard</span>
							</a>
						</li>

						<li className="sub-menu">
							<a href="javascript:;">
								<i className="fa fa-book"></i>
								<span>UI Elements</span>
							</a>
							<ul className="sub">
								<li>
									<a href="typography.html">Typography</a>
								</li>
								<li>
									<a href="glyphicon.html">glyphicon</a>
								</li>
								<li>
									<a href="grids.html">Grids</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="fontawesome.html">
								<i className="fa fa-bullhorn"></i>
								<span>Font awesome </span>
							</a>
						</li>
						<li className="sub-menu">
							<a href="javascript:;">
								<i className="fa fa-th"></i>
								<span>Data Tables</span>
							</a>
							<ul className="sub">
								<li>
									<a href="basic_table.html">Basic Table</a>
								</li>
								<li>
									<a href="responsive_table.html">Responsive Table</a>
								</li>
							</ul>
						</li>
						<li className="sub-menu">
							<a href="javascript:;">
								<i className="fa fa-tasks"></i>
								<span>Form Components</span>
							</a>
							<ul className="sub">
								<li>
									<a href="form_component.html">Form Elements</a>
								</li>
								<li>
									<a href="form_validation.html">Form Validation</a>
								</li>
								<li>
									<a href="dropzone.html">Dropzone</a>
								</li>
							</ul>
						</li>
						<li className="sub-menu">
							<a href="javascript:;">
								<i className="fa fa-envelope"></i>
								<span>Mail </span>
							</a>
							<ul className="sub">
								<li>
									<a href="mail.html">Inbox</a>
								</li>
								<li>
									<a href="mail_compose.html">Compose Mail</a>
								</li>
							</ul>
						</li>
						<li className="sub-menu">
							<a href="javascript:;">
								<i className=" fa fa-bar-chart-o"></i>
								<span>Charts</span>
							</a>
							<ul className="sub">
								<li>
									<a href="chartjs.html">Chart js</a>
								</li>
								<li>
									<a href="flot_chart.html">Flot Charts</a>
								</li>
							</ul>
						</li>
						<li className="sub-menu">
							<a href="javascript:;">
								<i className=" fa fa-bar-chart-o"></i>
								<span>Maps</span>
							</a>
							<ul className="sub">
								<li>
									<a href="google_map.html">Google Map</a>
								</li>
								<li>
									<a href="vector_map.html">Vector Map</a>
								</li>
							</ul>
						</li>
						<li className="sub-menu">
							<a href="javascript:;">
								<i className="fa fa-glass"></i>
								<span>Extra</span>
							</a>
							<ul className="sub">
								<li>
									<a href="gallery.html">Gallery</a>
								</li>
								<li>
									<a href="404.html">404 Error</a>
								</li>
								<li>
									<a href="registration.html">Registration</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="login.html">
								<i className="fa fa-user"></i>
								<span>Login Page</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);


	}
}
export { Sibar };