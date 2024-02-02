import Link from "next/link";
import css from '@/styles/mobilemenu.module.css'
import { usePathname } from "next/navigation";
import { IMobMenu } from "@/types/mobMenu.type";

const MobileMenu = (props: IMobMenu) => {

    const { SetRoute, CloseMenu } = props;

    const pathname = usePathname()

    return (
        <div className={css.mob_menu_open}>
            <button className={css.header__menuMobileButton} onClick={() => CloseMenu()}>
                <div className={css.__firstBar}></div>
                <div className={css.__thirdBar}></div>
            </button>
            <nav className={css.nav}>
                <Link href={'/'} className={pathname === "/" ? `active` : ``} onClick={() => CloseMenu()}>HOME</Link>
                <Link href={'/services'} className={pathname === "/services" ? `active` : ``} onClick={() => CloseMenu()}>SERVICES</Link>
                <Link href={'/about'} className={pathname === "/about" ? `active` : ``} onClick={() => CloseMenu()}>ABOUT</Link>
                <Link href={'/contacts'} className={pathname === "/contacts" ? `active` : ``} onClick={() => CloseMenu()}>CONTACTS</Link>
            </nav>
            <button className={css.mob_callback_btn} onClick={() => { CloseMenu(); SetRoute()}}>Callback</button>
        </div>
    );
};

export default MobileMenu;