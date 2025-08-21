import { useState } from 'react'

export const FormComponent = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formState;

  const handleForm = ({ target }) => {
    const { value, name } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onsubmitForm = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <form onSubmit={onsubmitForm}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleForm}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleForm}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
