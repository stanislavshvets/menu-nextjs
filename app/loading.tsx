import css from '@/styles/loading.module.css'

// Here you can implement a Loading page. More: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
const Loading = () => {
    return (
        <main className={css.main_block}>
            <h1>Loading...</h1>
        </main>
    );
};

export default Loading;