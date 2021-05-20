import React, { ReactElement } from 'react'
import { capitalise } from '../../utils'

interface Props {
  variant: 'back' | 'next' | 'finish'
  onClick: () => void
  disabled?: boolean
}

// Decided to limit this component to have a set of variants rather than being full reusable
// as I am assuming that in a larger scale implementation there would be a number of surveys
// requiring these buttons types. If the labels on the buttons change then a prop could be added for this too.

const SurveyButton: React.FC<Props> = ({ variant, onClick, disabled = false }): ReactElement => {
  const label = variant === 'back' ? 'go back to previous question' : 'go to next question'

  const surveyButtonClasses = `w-72 h-12 rounded-lg flex justify-center items-center text-center text-lg font-bold cursor-pointer ${
    variant === 'back' ? 'text-fastic-dark1 bg-fastic-light2' : 'text-fastic-light4 bg-fastic-glide1'
  }`

  return (
    <button
      className={surveyButtonClasses}
      name={label}
      aria-label={label}
      onClick={onClick}
      type={variant === 'finish' ? 'submit' : 'button'}
      disabled={disabled}
    >
      {capitalise(variant)}
    </button>
  )
}

export default SurveyButton
