import React from 'react';
import axios from 'axios';
import styles from './Table.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Table({ users, renderTable }) {

    const MySwal = withReactContent(Swal);

    const deleteUserPrompt = (UserId , userFirstName) => {
        MySwal.fire({
            title: `Delete ${userFirstName}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#398ab9',
            confirmButtonText: 'Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(UserId)
            }
        })
    }

    let deleteUser = (userId) => {
        axios.delete(`http://localhost:7000/user/delete-user/${userId}`)
            .then(() => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                  })
                renderTable();
            })
            .catch((err) => {
                console.log("error in delete user");
                console.log(err);
            })
    }

    return (


        <div className='col-12 mb-5'>
            <hr />
            <h1 style={{ textAlign: 'center' }}>Users Table </h1>
            <hr />
            <div style={{ overflowX: "auto", backgroundColor: "#ebede8" }}>
                <table class="table">
                    <thead class="thead-dark">
                        <tr style={{ backgroundColor: "black", color: "white" }}>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.dob}</td>
                                    <td >
                                        <img className={`${styles.activeBtn}`} style={{ marginRight: "10px" }} src="icon-pencil.png" height={"25px"} alt="" />
                                        <img className={`${styles.activeBtn}`} onClick={() => { deleteUserPrompt(user._id,user.firstName) }} src="icon-delete.png" height={"25px"} alt="" title={`Click to delete ${user.firstName}`} />
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>


            </div>
        </div>

    )
}

export default Table

