import { useState } from 'react'

const useSurvey = () => {
  const [answers, setAnswers] = useState({})
  const onSelectOption = (question: string, answer: string) => setAnswers({ ...answers, [question]: answer })

  return { answers, onSelectOption }
}

export default useSurvey
