import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function StudentList({students, setStudents, addStudentBtn}) {
    // console.log(students.students);

    const deleteStudent = (id) => {
        // console.log(id);
        students.forEach((element, index) => {
            if (element.id === id) {    
                const newItems = [...students];
                newItems.splice(index, 1); 
                setStudents(newItems);
            }
        });
    }

  return (
    <div>
        <h2>STUDENT LIST</h2>
      
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>firstName</TableCell>
              <TableCell align="right">Ball</TableCell>
              <TableCell align="right">Pass</TableCell>
              <TableCell align="right">Mark</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { students.map((row) => (
                
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.firstName} {row.secondName}
                </TableCell>
                <TableCell align="right">{row.examBall}</TableCell>
                {row.isPass === true ? (
                    <TableCell style={{color: 'green'}} align="right">Pass</TableCell>
                ): (
                    <TableCell style={{color: 'red'}} align="right">Fail</TableCell>
                )}
                
                <TableCell align="right">{row.examMark}%</TableCell>
                <TableCell align="right">{row.postedDate}</TableCell>
                <TableCell align="right"><Button onClick={() => addStudentBtn("put", row)} variant="contained">Edit</Button></TableCell>
                <TableCell align="right"><Button onClick={() => deleteStudent(row.id)} variant="contained" color="error">Delete</Button></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default StudentList
