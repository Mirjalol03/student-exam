import { TextField, Button } from '@mui/material'
import {React, useRef, useEffect} from 'react'
import './addStudent.scss'

function AddStudent({students, setStudents, addStudentBtn, type, studentFirstName, studentSecondName, studentBall, studentId}) {
    const firstNameRef = useRef(null); 
    
    const editStudent = (evt, index) => {
        evt.preventDefault();
        const newStudents = [...students];
        const [firstName, secondName, examBall] = evt.target.elements;

        newStudents.forEach(element => {
            if (element.id === index) {
                element.firstName = firstName.value;
                element.secondName = secondName.value;
                element.examBall = examBall.value;

                element.examMark = Math.round((100 / 150) * examBall.value);

                element.examBall > 40 ? (element.isPass = true) : (element.isPass = false)
            }
        });

        setStudents(newStudents)

        addStudentBtn()
    }
    
    const addNewStudent = (evt) => {
        evt.preventDefault();
        
        
        const currentDate = new Date();
        
        // get day, month, and year
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // add 1 to get the correct month
        const year = currentDate.getFullYear().toString();
        
        const formattedDate = `${day}:${month}:${year}`;
        
        let [firstName, secondName, examBall] = evt.target.elements;

        let examMark = Math.round((100 / 150) * examBall.value);

        let isPass = false;

        if(examMark > 40) isPass = true;  
        else isPass = false

        const newStudentOBJ = {
            id: students.length + 1,
            firstName: firstName.value,
            secondName: secondName.value,
            examBall: examBall.value,
            examMark: examMark,
            postedDate: formattedDate,
            isPass: isPass
        }

        const newArray = [...students, newStudentOBJ];
        
        setStudents(newArray)

        addStudentBtn("post");
        // console.log("student" + students);

    }

    const inputStyles = {
        background: '#F7F7F7', // Set your desired background color here
      };

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    return (
            type === "post" ? (
              <div className="addStudentForm">
                <form onSubmit={(evt) => addNewStudent(evt) } className='d-flex flex-column gap-5'>
                  <TextField inputRef={firstNameRef} required InputProps={{ style: inputStyles,}} id="filled-basic" label="First Name" variant="filled" />
                  <TextField required InputProps={{ style: inputStyles,}} id="filled-basic" label="Last Name" variant="filled" />
                  <TextField required InputProps={{ style: inputStyles,}} type={'number'} className='bg-warning' id="filled-basic" label="150 max" variant="filled" />
                  <Button type='submit' variant="contained">add new Student</Button>
                </form>
              </div>
            ) : type === "put" ? (
                <div className="addStudentForm">
                <form onSubmit={(evt) => editStudent(evt, studentId) } className='d-flex flex-column gap-5'>
                  <TextField inputRef={firstNameRef} defaultValue={studentFirstName} required InputProps={{ style: inputStyles,}} id="filled-basic" label="First Name" variant="filled" />
                  <TextField required defaultValue={studentSecondName} InputProps={{ style: inputStyles,}} id="filled-basic" label="Last Name" variant="filled" />
                  <TextField required defaultValue={studentBall} InputProps={{ style: inputStyles,}} type={'number'} className='bg-warning' id="filled-basic" label="150 max" variant="filled" />
                  <Button type='submit' variant="contained">add new Student</Button>
                </form>
              </div>
            ) : (
                console.log("type not supported")
            )
  )
}

export default AddStudent
