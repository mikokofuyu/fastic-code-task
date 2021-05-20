import { useState } from 'react'

// reusable pagination hook
// could be extended if you have a larger amount of pages to includes features to go directly to specific pages or the
// very first / last pages
// all functionality encapsulated within this file; i.e specifically creating the decrement and increment functions rather than
// creating them in the main component file and clogging up the code.

const usePagination = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const decrementStep = () => setCurrentStep(prevStep => prevStep - 1)
  const incrementStep = () => setCurrentStep(prevStep => prevStep + 1)

  return { currentStep, decrementStep, incrementStep }
}

export default usePagination
