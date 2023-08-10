'use client'
import {useState} from "react";
import Link from "next/link";

import {Sidebar} from "primereact/sidebar";
import {Button} from "primereact/button";

import scss from './SideMenu.module.scss'



export const SideMenu = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <Link className={scss.link_item} href={'/'}>
                    <Button className={scss.link_button} link>
                        <p className={scss.link_item_text}>Главная</p>
                        <i style={{marginTop: "6px"}} className='pi pi-chevron-right'/>
                    </Button>
                </Link>
                <Link className={scss.link_item} href={'/order'}>
                    <Button className={scss.link_button} link>
                        <p className={scss.link_item_text}>Оформить заявку</p>
                        <i style={{marginTop: "6px"}} className='pi pi-chevron-right'/>
                    </Button>
                </Link>
            </Sidebar>
            <i className={`pi pi-bars ${scss.icon}`} onClick={() => setVisible(true)} />
        </div>
    )
}