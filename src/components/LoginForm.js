import React from 'react'
import PropTypes from 'prop-types'
import Notification from './Notification'
import { Container, Form } from 'semantic-ui-react'

const LoginForm = ({ username, password, loginHandler, fieldChangeHandler, message }) => {
  return (
    <div>
      <h2>Log in</h2>
      <Notification message={message} messageStyle='error' />

      <Container>
        <Form onSubmit={loginHandler}>
          <Form.Input
            label='Username'
            type="text"
            name="username"
            value={username}
            onChange={fieldChangeHandler} />
          <Form.Input
            label='Password'
            type="password"
            name="password"
            value={password}
            onChange={fieldChangeHandler} />
          <Form.Button positive name='submit'>Login</Form.Button>
        </Form>
      </Container>
    </div>
  )
}

LoginForm.propTypes = {
  loginHandler: PropTypes.func.isRequired,
  fieldChangeHandler: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default LoginForm