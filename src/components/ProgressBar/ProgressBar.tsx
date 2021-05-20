import React, { ReactElement } from 'react'

interface Props {
  data: ReactElement[]
  currentStep: number
}

// Takes in an array of questions - based on the length of the array it renders how many steps there are - making it extensible
// The `bar` portion of the progress tracking is split into two portions. The first will fill with the `boost2` colour when a
// question is currently in progress. The second portion will fill once the step has been completed.

const ProgressBar: React.FC<Props> = ({ data, currentStep }): ReactElement => {
  const generateProgressTracking = () => {
    return data.map((item, index: number) => {
      const progressCircleClasses = `rounded-full h-6 w-6 -mx-1 z-10 flex items-center justify-center font-bold text-sm ${
        currentStep > index + 1 ? 'bg-fastic-boost2 text-fastic-light4' : 'bg-fastic-light2'
      }`
      const progressBarFirstPortion = `w-12 h-2 ${currentStep >= index + 2 ? 'bg-fastic-boost2' : 'bg-fastic-light2'}`
      const progressBarSecondPortion = `w-32 h-2 ${currentStep > index + 2 ? 'bg-fastic-boost2' : 'bg-fastic-light2'}`

      return (
        <div key={index} className="flex items-center">
          <div className={progressCircleClasses}>
            <span>{index + 1}</span>
          </div>
          {index !== data.length - 1 && (
            <div className="flex">
              <div className={progressBarFirstPortion} />
              <div className={progressBarSecondPortion} />
            </div>
          )}
        </div>
      )
    })
  }

  const progressBarSecondPortion = `w-32 h-2 ${currentStep === 1 ? 'bg-fastic-light2' : 'bg-fastic-boost2'}`

  return (
    <div className="flex">
      <div className="flex items-center">
        <div className="rounded-full bg-fastic-boost2 h-6 w-6 -mx-1 z-10" />
        <div className="flex">
          <div className="w-12 h-2 bg-fastic-boost2" />
          <div className={progressBarSecondPortion} />
        </div>
      </div>
      {generateProgressTracking()}
    </div>
  )
}

export default ProgressBar
