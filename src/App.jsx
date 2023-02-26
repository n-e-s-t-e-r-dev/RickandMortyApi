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
      <div className='burbujas'>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
      </div>
      <div className='meteoro-cont'>
        <div className='meteoro'></div>
      </div>
    </div>
  )
}

export default App
