import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home () {
    // const [backgroundImages, setBackgroundImages] = useState([
    //     '/images/image1.jpg',
    //     '/images/image2.jpg',
    //     '/images/image3.jpg',
    //     // Add more images as needed
    //   ]);
    //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    //   useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    //     }, 4000);
    
    //     return () => clearInterval(intervalId);
    //   }, [backgroundImages]);
    const navigate = useNavigate();

    // 클릭 시 로그인 페이지로 이동
    function handleClick () {
        navigate('/login')
    }
    return (
        <div 
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} 
            onClick={handleClick}
        >
            <div style={{ textAlign: 'center' }}>
                <h1>안녕하세요.</h1>
                <h1>SSAFY 헬스장입니다!</h1>
            </div>
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                <p>화면 아무 곳이나 클릭 시 로그인 화면으로 이동됩니다.</p>
            </div>
        </div>
    )
}

export default Home