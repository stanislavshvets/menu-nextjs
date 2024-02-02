import { Metadata } from 'next'
import css from "@/styles/contacts.module.css"

export const metadata: Metadata = {
    title: 'Contacts',
    description: 'Contacts',
}

export default function Contacts() {
  return (
    <main className={css.main}>
     <h1>CONTACTS</h1>
    </main>
  );
}

