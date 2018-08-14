import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LeftAside extends React.Component {
	render() {
		return (
            // <!-- Sidebar scroll-->
            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {/* <!-- User Profile--> */}
                        <li>
                            {/* <!-- User Profile--> */}
                            <div className="user-profile dropdown m-t-20">
                                <div className="user-pic">
                                    <img src="../../assets/images/users/1.jpg" alt="users" className="rounded-circle img-fluid" />
                                </div>
                                <div className="user-content hide-menu m-t-10">
                                    <h5 className="m-b-10 user-name font-medium">Steave Jobs</h5>
                                    <a href="javascript:void(0)" className="btn btn-circle btn-sm m-r-5" id="Userdd" role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="ti-settings"></i>
                                    </a>
                                    <a href="javascript:void(0)" title="Logout" className="btn btn-circle btn-sm">
                                        <i className="ti-power-off"></i>
                                    </a>
                                    <div className="dropdown-menu animated flipInY" aria-labelledby="Userdd">
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End User Profile--> */}
                        </li>
                        {/* <!-- User Profile--> */}
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Personal</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Car-Wheel"></i>
                                <span className="hide-menu">Dashboards </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="icon-Record"></i>
                                        <span className="hide-menu"> Dashboard 1 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index2.html" className="sidebar-link">
                                        <i className="icon-Record"></i>
                                        <span className="hide-menu"> Dashboard 2 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index3.html" className="sidebar-link">
                                        <i className="icon-Record"></i>
                                        <span className="hide-menu"> Dashboard 3 </span>
                                    </a>
                                </li>

                            </ul>
                        </li>

                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Apps</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Mailbox-Empty"></i>
                                <span className="hide-menu">Inbox </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="inbox-email.html" className="sidebar-link">
                                        <i className="mdi mdi-email"></i>
                                        <span className="hide-menu"> Email </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="inbox-email-detail.html" className="sidebar-link">
                                        <i className="mdi mdi-email-alert"></i>
                                        <span className="hide-menu"> Email Detail </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="inbox-email-compose.html" className="sidebar-link">
                                        <i className="mdi mdi-email-secure"></i>
                                        <span className="hide-menu"> Email Compose </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Ticket"></i>
                                <span className="hide-menu">Ticket </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="ticket-list.html" className="sidebar-link">
                                        <i className="mdi mdi-book-multiple"></i>
                                        <span className="hide-menu"> Ticket List </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ticket-detail.html" className="sidebar-link">
                                        <i className="mdi mdi-book-plus"></i>
                                        <span className="hide-menu"> Ticket Detail </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Sunglasses-Smiley"></i>
                                <span className="hide-menu">Extra </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="app-chats.html" className="sidebar-link">
                                        <i className="mdi mdi-comment-processing-outline"></i>
                                        <span className="hide-menu"> Chats Apps </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="app-calendar.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar"></i>
                                        <span className="hide-menu"> Calender </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="app-taskboard.html" className="sidebar-link">
                                        <i className="mdi mdi-bulletin-board"></i>
                                        <span className="hide-menu"> Taskboard </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">UI</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Paint-Brush"></i>
                                <span className="hide-menu">Ui Elements </span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="ui-buttons.html" className="sidebar-link">
                                        <i className="mdi mdi-toggle-switch"></i>
                                        <span className="hide-menu"> Buttons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-modals.html" className="sidebar-link">
                                        <i className="mdi mdi-tablet"></i>
                                        <span className="hide-menu"> Modals</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-tab.html" className="sidebar-link">
                                        <i className="mdi mdi-sort-variant"></i>
                                        <span className="hide-menu"> Tab</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-tooltip-popover.html" className="sidebar-link">
                                        <i className="mdi mdi-image-filter-vintage"></i>
                                        <span className="hide-menu"> Tooltip &amp; Popover</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-notification.html" className="sidebar-link">
                                        <i className="mdi mdi-message-bulleted"></i>
                                        <span className="hide-menu"> Notification</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-progressbar.html" className="sidebar-link">
                                        <i className="mdi mdi-poll"></i>
                                        <span className="hide-menu"> Progressbar</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-typography.html" className="sidebar-link">
                                        <i className="mdi mdi-format-line-spacing"></i>
                                        <span className="hide-menu"> Typography</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-bootstrap.html" className="sidebar-link">
                                        <i className="mdi mdi-bootstrap"></i>
                                        <span className="hide-menu"> Bootstrap Ui</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-breadcrumb.html" className="sidebar-link">
                                        <i className="mdi mdi-equal"></i>
                                        <span className="hide-menu"> Breadcrumb</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-list-media.html" className="sidebar-link">
                                        <i className="mdi mdi-file-video"></i>
                                        <span className="hide-menu"> List Media</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-grid.html" className="sidebar-link">
                                        <i className="mdi mdi-view-module"></i>
                                        <span className="hide-menu"> Grid</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-carousel.html" className="sidebar-link">
                                        <i className="mdi mdi-view-carousel"></i>
                                        <span className="hide-menu"> Carousel</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Folder-Add"></i>
                                <span className="hide-menu">Cards</span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="ui-cards.html" className="sidebar-link">
                                        <i className="mdi mdi-layers"></i>
                                        <span className="hide-menu"> Basic Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-card-customs.html" className="sidebar-link">
                                        <i className="mdi mdi-credit-card-scan"></i>
                                        <span className="hide-menu">Custom Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-card-weather.html" className="sidebar-link">
                                        <i className="mdi mdi-weather-fog"></i>
                                        <span className="hide-menu">Weather Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-card-draggable.html" className="sidebar-link">
                                        <i className="mdi mdi-bandcamp"></i>
                                        <span className="hide-menu">Draggable Cards</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Idea-5"></i>
                                <span className="hide-menu">Components</span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="component-sweetalert.html" className="sidebar-link">
                                        <i className="mdi mdi-layers"></i>
                                        <span className="hide-menu"> Sweet Alert</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-nestable.html" className="sidebar-link">
                                        <i className="mdi mdi-credit-card-scan"></i>
                                        <span className="hide-menu">Nestable</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-noui-slider.html" className="sidebar-link">
                                        <i className="mdi mdi-weather-fog"></i>
                                        <span className="hide-menu">Noui slider</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-rating.html" className="sidebar-link">
                                        <i className="mdi mdi-bandcamp"></i>
                                        <span className="hide-menu">Rating</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-toastr.html" className="sidebar-link">
                                        <i className="mdi mdi-poll"></i>
                                        <span className="hide-menu">Toastr</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Wrench"></i>
                                <span className="hide-menu">Widgets </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="widgets-apps.html" className="sidebar-link">
                                        <i className="mdi mdi-comment-processing-outline"></i>
                                        <span className="hide-menu"> Apps Widgets </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="widgets-data.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar"></i>
                                        <span className="hide-menu"> Data Widgets </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="widgets-charts.html" className="sidebar-link">
                                        <i className="mdi mdi-bulletin-board"></i>
                                        <span className="hide-menu"> Charts Widgets</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Sidebar-Window"></i>
                                <span className="hide-menu">Sidebar Type </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="sidebar-type-minisidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-quilt"></i>
                                        <span className="hide-menu"> Minisidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="sidebar-type-iconsidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-parallel"></i>
                                        <span className="hide-menu"> Icon Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="sidebar-type-overlaysidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-day"></i>
                                        <span className="hide-menu"> Overlay Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="sidebar-type-fullsidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-array"></i>
                                        <span className="hide-menu"> Full Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="sidebar-type-horizontalsidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-module"></i>
                                        <span className="hide-menu"> Horizontal Sidebar </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Files"></i>
                                <span className="hide-menu">Page Layouts </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="layout-inner-fixed-left-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-align-left"></i>
                                        <span className="hide-menu"> Inner Fixed Left Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="layout-inner-fixed-right-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-align-right"></i>
                                        <span className="hide-menu"> Inner Fixed Right Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="layout-inner-left-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-float-left"></i>
                                        <span className="hide-menu"> Inner Left Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="layout-inner-right-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-float-right"></i>
                                        <span className="hide-menu"> Inner Right Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-fixed-header.html" className="sidebar-link">
                                        <i className="mdi mdi-view-quilt"></i>
                                        <span className="hide-menu"> Fixed Header </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-fixed-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-parallel"></i>
                                        <span className="hide-menu"> Fixed Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-fixed-header-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-column"></i>
                                        <span className="hide-menu"> Fixed Header &amp; Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-boxed-layout.html" className="sidebar-link">
                                        <i className="mdi mdi-view-carousel"></i>
                                        <span className="hide-menu"> Box Layout </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Forms</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="icon-Receipt-4"></i>
                                <span className="hide-menu">Form Elements</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="form-inputs.html" className="sidebar-link">
                                        <i className="mdi mdi-priority-low"></i>
                                        <span className="hide-menu"> Forms Input</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-input-groups.html" className="sidebar-link">
                                        <i className="mdi mdi-rounded-corner"></i>
                                        <span className="hide-menu"> Input Groups</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-input-grid.html" className="sidebar-link">
                                        <i className="mdi mdi-select-all"></i>
                                        <span className="hide-menu"> Input Grid</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-checkbox-radio.html" className="sidebar-link">
                                        <i className="mdi mdi-shape-plus"></i>
                                        <span className="hide-menu"> Checkboxes &amp; Radios</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-bootstrap-touchspin.html" className="sidebar-link">
                                        <i className="mdi mdi-switch"></i>
                                        <span className="hide-menu"> Bootstrap Touchspin</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-bootstrap-switch.html" className="sidebar-link">
                                        <i className="mdi mdi-toggle-switch-off"></i>
                                        <span className="hide-menu"> Bootstrap Switch</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-select2.html" className="sidebar-link">
                                        <i className="mdi mdi-relative-scale"></i>
                                        <span className="hide-menu"> Select2</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-dual-listbox.html" className="sidebar-link">
                                        <i className="mdi mdi-tab-unselected"></i>
                                        <span className="hide-menu"> Dual Listbox</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Receipt-2"></i>
                                <span className="hide-menu">Form Layouts</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="form-basic.html" className="sidebar-link">
                                        <i className="mdi mdi-vector-difference-ba"></i>
                                        <span className="hide-menu"> Basic Forms</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-horizontal.html" className="sidebar-link">
                                        <i className="mdi mdi-file-document-box"></i>
                                        <span className="hide-menu"> Form Horizontal</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-actions.html" className="sidebar-link">
                                        <i className="mdi mdi-code-greater-than"></i>
                                        <span className="hide-menu"> Form Actions</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-row-separator.html" className="sidebar-link">
                                        <i className="mdi mdi-code-equal"></i>
                                        <span className="hide-menu"> Row Separator</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-bordered.html" className="sidebar-link">
                                        <i className="mdi mdi-flip-to-front"></i>
                                        <span className="hide-menu"> Form Bordered</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-striped-row.html" className="sidebar-link">
                                        <i className="mdi mdi-content-duplicate"></i>
                                        <span className="hide-menu"> Striped Rows</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-detail.html" className="sidebar-link">
                                        <i className="mdi mdi-cards-outline"></i>
                                        <span className="hide-menu"> Form Detail</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Add"></i>
                                <span className="hide-menu">Form Addons</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="form-paginator.html" className="sidebar-link">
                                        <i className="mdi mdi-export"></i>
                                        <span className="hide-menu"> Paginator</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-img-cropper.html" className="sidebar-link">
                                        <i className="mdi mdi-crop"></i>
                                        <span className="hide-menu"> Image Cropper</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-dropzone.html" className="sidebar-link">
                                        <i className="mdi mdi-crosshairs-gps"></i>
                                        <span className="hide-menu"> Dropzone</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-mask.html" className="sidebar-link">
                                        <i className="mdi mdi-box-shadow"></i>
                                        <span className="hide-menu"> Form Mask</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-typeahead.html" className="sidebar-link">
                                        <i className="mdi mdi-cards-variant"></i>
                                        <span className="hide-menu"> Form Typehead</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Security-Check"></i>
                                <span className="hide-menu">Form Validation</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="form-bootstrap-validation.html" className="sidebar-link">
                                        <i className="mdi mdi-credit-card-scan"></i>
                                        <span className="hide-menu"> Bootstrap Validation</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-custom-validation.html" className="sidebar-link">
                                        <i className="mdi mdi-credit-card-plus"></i>
                                        <span className="hide-menu"> Custom Validation</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-File-Edit"></i>
                                <span className="hide-menu">Form Pickers</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="form-picker-colorpicker.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar-plus"></i>
                                        <span className="hide-menu"> Form Colorpicker</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-picker-datetimepicker.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar-clock"></i>
                                        <span className="hide-menu"> Form Datetimepicker</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-picker-bootstrap-rangepicker.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar-range"></i>
                                        <span className="hide-menu"> Form Bootstrap Rangepicker</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-picker-bootstrap-datepicker.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar-check"></i>
                                        <span className="hide-menu"> Form Bootstrap Datepicker</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-picker-material-datepicker.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar-text"></i>
                                        <span className="hide-menu"> Form Material Datepicker</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Marker"></i>
                                <span className="hide-menu">Form Editor</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="form-editor-ckeditor.html" className="sidebar-link">
                                        <i className="mdi mdi-drawing"></i>
                                        <span className="hide-menu">Ck Editor</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-editor-quill.html" className="sidebar-link">
                                        <i className="mdi mdi-drupal"></i>
                                        <span className="hide-menu">Quill Editor</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-editor-summernote.html" className="sidebar-link">
                                        <i className="mdi mdi-brightness-6"></i>
                                        <span className="hide-menu">Summernote Editor</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-editor-tinymce.html" className="sidebar-link">
                                        <i className="mdi mdi-bowling"></i>
                                        <span className="hide-menu">Tinymce Edtor</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="form-wizard.html
                                   " aria-expanded="false">
                                <i className="icon-Receipt"></i>
                                <span className="hide-menu">Form Wizard</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="form-repeater.html
                                   " aria-expanded="false">
                                <i className="mdi mdi-creation"></i>
                                <span className="hide-menu">Form Repeater</span>
                            </a>
                        </li>
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Tables</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="mdi mdi-border-none"></i>
                                <span className="hide-menu">Bootstrap Tables</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="table-basic.html" className="sidebar-link">
                                        <i className="mdi mdi-border-all"></i>
                                        <span className="hide-menu">Basic Table </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-dark-basic.html" className="sidebar-link">
                                        <i className="mdi mdi-border-left"></i>
                                        <span className="hide-menu">Dark Basic Table </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-sizing.html" className="sidebar-link">
                                        <i className="mdi mdi-border-outside"></i>
                                        <span className="hide-menu">Sizing Table </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-layout-coloured.html" className="sidebar-link">
                                        <i className="mdi mdi-border-bottom"></i>
                                        <span className="hide-menu">Coloured Table Layout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="mdi mdi-border-inside"></i>
                                <span className="hide-menu">Datatables</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="table-datatable-basic.html" className="sidebar-link">
                                        <i className="mdi mdi-border-vertical"></i>
                                        <span className="hide-menu"> Basic Initialisation</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-datatable-api.html" className="sidebar-link">
                                        <i className="mdi mdi-blur-linear"></i>
                                        <span className="hide-menu"> API</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-datatable-advanced.html" className="sidebar-link">
                                        <i className="mdi mdi-border-style"></i>
                                        <span className="hide-menu"> Advanced Initialisation</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-jsgrid.html
                                   " aria-expanded="false">
                                <i className="mdi mdi-border-top"></i>
                                <span className="hide-menu">Table Jsgrid</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-responsive.html
                                   " aria-expanded="false">
                                <i className="mdi mdi-border-style"></i>
                                <span className="hide-menu">Table Responsive</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-footable.html
                                   " aria-expanded="false">
                                <i className="mdi mdi-tab-unselected"></i>
                                <span className="hide-menu">Table Footable</span>
                            </a>
                        </li>
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Charts</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-morris.html
                                   " aria-expanded="false">
                                <i className="icon-Bar-Chart2"></i>
                                <span className="hide-menu"> Morris Chart</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-chart-js.html
                                   " aria-expanded="false">
                                <i className="icon-Bar-Chart5"></i>
                                <span className="hide-menu">Chartjs</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-sparkline.html
                                   " aria-expanded="false">
                                <i className="icon-Line-Chart3"></i>
                                <span className="hide-menu">Sparkline Chart</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-chartist.html
                                   " aria-expanded="false">
                                <i className="icon-Pie-Chart"></i>
                                <span className="hide-menu">Chartis Chart</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Bar-Chart4"></i>
                                <span className="hide-menu">C3 Charts</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="chart-c3-axis.html" className="sidebar-link">
                                        <i className="mdi mdi-arrange-bring-to-front"></i>
                                        <span className="hide-menu">Axis Chart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-c3-bar.html" className="sidebar-link">
                                        <i className="mdi mdi-arrange-send-to-back"></i>
                                        <span className="hide-menu">Bar Chart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-c3-data.html" className="sidebar-link">
                                        <i className="mdi mdi-backup-restore"></i>
                                        <span className="hide-menu">Data Chart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-c3-line.html" className="sidebar-link">
                                        <i className="mdi mdi-backburger"></i>
                                        <span className="hide-menu">Line Chart</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="mdi mdi-chart-areaspline"></i>
                                <span className="hide-menu">Echarts</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="chart-echart-basic.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-line"></i>
                                        <span className="hide-menu">Basic Charts</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-echart-bar.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-scatterplot-hexbin"></i>
                                        <span className="hide-menu">Bar Chart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-echart-pie-doughnut.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-pie"></i>
                                        <span className="hide-menu">Pie &amp; Doughnut Chart</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Sample Pages</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Shopping-Bag"></i>
                                <span className="hide-menu">Ecommerce Pages</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="eco-products.html" className="sidebar-link">
                                        <i className="mdi mdi-cards-variant"></i>
                                        <span className="hide-menu">Products</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-cart.html" className="sidebar-link">
                                        <i className="mdi mdi-cart"></i>
                                        <span className="hide-menu">Products Cart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-edit.html" className="sidebar-link">
                                        <i className="mdi mdi-cart-plus"></i>
                                        <span className="hide-menu">Products Edit</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-detail.html" className="sidebar-link">
                                        <i className="mdi mdi-camera-burst"></i>
                                        <span className="hide-menu">Product Details</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-orders.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-pie"></i>
                                        <span className="hide-menu">Product Orders</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-checkout.html" className="sidebar-link">
                                        <i className="mdi mdi-clipboard-check"></i>
                                        <span className="hide-menu">Products Checkout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Files"></i>
                                <span className="hide-menu">Sample Pages </span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="starter-kit.html" className="sidebar-link">
                                        <i className="mdi mdi-crop-free"></i>
                                        <span className="hide-menu">Starter Kit</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-animation.html" className="sidebar-link">
                                        <i className="mdi mdi-debug-step-over"></i>
                                        <span className="hide-menu">Animation</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-search-result.html" className="sidebar-link">
                                        <i className="mdi mdi-search-web"></i>
                                        <span className="hide-menu">Search Result</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-gallery.html" className="sidebar-link">
                                        <i className="mdi mdi-camera-iris"></i>
                                        <span className="hide-menu">Gallery</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-treeview.html" className="sidebar-link">
                                        <i className="mdi mdi-file-tree"></i>
                                        <span className="hide-menu">Treeview</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-block-ui.html" className="sidebar-link">
                                        <i className="mdi mdi-codepen"></i>
                                        <span className="hide-menu">Block UI</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-session-timeout.html" className="sidebar-link">
                                        <i className="mdi mdi-timer-off"></i>
                                        <span className="hide-menu">Session Timeout</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-session-idle-timeout.html" className="sidebar-link">
                                        <i className="mdi mdi-timer-sand-empty"></i>
                                        <span className="hide-menu">Session Idle Timeout</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-utility-classNamees.html" className="sidebar-link">
                                        <i className="mdi mdi-tune"></i>
                                        <span className="hide-menu">Helper classNamees</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-maintenance.html" className="sidebar-link">
                                        <i className="mdi mdi-camera-iris"></i>
                                        <span className="hide-menu">Maintenance Page</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Administrator"></i>
                                <span className="hide-menu">Authentication</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="authentication-login1.html" className="sidebar-link">
                                        <i className="mdi mdi-account-key"></i>
                                        <span className="hide-menu"> Login </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="authentication-login2.html" className="sidebar-link">
                                        <i className="mdi mdi-account-key"></i>
                                        <span className="hide-menu"> Login 2 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="authentication-register1.html" className="sidebar-link">
                                        <i className="mdi mdi-account-plus"></i>
                                        <span className="hide-menu"> Register</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="authentication-register2.html" className="sidebar-link">
                                        <i className="mdi mdi-account-plus"></i>
                                        <span className="hide-menu"> Register 2</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="authentication-lockscreen.html" className="sidebar-link">
                                        <i className="mdi mdi-account-off"></i>
                                        <span className="hide-menu"> Lockscreen</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="authentication-recover-password.html" className="sidebar-link">
                                        <i className="mdi mdi-account-convert"></i>
                                        <span className="hide-menu"> Recover password</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Add-User"></i>
                                <span className="hide-menu">Users</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="ui-user-card.html" className="sidebar-link">
                                        <i className="mdi mdi-account-box"></i>
                                        <span className="hide-menu"> User Card </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-profile.html" className="sidebar-link">
                                        <i className="mdi mdi-account-network"></i>
                                        <span className="hide-menu"> User Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-user-contacts.html" className="sidebar-link">
                                        <i className="mdi mdi-account-star-variant"></i>
                                        <span className="hide-menu"> User Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Receipt-3"></i>
                                <span className="hide-menu">Invoice</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="pages-invoice.html" className="sidebar-link">
                                        <i className="mdi mdi-vector-triangle"></i>
                                        <span className="hide-menu"> Invoice Layout </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-invoice-list.html" className="sidebar-link">
                                        <i className="mdi mdi-vector-rectangle"></i>
                                        <span className="hide-menu"> Invoice List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Location-2"></i>
                                <span className="hide-menu">Maps</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="map-google.html" className="sidebar-link">
                                        <i className="mdi mdi-google-maps"></i>
                                        <span className="hide-menu"> Google Map </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="map-vector.html" className="sidebar-link">
                                        <i className="mdi mdi-map-marker-radius"></i>
                                        <span className="hide-menu"> Vector Map</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Eyeglasses-Smiley"></i>
                                <span className="hide-menu">Icons</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="icon-material.html" className="sidebar-link">
                                        <i className="mdi mdi-emoticon"></i>
                                        <span className="hide-menu"> Material Icons </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-fontawesome.html" className="sidebar-link">
                                        <i className="mdi mdi-emoticon-cool"></i>
                                        <span className="hide-menu"> Fontawesome Icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-themify.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-bubble"></i>
                                        <span className="hide-menu"> Themify Icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-weather.html" className="sidebar-link">
                                        <i className="mdi mdi-weather-cloudy"></i>
                                        <span className="hide-menu"> Weather Icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-simple-lineicon.html" className="sidebar-link">
                                        <i className="mdi mdi mdi-image-broken-variant"></i>
                                        <span className="hide-menu"> Simple Line icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-iconmind.html" className="sidebar-link">
                                        <i className="mdi mdi mdi-image-broken-variant"></i>
                                        <span className="hide-menu"> Iconmind icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-flag.html" className="sidebar-link">
                                        <i className="mdi mdi-flag-triangle"></i>
                                        <span className="hide-menu"> Flag Icons</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="mdi mdi-apple-safari"></i>
                                <span className="hide-menu">Timeline</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="timeline-center.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-fast"></i>
                                        <span className="hide-menu"> Center Timeline </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="timeline-horizontal.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-end"></i>
                                        <span className="hide-menu"> Horizontal Timeline</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="timeline-left.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-in"></i>
                                        <span className="hide-menu"> Left Timeline</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="timeline-right.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-start"></i>
                                        <span className="hide-menu"> Right Timeline</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Mail-Read"></i>
                                <span className="hide-menu">Email Template</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="email-templete-alert.html" className="sidebar-link">
                                        <i className="mdi mdi-message-alert"></i>
                                        <span className="hide-menu"> Alert </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="email-templete-basic.html" className="sidebar-link">
                                        <i className="mdi mdi-message-bulleted"></i>
                                        <span className="hide-menu"> Basic</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="email-templete-billing.html" className="sidebar-link">
                                        <i className="mdi mdi-message-draw"></i>
                                        <span className="hide-menu"> Billing</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="email-templete-password-reset.html" className="sidebar-link">
                                        <i className="mdi mdi-message-bulleted-off"></i>
                                        <span className="hide-menu"> Password-Reset</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="icon-Error-404Window"></i>
                                <span className="hide-menu">Error Pages</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="error-400.html" className="sidebar-link">
                                        <i className="mdi mdi-alert-outline"></i>
                                        <span className="hide-menu"> Error 400 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="error-403.html" className="sidebar-link">
                                        <i className="mdi mdi-alert-outline"></i>
                                        <span className="hide-menu"> Error 403</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="error-404.html" className="sidebar-link">
                                        <i className="mdi mdi-alert-outline"></i>
                                        <span className="hide-menu"> Error 404</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="error-500.html" className="sidebar-link">
                                        <i className="mdi mdi-alert-outline"></i>
                                        <span className="hide-menu"> Error 500</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="error-503.html" className="sidebar-link">
                                        <i className="mdi mdi-alert-outline"></i>
                                        <span className="hide-menu"> Error 503</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)
                                   " aria-expanded="false">
                                <i className="mdi mdi-notification-clear-all"></i>
                                <span className="hide-menu">Multi level dd</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="mdi mdi-octagram"></i>
                                        <span className="hide-menu"> item 1.1</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="mdi mdi-octagram"></i>
                                        <span className="hide-menu"> item 1.2</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-playlist-plus"></i>
                                        <span className="hide-menu">Menu 1.3</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.1</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.2</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.3</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.4</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="mdi mdi-playlist-check"></i>
                                        <span className="hide-menu"> item 1.4</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-small-cap">
                            <i className="mdi mdi-dots-horizontal"></i>
                            <span className="hide-menu">Extra</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="../../docs/documentation.html
                                   " aria-expanded="false">
                                <i className="mdi mdi-content-paste"></i>
                                <span className="hide-menu">Documentation</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="authentication-login1.html
                                   " aria-expanded="false">
                                <i className="mdi mdi-directions"></i>
                                <span className="hide-menu">Log Out</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <!-- End Sidebar navigation --> */}
            </div>
            // <!-- End Sidebar scroll-->
		);
	}
}
export { LeftAside };