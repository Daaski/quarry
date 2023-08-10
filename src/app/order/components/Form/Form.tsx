'use client'

import {Dropdown} from 'primereact/dropdown';

import {InputTextarea} from "primereact/inputtextarea";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useFormik} from "formik";
import {FormTypes} from "app/order/components/Form/types";
import {TempData} from "app/order/components/Form/data";
import {FormValidate} from "app/order/components/Form/Form.utils";
import {useRef} from "react";
import {Toast} from "primereact/toast";

import scss from './Form.module.scss'


/*
interface FormProps {
    objects: Default[]
    customers: Default[]
    carNumbers: Default[]
    goods: Goods[]
    drivers: Default[]
}

*/

export const Form = () => {
    const toast = useRef<Toast>(null)
    const onSubmit = (values: FormTypes) => {
        console.log(values)

        toast.current?.show({severity: 'info', summary: 'Info', detail: 'Заявка успешно отправлена', life: 3000});
    }
    const {
        values,
        handleSubmit,
        handleBlur,
        setFieldValue,
        handleChange,
        errors,
        isValid,
        touched
    } = useFormik<FormTypes>({
        initialValues: {
            object: "",
            carNumber: "",
            customer: "",
            good: {name: "", count: ""},
            count: "",
            description: "",
            fullName: ""
        },
        validate: FormValidate,
        onSubmit
    })


    console.log(errors.count)

    return (
        <div className={scss.form_layout}>
            <form onSubmit={handleSubmit} className={scss.form}>
                <div className={scss.fields_wrapper}>
                    <div className={scss.field}>
                        <label className={scss.field_label}>
                            Карьер*
                        </label>
                        <Dropdown
                            style={{background: "#ECECEC", borderRadius: '16px'}}
                            className={`${touched.object && errors.object ? 'p-invalid' : ''}`}
                            name='object'
                            value={values.object}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            options={TempData.object}
                            placeholder="Укажите объект"/>
                        <p className={scss.error_label}>{touched.object && errors.object}</p>
                    </div>
                    <div className={scss.field_area}>
                        <label className={scss.field_label}>
                            Описание
                        </label>
                        <InputTextarea
                            style={{background: "#ECECEC", borderRadius: '16px'}}
                            name='description'
                            value={values.description}
                            onChange={handleChange}
                            className={`${touched.description && errors.description && 'p-invalid'} ${scss.field_textarea}`}/>
                        <p className={scss.error_label}>{touched.description && errors.description}</p>
                    </div>
                    <div className={scss.field}>
                        <label className={scss.field_label}>
                            Организация*
                        </label>
                        <Dropdown
                            style={{background: "#ECECEC", borderRadius: '16px'}}
                            className={`${touched.customer && errors.customer ? 'p-invalid' : ''}`}
                            name='customer'
                            value={values.customer}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            options={TempData.customer}
                            placeholder="Укажите заказчика"/>
                        <p className={scss.error_label}>{touched.customer && errors.customer}</p>
                    </div>
                </div>
                <div className={scss.fields_wrapper}>
                    <div className={scss.field}>
                        <label className={scss.field_label}>
                            Груз*
                        </label>
                        <Dropdown
                            style={{background: "#ECECEC", borderRadius: '16px'}}
                            className={`${touched.good && errors.good ? 'p-invalid' : ''}`}
                            name="good"
                            value={values.good}
                            onBlur={handleBlur}
                            onChange={(e) => {
                                setFieldValue('good', e.target.value)
                            }}
                            options={TempData.goods}
                            optionLabel="name"
                            placeholder="Укажите продукт"/>
                        <p className={scss.error_label}>{touched.good && errors.good as string}</p>
                    </div>
                    <div className={scss.field}>
                        <label className={scss.field_label}>
                            Количество груза (кг)*
                        </label>
                        <InputText
                            style={{background: "#ECECEC", borderRadius: '16px'}}
                            className={`${touched.count && errors.count ? 'p-invalid' : ''}`}
                            name='count'
                            onBlur={handleBlur}
                            value={values.count.toString()}
                            onChange={handleChange}
                            keyfilter='int'
                            placeholder="Количество продукта"/>
                        <p className={scss.error_label}>{touched.count && errors.count}</p>
                    </div>
                    <div className={scss.field}>
                        <label className={scss.field_label}>
                            Номер машины*
                        </label>
                        <Dropdown
                            style={{background: "#ECECEC", borderRadius: '16px'}}
                            className={`${touched.carNumber && errors.carNumber ? 'p-invalid' : ''}`}
                            name='carNumber'
                            value={values.carNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            options={TempData.carNumber}
                            placeholder="Укажите номер машины"/>
                        <p className={scss.error_label}>{touched.carNumber && errors.carNumber}</p>
                    </div>
                    <div className={scss.field}>
                        <label className={scss.field_label}>
                            Водитель*
                        </label>
                        <Dropdown
                            style={{background: "#ECECEC", borderRadius: '16px'}}
                            className={`${touched.fullName && errors.fullName ? 'p-invalid' : ''}`}
                            name='fullName'
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            options={TempData.fullName}
                            placeholder="Укажите водителя"/>
                        <p className={scss.error_label}>{touched.fullName && errors.fullName}</p>
                    </div>
                    <Button style={{borderRadius: "16px"}} type='submit' disabled={!isValid} className={scss.button_form}>Оформить
                        заказ</Button>
                </div>
                <Toast ref={toast}/>
            </form>
        </div>
    )
}