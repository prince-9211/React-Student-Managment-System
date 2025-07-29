import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [students, setStudents] = useState([]);

  // Load students on page load
  useEffect(() => {
    axios.get('http://localhost:3000/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  const handleClear = () => {
    setfirstName('');
    setlastName('');
    setage('');
  };

  const handleSave = () => {
    const newStudent = { firstName, lastName, age };

    // Save to backend
    axios.post('http://localhost:3000/students', newStudent)
      .then(res => {
        setStudents([...students, res.data]);
        handleClear();
      })
      .catch(err => console.error("Error saving student:", err));
  };

  return (
    <div>
      <h2 className='heading'>Student Management System</h2>

      <input
        type='text'
        className='firstName'
        placeholder='Enter First Name'
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        type='text'
        className='lastName'
        placeholder='Enter Last Name'
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        type='text'
        className='age'
        placeholder='Age'
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <button className='clear' onClick={handleClear}>Clear</button>
      <button className='save' onClick={handleSave}>Save</button>

      <div>
        <h3>Saved Students:</h3>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.firstName} {student.lastName}, Age: {student.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
