import { Metadata } from "next";
import css from '@/styles/privacypolicy.module.css'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy',
}

export default function PrivacyPolicy() {
  return (
    <main className={css.main}>
     <h1>Privacy Policy</h1>
    </main>
  );
}
