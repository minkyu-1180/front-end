import { useNavigate } from 'react-router-dom';
import Store from './Store';

import { Typography, Box } from '@mui/material';


const boxes = [
    { id: 'reservation', text: '예약하기' },
    { id: 'routine', text: '추천받기' },
    { id: 'change', text: '변경하기' },
    { id: 'exit', text: '퇴실하기' },
]
// const boxes1 = [
//   { id: 'reservation', text: '예약하기' },
//   { id: 'routine', text: '루틴 추천받기' },

// ];
// const boxes2 = [
//     { id: 'change', text: '예약 변경하기' },
//     { id: 'exit', text: '퇴실하기' },
// ]
const Select = () => {
    const navigate = useNavigate();
    const { user, setRoutineExercisePart, setReservationWaitList } = Store();

    // 박스 클릭 시, 해당 boxId값을 id로 가진 url로 이동
    const handleBoxClick = (boxId) => {
        console.log(`boxId : ${boxId}`);
        if (boxId == 'reservation') {
            setRoutineExercisePart(null);
            setReservationWaitList([]);
        }
        navigate(`/${boxId}`);
    };

 return (
    <Box m={4} textAlign="center">
      <Typography variant="h4">안녕하세요, {user.userName}님!</Typography>
      <Typography variant="h4">SSAFY 헬스장 입니다!</Typography>
      <Typography variant="h5" style={{ marginTop: '20px' }}>원하는 항목을 선택해 주세요.</Typography>
      <Box
        display="flex"
        flexDirection="row" // 행별로 정렬
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
                width="200px"
                height="200px"
                // flexBasis="calc(50% - 8px)" // 너비 조절
                onClick={() => handleBoxClick(box.id)}
                style={{ cursor: 'pointer' }}
            >
                <Typography variant="h6" noWrap>{box.text}</Typography>
            </Box>
            ))}
        </Box>
    </Box>
  );
};

export default Select;
