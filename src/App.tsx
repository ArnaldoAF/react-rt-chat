
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'


function App() {

  return (
    <>
      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />
    </>
  )
}

export default App
