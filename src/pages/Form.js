import React from 'react';
import Contacts from '../components/Contacts';
import Sidebar from '../components/Sidebar';

function Form() {
    return(
        <div>
          <div id="wrapper">
						<Sidebar/>
						<div className="container">
							<div className="row">
								<div className="col-md-10">
									<h1 className="text-center user-profile">User Details</h1>
									<Contacts/>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default Form;