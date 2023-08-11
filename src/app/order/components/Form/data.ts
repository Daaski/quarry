import {OrderTypes} from "app/order/components/Form/types";

export const TempData: OrderTypes = {
    object: ["Перевалочная база М11", "Перевалочная база А2"],
    description: "",
    customer: ["ООО 'Капитал Кадры'", "ООО 'Счастье'", "ООО 'Ломтранс'"],
    goods: [{
        name: "Щебень",
        count: 1000000000
    },
        {
            name: "Песок",
            count: 100
        }
    ],
    fullName: ["Иванов Иван Иванович", "Сидоров Фёдор Петрович", "Абраскин Михаил Павлович"],
    count: 0,
    carNumber: ["В878КЕ95", "О917УН33", "Т108PВ163"],
}