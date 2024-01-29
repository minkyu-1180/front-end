import { useState, useEffect } from 'react';
import Store from './Store';

// export default Modal;
function Change() {
    // 서버에서 사용자 예약 목록 가져오는 작업 필요(useEffect)
    const { machineDetail, reservationList, setReservationList } = Store();
    
    console.log("reservationList : ", reservationList);

    return (
        <>
        <div>예약 정보 변경 페이지</div>
        <ul>
            { reservationList.map((x, index) => (
                <li key={index}>
                    운동 {index+1} : {x}
                    {/* 해당 운동 정보 클릭 시, 예약 현황과 비교해서 어쩌고~ */}
                    {/* 모달창이 뜨게 해야 하나? */}
                </li>
            ))}
        </ul>
        </>
    )
}

export default Change;