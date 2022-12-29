import { useState } from 'react'
import './App.css'
import questions from '../data/questions'
import Quiz from '../quiz/Quiz'
import Result from '../results/Results'

const App = () => {
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [questionId, setQuestionId] = useState('')

  const chengeValue = (e) => {
    setQuestionId(e.target.id)
  }

  const onNextQuestion = () => {
    if (questionId === '') return
    setQuestionIndex(questionIndex + 1)

    if (questionId == questions[questionIndex].correct) {
      setScore(score + 1)
    }
    setQuestionId('')
  }

  const onStartOver = () => {
    if (questionIndex === 5) {
      setScore(0)
      setQuestionIndex(0)
    }
  }

  return (
    <div className="quiz">
      {questionIndex < 5 ? (
        <Quiz
          questionId={questionId}
          questionIndex={questionIndex}
          chengeValue={chengeValue}
        />
      ) : (
        <Result score={score} />
      )}

      <button
        className="quiz__button"
        type="submit"
        onClick={questionIndex === 5 ? onStartOver : onNextQuestion}
      >
        {questionIndex === 5 ? 'Start over' : 'Next question'}
      </button>
    </div>
  )
}

export default App
