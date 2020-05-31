  
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class UpdateContact extends Component {
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


    componentDidMount() {
        axios.get('http://localhost:4000/phoneBook/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                fullname : res.data.fullname,
                phonenumber : res.data.phonenumber,
                email_id : res.data.email_id,
                dob : new Date(res.data.dob)
            })
        })
        .catch(function (error) {
            console.log(error);
        })
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
        };


        console.log(phonebook);
        axios.put('http://localhost:4000/phoneBook/update/'+this.props.match.params.id, phonebook)
        .then(res => console.log(res.data));

        window.location = '/';
        
    }

    render() {
        return(
            <div>
                <h3>Update details in the phone Book ---</h3>
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
                    <input type="submit" value ="Update details to phones book" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}


export default UpdateContact


