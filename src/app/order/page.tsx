import {Form} from "app/order/components/Form";

import scss from './Order.module.scss'
/*
import {getCarNumbers, getCustomers, getDrivers, getGoods, getObjects} from "http/formApi";
*/

const OrderPage = async () => {
/*    const drivers = await getDrivers()

    const objects = await getObjects()

    const customers = await getCustomers()

    const carNumbers = await getCarNumbers()

    const goods = await getGoods()*/


    return (
        <div className={scss.order_layout}>
            <h2 className={scss.order_title}>Добавить заказ юр. лицо</h2>
            <Form/>
        </div>
    )
}

export default OrderPage