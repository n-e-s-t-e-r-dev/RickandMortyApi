import './App.css'
import header from "./assets/img/Rectangle 1.png"
import RickAndMorthy from './components/RickAndMorthy'


function App() {
  return (
    <div className="App">
      <header>
        <img src={header} alt="" />
      </header>
      <RickAndMorthy />
    </div>
  )
}

export default App
