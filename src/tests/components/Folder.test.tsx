import { render, screen} from '@testing-library/react'
import { it, expect, describe,} from 'vitest'
import '@testing-library/jest-dom/vitest'

import {Folder as FolderProps} from "../../types"
import Folder from '../../components/Folder/Folder'

describe('Folder Component', () => {
    
    const folderProps: FolderProps = {
        type: "pdf",
        name: "Sample",
        files: []
    };
    
      it("renders the Folder component with correct details", () => {
        render(<Folder {...folderProps} />);
        expect(screen.getByText("Sample.pdf")).toBeInTheDocument();
      });
    });