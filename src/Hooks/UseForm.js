import { useState } from 'react'

export const UseForm = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })



  const handleForm = ({ target }) => {
    const { value, name } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const resetForm = () => {
    setFormState({
      email: '',
      password: ''
    })
  }

  const onsubmitForm = (event) => {

    event.preventDefault()
    if (formState.email.trim() === '' || formState.password.trim() == '') return
    console.log(formState)
    resetForm()
  }


  return {
    formState,
    handleForm,
    onsubmitForm,
    resetForm
  }
}
