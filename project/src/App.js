import './App.css';
import { Provider } from 'react-redux'
import Routers from './navrouter/router';
import store from './redux/store';


function App() {
  return (

    <Provider store={store}>
      <Routers/> 
    </Provider>
    
  );
}

export default App;