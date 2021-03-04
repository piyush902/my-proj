import React from 'react';
import Sidebar from '../components/Sidebar';

function User_profile() {
    return(
        <div>
          <div id="wrapper">
						<Sidebar/>
						<div className="container">
							<div className="row">
								<div className="col-md-4"></div>
								<div className="col-md-4">
									<h1 className="text-center user-profile">User Profile</h1>
									<div className="main">
										<div className="container-card">
											<div className="card-top">
												<h3>Mike Andrew</h3>
												<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt voluptatibus inventore earum?</p>
											</div>
											<div className="card-bottom">
												<span>Hey hi it's Me!</span>
												<img src={window.location.origin + '/images/1.png'} alt="profile" className="img"/>
												<p className="name">Mike Andrew</p>
												<div className="status">Active</div>
												<button className="btn-next">Send message</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default User_profile;