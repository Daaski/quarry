
export interface OrderTypes {
    object: string[]
    description: string
    customer: string[]
    goods: {name: string, count: number}[]
    count: number
    carNumber: string[]
    fullName: string[]
}

export interface FormTypes {
    object: string,
    description: string
    customer: string
    good: {name: string, count: string},
    count: string,
    carNumber: string,
    fullName: string
}