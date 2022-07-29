import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from './AddUser';
import './ViewUsers.css';
const ViewUsers = () => {
  const [students, setStudents] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(url);
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
  }, [students]);
  const handleEdit = (id) => {};

  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.dob}</td>
              <td>{student.location}</td>
              <button onClick={() => handleEdit(student.id)}>Edit</button>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ViewUsers;
