import Store from './Store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Login () {
    const { users, user, setUser, isLogin, setIsLogin } = Store();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [pinNumber, setPinNumber] = useState("");
    
    const navigate = useNavigate();

    function handleLogin() {
        const newUser = users.find((x) => (
            x.userPhone == phoneNumber && x.pinNumber == pinNumber
        ))
        console.log(newUser);
        if (newUser) {
            // console.log(newUser.userId);
            setUser(newUser);
            setIsLogin(true);
            console.log(user);
            navigate(`/select`);

        } else {
            console.log('로그인 실패');
            navigate('/login');
        }
    }
    return (
        <div>
            <div>
                <h1>환영합니다. </h1>
                <h1>SSAFY 헬스장 입니다!</h1>
            </div>
            <label>
                전화번호:
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <br />
            <label>
                PIN 번호:
                <input type="password" value={pinNumber} onChange={(e) => setPinNumber(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin}>로그인</button>
        
        </div>

    )
}

export default Login;