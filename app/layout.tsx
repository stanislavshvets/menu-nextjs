import { Play } from "next/font/google";
import "@/styles/globals.css";
import css from "@/styles/globalstyles.module.css"

const play = Play({
    subsets: ["latin", "cyrillic"],
    weight: "400"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={`${play.className} ${css.wrapper}`}>
      {children}
      </body>
    </html>
  );
}
