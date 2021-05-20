import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { capitalise } from '../../utils'

interface Props {
  variant: 'back' | 'next' | 'finish'
  onClick: () => void
  disabled?: boolean
}

const SurveyButton: React.FC<Props> = ({ variant, onClick, disabled = false }): ReactElement => {
  const label = variant === 'back' ? 'go back to previous question' : 'go to next question'

  const surveyButtonClasses = classnames({
    'w-72 h-12 rounded-lg flex justify-center items-center text-center text-lg font-bold cursor-pointer': true,
    'text-fastic-light4 bg-fastic-glide1': variant !== 'back',
    'text-fastic-dark1 bg-fastic-light2': variant === 'back',
  })

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
