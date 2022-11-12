export const elementTypes = [
    "Title and Descriptions",
    "Image or Logo"
] as const

export type IElementTypes = typeof elementTypes[number]

export type OnChangeType = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>

export interface IInputElemProps {
    index: number,
}