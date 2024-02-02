import { Metadata } from "next";
import css from "@/styles/service.module.css"

export const metadata: Metadata = {
    title: 'Services',
    description: 'Services',
}
export default function Services() {
  return (
    <main className={`${css.main}`}>
     <h1>SERVICES</h1>
    </main>
  );
}
