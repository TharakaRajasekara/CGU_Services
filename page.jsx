import React from 'react';
import './StudentTable.css';

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: 'John Doe', age: 20, address: '123 Main St', contact: '123-456-7890' },
        { id: 2, name: 'Jane Smith', age: 22, address: '456 Elm St', contact: '456-789-1234' },
        { id: 3, name: 'Alice Johnson', age: 21, address: '789 Oak St', contact: '789-123-4567' }
      ]
    };
  }

  render() {
    return (
      <div className="student-table-container">
        <h2>Student Table</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                <td>{student.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentTable;
