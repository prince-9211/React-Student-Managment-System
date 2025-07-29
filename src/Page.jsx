import React, { useState } from 'react';

const Page = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setage] = useState('');
  const [students, setStudents] = useState([]);

  const handleClear = () => {
    setfirstName('');
    setlastName('');
    setage('');
  };

  const handleSave = () => {
    const newStudent = {
      firstName,
      lastName,
      age,
    };

    setStudents([...students, newStudent]);
    handleClear(); // clear after save
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
      <button className='clear' type='button' onClick={handleClear}>
        Clear
      </button>
      <button className='save' type='button' onClick={handleSave}>
        Save
      </button>

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
