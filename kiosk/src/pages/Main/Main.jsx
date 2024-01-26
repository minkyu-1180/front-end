import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import Box from '@mui/system/Box';

import Store from '../../store/store';

// 배경화면 이미지
const backgroundImages = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
  ];
  // StyledMainContainer에 직접 styled를 적용
const StyledMainContainer = styled(Box)((props) => ({
    backgroundImage: `url(${process.env.PUBLIC_URL + props.imageUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
  }));
  
  const StyledHeading = styled('h1')({
    color: 'blue',
    fontSize: '2rem',
    marginBottom: '16px',
  });
  
  const StyledParagraph = styled('p')({
    color: 'red',
    fontSize: '1rem',
  });
  
  function Main() {
    const navigate = useNavigate();
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const isLogin = Store((state) => state.isLogin);
    const user = Store((state) => state.user);
    // console.log(isLogin)
    // console.log(user)
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImgIdx((prev) => (prev + 1) % backgroundImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    function handleClick() {
      if (isLogin) {
        navigate(`/user/${user.userId}`);
      } else {
        navigate('/login');
      }
    }
  
    return (
      <StyledMainContainer imageUrl={backgroundImages[currentImgIdx]} onClick={handleClick}>
        <StyledHeading>헬스케줄과 함께해요!</StyledHeading>
        <StyledParagraph>화면 어디를 클릭해도 로그인 페이지로 이동합니다.</StyledParagraph>
      </StyledMainContainer>
    );
  }

  export default Main;
