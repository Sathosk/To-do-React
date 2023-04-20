import { Header } from './components/Header';
import { NewTask } from './components/NewTask'

import './global.css';
import styles from './App.module.css'


function App() {
  

  return (
    <div className="App">
      <Header />
      <NewTask />
    </div>
  )
}

export default App
