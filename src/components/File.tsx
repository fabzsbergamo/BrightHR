import './File.css'
import type { File as FileProps } from "../types"
import Icon from './Icon/Icon';

function File({type, name, added }: FileProps) {
  
  return (
    <div className="file">
        <Icon type={type}/>
        <span>{name}.{type}</span>
        <span>{added}</span>
    </div>
  )
}

export default File