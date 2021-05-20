import React, { ReactElement } from 'react'
import { capitalise, formatId } from '../../utils'

interface Props {
  selectedOptions: {
    daily_meals: string
    home_cooked_food: string
    any_specific_diet: string
  }
}

// Not included in the original designs but felt like there should be somewhere for users to confirm that they selected the right stuff before submitting
// Simpley just displays the data against the question

const SelectedOptions: React.FC<Props> = ({ selectedOptions }): ReactElement => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-fastic-dark2">End of Questions</h1>
        <h2 className="text-xl font-bold text-fastic-dark5">Press the finish button to complete the survey.</h2>
      </div>
      <div className="h-6" />
      <div className="flex flex-col p-6 bg-fastic-light2 rounded-lg w-full space-y-4">
        {Object.keys(selectedOptions).map((label: string, index: number) => {
          const renderAnswer = (answer: string[] | string) => {
            if (Array.isArray(answer)) {
              return answer.join(' / ')
            }
            return answer
          }

          return (
            <div className="flex" key={index}>
              <span className="text-lg font-bold text-fastic-dark2">{formatId(capitalise(label))}: </span>
              <div className="w-3" />
              <span className="text-lg text-fastic-dark2">{renderAnswer(selectedOptions[label])}</span>
            </div>
          )
        })}
      </div>{' '}
    </div>
  )
}

export default SelectedOptions
