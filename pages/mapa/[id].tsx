
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const SHEET_ID = '1DcA11bNNnrCCFUmOm5wXiikn31D-17DR7oesp_zk2pE';
const SHEET_NAME = 'Respostas';
const API_KEY = 'AIzaSyAoTs7KPkge3z7U4-7Zn4ZDBRgQLiszSWg';

export default function Mapa() {
  const router = useRouter();
  const { id } = router.query;

  const [enderecos, setEnderecos] = useState<any[]>([]);
  const [observacoes, setObservacoes] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!id) return;
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Mapas_Enderecos?key=${API_KEY}`
      )
      .then((res) => {
        const linhas = res.data.values;
        const filtrados = linhas.filter((linha: string[]) => linha[0] === id);
        setEnderecos(filtrados);
      });
  }, [id]);

  const registrar = (endereco: string, acao: string, observacao = '') => {
    const data = new Date().toLocaleString('pt-BR');
    axios.post(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`,
      {
        values: [[data, id, endereco, acao, observacao]],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Mapa {id}</h1>
      {enderecos.map((linha, i) => {
        const endereco = linha[1];
        return (
          <div key={i} className="bg-white shadow rounded-2xl p-4 mb-4">
            <p className="font-medium mb-2">{endereco}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <button onClick={() => registrar(endereco, 'Contatado')} className="bg-green-500 text-white px-3 py-1 rounded">Contatado</button>
              <button onClick={() => registrar(endereco, 'Não encontrado')} className="bg-red-500 text-white px-3 py-1 rounded">Não encontrado</button>
              <button onClick={() => registrar(endereco, 'Família')} className="bg-yellow-400 text-white px-3 py-1 rounded">Família</button>
            </div>
            <div>
              <textarea
                placeholder="Observações..."
                value={observacoes[endereco] || ''}
                onChange={(e) => setObservacoes({ ...observacoes, [endereco]: e.target.value })}
                onBlur={() => registrar(endereco, 'Observação', observacoes[endereco])}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
