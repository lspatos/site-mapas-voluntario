
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Site Mapas Voluntário</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow">
          <div className="container mx-auto text-xl font-semibold">🌍 Mapas Voluntários</div>
        </header>
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <footer className="bg-blue-600 text-white text-center p-2 text-sm">
          Projeto colaborativo • {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
