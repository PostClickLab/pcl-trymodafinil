import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Gum from './pages/Gum'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import Pills from './pages/Pills'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pills" element={<Pills />} />
          <Route path="gum" element={<Gum />} />
          {/* Our Story, Contact and legal pages — copy lives in content.ts → infoPages */}
          <Route path=":slug" element={<InfoPage />} />
          <Route path="*" element={<InfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
