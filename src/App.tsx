import './App.css'
import File from './components/File/File'
import Folder from './components/Folder/Folder'
import { FileData } from './types'

interface AppProps {
  data: FileData
}

function App({data}: AppProps) {

  return (
    <>
     <h1>BrightHR files</h1>
      {data.map((item) => (
        item.type === "folder" ? ( 
        <Folder type={item.type} name={item.name} files={item.files} />
        ):(
          <File 
          name={item.name}
          added={item.added} 
          type={item.type}/>
      )))}
    </>
  )
}

export default App
