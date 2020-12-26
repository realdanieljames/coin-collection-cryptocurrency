import CmcAPIData from './cmcData'
import './App.css';


function App() {
// console.log(MessariAPIData())


  return (
    <div className="App">


      <div className="header">
        <p className='header__logo'> COIN COLLECTION <br/>CRYPTOCURRENCY</p> 
      </div>

      <div className="coin__collection">
        <CmcAPIData />
      </div>

    
    </div>
  );
}

export default App;
