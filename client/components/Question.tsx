import {useState} from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
  FormHelperText
} from '@mui/material'

type OptionSubObject = {
	content: string,
	value: string

}
type Option = {
  a: OptionSubObject
  b: OptionSubObject
}

type Data = {
  question: string
  options: Option
}

type PropTypes = {
  data: Data
  handleNext: () => void
  addAnswer: (value: string) => void
}

const Question = ({ data, handleNext, addAnswer }: PropTypes) => {
	const { question, options } = data
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const handleOnClick = () => {
		if (!value) {
			setError('Please choose one')
			return
		}
		setError("")
		setValue('')
		addAnswer(value)
		handleNext()
	}

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h5' component='div'>
          {question}
        </Typography>
        <FormControl error={!!error} variant='standard'>
          <RadioGroup
            aria-labelledby='question-label'
            name='radio-buttons-group'
            onChange={(e) => {
              setValue(e.target.value)
            }}
          >
            <FormControlLabel
              value={options.a.value}
              control={<Radio />}
              label={options.a.content}
              checked={value === options.a.value}
            />
            <FormControlLabel
              value={options.b.value}
              control={<Radio />}
              label={options.b.content}
              checked={value === options.b.value}
            />
          </RadioGroup>
          <FormHelperText>{error}</FormHelperText>
        </FormControl>
      </CardContent>
      <CardActions sx={{ flexDirection: 'row-reverse' }}>
        <Button size='small' variant='contained' onClick={handleOnClick}>
          Next
        </Button>
      </CardActions>
    </Card>
  )
}

export default Question
