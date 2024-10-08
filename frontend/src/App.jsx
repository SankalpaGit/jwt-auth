import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/users/Home';
import Admin from './pages/admin/Admin';
import { PrivateRoute, AdminRoute } from './components/RouteProtection';
import BookBorrow from './pages/users/BookBorrow';
import BookDonate from './pages/users/BookDonate';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/borrow" element={<BookBorrow/>} />
          <Route path="/donate" element={<BookDonate/>} />
          <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/admin/*" 
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
