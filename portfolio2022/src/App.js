
import './App.css';
import PortfolioHeader from './Components/PortfolioHeader';
import Content from './Components/Content';
import AboutMe from './Components/AboutMe';
 
function App() {
  return (
       
        <div className="App">
          <section> 
            <PortfolioHeader></PortfolioHeader>
            <Content></Content>
          </section>
          <section>
            <AboutMe></AboutMe>
          </section>
         
        </div>
    

  );
}

export default App;
