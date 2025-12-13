import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import WhoIAm from './pages/Me.jsx'
import WhatIDo from './pages/Work.jsx'
import WorkDetail from './pages/WorkDetail.jsx'
import Thoughts from './pages/Thoughts.jsx'
import ThoughtsDetail from './pages/ThoughtsDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/cyberspace">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/who-i-am" element={<Layout><WhoIAm /></Layout>} />
          <Route path="/what-i-do" element={<Layout><WhatIDo /></Layout>} />
          <Route path="/what-i-do/:slug" element={<Layout><WorkDetail /></Layout>} />
          <Route path="/thoughts" element={<Layout><Thoughts /></Layout>} />
          <Route path="/thoughts/:slug" element={<Layout><ThoughtsDetail /></Layout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
