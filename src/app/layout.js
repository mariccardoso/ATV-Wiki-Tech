import "./globals.css";

export const metadata = {
    title: "Wiki-Tech",
    description: "Projeto de estudo sobre Frameworks e bibliotecas JavaScript",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}

