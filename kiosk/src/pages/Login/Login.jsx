import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Store from '../../store/store';

function Login () {
    // 입력받을 전화번호와 핀 번호
    const [userPhone, setUserPhone] = useState("");
    const [pinNumber, setPinNumber] = useState("");
    
    const users = Store((state) => state.users);
    const setUser = Store((state) => state.setUser);
    const setIsLogin = Store((state) => state.setIsLogin);

    const navigate = useNavigate();

    function handleLogin() {
        const loginUser = users.find((x) => 
            x.userPhone === userPhone && x.pinNumber === pinNumber
        )
        console.log(loginUser)

        if (loginUser) {
            setIsLogin(true);
            setUser(loginUser);
            // onLogin();
            navigate(`/user/${loginUser.userId}`);
        } else {
            console.log("로그인 실패")
            navigate('/login');
        }
    } 

    return (

        <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>안녕하세요.</Typography>
            <Typography variant="h3" gutterBottom> SSAFY 헬스장 입니다!</Typography>        
            <div>
                <TextField
                    label="전화번호"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    label="PIN 번호"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={pinNumber}
                    onChange={(e) => setPinNumber(e.target.value)}
                />
            </div>
            <div style={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    로그인
                </Button>
            </div>
        
        </Container>
    )
};

export default Login;