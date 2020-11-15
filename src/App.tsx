import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions, Question, QuestionState} from './components/Api';
import QuestionCard from './components/QuestionCard';

type AnswerObject ={
question:string;
answer:string;
correct:boolean;
correctAnswer:string;
}
const TOTAL_QUESTIONS = 10;
const App = ()=>{

  const [loading, setLoading] =useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswerts] =useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
const startQuiz = async ()=>{
  setLoading(true);
  setGameOver(false);
  const newQuestions = await fetchQuizQuestions(
    TOTAL_QUESTIONS,
    Difficulty.EASY
  );
  setQuestions(newQuestions);
  setScore(0);
  setUserAnswerts([]);
  setNumber(0);
  setLoading(false);
}
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{

}
const nextQuestion = () =>{

}
return(
  <div className="App">
    <h1>React App</h1>
    {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(
    <button className="start" onClick= {startQuiz}>Start the Quiz</button>
    ) :null}
{!gameOver ?<p className="score">Score:</p> :null}
{loading ?<p>Loading questions</p> :null}
{!loading && !gameOver? (
<QuestionCard 
questionNumber={number + 1}
totalQuestions = {TOTAL_QUESTIONS}
question = {questions[number].question}
answers = {questions[number].answers}
userAnswer= {userAnswers ? userAnswers[number] : undefined}
callback = {checkAnswer}
/>
):null}
<button className="next" onClick={nextQuestion}></button>

  </div>
)
}
export default App;
