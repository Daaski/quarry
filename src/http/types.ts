
export type Default = string

export type Object = Default

export type Customer = Default

export type CarNumber = Default

export interface Goods {
    id: number
    name: string
    count: string
}

export type Driver = Default

export type GetObjects = () => Promise<Object[]>

export type GetCustomers = () => Promise<Customer[]>

export type GetCarNumbers = () => Promise<CarNumber[]>

export type GetDrivers = () => Promise<Driver[]>

export type GetGoods = () => Promise<Goods[]>

interface PostOrderProps {
    object: Default
    driver: Default,
    carNumber: Default,
    good: Default
    description: string
    count: number,
    customer: Default
}

export type SendOrder = (obj: PostOrderProps) => void