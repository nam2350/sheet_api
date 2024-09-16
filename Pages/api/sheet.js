import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // 서비스 계정 키 파일 경로 설정
    const credentialsPath = path.join(process.cwd(), 'credentials.json');
    const credentials = JSON.parse(await fs.readFile(credentialsPath, 'utf-8'));

    // OAuth2 클라이언트 생성
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    // Google Sheets API 클라이언트 생성
    const sheets = google.sheets({ version: 'v4', auth });

    // Google Sheets API 요청
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1', // 데이터가 있는 시트 이름
    });

    const rows = response.data.values;
    const data = rows.slice(1).map((row) => ({
      id: row[0],
      type: row[1],
      content: row[2],
      url: row[3] || '', // URL이 없을 경우 빈 문자열로 처리
    }));

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).json({ error: 'Failed to fetch data from Google Sheets' });
  }
}
