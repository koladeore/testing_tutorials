import './App.css'
import { Application } from './components/application/Application'
import { Skills } from './components/skill/Skills'
import { CounterTwo } from './components/counter-two/CounterTwo'
import { Counter } from './components/counter/Counter'
import { MuiMode } from './components/mui/MuiMode'
// import { Skills } from './components/skills/Skills'
import { Users } from './components/user/User'
import { AppProviders } from './providers/App.provider'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={['html', 'css']} />
        <Counter />
        <CounterTwo count={1} />
        <Users />
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
