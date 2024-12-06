import './App.css'
import File from './components/File'
import { FileData } from './types'

interface AppProps {
  data: FileData
}

function App({data}: AppProps) {

  return (
    <>
     <h1>Hello World</h1>
     <div>
      {data.map((item) => (
        <File
          name={item.name}
          added={item.added} 
          type={item.type}/>
      ))}
     </div>
    </>
  )
}

export default App
