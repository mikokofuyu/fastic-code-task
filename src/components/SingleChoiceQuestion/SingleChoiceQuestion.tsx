import React, { ReactElement } from 'react'

interface Props {
  title: string
  subtitle: string
  options: string[]
  currentSelection: string
  onSelect: (option: string) => void
}

const SingleChoiceQuestion: React.FC<Props> = ({
  title,
  subtitle,
  options,
  currentSelection,
  onSelect,
}): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-fastic-dark2">{title}</h1>
        <h2 className="text-xl font-bold text-fastic-dark5">{subtitle}</h2>
      </div>
      <div className="h-6" />
      <div className="flex flex-col space-y-2" role="radiogroup">
        {options.map((option, index) => {
          const optionClasses = `rounded-md flex items-center text-lg font-bold p-4 cursor-pointer ${
            currentSelection === option ? 'bg-fastic-glide1 text-fastic-light4' : ' bg-fastic-light2 text-fastic-dark2'
          }`

          return (
            <div
              key={index}
              className={optionClasses}
              style={{ width: '37rem' }}
              role="radio"
              onClick={() => onSelect(option)}
              tabIndex={0}
            >
              <span>{option}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleChoiceQuestion
