import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

    <div className="App__Aside"> <h1>Laundry2-u</h1>
    <h4>on demand laundry service</h4>

    <img src="/images/washingmachine.jpg" alt=""/>

    </div>



    <div className="App__Form">

    <div className="PageSwitcher">

    <a href="#" className= "PageSwitcher__Item">Log In</a>

    <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>

    </div>

    <div className="FormTitle">

    <a href="#" className="FormTitle__Link">Log In</a> or <a href="#"

    className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>

    </div>

    <div className="FormCenter">

    <form className="FormField" onSubmit={()=> this.handleSubmit()}>

    <div className="FormField">

    <label className="FormField__Label" htmlFor="name">Full Name</label>

    <input type="text" id="name" className="FormField__Input" placeholder="Enter your full

    name" name="name" />

    </div>

    <div className="FormField">

    <label className="FormField__Label" htmlFor="password">Password</label>

    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password"

     name="Password" />

    </div>

<div className="FormField">

<label className="FormField__Label" htmlFor="email">E-mail Address</label>

<input type="email" id="email" className="FormField__Input" placeholder="Enter your email"

name="email" />

</div>

<div className="FormField">

<label className="FormField__CheckboxLabel">

<input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree

<a href="" className="FormField__TermsLink">terms of service</a>

</label>

</div>

<div className="FormField">

<button className="FormField__Button mr-20">Sign Up</button> <a href="#"

className="FormField__Link">I'm already a member</a>


</div>

</form>

</div>

</div>

</div>
















)
}

export default App;
