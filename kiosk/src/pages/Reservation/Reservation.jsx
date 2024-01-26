// 필요한 내용
// 1. 혼자 운동하기 선택 후 넘어온 것인가? 아니면 루틴 추천 선택 후 넘어온 것인가?
// - 혼자 운동하기 선택 후 넘어온 것이면, rootin_part = null, exercise_part = null
// - 루틴 추천 선택 후 넘어온 것이면, rootin_part와 exercise_part에 값을 받고 넘어온 상태
// - rootin_part 존재 -> 상단에 루틴 목록 보여주기
// - rootin_part x -> 상단에 루틴 목록 숨기기
// - exercise_part 존재 -> 왼쪽 navbar에 해당 버튼 활성화
// - exercise_part x -> 왼쪽 navbar에 활성화된 버튼 X
// - 예약 현황 컴포넌트 : exercise_part에 따라 결정됨
// - exercise_part 존재 -> 예약 현황 컴포넌트에 해당 exercise_part와 관련된 예약 현황 띄우기
// - exercise_part x -> 예약 현황 컴포넌트에 

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const dummyMachines = [
    { machineId: 0, machineTypeId: 0, exercisePart: 0,  exerciseName: "유산소기구1-1"}, // 유산소
    { machineId: 1, machineTypeId: 0, exercisePart: 0,  exerciseName: "유산소기구1-2"}, // 유산소
    { machineId: 2, machineTypeId: 0, exercisePart: 0,  exerciseName: "유산소기구1-3"}, // 유산소

    { machineId: 3, machineTypeId: 1, exercisePart: 0,  exerciseName: "유산소기구2-1"}, // 유산소
    { machineId: 4, machineTypeId: 1, exercisePart: 0,  exerciseName: "유산소기구2-2"}, // 유산소
    { machineId: 5, machineTypeId: 1, exercisePart: 0,  exerciseName: "유산소기구2-3"}, // 유산소

    { machineId: 6, machineTypeId: 2, exercisePart: 0,  exerciseName: "유산소기구3-1"}, // 유산소
    { machineId: 7, machineTypeId: 2, exercisePart: 0,  exerciseName: "유산소기구3-2"}, // 유산소
    { machineId: 8, machineTypeId: 2, exercisePart: 0,  exerciseName: "유산소기구3-3"}, // 유산소

    { machineId: 9, machineTypeId: 3, exercisePart: 1,  exerciseName: "가슴기구1-1"}, // 가슴
    { machineId: 10, machineTypeId: 3, exercisePart: 1,  exerciseName: "가슴기구1-2"}, // 가슴
    { machineId: 11, machineTypeId: 3, exercisePart: 1,  exerciseName: "가슴기구1-3"}, // 가슴

    { machineId: 12, machineTypeId: 4, exercisePart: 1,  exerciseName: "가슴기구2-1"}, // 가슴
    { machineId: 13, machineTypeId: 4, exercisePart: 1,  exerciseName: "가슴기구2-2"}, // 가슴
    { machineId: 14, machineTypeId: 4, exercisePart: 1,  exerciseName: "가슴기구2-3"}, // 가슴

    { machineId: 15, machineTypeId: 5, exercisePart: 1,  exerciseName: "가슴기구3-1"}, // 가슴
    { machineId: 16, machineTypeId: 5, exercisePart: 1,  exerciseName: "가슴기구3-2"}, // 가슴
    { machineId: 17, machineTypeId: 5, exercisePart: 1,  exerciseName: "가슴기구3-3"}, // 가슴

    { machineId: 18, machineTypeId: 6, exercisePart: 2,  exerciseName: "어깨기구1-1"}, // 어깨
    { machineId: 19, machineTypeId: 6, exercisePart: 2,  exerciseName: "어깨기구1-2"}, // 어깨
    { machineId: 20, machineTypeId: 6, exercisePart: 2,  exerciseName: "어깨기구1-3"}, // 어깨

    { machineId: 21, machineTypeId: 7, exercisePart: 2,  exerciseName: "어깨기구2-1"}, // 어깨
    { machineId: 22, machineTypeId: 7, exercisePart: 2,  exerciseName: "어깨기구2-2"}, // 어깨
    { machineId: 23, machineTypeId: 7, exercisePart: 2,  exerciseName: "어깨기구2-3"}, // 어깨

    { machineId: 24, machineTypeId: 8, exercisePart: 2,  exerciseName: "어깨기구3-1"}, // 어깨
    { machineId: 25, machineTypeId: 8, exercisePart: 2,  exerciseName: "어깨기구3-2"}, // 어깨
    { machineId: 26, machineTypeId: 8, exercisePart: 2,  exerciseName: "어깨기구3-3"}, // 어깨

    { machineId: 27, machineTypeId: 9, exercisePart: 3,  exerciseName: "하체기구1-1"}, // 하체
    { machineId: 28, machineTypeId: 9, exercisePart: 3,  exerciseName: "하체기구1-2"}, // 하체
    { machineId: 29, machineTypeId: 9, exercisePart: 3,  exerciseName: "하체기구1-3"}, // 하체

    { machineId: 30, machineTypeId: 10, exercisePart: 3,  exerciseName: "하체기구2-1"}, // 하체
    { machineId: 31, machineTypeId: 10, exercisePart: 3,  exerciseName: "하체기구2-2"}, // 하체
    { machineId: 32, machineTypeId: 10, exercisePart: 3,  exerciseName: "하체기구2-3"}, // 하체

    { machineId: 33, machineTypeId: 11, exercisePart: 3,  exerciseName: "하체기구3-1"}, // 하체
    { machineId: 34, machineTypeId: 11, exercisePart: 3,  exerciseName: "하체기구3-2"}, // 하체
    { machineId: 35, machineTypeId: 11, exercisePart: 3,  exerciseName: "하체기구3-3"}, // 하체

]

