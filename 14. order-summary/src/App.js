import Container from './Container';
import background from './images/pattern-background-desktop.svg'


function App() {
  return (
    <div id="app-div">
      <img id="background" src={background}></img>
      <Container />
    </div>
  );
}

export default App;
