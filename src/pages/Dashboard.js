import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
    return(
        <div>
					<div id="wrapper">
						<Sidebar/>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="text-center user-profile">DashBoard</h1>
								</div>
								<div className="col-sm-6 text-center">
									<label className="label label-success">Area Chart</label>
									<div id="area-chart" ></div>
								</div>
								<div className="col-sm-6 text-center">
									<label className="label label-success">Line Chart</label>
									<div id="line-chart"></div>
								</div>
						</div>
					</div>
        </div>
				</div>
    )
}

export default Dashboard;