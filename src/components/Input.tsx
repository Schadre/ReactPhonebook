import { forwardRef } from 'react'
import { TextField } from '@mui/material'

interface InputType {
  name:string,
  placeholder: string
}


const Input = forwardRef((props: InputType, ref) => {
  return (
          <TextField
            InputProps={{ disableUnderline: true }}
            variant="filled"
            margin="normal"
            inputRef={ref}
            fullWidth
            type='text'
            required
            defaultValue={Text}
            className='my-form'
            {...props}
          />
  )
});

export default Input