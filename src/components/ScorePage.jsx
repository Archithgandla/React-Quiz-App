import React from "react";
import {useLocation} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';

const ScorePage = () => {
  
  const {state} = useLocation();
  const navigate = useNavigate();
  console.log(state);
  
  return (
    <div className = "question_box">
      <Paper clasName = "question" sx = {{minWidth:"20vw",minHeight:"20vh",padding:"30px"}}>
        <Typography variant = "h2">Your score is {state.score}</Typography>

        {
          state.QuestionsData.map((item,index) => {
            return(
              <div style = {{margin : "20px 0"}}>
                <Typography sx = {{bold:"true"}}>{index+1}. {item.question}</Typography>
                <Typography 
                  sx = {{color:state.submittedAnswers[index]===state.QuestionsData[index].answer?"green":"red"}}>
                  {`  Your Answer : ${state.submittedAnswers[index]}`}
                </Typography>
                <Typography>{`  Correct Answer : ${state.QuestionsData[index].answer}`}</Typography>
              </div>
            )
          })    
        }
        <Button variant = 'contained' onClick = {() => navigate("/")}>GO HOME</Button>
      
      </Paper>
    </div>
  )
}

export default ScorePage;