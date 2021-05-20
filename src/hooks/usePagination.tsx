import { useState } from 'react'

const usePagination = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const decrementStep = () => setCurrentStep(prevStep => prevStep - 1)
  const incrementStep = () => setCurrentStep(prevStep => prevStep + 1)

  return { currentStep, decrementStep, incrementStep }
}

export default usePagination
