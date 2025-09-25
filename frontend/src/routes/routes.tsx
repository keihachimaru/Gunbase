import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/home'
import Kits from '../pages/kits'
import Guide from '../pages/guide'
import Profile from '../pages/profile'
import Lines from '../pages/lines'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Admin from '../pages/admin'
import KitDetail from '../pages/kit'

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kits" element={<Kits />} />
      <Route path="/kits/:id" element={<KitDetail />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/lines" element={<Lines />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default AppRoutes;
