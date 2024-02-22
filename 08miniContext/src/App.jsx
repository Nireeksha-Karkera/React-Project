
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './Context/contextProvider'

function App() {
  
  

  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App