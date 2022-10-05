import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { SignUp } from '../pages/signUp/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  )
}
