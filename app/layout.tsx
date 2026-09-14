export const metadata = {
  title: 'Je crée une leçon au label CUA - CFWB',
  description: 'Plateforme de création de leçons inclusives basées sur les compétences CFWB avec les principes CUA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}