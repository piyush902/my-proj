import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';


function Map() {
    return (
        <div className='map'>
			<h3  style={{position:'absolute', top:'27px', fontSize:'29px', left:'78px'}}>Map<IoIcons.IoIosMap style={{fontSize:'20px', color:'#fff', marginLeft:'5px'}}/></h3>
            <div id="wrapper">
						
						<div className="container">
							<div className="row">
                           
								<div className="col-md-1"></div>
								<div className="col-md-10">
								
									<div className="map-frame">
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6867.115287970214!2d-96.33574075249525!3d30.61823805507093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683f733c00001%3A0x9747b8a4b9c03bc8!2sTexas%20A%26M%20University!5e0!3m2!1sen!2sin!4v1613899599033!5m2!1sen!2sin" width="100%" height="550" frameborder="0"></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default Map
