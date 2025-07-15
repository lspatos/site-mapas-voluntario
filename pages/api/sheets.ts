
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const { id, endereco, acao, observacao } = req.body;

  try {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = '1DcA11bNNnrCCFUm0m5vKik1n3lD-2_valueInputOption';

    const range = 'Respostas!A:D';
    const valueInputOption = 'USER_ENTERED';
    const resource = {
      values: [[id, endereco, acao, observacao]],
    };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });

    res.status(200).json({ status: 'success', data: result.data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}
