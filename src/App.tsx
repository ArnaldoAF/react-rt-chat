
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
