import React, { useState } from "react";
import "./App.css"
import {toast} from "react-hot-toast"

const App = () => {
  const data = {
    firstName: "", lastName: "", email: "", country: "india", streetAddress: "", city: "", state: "", pincode: "", comments: false, candidates: false, offer: false, notifications: ""
  }

  const [fromData, setFromData] = useState(data)

  function inputHandler(event) {
    const { name, value, type, checked } = event.target
    setFromData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function restHandler() {
    toast.success("Reset")
    setFromData(data)
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log(fromData)
    toast.success("Saved")
    setFromData(data)
  }

  return (
    <div className="wrapper">
      <div className="fromContainer">
        <form onSubmit={submitHandler}>
          <label>
            <p>First Name:</p>
            <input type="text" required name="firstName" value={fromData.firstName} onChange={inputHandler} />
          </label>
          <label>
            <p>Last Name:</p>
            <input type="text" required name="lastName" value={fromData.lastName} onChange={inputHandler} />
          </label>
          <label>
            <p>Email:</p>
            <input type="email" required name="email" value={fromData.email} onChange={inputHandler} />
          </label>
          <label>
            <p>Country:</p>
            <select required onChange={inputHandler} name="country" value={fromData.country}>
              <option value="india">India</option>
              <option value="usa">Usa</option>
              <option value="canada">Canada</option>
            </select>
          </label>
          <label>
            <p>Street Address:</p>
            <input required type="text" name="streetAddress" value={fromData.streetAddress} onChange={inputHandler} />
          </label>
          <label>
            <p>City:</p>
            <input required type="text" name="city" value={fromData.city} onChange={inputHandler} />
          </label>
          <label>
            <p>State:</p>
            <input required type="text" name="state" value={fromData.state} onChange={inputHandler} />
          </label>
          <label>
            <p>Pincode:</p>
            <input required type="number" name="pincode" value={fromData.pincode} onChange={inputHandler} />
          </label>
          <fieldset className="checkboxContainerMain">
            <legend>By Email</legend>
            <label>
              <div className="checkboxContainer">
                <input type="checkbox" name="comments" checked={fromData.comments} onChange={inputHandler} />
                <span>Comments</span>
              </div>
            </label>
            <label>
              <div className="checkboxContainer">
                <input type="checkbox" name="candidates" checked={fromData.candidates} onChange={inputHandler} />
                <span>Candidates</span>
              </div>
            </label>
            <label>
              <div className="checkboxContainer">
                <input type="checkbox" name="offer" checked={fromData.offer} onChange={inputHandler} />
                <span>Offer</span>
              </div>
            </label>
          </fieldset>
          <fieldset className="radioBoxContainer">
            <legend>Push Notifications</legend>
            <label>
              <div className="radioBox">
                <input type="radio" name="notifications" value="offer" checked={fromData.notifications === "offer"} onChange={inputHandler} />
                <span>Offer</span>
              </div>
            </label>
            <label>
              <div className="radioBox">
                <input type="radio" name="notifications" value="same as email" checked={fromData.notifications === "same as email"} onChange={inputHandler} />
                <span>Same as email</span>
              </div>
            </label>
            <label>
              <div className="radioBox">
                <input type="radio" name="notifications" value="no oush notifications" checked={fromData.notifications === "no oush notifications"} onChange={inputHandler} />
                <span>No Push Notifications</span>
              </div>
            </label>
          </fieldset>
          <button id="save">Save</button>
        </form>
        <span>
          <button id="reset" onClick={restHandler}>Reset</button>
        </span>
      </div>
    </div>
  );
};

export default App;
