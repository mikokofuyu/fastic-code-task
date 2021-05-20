import React, { ReactElement, useEffect, useState } from 'react'

interface Props {
  title: string
  subtitle: string
  options: string[]
  onSelect: (options: string[]) => void
}

// Logic for selecting / deselecting values is caputred within this component as it is quite specific to the component
// useEffect hook is use rather than passing the state to the onSelect function within the onClickOption function
// to ensure that the state is always up to date as changes are made to the selected options.

const MultiChoiceQuestion: React.FC<Props> = ({ title, subtitle, options, onSelect }): ReactElement => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const onClickOption = (option: string) => {
    if (option === 'No' || (option !== 'No' && selectedOptions.includes('No'))) {
      setSelectedOptions([option])
    } else if (selectedOptions.includes(option)) {
      setSelectedOptions(prev => prev.filter(e => e !== option))
    } else {
      setSelectedOptions(prev => [...prev, option])
    }
  }

  useEffect(() => {
    onSelect(selectedOptions)
  }, [selectedOptions])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-fastic-dark2">{title}</h1>
        <h2 className="text-xl font-bold text-fastic-dark5">{subtitle}</h2>
      </div>
      <div className="h-6" />
      <div className="flex flex-col space-y-2" role="listbox">
        {options.map((option, index) => {
          const optionClasses = `rounded-md flex items-center justify-between text-lg font-bold p-4 cursor-pointer ${
            selectedOptions.includes(option)
              ? 'bg-fastic-glide1 text-fastic-light4'
              : ' bg-fastic-light2 text-fastic-dark2'
          }`

          return (
            <div
              key={index}
              className={optionClasses}
              style={{ width: '37rem' }}
              role="option"
              onClick={() => onClickOption(option)}
              tabIndex={0}
            >
              <span>{option}</span>
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white">
                {selectedOptions.includes(option) && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.25 6.75043L9.75 17.25L4.5 12.0004"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MultiChoiceQuestion
