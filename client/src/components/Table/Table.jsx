import React from 'react'

function Table() {
    return (
        <div className='' style={{overflowX:"auto"}}>
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
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>928547629567</td>
                        <td>msahgk @gami.com</td>
                        <td>56</td>
                        <td>12 - 4 - 1997</td>
                    </tr>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>928547629567</td>
                        <td>msahgk @gami.com</td>
                        <td>56</td>
                        <td>12 - 4 - 1997</td>
                    </tr>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>928547629567</td>
                        <td>msahgk @gami.com</td>
                        <td>56</td>
                        <td>12 - 4 - 1997</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default Table
