import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './pages/Home/Home';
import JournalListView from './pages/JournalListView/JournalListView';
import UserPhotoGallery from './pages/UserPhotoGallery/UserPhotoGallery';
import JournalView from './pages/JournalView/JournalView';
import Login from './pages/Login/Login';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token，影响范围大
        // colorPrimary: '#98d6eb',
        // borderRadius: 2,

        // // 派生变量，影响范围小
        // colorBgContainer: '#FFFFFF',
      },
    }}
  >


  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/journals" element={<JournalListView/> } />
      <Route path="/gallery" element={<UserPhotoGallery/> } />
      <Route path="/journalview" element={<JournalView/> } />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </Router>
  </ConfigProvider>
);

export default App;