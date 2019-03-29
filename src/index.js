import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Router>
        <App />
      </Router>
    </Container>
  </Provider>,
  document.getElementById('root')
)