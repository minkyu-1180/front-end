import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
function Login ( { users, isLogin, onLogin }) {
    // 입력받을 전화번호와 핀 번호
    const [userPhone, setUserPhone] = useState("");
    const [pinNumber, setPinNumber] = useState("");
    
    const navigate = useNavigate();

    function handleLogin() {
        const user = users.find((x) => 
            x.userPhone === userPhone && x.pinNumber === pinNumber
        )

            if (user) {
            onLogin();
            navigate(`/user/${user.userId}`);
        } else {
            console.log("로그인 실패")
        }
    } 

    return (

        <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
                안녕하세요. SSAFY 헬스장 입니다!
            </Typography>        
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