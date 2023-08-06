import { Provider } from 'react-redux';
import './App.scss';
import { Landing } from './pages/landing/Landing';
import { store } from './app/store';

function App() {
  return (
    <div className=''>
      <Provider store={store}>
        <Landing />
      </Provider>
    </div>
  )
}

export default App;
