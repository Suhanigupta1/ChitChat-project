import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { lazy } from 'react';
import { Suspense } from 'react';
import ProtectRoute from './components/auth/ProtectRoute';
import LayoutLoader from './components/layout/Loaders';
const Home = lazy(()=>import("./pages/Home"));
const Login = lazy(()=>import("./pages/Login"));
const Chat = lazy(()=>import("./pages/Chat"));
const Groups = lazy(()=>import("./pages/Group"));
const NotFound = lazy(()=>import("./pages/NotFound"));
const AdminLogin = lazy((()=>import('./pages/admin/AdminLogin')));
const DashBoard = lazy(()=>import('./pages/admin/Dashboard'));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessagesManagement = lazy(() =>import("./pages/admin/MessageManagement")
);
let user= true;
const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader/>}>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/chat/:chatId" element={<Chat/>}></Route>
        <Route path="/groups" element={<Groups/>}></Route>
      </Route>
        <Route path="/login" element={
        <ProtectRoute user={!user} redirect="/">
        <Login/>
        </ProtectRoute>}>  
      </Route>
      <Route path='/admin' element={<AdminLogin/>}></Route>
      <Route path='/admin/dashboard' element={<DashBoard/>}></Route>
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/chats" element={<ChatManagement />} />
      <Route path="/admin/messages" element={<MessagesManagement />} />
      
      <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Suspense>
    </BrowserRouter>   
  )
}

export default App