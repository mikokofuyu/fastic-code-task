import { useState } from 'react'

// simple state management hook to track the users selected answers for each question
// could be adjusted slightly in terms of variable names to make it more generic and reusable
// for other scenarios.

const useSurvey = () => {
  const [answers, setAnswers] = useState({})
  const onSelectOption = (question: string, answer: string) => setAnswers({ ...answers, [question]: answer })

  return { answers, onSelectOption }
}

export default useSurvey
