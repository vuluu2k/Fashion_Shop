import React,{
    useState,createContext
} from 'react';

export const FeedbackContext=createContext()
const FeedbackContextProvider=({children})=>{
    const [showFeedback,setShowFeedback]=useState(false)

    const FeedbackContextData={
        showFeedback,
        setShowFeedback
    }
    return(
        <FeedbackContext.Provider value={FeedbackContextData}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContextProvider
