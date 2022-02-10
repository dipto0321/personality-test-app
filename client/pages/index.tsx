import type { NextPage } from 'next'
import {useEffect, useState} from 'react'
import { Typography,Box, Button } from '@mui/material'
import axios from '../configs/axios'
import Question from '../components/Question'
const Home: NextPage = () => {
  const [questions, setQuestions] = useState([])
  const [showLanding, setShowLanding] = useState(true)
  const [showPersonality, setShowPersonality] = useState(false)
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState<string[]>([])
  const [personality, setPersonality] = useState<string>("")

  useEffect(() => {
    (async () => {
      const req = '/questions'
      const {data} = await axios.get(req)
      setQuestions(data.data)
    })()
  }, [])

  useEffect(() => {
    const getScore = async () => {
      const req = `/score?answer_arr=${JSON.stringify(answer)}`
      const { data } = await axios.get(req)
      setPersonality(data.data)
    }
    if (showPersonality) {
      getScore()
    }
  }, [showPersonality, answer])
  


  const handleStartQuiz = () => {
    setShowLanding(!showLanding)
  }

  const handleNext = () => {
    const newCount = count + 1
    setCount(newCount)
    if(newCount > questions.length-1) setShowPersonality(true)
    
  }

  const addAnswer = (value: string) => {
    const newAnswer = [...answer, value]
    setAnswer(newAnswer)
  }

  const reset = () => {
    setPersonality('')
    setShowPersonality(false)
    setAnswer([])
    setCount(0)
    handleStartQuiz()
  }
  
  return (
    <Box>
      {showLanding && (
        <Box sx={{ width: '50%', mx: 'auto', my: '20%', textAlign: 'center' }}>
          <Typography
            variant='h4'
            sx={{ fontWeight: 500, color: 'primary.main', p: 2 }}
          >
            {`Wanna know what's your personality?`}
          </Typography>
          <Button variant='contained' size='large' onClick={handleStartQuiz}>
            Start test
          </Button>
        </Box>
      )}
      {!showLanding && !showPersonality && (
        <Box sx={{ width: '50%', mx: 'auto', my: '20%' }}>
          <Question
            data={questions[count]}
            handleNext={handleNext}
            addAnswer={addAnswer}
          />
        </Box>
      )}
      {!showLanding && showPersonality && (
        <Box sx={{ width: '50%', mx: 'auto', my: '20%', textAlign: 'center' }}>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 500,
              bgcolor: 'primary.main',
              p: 2,
              color: 'white'
            }}
          >
            {`You are ${personality}`}
          </Typography>
          <Button variant='contained' size='large' sx={{ mt: 2 }} onClick={() => {
            reset()
          }}>
            Go to main
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Home
