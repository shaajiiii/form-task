import React, { useState } from 'react';
import styles from './Form.module.css';
import axios from 'axios';

function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [ageError, setAgeError] = useState('');
  // const [dobError, setDobError] = useState('');


  let handleSubmit = async (e) => {
    e.preventDefault();
    let validationErr = false;

    // validations

    if (!/^[A-Za-z]+$/.test(firstName)) {
      validationErr = true;
      setFirstNameError("Only letters allowed")
    }
    if (!/^[A-Za-z]+$/.test(lastName)) {
      validationErr = true;
      setLastNameError('Only letters allowed in last name')
    }
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      validationErr = true;
      setEmailError('Invalid Email')
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      validationErr = true;
      setMobileError('Please give your 10 digit number');
    }
    if (age < 1 || age > 150) {
      validationErr = true;
      setAgeError('Insert a valid age...')
    }
    ////// validations end

    // this will fire if the data is valid
    if (!validationErr) {
      let formData = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        age: age,
        email: email,
        dob: dob
      }

      try {
        let resp = await axios.post("http://localhost:7000/user/add-user", formData);
        // if (resp.status == 201) {
        //   setTitle('');
        //   setMessage('');
        //   getPostData();
        // } else {
        //   console.log(resp);
        // }
      }
      catch (err) {
        console.log(err);

      }


      console.log("request sent!!!!!!")
    }


  }

  return (
    <div className={`${styles.form_container} p-4 mt-4`} >
      <h1>Form</h1>
      <form className='row' onSubmit={handleSubmit}>

        <div class="col-12 col-md-6 mb-2">
          <label for="validationCustom01" class="form-label">First name</label>
          <input type="text" class="form-control"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value); setFirstNameError('') }}
            required />

          {firstNameError && <span className={`${styles.error_message}`} >{firstNameError}</span>}

        </div>

        <div class="col-12 col-md-6 ">
          <label for="validationCustom02" class="form-label">Last name</label>
          <input type="text" class="form-control"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value); setLastNameError('') }}
            required />

          {lastNameError && <span className={`${styles.error_message}`} >{lastNameError}</span>}
        </div>

        <div class="mb-2">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
            aria-describedby="emailHelp" />

          {emailError && <span className={`${styles.error_message}`} >{emailError}</span>}
        </div>

        <div class="col-md-4">
          <label class="form-label">Mobile</label>
          <input type="number" class="form-control"
            value={mobile}
            onChange={(e) => { setMobile(e.target.value); setMobileError('') }}
            required />
          {mobileError && <span className={`${styles.error_message}`} >{mobileError}</span>}
        </div>

        <div class="col-6 col-md-4">
          <label class="form-label">Age</label>
          <input type="number" class="form-control"
            value={age}
            onChange={(e) => { setAge(e.target.value); setAgeError('') }}
            required />
          {ageError && <span className={`${styles.error_message}`} >{ageError}</span>}
        </div>

        <div class="col-6 col-md-4 mb-4">
          <label class="form-label">DOB</label>
          <input type="date" class="form-control"
            value={dob}
            onChange={(e) => { setDob(e.target.value) }}
            required />

          {/* {dobError && <span className={`${styles.error_message}`} >{dobError}</span>} */}

        </div>


        <div>
          <button className='btn btn-primary col-12'> Submit </button>
        </div>


      </form>
    </div>
  )
}

export default Form
