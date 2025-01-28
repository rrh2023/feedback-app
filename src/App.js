import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

   
    return  (
        <FeedbackProvider>
            <Router>
            <Header bgColor='rgb(0,0,0,0.4)' textColor='#ff6a95' text="Feedback UI"/>
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats/>
                            <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
            </div>  
            </Router>
        </FeedbackProvider>
    )
}

export default App