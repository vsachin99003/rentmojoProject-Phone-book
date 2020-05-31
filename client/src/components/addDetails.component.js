import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class AddDetails extends Component {
    constructor(props) {
        super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChnageEmailId = this.onChnageEmailId.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullname : '',
            phonenumber : '',
            email_id : '',
            dob : new Date()
        }
    }


    onChangeFullName(e) {
        this.setState({
            fullname : e.target.value
        })
    }

    onChangePhoneNumber(e) {
        this.setState({
            phonenumber : e.target.value
        })
    }

    onChnageEmailId(e) {
        this.setState({
            email_id : e.target.value
        })
    }

    onChangeDob(dob) {
        this.setState({
            dob : dob
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const phonebook = {
            fullname : this.state.fullname,
            phonenumber : this.state.phonenumber,
            email_id : this.state.email_id,
            dob : this.state.dob
        }


        console.log(phonebook);

        axios.post('http://localhost:4000/phoneBook/add', phonebook)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return(
            <div>
                <h3>Add details in the phone Book ---</h3>
                <br />
                <form onSubmit = {this.onSubmit}>
                    <div className = "from-group">
                        <label>Full Name</label>
                        <input type="text" required className="form-control" value={this.state.fullname} onChange={this.onChangeFullName} />
                    </div>
                    <div className = "form-group">
                        <label>Phone Numer</label>
                        <input type="text" className="form-control" value={this.state.phonenumber} onChange={this.onChangePhoneNumber} />
                    </div>
                    <div className = "form-group">
                        <label>Email Id</label>
                        <input type="text" className="form-control" value={this.state.email_id} onChange={this.onChnageEmailId} />
                    </div>
                    <div className="from-group">
                        <label>Date of Birth</label>
                        <div>
                            <DatePicker selected={this.state.dob} onChange={this.onChangeDob} />
                        </div>
                    </div>

                    <div className="form-group"></div>
                    <input type="submit" value ="Add details to phones book" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}


export default AddDetails