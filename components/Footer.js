export default function Footer({ footerData }) {
    return (
        <footer className="footer">
            <div className="container">
                {footerData.length > 0 ? (
                    <>
                        <h3>오픈플랜(주)</h3>
                        {footerData.map((item, index) => (
                            <p key={index} >
                                {item.content}
                            </p>
                        ))}
                    </>
                ) : (
                    <p>로드 중...</p>
                )}
            </div>
        </footer>
    );
}
