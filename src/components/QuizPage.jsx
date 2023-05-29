import React from "react";
import {QuestionsData} from "./questionData.js";
import {useState} from "react";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const QuizPage = () => {

  const [index,setIndex] = useState(0);
  const [submittedAnswers,setSubmittedAnswers] = useState({});
  const [time,setTime] = useState(90);
  
  const navigate = useNavigate();
  
  const handleNext = (e) => {
    if(index == QuestionsData.length-1){
      setIndex(0);
      calculateScore();
      return;
    } 
    setIndex(index+1);
  }


  const handlePrevious = () => {
    setIndex(index-1);    
  }

  let timeID = setTimeout(() => {
    if(time<=0)
      calculateScore();
    else
      setTime(time-1);
  },1000)


  const calculateScore = () => {

      let score = 0;
      clearTimeout(timeID)
    
      for(let i=0;i<QuestionsData.length;i++)
        score+=submittedAnswers[i] === QuestionsData[i].answer?1:0
      
      navigate('/score',{state:{score:score,
                                submittedAnswers:submittedAnswers,
                                QuestionsData:QuestionsData}});
    
      return;
    
  }

  
  
  
 
  return (
    <div className = "question_box">
      <Paper className = "question">
      <Typography variant = "h5" style = {{alignSelf : "flexEnd"}}>Time : {time}</Typography>
      <Typography style = {{margin:0}} variant = "h4">
        {`${index+1}. ${QuestionsData[index].question}`}
      </Typography>
      <div className="options">
      {
        QuestionsData[index].options.map((option) => {
          return(
            
              <div style = {{display:"flex",alignItems : "baseline",gap:"5px"}}>
                  <input 
                    type = "radio" 
                    name = {QuestionsData[index].question} 
                    id = {option.text}
                    value = {option.text}
                    onChange = {(e) => {
                      setSubmittedAnswers({...submittedAnswers,[index]:e.target.value})
                      console.log(submittedAnswers);
                    }
                    }
                    checked = {option.text === submittedAnswers[index]}
                    />
                  <label htmlFor = {option.text}>{option.text}</label>
              </div>
            
          )
        })
      }
      </div>

      <div className = "buttons">

              <Button variant = "contained" onClick = {handlePrevious} disabled = {index === 0}>
                Previous Question
              </Button>

              <Button 
                  variant = "contained" 
                  onClick = {handleNext} 
                  sx = {{background:QuestionsData.length-1 === index?"orange":""}}
                  disabled = {!submittedAnswers[index]}
                >
                {index!=QuestionsData.length-1?"Next":"submit"}
              </Button>
      </div>

        
      </Paper>
    </div>
  )
}

export default QuizPage;