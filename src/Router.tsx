import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
