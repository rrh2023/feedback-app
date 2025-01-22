import {useState} from 'react'
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackData from './data/FeedbackData'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    return  (
        <>
        <Header bgColor='rgb(0,0,0,0.4)' textColor='#ff6a95' text="Feedback UI"/>
        <div className='container'>
            <FeedbackItem/>
        </div>  
        </>
        
    )
}

export default App