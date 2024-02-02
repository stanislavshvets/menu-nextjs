"use client"

import Button from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import css from '@/styles/desktopheader.module.css'

const PolicyHeader = () => {

    return (
        <header className={css.header}>
            <Link href={'/'}>
                <Image
                    className={css.logoHeader}
                    src='/next.svg'
                    alt="Next.js Logo"
                    width={150}
                    height={37}
                    priority
                />
            </Link>
            <Link href={'/'}>
                <Button txt={'HOME'} />
            </Link>
        </header>
    );
};

export default PolicyHeader ;