import React from 'react';

// react-router-dom
import { useNavigate } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// store
import Store from './Store';

const boxes = [
  { id: 'reservation', text: '예약하기' },
  { id: 'routine', text: '루틴 추천받기' },
  { id: 'change', text: '예약 변경하기' },
  { id: 'exit', text: '퇴실하기' },
];

const Select = () => {
    const navigate = useNavigate();
    const { user } = Store();

    const handleBoxClick = (boxId) => {
        console.log(`boxId : ${boxId}`);
        // boxId가 0일 경우, 혼자 예약
        // boxId가 1일 경우, 루틴 추천 받기
        // boxId가 2일 경우, 예약 변경
        // boxId가 3일 경우, 퇴실하기
        navigate(`/${boxId}`);
    };

    return (
        <>
        <div>
            <h1>안녕하세요, {user.userName}님!</h1>
            <h1>SSAFY 헬스장 입니다!</h1>
        </div>
        <div>
            <h2>원하는 항목을 선택해 주세요.</h2>
        </div>
        <Box
            display="flex"
            flexDirection="row" // 행별로 정렬
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            height="100vh" // 화면 전체 높이만큼 설정
        >
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    p={2}
                    m={2}
                    bgcolor="#f0f0f0"
                    textAlign="center"
                    width="200px" // 각 박스의 너비 설정 (너무 작게 하지 않도록 조절)
                    height="100px"
                    flexBasis="50%" // 행별로 2개씩 나오도록 설정
                    onClick={() => handleBoxClick(box.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <Typography>{box.text}</Typography>
                </Box>
            ))}
            
        </Box>
        </>
  );
};

export default Select;
