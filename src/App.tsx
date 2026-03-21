import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-layout">
          <Sidebar />
          <main className="main-content">
            <div className="page-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/posts" element={<PostsPage />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
