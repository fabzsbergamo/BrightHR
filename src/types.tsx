export type FileType = "pdf" | "doc" | "csv" | "mov" | "folder"

export type FileData = (File | Folder)[]

export interface File {
    type: FileType 
    name: string
    added: string
}

export interface Folder {
    type?: string
    name: string
    files: File[]
}