import { Metadata } from "next";
import css from '@/styles/about.module.css'

export const metadata: Metadata = {
    title: 'About',
    description: 'About',
}

export default function About() {
  return (
    <main className={css.main}>
     <h1>ABOUT</h1>
    </main>
  );
}
