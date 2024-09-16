export default function MainSection({ mainData }) {

    // 스프레드 시트 데이터 가져오기
    // const textData = mainData.filter(item => item.type == 'text');
    // const imageData = mainData.filter(item => item.type == 'image');
    const blogLinks = mainData.filter(item => item.type === 'blog');
    const newsLinks = mainData.filter(item => item.type === 'news');

    console.log(mainData)
    return (
        <section className="main-section">
            <div className="main-section-block">
                <div className="text-content">
                    <h1 className="large-heading">{mainData['0']?.content}</h1>
                    <p>{mainData['1']?.content}</p>
                </div>
                <div className="image-content">
                    <img src={mainData['3'].url} alt="이미지" />
                </div>
            </div>

            <div className="main-section-block">
                <div className="text-content">
                    <h1 className="large-heading">{mainData['2']?.content}</h1>
                </div>
                <div className="image-content">
                    <img src={mainData['4'].url} alt="이미지" />
                </div>
            </div>

            <div className="main-section-block">
                <h1 className="large-heading">토글블로그</h1>
                <div className="links-container">
                    {blogLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" className="link-item">
                            {link.content}
                        </a>
                    ))}
                </div>
            </div>

            <div className="main-section-block">
                <h1 className="large-heading">뉴스</h1>
                <div className="news-container">
                    {newsLinks.map((link, index) => (
                        <div key={index} className="news-item">
                            <a href={link.url} target="_blank" className="news-item-title">{link.content}</a>
                            <img src="https://openyourplan.com/icons/arrow.svg" alt="화살표" />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
