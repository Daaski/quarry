import {FormTypes} from "app/order/components/Form/types";
import {TempData} from "app/order/components/Form/data";

interface Errors extends Partial<Omit<FormTypes, "good">> {
    good?: string
}

export const FormValidate = (values: FormTypes) => {
    const errors: Errors = {}

    const good = TempData.goods.find(good => good.name === values.good.name)


    if (!values.object) {
        errors.object = 'Обязательное поле'
    }

    if (!values.fullName) {
        errors.fullName = 'Обязательное поле'
    }

    if (!values.count) {
        errors.count = 'Обязательное поле'
    }


    if (good?.count) {
        if (+values.count > good.count) {
            errors.count = 'Оставшееся кол-во на складе: '+ good.count
        }
    }

    if (!values.good) {
        errors.good = 'Обязательное поле'
    }

    if (!values.customer) {
        errors.customer = 'Обязательное поле'
    }


    if (!values.carNumber) {
        errors.carNumber = 'Обязательное поле'
    }

    return errors
}