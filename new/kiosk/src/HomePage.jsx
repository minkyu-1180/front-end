import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }

  return (
    <div 
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} 
        onClick={handleClick}
    >
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4">안녕하세요.</Typography>
        <Typography variant="h4">SSAFY 헬스장입니다!</Typography>
      </div>
      <div style={{ textAlign: 'center', cursor: 'pointer' }}>
        <Typography>화면 아무 곳이나 클릭 시 로그인 화면으로 이동됩니다.</Typography>
      </div>
    </div>
  );
}

export default Home;