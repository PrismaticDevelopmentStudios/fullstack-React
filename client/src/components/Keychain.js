// import { useState } from 'react';
import React from 'react';
import axios from 'axios';

// Initialize the form emopty data object
const initialFormData = Object.freeze({
    website: "",
    account: "",
    password: ""
 });

// Page function declaration VVV
const Keychain = () => {
// Page function declaration ^^^
    const [formData, updateFormData] = React.useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/save`, {formData})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.error(err, 'err');
        });
        console.log(formData);
    };

    // Axios GET Response
     // Create state variables
     const initialResponseData = [];
     let [responseData, setResponseData] = React.useState(initialResponseData);
     // fetches data
     const fetchData = (e) => {
         e.preventDefault()
         axios.get(`http://localhost:5000/keychain`, {responseData})
         .then((response)=>{
             setResponseData(responseData.push(response.data))
             console.log(responseData)
         })
         .catch((error) => {
             console.log(error)
         })
     }
    
    // Return web page React element
    return (
        <div className="container content">
            <div className="inline" onLoad={fetchData}>
                <h3>{responseData}</h3>
                <button className="btn" onClick={fetchData}>Data</button>
            </div>
            <div className="inline">
                <form className="inline">
                    <h2>Add Login</h2>
                    <input type="text" name="website" placeholder="Website" required onChange={handleChange} />
                    <input type="text" name="account" placeholder="Email Address" required onChange={handleChange} />
                    <input type="text" name="password" placeholder="Password" required onChange={handleChange} />
                    <button onClick={handleSubmit} className="submit">Submit</button>
                </form>
            </div>
            <footer>
                <div className="footText">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>
    )
}

export default Keychain
