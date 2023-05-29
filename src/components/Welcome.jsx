import React from "react";
import './Welcome.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";


const Welcome = () => {



  const navigate = useNavigate();
  
  return (
    <div className = "welcomePage">
      <Paper elevation={3} className = "center" sx = {{padding:"50px"}}>

        
        <Typography className = "heading" variant = "h4" >
          Welcome to Quiz Application
        </Typography>

        <br/>
        <Typography>
          <b>Note : </b>  You will be given 90 seconds to answer all the questions and You can move   
           to next question only after answering the current question
        </Typography>

        <br/>
        <Button variant = "contained" 
          onClick = {() => navigate('/quiz')}>
          Start QUIZ
        </Button>
        
      </Paper>
    </div>
  )
}

export default Welcome;