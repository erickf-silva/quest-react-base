import './App.css';
import Paragraph from './components/transform/paragraph';
import Button from './components/button/button';

function App() {
  return (
    <div>
      <Paragraph paragraph="Hello dev's! Esse projeto é um desafio do curso DevQuest" />
      <Button label='Clique aqui :)' />
    </div>
  );
}

export default App;
