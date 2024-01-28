import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import Store from './Store';

function Reservation() {
  const { machineDetail, routines, selectedExercisePart, setSelectedExercisePart } = Store();

  console.log("selectedExercisePart : ", selectedExercisePart);

  useEffect(() => {
    const storedPart = localStorage.getItem('selectedExercisePart');
    // localStorage에 저장되어 있는 selectedExercisePart
    console.log("storedPart(raw) : ", storedPart);
    console.log("storedPart(parsed) : ", JSON.parse(storedPart));
    if (storedPart) {
      // localStorage에 저장되어있는 값을 파싱한 값
      setSelectedExercisePart(JSON.parse(storedPart));
      // setSelectedExercisePart(JSON.parse(storedPart));
    }
  }, []);
  // 추천 받은 루틴의 운동부위에 해당하는 루틴 운동들
  const filteredRoutines = selectedExercisePart
    ? routines.filter((routine) => routine.exercisePart == selectedExercisePart)
    : [];

  console.log("추천 운동 부위 : ", selectedExercisePart);
  console.log("추천 루틴 운동 : ", filteredRoutines);
  // 예약할 때 선택하려는 기구들이 포함된 운동부위(왼쪽 navbar)
  // 초기값으로 null 선택
  const [selectedPart, setSelectedPart] = useState(null); 
  // navbar 의 운동부위를 클릭하여 얻어낸 운동기구 정보
  const [selectedMachines, setSelectedMachines] = useState([]);
  // 운동부위 클릭 시 -> 번호를 selectedPart에 넣어줌
  const handleToggleClick = (exerciesPart) => {
    setSelectedPart(exerciesPart);
    // handleMachineClick 호출
    handleMachineClick(exerciesPart);
  };
  // 해당 운동 부위를 위한 기구 필터링
  const handleMachineClick = (exerciesPart) => {
    // 특정 부위(exerciesPart)에 해당하는 기계 목록 필터링
    const filteredMachines = exerciesPart !== null ? machineDetail.filter((machine) => machine.exerciesPart === exerciesPart) : [];
    setSelectedMachines(filteredMachines);
  };

  // 예약 대기명단(아직 예약 X)

  // state에서 관리
  const [reservationWaitList, setReservationWaitList] = useState(() => {
    const storedData = localStorage.getItem('reservationWaitList');
    return storedData ? JSON.parse(storedData) : [];
  });
  // localStorage에서 관리
  const localReservationWaitList = JSON.parse(localStorage.getItem('reservationWaitList')) || [];

  function handleAddReservationWaitList(machineId) {
    // 새로운 값이 추가된 상태의 예약 대기명단
    if (!localReservationWaitList.includes(machineId)) {
      const updatedReservationWaitList = [...localReservationWaitList, machineId];
      localStorage.setItem('reservationWaitList', JSON.stringify(updatedReservationWaitList));
      setReservationWaitList(updatedReservationWaitList);
    }
  }   

  function handleRemoveReservationWaitList(machineId) {
    const updatedReservationWaitList = localReservationWaitList.filter((id) => id !== machineId);
    localStorage.setItem('reservationWaitList', JSON.stringify(updatedReservationWaitList));
    setReservationWaitList(updatedReservationWaitList);
  }

  return (
    <div>
      <h1>예약하기</h1>
      <div>
        { selectedExercisePart == null ? (
          <p>예약 내용 없음</p>
        ) : (
          <div>
            {filteredRoutines.map((routine) => (
              <div key={routine.machineTypeId}>
                <h4>운동 기구 : {routine.machineTypeId}</h4>
                <p>추천 세트 횟수 : {routine.set}</p>
                <p>추천 세트별 횟수 : {routine.count}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Box
        display="flex"
        flexDirection="row" // 토글 버튼과 운동기구 목록을 가로로 배치
      >
        <Box
          display="flex"
          flexDirection="column" // 토글 버튼을 세로로 배치
        >
          {/* 토글 버튼들 */}
          <Button variant={selectedPart === 0 ? 'contained' : 'outlined'} onClick={() => handleToggleClick(0)}>
            유산소
          </Button>
          <Button variant={selectedPart === 1 ? 'contained' : 'outlined'} onClick={() => handleToggleClick(1)}>
            어깨
          </Button>
          <Button variant={selectedPart === 2 ? 'contained' : 'outlined'} onClick={() => handleToggleClick(2)}>
            가슴
          </Button>
          <Button variant={selectedPart === 3 ? 'contained' : 'outlined'} onClick={() => handleToggleClick(3)}>
            하체
          </Button>
        </Box>
        <div>
          {selectedPart === null ? (
            <p>운동 부위를 선택해 주세요.</p>
          ) : (
            // 선택한 machine의 id값을 로컬스토리지에 저장
            // 저장된 array를 하단에 보여줄 거임
            selectedMachines.map((machine) => (
              <Box key={machine.machineId} m={2} p={2} border={1}>
                <p>{machine.machineTypeName}</p>
                <Button onClick={() => handleAddReservationWaitList(machine.machineId)}>
                  예약하기
                </Button>
              </Box>
            ))
          )}
        </div>
      </Box>
      <div>
        <h3>예약 목록</h3>
        { reservationWaitList.length > 0 ? (
          <ul>
            {reservationWaitList.map((machineId) => (
              <li key={machineId}>
                {machineId}
                <Button onClick={() => handleRemoveReservationWaitList(machineId)}>
                  삭제하기
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div>없음</div>
        )}
      </div>
    </div>
  );
}

export default Reservation;