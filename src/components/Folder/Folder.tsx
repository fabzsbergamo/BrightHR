import type { Folder as FolderProps } from "../../types";
import File from "../File/File";
import Icon from "../Icon/Icon";
import './Folder.css'

function Folder({type, name, files}: FolderProps) {
    return (
      <details className="folder">
        <summary>
          <Icon type={type}/>
          <span>{name}.{type}</span>
        </summary>
        <div>
        {
          files.map((file) => {
            return (
              <File
                name={file.name}
                added={file.added}
                type={file.type}
              />
            )
          })
        }
        </div>
      </details>
    )
}

export default Folder