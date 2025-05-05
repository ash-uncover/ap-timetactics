import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  Provider
} from 'react-redux'

import {
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
  Navigate,
} from 'react-router-dom'

// Should be imported before first access to the reducers
import { App } from './components/App'
import { CONFIG } from './config'

let Router = BrowserRouter
if (CONFIG.AP_TIMETACTICS_ENVIRONMENT === 'github') {
  Router = HashRouter
}

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)

root.render(
  <Router>
    <App />
  </Router>
)
