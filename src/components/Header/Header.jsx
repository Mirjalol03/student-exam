import {React} from 'react'   
import { Button } from '@mui/material'


function Header({addStudentBtn}) {

  return (
    <div className='d-flex justify-content-around mt-3'>
        <h4>Exam Results</h4>
        <a href="#LINK">ABOUT</a>
        <Button onClick={() => addStudentBtn("post")} variant="contained">add new Student</Button>        
    </div>
  )
}

export default Header
