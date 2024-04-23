import './App.css';
import Header from './components/common/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/home';
import Service from './components/pages/Service/service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='/service' element={<Service />} />
        </Route>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
