import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

function ExercisePart() {
  const [exercisePart, setExercisePart] = useState(null);
  const navigate = useNavigate();

  const handleExercisePartChange = (event, newExercisePart) => {
    setExercisePart(newExercisePart);
  };

  const handleButtonClick = () => {
    if (exercisePart !== null) {
      navigate('/reservation', { state: { exercisePart } });
    }
  };

  return (
    <div>
      <h2>부위를 선택하세요</h2>
      <ToggleButtonGroup
        value={exercisePart}
        exclusive
        onChange={handleExercisePartChange}
      >
        <ToggleButton value={0}>유산소</ToggleButton>
        <ToggleButton value={1}>가슴</ToggleButton>
        <ToggleButton value={2}>어깨</ToggleButton>
        <ToggleButton value={3}>하체</ToggleButton>
      </ToggleButtonGroup>
      <button onClick={handleButtonClick}>해당 부위 루틴 추천 받기</button>
    </div>
  );
}

export default ExercisePart;