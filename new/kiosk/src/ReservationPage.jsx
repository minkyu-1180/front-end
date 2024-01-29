import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Typography  } from '@mui/material';
import Store from './Store';

function Header () {
    return (
      <AppBar position="static" sx={{ bgcolor: '#2196f3' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" component="div">
            예약하기
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };


function Reservation() {
    const { machineDetail, routines, routineExercisePart, reservationWaitList, setReservationWaitList, reservationList, setReservationList } = Store();
    const navigate = useNavigate();
    // 추천 받은 루틴의 운동부위에 해당하는 루틴 운동들
    const filteredRoutines = routineExercisePart
      ? routines.filter((routine) => routine.exercisePart == routineExercisePart)
      : [];
    useEffect(() => {
      console.log("추천 운동 부위 변경: ", routineExercisePart);
      console.log("추천 루틴 운동: ", filteredRoutines);
    }, [routineExercisePart, routines]);
    // 예약할 때 선택하려는 기구들이 포함된 운동부위(왼쪽 navbar)
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

    // 예약 대기 명단에 해당 운동기구 추가
    const handleAddReservationWaitList = useCallback((machineId) => {
      if (!reservationWaitList.includes(machineId)) {
        const updatedReservationWaitList = [...reservationWaitList, machineId];
        setReservationWaitList(updatedReservationWaitList);
        console.log("추가로 인해 새롭게 바뀐 예약 대기 목록 : ", reservationWaitList);
      } else {
        console.log("이미 예약 대기 목록에 존재하는 상품이라 추가 불가능.")
      }
    }, [reservationWaitList, setReservationWaitList])

    // 예약 대기 명단에서 해당 운동기구 삭제
    const handleRemoveReservationWaitList = useCallback((machineId) => {
      const updatedReservationWaitList = reservationWaitList.filter((id) => id !== machineId);
      setReservationWaitList(updatedReservationWaitList);
      console.log("삭제로 인해 새롭게 바뀐 예약 목록 : ", reservationWaitList);
    }, [reservationWaitList, setReservationWaitList])

    const handleSetReservationList = useCallback(() => {
      setReservationList(reservationWaitList);
      console.log("예약한 운동기구 목록 : ", reservationList);
      navigate("/select");
    }, [reservationWaitList, setReservationList])


    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          {routineExercisePart == null ? (
            <p>추천 루틴 없음</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
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
            <Button variant={selectedPart == '0' ? 'contained' : 'outlined'} onClick={() => handleToggleClick('0')}>
              유산소
            </Button>
            <Button variant={selectedPart == '1' ? 'contained' : 'outlined'} onClick={() => handleToggleClick('1')}>
              어깨
            </Button>
            <Button variant={selectedPart == '2' ? 'contained' : 'outlined'} onClick={() => handleToggleClick('2')}>
              가슴
            </Button>
            <Button variant={selectedPart == '3' ? 'contained' : 'outlined'} onClick={() => handleToggleClick('3')}>
              하체
            </Button>
          </Box>
          <div>
            {selectedPart === null ? (
              <p>운동 부위를 선택해 주세요.</p>
            ) : (
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
          {reservationWaitList.length > 0 ? (
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
            <div>예약 대기 기구 없음</div>
          )}
          <Button onClick={() => {handleSetReservationList()}}>예약하기</Button>
        </div>
      </div>
    );
  }

export default Reservation;