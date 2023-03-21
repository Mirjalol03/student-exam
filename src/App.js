import {React, useState} from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import AddStudent from './components/AddStudent/AddStudent';
import StudentList from './components/StudentList/StudentList';
import StudentFilter from './components/StudentFilter/StudentFilter';

function App(){
  const [students, setStudents] = useState([]);
  const [studentFilter, setStudentsFilter] = useState([]);
  const [addStudent, setAddStudent] = useState(false);
  const [changeType, setChangeType] = useState('post');

  //edit btn bosilganda qiymat auto qoyilishi uchun
  const [studentId, setStudentId] = useState(0);
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentSecondName, setStudentSecondName] = useState("");
  const [studentBall, setStudentBall] = useState("");


  const [studentListType, setStudentListType] = useState("all");

  const addStudentBtn = (type = "post", student = {}) => {
      setAddStudent(!addStudent);
      setChangeType(type)

      setStudentId(student.id)
      setStudentFirstName(student.firstName);
      setStudentSecondName(student.secondName);
      setStudentBall(student.examBall);
  }
  

  return (
    <div className="App">
      {addStudent && (
          <AddStudent students={students} setStudents={setStudents} addStudentBtn={addStudentBtn} type={changeType} studentId={studentId} studentFirstName={studentFirstName} studentSecondName={studentSecondName} studentBall={studentBall} setStudentListType={setStudentListType}></AddStudent>
        )}
      <Header addStudentBtn={addStudentBtn}></Header>

      {/* student table */}
      <div className='row mt-5 container m-auto'>
        <div className="col-3"> 
          <StudentFilter students={students} setStudents={setStudents} studentFilter={studentFilter} setStudentsFilter={setStudentsFilter} studentListType={studentListType} setStudentListType={setStudentListType}></StudentFilter>
        </div>
        <div className="col-9">
        <StudentList type={studentListType} setType={setStudentListType} students={students} setStudents={setStudents} studentFilter={studentFilter} setStudentsFilter={setStudentsFilter} addStudentBtn={addStudentBtn}></StudentList>
        </div>
      </div>
    </div>
  );
}

export default App;
