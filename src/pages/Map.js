import React from 'react';
import Sidebar from '../components/Sidebar';

function Map() {
    return(
        <div>
          <div id="wrapper">
						<Sidebar/>
						<div className="container">
							<div className="row">
								<div className="col-md-1"></div>
								<div className="col-md-10">
									<h1 className="text-center user-profile">User Location</h1>
									<div className="map-frame">
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478927.231330675!2d-23.730244206115337!3d64.80138204938255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sin!4v1613733233012!5m2!1sen!2sin" width="100%" height="550" frameborder="0"></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default Map;