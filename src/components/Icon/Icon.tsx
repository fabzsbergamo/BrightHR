import { FaFilePdf, FaDochub, FaFileCsv, FaFilm, FaFileCircleQuestion } from "react-icons/fa6"
import { FileType } from "../../types"
import { FaFolder } from "react-icons/fa"


interface IconProps {
    type: FileType
}

function Icon({type}: IconProps) {
    switch(type){
        case 'pdf':
            return <FaFilePdf/>
        case 'doc':
            return <FaDochub/>
        case 'csv':
            return <FaFileCsv/>
        case 'mov':
            return <FaFilm/>
        case 'folder':
            return <FaFolder/>
        default: 
            return <FaFileCircleQuestion/>
    }
}

export default Icon