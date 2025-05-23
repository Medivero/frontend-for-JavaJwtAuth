export interface Movie{
    id: never,
    name: string,
    rating: number,
    description: string,
    imagelink: string,
    authors: Author[]
}

export interface Author{
    name: string
}