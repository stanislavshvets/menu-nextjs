'use client'

import css from '@/styles/butoon.module.css'
import { usePathname } from "next/navigation";
import { IBtn } from "@/types/btn.type";

const Button = (props: IBtn) => {

    const { txt, onClick, className } = props;

    const pathname = usePathname()

    return (
        <button className={pathname === '/services' ? css.header_btnInv : css.header_btn} onClick={onClick}>
            {txt}
        </button>
    );
};

export default Button ;