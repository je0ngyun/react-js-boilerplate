import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecoilRoot } from 'recoil'
import RecoilDebugObserver from '@components/Utils/RecoilDebugObserver'
//import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilDebugObserver />
      <App />
    </RecoilRoot>
  </React.StrictMode>
)

//reportWebVitals(console.log)
