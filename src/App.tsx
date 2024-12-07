import { useState } from 'react';
import './App.css';
import File from './components/File/File';
import Folder from './components/Folder/Folder';
import { FileData } from './types';

interface AppProps {
  data: FileData;
}

function App({ data }: AppProps) {
  const [sortedFiles, setSortedFiles] = useState(data);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredFiles = data.filter((file) =>
      file.name.toLowerCase().includes(value)
    );
    setSortedFiles(filteredFiles);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      return setSortedFiles(data);
    }

    const filesCopy = [...data];

    const sortByName = (a, b) => a.name.localeCompare(b.name);
    const sortByDate = (a, b) => new Date(a.added) - new Date(b.added);

    switch (value) {
      case "name":
        filesCopy.sort(sortByName);
        break;
      case "date":
        filesCopy.sort(sortByDate);
        break;
      default:
        return setSortedFiles(data);
    }

    setSortedFiles(filesCopy);
  };

  return (
    <div className="container">
      <h1 className="title">BrightHR files</h1>
      <div className="controls">
        <input onChange={handleFilter}/>
        <select onChange={handleChange} className="sort-select">
          <option value="">Sort</option>
          <option value="name">Sort by name</option>
          <option value="date">Sort by date</option>
        </select>
      </div>
      <div className="file-list">
        {sortedFiles.map((item) => (
          item.type === "folder" ? (
            <Folder key={item.name} type={item.type} name={item.name} files={item.files} />
          ) : (
            <File
              key={item.name}
              name={item.name}
              added={item.added}
              type={item.type}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default App;