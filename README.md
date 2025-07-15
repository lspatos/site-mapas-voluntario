
# 🌍 Site Mapas Voluntário

Este é um projeto de mapeamento colaborativo para registro de ações voluntárias em diferentes locais. Desenvolvido em **Next.js + TypeScript**, com layout responsivo utilizando **Tailwind CSS**, integração com **Google Sheets API** e hospedagem recomendada via **Vercel**.

---

## 🚀 Funcionalidades

- ✅ Página inicial estilizada com layout limpo e moderno
- ✅ Visualização de locais de ações voluntárias
- ✅ Registro de ações (ações realizadas, pendentes, observações)
- ✅ Integração automática com **Google Sheets**
- ✅ API segura com conta de serviço (Service Account)

---

## 🛠 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Axios](https://axios-http.com/)
- [Vercel](https://vercel.com/) (recomendado para deploy)

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/site-mapas-voluntario.git
cd site-mapas-voluntario
npm install
```

Crie um arquivo `.env.local` na raiz do projeto com as credenciais da conta de serviço:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=seu-email@seuprojeto.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nCHAVE\nAQUI\n-----END PRIVATE KEY-----\n"
```

---

## ▶️ Executar localmente

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar.

---

## ✍️ Como funciona

### 1. 📋 Mapa

Cada local possui um ID com informações como endereço e ações realizadas.

### 2. 📝 Registro

Os botões de ação permitem registrar ações que são enviadas para a aba `Respostas` de uma planilha do Google Sheets.

### 3. 📤 API Interna

A rota `/api/sheets` recebe os dados e grava na planilha via Google Sheets API usando uma conta de serviço.

---

## 🛡️ Segurança

Este projeto **NÃO envia** sua `GOOGLE_PRIVATE_KEY` para o cliente. Todas as interações com a planilha são feitas pelo backend.
