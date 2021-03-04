import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return(
			<div>
				<div className="active">
					<div id="sidebar-wrapper">
						<ul id="sidebar_menu" className="sidebar-nav">
							<li className="sidebar-brand"><a id="menu-toggle" href="#">TOGGLE<span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
						</ul>
						<ul className="sidebar-nav" id="sidebar">     
							<li>
								<Link to=""><sapn className="side-title">Dashboard</sapn>
									<span className="sub_icon glyphicon glyphicon-dashboard" style={{fontSize:'20px'}}></span>
								</Link>
							</li>
							<li className="sidebar-dropdown">
								<Link to="/user-profile"><sapn className="side-title">User Profile</sapn>
									<span className="sub_icon glyphicon glyphicon-user" style={{fontSize:'20px',margin: '0px 0px 0px -3px'}}></span>
								</Link>
							</li>
							<li className="sidebar-dropdown">
								<Link to="/form"><sapn className="side-title">Form</sapn>
									<span className="sub_icon glyphicon glyphicon-baby-formula custom-gly" style={{fontSize:'25px',margin: '-3px 0px 0px 34px'}}></span>
								</Link>
							</li>
							<li className="sidebar-dropdown">
								<Link to="/map"><sapn className="side-title">Map</sapn>
									<span className="sub_icon glyphicon glyphicon-map-marker custom-gly" style={{fontSize:'26px',margin: '-3px 0px 0px 36px'}}></span>
								</Link>
							</li>
						</ul>
					</div>
    		</div>
			</div>
    )
}

export default Sidebar;