import React, { useEffect, useState } from "react";
import "../styling/form.css";
const ContactForm = (props) => {
    const initialFieldValues = {
        fullname: '',
        mobile: '',
        email:'',
        address: ''
    }
    var[values,setValues] = useState(initialFieldValues)

    useEffect(()=>{
        if(props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    },[props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <div className="contact-form">
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group input-group col-md-12 col-xs-12">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        </div>
                    </div>
                    <input className="form-control" name="fullname" placeholder="Full Name"
                        value={values.fullname} 
                        onChange={handleInputChange}
                    />
                </div>
              
                    <div className="form-group input-group col-md-12 col-xs-12">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            </div>
                        </div>
                        <input className="form-control" name="mobile" placeholder="Mobile"
                            value={values.mobile} 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-12 col-xs-12">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            </div>
                        </div>
                        <input className="form-control" name="email" placeholder="Email"
                            value={values.email}  
                            onChange={handleInputChange}
                        />
                    </div>
                <div className="form-group">
                    <textarea className="form-control" name="address" placeholder="Address"
                        value={values.address}  
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block btn-custom"
                    />
                </div>
            </form>
        </div>
    );
}

export default ContactForm;