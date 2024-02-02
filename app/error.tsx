'use client'

import css from '@/styles/error.module.css'

// Here you can implement Error page. More: https://nextjs.org/docs/app/building-your-application/routing/error-handling
const Error = () => {
    return (
        <main className={css.main_block}>
            <h1>Sorry... Something went wrong!</h1>
        </main>
    );
};

export default Error;