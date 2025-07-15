
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Selecione um mapa</h1>
      <ul className="list-disc list-inside space-y-2">
        {Array.from({ length: 13 }, (_, i) => (
          <li key={i}>
            <a href={`/mapa/${i + 1}`} className="text-blue-700 hover:underline">
              Mapa {i + 1}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
