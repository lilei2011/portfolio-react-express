import React from 'react';
import axios from 'axios';

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.name.value);
    axios.post('/', {
      name: e.target.name.value,
      email: e.target.email.value,
      messageBody: e.target.messageBody.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  render(){
    return (
      <div className="section" id="contact">
        <h2 className="heading">Contact me</h2>
        <form id="contact-form"  onSubmit={this.handleSubmit} >
            <p className="success">Thank you for writing me the message!</p>
            <input  className="form-control" type="text" name="name" placeholder="Name" />
          
            <input className="form-control" type="email" name="email" placeholder="Email"/>		
          
            <textarea className="form-control" placeholder="Write your message here..." name="messageBody"></textarea>
            
            <input className="form-control bg-blue submit" type="submit" name="send" value="Send" />		 
    </form>
      </div>
    )
  }
};

