import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import data from './data/data.ts'
import { FileData } from './types.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App data={data as FileData}/>
  </StrictMode>,
)
