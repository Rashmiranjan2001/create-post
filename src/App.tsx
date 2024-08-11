import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import Pathways from './components/molecules/Pathways';

function App (): JSX.Element {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Pathways />
      </div>
    </BrowserRouter>
  );
}

export default App;
