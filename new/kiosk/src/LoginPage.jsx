import Store from './Store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Typography, TextField, Button, Container } from '@mui/material';

function Login () {
    const { users, setUser, setIsLogin } = Store();
    const navigate = useNavigate();
    
    // 사용자 입력 휴대폰 번호
    const [phoneNumber, setPhoneNumber] = useState("");
    // 사용자 입력 Pin 번호
    const [pinNumber, setPinNumber] = useState("");
    
    // 로그인 버튼 클릭 시, Store에 저장된 users 값에서 
    // 사용자가 입력한 핸드폰 번호, Pin 번호와 동일한 user 찾기
    function handleLogin() {
        const newUser = users.find((x) => (
            x.userPhone == phoneNumber && x.pinNumber == pinNumber
        ))
        if (newUser) {
            // Store에 사용자 정보 및 로그인 여부 저장
            setUser(newUser);
            setIsLogin(true);
            console.log("사용자 정보 : ", newUser);
            navigate(`/select`);
           
        } else {
            console.log('로그인 실패');
            navigate('/login');
        }
    }
    return (
        <Container maxWidth="sm">
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <Typography variant="h4">환영합니다.</Typography>
            <Typography variant="h4">SSAFY 헬스장 입니다!</Typography>
          </div>
          <form>
            <TextField
              label="전화번호"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ marginTop: '20px' }}
            />
            <TextField
              label="PIN 번호"
              variant="outlined"
              type="password"
              fullWidth
              value={pinNumber}
              onChange={(e) => setPinNumber(e.target.value)}
              style={{ marginTop: '20px' }}
            />
            <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '20px' }}>
              로그인
            </Button>
          </form>
        </Container>
      );
    }
    
export default Login;