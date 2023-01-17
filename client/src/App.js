import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import axios from 'axios';
import SimpleMap from './components/Map/Map';
function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  let getAllUsers = async () => {
    try {
      let resp = await axios.get("http://localhost:7000/user/get-all-users")
      if (resp.status === 200) {
        setUsers(resp.data) // array of users
      }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="App">
      <div className='container'>
        <div className='row d-flex justify-content-center'>
            <Form renderTable={getAllUsers} />
            <Table users={users} renderTable={getAllUsers} /> 
            <SimpleMap />
        </div>
      </div>
    </div>
  );
}

export default App;
