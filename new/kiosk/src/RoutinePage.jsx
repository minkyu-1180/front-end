import { useNavigate } from 'react-router-dom';
import Store from './Store';


function Routine () {
    // 선택한 추천 받을 루틴의 운동 부위
    const { selectedExercisePart, setSelectedExercisePart}  = Store();
    const navigate = useNavigate();

    function handleClick (part) {
        setSelectedExercisePart(part);
        navigate('/reservation');
    }
    return (
        <div>
            <h1>루틴 페이지</h1>
            <h4>루틴을 선택해 주세요.</h4>
            <div>
                <button onClick={() => handleClick(0)}>유산소</button>
                <button onClick={() => handleClick(1)}>어깨</button>
                <button onClick={() => handleClick(2)}>가슴</button>
                <button onClick={() => handleClick(3)}>하체</button>
            </div>
        </div>
    )
}

export default Routine;
