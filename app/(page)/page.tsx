import { Metadata } from "next";
import css from '@/styles/home.module.css'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home',
}

export default function Home() {
  return (
    <main className={css.main}>
     <h1>HOME</h1>
    </main>
  );
}