const dummyRoutines = [
    { routineId: 0, machineTypeId: 0, exercisePart: 0,  exerciseName: "유산소1", set: 3, count: 10}, // 유산소
    { routineId: 1, machineTypeId: 1, exercisePart: 0,  exerciseName: "유산소2", set: 3, count: 10}, // 유산소
    { routineId: 2, machineTypeId: 2, exercisePart: 0,  exerciseName: "유산소3", set: 3, count: 10}, // 유산소

    { routineId: 3, machineTypeId: 3, exercisePart: 1,  exerciseName: "가슴1", set: 3, count: 10}, // 가슴
    { routineId: 4, machineTypeId: 4, exercisePart: 1,  exerciseName: "가슴2", set: 3, count: 10}, // 가슴
    { routineId: 5, machineTypeId: 5, exercisePart: 1,  exerciseName: "가슴3", set: 3, count: 10}, // 가슴

    { routineId: 6, machineTypeId: 6, exercisePart: 2,  exerciseName: "어깨1", set: 3, count: 10}, // 어깨
    { routineId: 7, machineTypeId: 7, exercisePart: 2,  exerciseName: "어깨2", set: 3, count: 10}, // 어깨
    { routineId: 8, machineTypeId: 8, exercisePart: 2,  exerciseName: "어깨3", set: 3, count: 10}, // 어깨

    { routineId: 9, machineTypeId: 9, exercisePart: 3,  exerciseName: "하체1", set: 3, count: 10}, // 하체
    { routineId: 10, machineTypeId: 10, exercisePart: 3,  exerciseName: "하체2", set: 3, count: 10}, // 하체
    { routineId: 11, machineTypeId: 11, exercisePart: 3,  exerciseName: "하체3", set: 3, count: 10}, // 하체
    // { id: 2, name: '가슴루틴', category: 1 }, // 가슴
    // { id: 3, name: '어깨루틴', category: 2 }, // 어깨
    // { id: 4, name: '하체루틴', category: 3 }, // 하체
    // ... 추가 더미 루틴 데이터
];

// 처음에 value 값을 넘겨받음
// 1. 루틴 추천 -> 추천 받으려는 운동부위를 넘겨받음
// 2. 혼자 운동하기 -> value = null 이런 식으로?
function VerticalToggleButtons({ onFilterChange }) {
    const handleViewChange = (event, newView) => {
      if (event) {
        event.preventDefault();
      }
  
      if (newView !== null) {
        onFilterChange(newView);
      }
    };
  
    return (
      <ToggleButtonGroup
        orientation="vertical"
        value={null}
        exclusive
        onChange={handleViewChange}
      >
        <ToggleButton value={0} aria-label="aerobics">
          유산소
        </ToggleButton>
        <ToggleButton value={1} aria-label="chest">
          가슴
        </ToggleButton>
        <ToggleButton value={2} aria-label="shoulder">
          어깨
        </ToggleButton>
        <ToggleButton value={3} aria-label="lowerBody">
          하체
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
  
function Reservation() {
    const location = useLocation();
    const exercisePartFromExercisePart = location?.state?.exercisePart;
    const [exercisePartFromNavbar, setExercisePartFromNavbar] = useState(null);
    const [filteredMachines, setFilteredMachines] = useState([]);
  
    useEffect(() => {
      // exercisePartFromExercisePart에 따라 해당 부위에 속하는 루틴을 필터링
      const filtered = dummyMachines.filter((machine) => machine.exercisePart === exercisePartFromExercisePart);
      setFilteredMachines(filtered);
    }, [exercisePartFromExercisePart]);
  
    const handleNavbarToggle = (selectedExercisePart) => {
      setExercisePartFromNavbar(selectedExercisePart);
    };
  
    return (
      <div>
        <h2>루틴 예약 페이지</h2>
        <VerticalToggleButtons onToggle={handleNavbarToggle} />
        {exercisePartFromNavbar !== null ? (
          <ul>
            {filteredMachines.map((machine) => (
              <li key={machine.machineId}>{machine.exerciseName}</li>
            ))}
          </ul>
        ) : (
          <div>부위를 선택하세요.</div>
        )}
      </div>
    );
  }
  
  export default Reservation;