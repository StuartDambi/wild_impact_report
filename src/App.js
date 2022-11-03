import {Wrapper, Status} from '@googlemaps/react-wrapper';
import Main from './views/Main';
import './App.css';


const App = () => {
  const render = (status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper apiKey='' render={render}>
      <Main />
    </Wrapper>
  )
};

export default App;
