import React from 'react'

export const FormComponent = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
