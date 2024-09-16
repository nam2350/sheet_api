import './globals.css';

export const metadata = {
  title: '토글보험 회사소개',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
