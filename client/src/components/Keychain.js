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
    var data;
    const getData= (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5000/keychain`, {data})
        .then(Response => {
            data = Response.data
            for (let i = 0; i < data.length; i++) {
                const site = data[i].website;
                const account = data[i].account;
                const password = data[i].password;
                console.log(site, account, password);
            }
        })
        .catch(err => {
            console.error(err);
        });
    };
    
    // Return web page React element
    return (
        <div className="container content">
            <button onClick={getData}>Data</button>
            <div className="inline">
                <h3>{data}</h3>
                <h3>data</h3>
                <h3>data</h3>
                <h3>data</h3>
                <h3>data</h3>
            </div>
            <div className="inline">
                <form className="inline">
                    <h2>Add Login</h2>
                    <input type="text" name="website" placeholder="Type of Account" required onChange={handleChange} />
                    <input type="text" name="account" placeholder="Name of Account" required onChange={handleChange} />
                    <input type="text" name="password" placeholder="Password" required onChange={handleChange} />
                    <button onClick={handleSubmit} className="submit">Submit</button>
                </form>
            </div>
            <footer>
                <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>
    )
}

export default Keychain
