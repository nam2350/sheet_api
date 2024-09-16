// app/page.js
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

async function fetchData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sheet`);

  if (!res.ok) {
    throw new Error('데이터를 가져오는데 실패했습니다.');
  }

  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <Header />
      <MainSection mainData={data} />
      <Footer footerData={data.filter(item => item.type === 'footer')} />
    </>
  );
}
