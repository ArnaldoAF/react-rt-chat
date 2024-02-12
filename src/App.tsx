import { GlobalStyle } from './styles/global'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AuthProvider from "./provider/authProvider";
import Routes from "./routes";


const defaultTheme = createTheme();
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
          <Routes />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
