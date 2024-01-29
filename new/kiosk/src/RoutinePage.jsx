
import { useNavigate } from 'react-router-dom';
import Store from './Store';
import { Box, Typography } from '@mui/material';


const boxes1 = [
    { id: '0', text: '유산소' },
    { id: '1', text: '어깨' },
]
const boxes2 = [
    { id: '2', text: '가슴' },
    { id: '3', text: '하체' },
]


function Routine () {
    // 선택한 추천 받을 루틴의 운동 부위
    const { user, routineExercisePart, setRoutineExercisePart}  = Store();
    const navigate = useNavigate();

    // Store에 선택한 추천 루틴 운동부위 담기
    function handleClick (part) {
        setRoutineExercisePart(part);
        // localStorage.setItem('selectedExercisePart', JSON.stringify(part));
        navigate('/reservation');
    }
    return (
        <Box m={4} textAlign="center">
            <div style={{ textAlign: 'center', marginTop: '20vh'}}>
                <Typography variant="h4">안녕하세요, {user.userName}님!</Typography>
                <Typography variant="h4">SSAFY 헬스장 입니다!</Typography>
                <Typography variant="h5" style={{ marginTop: '5vh' }}>추천 루틴 운동부위를 선택해 주세요.</Typography>
            </div>
            <Box
                display="flex"
                flexDirection="column" // 행별로 정렬
                alignItems="center"
                justifyContent="center"
                height="100vh" // 화면 전체 높이만큼 설정
            >
            <div style={{
                display:'flex',
                flexDirection:"row",
                justifyContent:"space-between",
            }}
            >
                {boxes1.map((box) => (
                    <div key={box.id} style={{ flex: '1' }}>
                        <Box
                            p={2}
                            m={2}
                            bgcolor="#f0f0f0"
                            textAlign="center"
                            width="200px"
                            height="200px"
                            // flexBasis="calc(50% - 8px)" // 너비 조절
                            onClick={() => handleClick(box.id)}
                            style={{ cursor: 'pointer' }}
                            >
                            <Typography variant="h6" noWrap>{box.text}</Typography>
                        </Box>
                    </div>
                    ))}
            </div>
            <div style={{
                display:'flex',
                flexDirection:"row",
                justifyContent:"space-between",
            }}
            >
                {boxes2.map((box) => (
                    <div key={box.id} style={{ flex: '1'}}>
                    <Box
                        
                        p={2}
                        m={2}
                        bgcolor="#f0f0f0"
                        textAlign="center"
                        width="200px"
                        height="200px"
                        // flexBasis="calc(50% - 8px)" // 너비 조절
                        onClick={() => handleClick(box.id)}
                        style={{ cursor: 'pointer' }}
                        >
                        <Typography variant="h6" noWrap>{box.text}</Typography>
                    </Box>
                </div>
                ))}
            </div>
            </Box>
        </Box>
      );
    };



export default Routine;
