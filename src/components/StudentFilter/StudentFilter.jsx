import React from "react";
import {
  Button,
  TextField
} from "@mui/material";

function StudentFilter({students, setStudents}) {


  const inputStyles = {
    background: "#FFF", // Set your desired background color here
  };

  const filterStudent = (evt) => {
    evt.preventDefault();

    const [firstName,, highBall,, lowBall] = evt.target.elements;

    console.log(firstName.value, highBall.value, lowBall.value);

    const newStudents = [...students];

      const filteredStudents = newStudents.filter((player) => {
            return (
              player.firstName === firstName.value &&
              player.examBall <= highBall.value &&  
              player.examBall >= lowBall.value 
              )
          })
          setStudents(filteredStudents);

  };

  return (
    <div>
      <h4>FILTER</h4>
      <form onSubmit={filterStudent} className="mt-3 d-flex flex-column gap-2">
        <TextField
          fullWidth
          label="first second Name"
          id="fullWidth"
          InputProps={{ style: inputStyles }}
          required
        />
        <TextField
          fullWidth
          type={"number"}
          label="High Ball"
          id="fullWidth"
          InputProps={{ style: inputStyles }}
          required
        />
        <TextField
          fullWidth
          type={"number"}
          label="Low Ball"
          id="fullWidth"
          InputProps={{ style: inputStyles }}
          required
        />

        <Button type="submit" variant="contained">
          Filter
        </Button>
      </form>
    </div>
  );
}

export default StudentFilter;
