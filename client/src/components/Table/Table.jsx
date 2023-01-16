import React from 'react';


function Table({users}) {
    
    return (
        <div style={{overflowX:"auto",backgroundColor:"#ebede8"}}>
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

                    {users.map((user)=>{
                        return (  
                            <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.dob}</td>
                            <td >
                                <img style={{marginRight:"10px"}} src="icon-pencil.png" height={"25px"} alt="" />
                                <img src="icon-delete.png" height={"25px"} alt="" />
                            </td>
                        </tr>
                        )
                    })}
                   
                
                </tbody>
            </table>


        </div>
    )
}

export default Table
