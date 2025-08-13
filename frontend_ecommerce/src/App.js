import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './State/Auth/Action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters />} />
        <Route path='/admin/*' element={<AdminRouters />} />
      </Routes>
    </div>
  );
}

export default App;
