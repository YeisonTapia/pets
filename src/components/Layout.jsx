import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Form from '../components/Form'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const Layout = () => (
  <div className="Layout">
    <Header />
    <Home />
    <Footer />
    <Form />
    <Login />
    <Dashboard />
  </div>
)

export default Layout