import PolicyHeader from "@/components/Headers/PolicyHeader";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <>
            <PolicyHeader />
            {children}
        </>
    );
}