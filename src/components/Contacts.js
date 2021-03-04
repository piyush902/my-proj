import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../Firebase";
const Contacts = () => {

	var [contactObjects, setcontactObjects] = useState({})
	var [currentId, setCurrentId] = useState('')

	useEffect(()=>{
		firebaseDb.child('contacts').on('value', snapshot=>{
			if(snapshot.val()!=null)
				setcontactObjects({
					...snapshot.val()
				})
			else
			setcontactObjects({})
		})
	},[]) //similar to componentDidMount

	const addOrEdit = obj => {
		if(currentId == '')
			firebaseDb.child('contacts').push(
				obj,
				err => {
					if(err)
						console.log(err)
					else
						setCurrentId('')
				}
			)
		else
			firebaseDb.child(`contacts/${currentId}`).set(
				obj,
				err => {
					if(err)
						console.log(err)
					else
						setCurrentId('')
				}
			)
	}
	const onDelete = key => {
		if (window.confirm('Are you sure to delete this record?'))

			firebaseDb.child(`contacts/${key}`).remove(
				err => {
					if(err)
						console.log(err)
					else
						setCurrentId('')
				}
			)
	}
    return (
        <div className="contact-table mt-5">	
				<div className="row">
					<div className="col-md-5">
						<ContactForm {...({addOrEdit, currentId, contactObjects})}/>
					</div>
					<div className="col-md-7">
						<div className="table-data-form">
							<table className="table table-borderless table-stripped">
								<thead className="thead-light">
									<tr>
										<th>Name</th>
										<th>Mobile</th>
										<th>Email</th>
										<th>Address</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{
										Object.keys(contactObjects).map(id => {
											return <tr key={id}>
												<td>{contactObjects[id].fullname}</td>
												<td>{contactObjects[id].mobile}</td>
												<td>{contactObjects[id].email}</td>
												<td>{contactObjects[id].address}</td>
												<td className="d-flex">
													<a className="btn text-primary" onClick={()=> {setCurrentId(id)}}>
														<i className="fas fa-pencil-alt"></i>
													</a>
													<a className="btn text-danger" onClick={()=>{onDelete(id)}}>
														<i className="fas fa-trash-alt"></i>
													</a>
												</td>
											</tr>
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
        </div>
    );
}

export default Contacts;