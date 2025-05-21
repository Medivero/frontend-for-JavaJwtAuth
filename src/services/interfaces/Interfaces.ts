export interface Movie{
    id: any,
    name: String,
    rating: Number,
    description: String,
    imagelink: String,
    authors: Author[]
}

export interface Author{
    name: String
}