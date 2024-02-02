"use client"

import Button from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import css from '@/styles/desktopheader.module.css'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CallBackForm from "@/components/Form/CallBackForm/CallBackForm";
import ThankYouModal from "@/components/Form/CallBackForm/ThankYouModal";
import MobileMenu from "@/components/Headers/MobileMenu";

const Header = () => {

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)

    const openMenu = () => {
        setMenuOpen(prev => !prev)
    }

    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const setParams = useCallback( (name: string, value: string) => {

        const params = new URLSearchParams(searchParams)
        params.set(name, value)

        return params.toString()
    }, [searchParams])

    const OpenForm = searchParams.has('form');
    const OpenSending = searchParams.has('sending');

    useEffect(() => {

        (OpenForm) ? setIsModalOpen(true) : setIsModalOpen(false)

    }, [OpenForm]);

    useEffect(() => {

        (OpenSending) ? setIsConfirmOpen(true) : setIsConfirmOpen(false)

    }, [OpenSending]);

    const SetRoute = () => {
        router.push(pathname + '?' + setParams('form', 'open'), { scroll: false})
    }

    return (
        <header className={css.header}>
            {isModalOpen && <CallBackForm FormClose={() => setIsModalOpen(false)} pathname={pathname}/>}
            {isConfirmOpen && <ThankYouModal FormClose={() => setIsConfirmOpen(false)} pathname={pathname}/>}
            <Link href={'/'}>
                <Image
                    className={css.logoHeader}
                    src={ pathname === `/services` ? '/next-white.svg' : '/next.svg' }
                    alt="Next.js Logo"
                    width={150}
                    height={37}
                    priority
                />
            </Link>
            <nav className={pathname === '/services' ? css.inv : css.navi}>
                <Link href={'/'} className={pathname === "/" ? `active` : ``}>HOME</Link>
                <Link href={'/services'} className={pathname === "/services" ? `active` : ``}>SERVICES</Link>
                <Link href={'/about'} className={pathname === "/about" ? `active` : ``}>ABOUT US</Link>
                <Link href={'/contacts'} className={pathname === "/contacts" ? `active` : ``}>CONTACTS</Link>
            </nav>
            <Button txt={'Callback'} onClick={() => SetRoute()}/>
            <div className={isMenuOpen ? `${css.mobMenuOpen}` : `${css.mobMenuDisplayNone}`} onClickCapture={openMenu}></div>
            <button className={isMenuOpen ? css.header_btn_none : css.header__menuMobileButton} onClickCapture={openMenu}>
                <div className={ pathname === `/services` ?
                    css.bar__menuMobileButton_white :
                    css.bar__menuMobileButton
                }>
                </div>
                <div className={ pathname === `/services` ?
                    css.bar__menuMobileButton_white :
                    css.bar__menuMobileButton
                }>
                </div>
                <div className={ pathname === `/services` ?
                    css.bar__menuMobileButton_white :
                    css.bar__menuMobileButton
                }>
                </div>
            </button>
            {isMenuOpen && <MobileMenu SetRoute={SetRoute} CloseMenu={() => setMenuOpen(false)}/>}
        </header>
    );
};

export default Header ;