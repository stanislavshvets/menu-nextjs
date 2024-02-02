import Header from "@/components/Headers/Header";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <>
            <Header/>
            {children}
        </>
    );
}