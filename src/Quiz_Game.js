import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css'
import { QuizData } from "./data";


function Quiz_Game() {
    
    const questionsList = QuizData;

    const [questionCount,setQuestionCount] = useState(0)
    const [showScore,setShowScore] = useState(false);
    const [score,setScore] = useState(0);
    const [selectedOption,setSelectedOption] = useState(null)
const [hovereedIndex,setHoveredIndex ] = useState(null);

    const handleClick=()=>
    {
        setSelectedOption(null)
        if(questionCount<questionsList.length-1){
            setQuestionCount(questionCount+1)
           
        }
        else{
            setShowScore(true)
        }
    }

    const handleTryAgain=()=>
    {
        setQuestionCount(0)
        setShowScore(false)
    }

    const handleAnswer=(index)=>
    {
        setSelectedOption(index)
        if(index+1 === questionsList[questionCount].answer)
        {
            setScore(score+1)

        }

    }
    const handleMOuseEnter=(index)=>
    {
        setHoveredIndex(index)
    }
    const handleMouseLeave=()=>
    {
        setHoveredIndex(null)
    }



    return (
        <div style={{ backgroundColor: '#ab6fe0', height: '100vh' }}>
            <div className="container">
                <h3 style={{color:"white"}}>QUIZ APP</h3>
                
                {!showScore && <div className="container_box">
                    <div className="question">{questionsList[questionCount].question}</div>
                   
                   {questionsList[questionCount].options.map((ql,index)=><li onMouseEnter={()=>handleMOuseEnter(index)} onMouseLeave={handleMouseLeave}   onClick={()=>handleAnswer(index)}  style={{
                                    backgroundColor: selectedOption === index ? 'purple' : (hovereedIndex==index? 'purple':'white') }}>{ql}</li>)} 
                   <button onClick={handleClick} className="btn btn-primary btn-lg">
                    {questionCount==questionsList.length? 'Try Again': 'Next'}</button> 
                   </div> }

                   {showScore && <div className="container_box"><h3>Your Score:{score} <br/>Total Score:{questionsList.length}</h3>
                   <button onClick={handleTryAgain} className="btn btn-warning btn-sm">Try Again</button></div>}
                   
            </div>

            
        </div>
    );
}

export default Quiz_Game;
