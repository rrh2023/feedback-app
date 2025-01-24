import {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = id => {
        console.log('App', id)
    }
    return  (
        <>
        <Header bgColor='rgb(0,0,0,0.4)' textColor='#ff6a95' text="Feedback UI"/>
        <div className='container'>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>  
        </>
    )
}

export default App