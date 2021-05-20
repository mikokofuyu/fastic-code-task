import React, { ReactElement } from 'react'
import usePagination from '../../hooks/usePagination'
import useSurvey from '../../hooks/useSurvey'
import SurveyButton from '../Button/SurveyButton'
import SingleChoiceQuestion from '../SingleChoiceQuestion/SingleChoiceQuestion'
import ProgressBar from '../ProgressBar/ProgressBar'
import MultiChoiceQuestion from '../MultiChoiceQuestion/MultiChoiceQuestion'
import Logo from '../../assets/logo.svg'
import SelectedOptions from '../SelectedOptions/SelectedOptions'
import firebase from '../../utils/firestore'

const PaginatedSurvey: React.FC = (): ReactElement => {
  const { currentStep, decrementStep, incrementStep } = usePagination()
  const { answers, onSelectOption } = useSurvey()

  const questions = [
    <SingleChoiceQuestion
      key="daily_meals"
      title="Daily Meals"
      subtitle="How many meals do you eat per day?"
      options={['1', '2', '3', '4+']}
      currentSelection={answers['daily_meals'] || null}
      onSelect={option => onSelectOption('daily_meals', option)}
    />,
    <SingleChoiceQuestion
      key="home_cooked_food"
      title="Home-Cooked Food"
      subtitle="How many days per week do you eat home-cooked meals?"
      options={['1-2', '3-4', '5-6', '6+', 'Not at all']}
      currentSelection={answers['home_cooked_food'] || null}
      onSelect={option => onSelectOption('home_cooked_food', option)}
    />,
    <MultiChoiceQuestion
      key="any_specific_diet"
      title="Diets"
      subtitle="Are you currently on a specific diet?"
      options={['No', 'Keto', 'Vegan', 'Vegetarian', 'Pescatarian', 'Other']}
      onSelect={options => onSelectOption('any_specific_diet', options)}
    />,
  ]

  const renderCurrentQuestion = () => questions[currentStep - 1]

  const submitToDB = () => {
    const db = firebase.firestore()
    db.collection('survey').add(answers)
  }

  return (
    <div className="flex flex-col items-center justify-center w-max mx-auto">
      <div className="h-4" />
      <img src={Logo} alt="Fastic Logo" width={100} className="self-start justify-self-start" />
      <div className="h-4" />
      <ProgressBar data={questions} currentStep={currentStep} />
      <div className="h-6" />
      {currentStep > questions.length ? <SelectedOptions selectedOptions={answers} /> : renderCurrentQuestion()}
      <div className="h-6" />
      <div className="flex space-x-4">
        <SurveyButton variant="back" onClick={decrementStep} disabled={currentStep === 1} />
        {currentStep > questions.length ? (
          <SurveyButton variant="finish" onClick={submitToDB} />
        ) : (
          <SurveyButton variant="next" onClick={incrementStep} />
        )}
      </div>
    </div>
  )
}

export default PaginatedSurvey
