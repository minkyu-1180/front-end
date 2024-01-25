import { useState } from "react";
import { useParams, Link } from "react-router-dom";

// import users from './dummyData.js'
import style from 'styled-components';


const Container = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 200px
    margin: 0 auto;
`

const Box = style.div`
{
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    max-width: 100px;
    margin: 10px;
  }
  
  .square-box img {
    width: 10px;
    height: 10px;
    margin-bottom: 10px;
  }
`
function SquareBox({ imageUrl, text }) {
    
    return (
        <Box>
            <img 
                src={imageUrl}
                alt={text}
            />
            <p>{text}</p>
        </Box>
    )
}

function Main(props) {
    let { userId } = useParams();
    console.log(userId)
    console.log(props.users);
    console.log(props.users.find((x) => userId == x.userId));
    props.users.forEach(element => {
        element.userId === 0 ? console.log(element) : console.log('zz')      
    });

    // 웹에서 쓸 state 변수(UserPage / AdminPage 구분 위해)
    // let [isStaff, setIsStaff] = useState(false);
    let loginUser = props.users.find((x) => 
        x.userId == userId
    );
    
    console.log(loginUser)
    if (!loginUser) {
        return <div>올바르지 못한 접근입니다.</div>
    }

    return (
        <div>
            <h2>안녕하세요, {loginUser.userName}님!</h2>
            {/* <button onClick={}></button> */}
            {/* 혼자 예약하기 -> 예약 화면으로 navigate */}
            {/* 화면에 4개가 떠야함(2개는 초반에 안보임) */}
            {/* 이미지 클릭 시 해당 관련 페이지로 넘어가기 */}
            <Container>
                {/* 혼자 운동하기 -> 예약 페이지 */}
                <Link 
                    to="/reservation" 
                > 
                    <SquareBox
                        imageUrl={process.env.PUBLIC_URL + "/images/self.png"}
                        text="혼자 운동하기"
                    />
                </Link>
                {/* 루틴 추천받기 -> 운동 부위 고르는 페이지 */}
                <Link to="exercise-part">
                    <SquareBox 
                        imageUrl={process.env.PUBLIC_URL + "/images/routine.png"}
                        text="루틴 추천받기"
                    />
                </Link>
                {/* 예약 변경 -> 현재 가지고 있는 유저 정보를 통해 서버 예약 리스트 조회 페이지 */}
                <Link to="/change">
                    <SquareBox 
                        imageUrl={process.env.PUBLIC_URL + "/images/change_reservation.png"}
                        text="예약 변경하기"
                        />
                </Link>
                {/* 퇴실하기 -> 오늘 운동 기록 페이지 */}
                <Link to="exercise-today/:id">
                    <SquareBox 
                        imageUrl={process.env.PUBLIC_URL + "/images/logout.png"}
                        text="퇴실하기"
                        />               
                </Link>
            </Container>


            {/* 예약 루틴 추천받기 -> 루틴 추천 부위로 navigate */}
        </div>
    )
}

export default Main;