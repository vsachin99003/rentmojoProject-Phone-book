import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Logs = props => (
    <tr>
        <td>{props.log.fullname}</td>
        <td>{props.log.phonenumber}</td>
        <td>{props.log.email_id}</td>
        <td>{props.log.dob}</td>
        <td>
            <Link to={"/update/"+props.log._id}>update</Link> | <a href="#" onClick={() => {props.deleteContact(props.log._id) }}>Delete</a>
        </td>
    </tr>
)





class phoneBookLog extends Component{
    constructor(props) {
        super(props);

        this.deleteContact = this.deleteContact.bind(this)

        this.state ={
            logs :[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/phoneBook/')
        .then(res => {
            this.setState({
                logs : res.data
            })
        })
    }

    deleteContact(id) {
        axios.delete('http://localhost:4000/phoneBook/'+id)
        .then(res => {console.log(res.data)});

        this.setState({
            logs : this.state.logs.filter(el => el._id !== id)
        })
    }

    contactList() {
        return this.state.logs.map(currlogs => {
            return <Logs log = {currlogs} deleteContact={this.deleteContact} key={currlogs._id} />
        })
    }


    render() {
        return (
            <div>
                <h2>Phone Book all contacts list</h2>
                <table className = "table">
                    <thead className = "thead-light">
                        <tr>
                            <th>Full Name</th>
                            <th>Phone Number's</th>
                            <th>Email Id's</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.contactList()}
                    </tbody>
                </table>
            </div>
        )
    }
}







export default phoneBookLog