import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { DashboardLayout } from './app/components/DashboardLayout';
import { Dashboard } from './app/components/Dashboard';
import UserDetailManagement from './app/user/UserDetailManagement';

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout><Outlet /></DashboardLayout>}>
        <Route index element={<Dashboard />} />
        <Route path="user/:id" element={<UserDetailManagement />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
