import axios from 'axios';

// react state hook
import { useState } from 'react';
// react dom hook
import { useNavigate } from 'react-router-dom';

// dummy data
// import users from '../../dummyData.js';

const LoginForm = (props) => {
    
    // 사용자 입력 데이터
    let [userPhone, setUserPhone] = useState('');
    let [pinNumber, setPinNumber] = useState('');

    let navigate = useNavigate();

    // 로그인 버튼 클릭 시, 백엔드로 로그인 요청(method: POST)
    // 일단 더미데이터 사용
    function handleLogin() {
        const user = props.users.find((user) => user.userPhone === userPhone && user.pinNumber === pinNumber);

        if (user) {
            console.log("로그인 성공")
            props.onLogin();
            navigate(`/user/${user.userId}`);
        } else {
            console.log("로그인 실패")
            alert("다시 해라 임마")

        }
    }
    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post('/kiosk/login', {
    //             userPhone,
    //             pinNumber,
    //         });
    //         const data = response.data;

    //         // response 성공(로그인 성공 시)
    //         if (data.success) {
    //             console.log("로그인 성공 : " + data.message);
    //             onLogin();
    //         // 로그인 실패 시
    //         } else {
    //             console.error("로그인 실패 : " + data.message);
    //         }
    //     } catch (error) {
    //         console.log("에러 메시지 : " + error);
    //     }
    // }

    return (
        <div>
            <div>안녕하세요. SSAFY 헬스장 입니다.</div>
            <form>
                <div>
                    <label>전화번호(TEL) : </label>
                    <input type="text" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
                </div>
                <div>
                    <label>핀 번호(PIN) : </label>
                    <input type="password" value={pinNumber} onChange={(e) => setPinNumber(e.target.value)} />
                </div>
                <button onClick={ handleLogin }>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;