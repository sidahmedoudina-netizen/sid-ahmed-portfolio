import "./globals.css";

export const metadata = {
  title: "Sid Ahmed Oudina — Portfolio",
  description: "Portfolio professionnel de Sid Ahmed Oudina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
