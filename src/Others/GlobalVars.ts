export const elementTypes = [
    "Title and Descriptions",
    "Image or Logo"
] as const

export type IElementTypes = typeof elementTypes[number]