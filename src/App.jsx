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
        <div className='burbuja'> <div className='container-icon'><a className='span' href="https://www.linkedin.com/in/carlos-mu%C3%B1oz-cuellar-programador/" target={'_blank'}><i className='bx bxl-linkedin-square bx-md'></i></a></div><div>Contactame!</div></div>
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
