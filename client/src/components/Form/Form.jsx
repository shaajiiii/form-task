import React from 'react';
import styles from './Form.module.css';

function Form() {
  return (
    <div className={`${styles.form_container} p-4 mt-4`} >
      <h1>Form</h1>
      <form className='row'>
        <div class="col-12 col-md-6 mb-2">
          <label for="validationCustom01" class="form-label">First name</label>
          <input type="text" class="form-control" value="Test name" required />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-12 col-md-6 ">
          <label for="validationCustom02" class="form-label">Last name</label>
          <input type="text" class="form-control" value="test lname" required />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="mb-2">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div class="col-md-4">
          <label class="form-label">Mobile</label>
          <input type="number" class="form-control" required />
        </div>

        <div class="col-6 col-md-4">
          <label class="form-label">Age</label>
          <input type="number" class="form-control" required />
        </div>

        <div class="col-6 col-md-4 mb-4">
          <label class="form-label">DOB</label>
          <input type="date" class="form-control" required />
        </div>


        <div>
          <button className='btn btn-primary col-12'> Submit </button>
        </div>


      </form>
    </div>
  )
}

export default Form
