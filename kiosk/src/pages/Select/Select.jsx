import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/system';

import Store from '../../store/store';

const StyledContainer = styled(Container)`
  max-width: 600px;
  margin: 20px auto;
`;

const StyledGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  max-width: 200px;
  margin: 10px;
`;

const StyledImage = styled('img')`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

function SquareBox({ imageUrl, text, url }) {  
    const navigate = useNavigate();
    return (
        <StyledPaper onClick={() => navigate(url)}>
            <StyledImage src={imageUrl} alt={text} />
            <Typography>{text}</Typography>
        </StyledPaper>
    );
    }

function Select() {
    const { userId } = useParams();
    const user = Store((state) => state.user);
    
    // let loginUser = props.users.find((x) => x.userId == userId);
    
    if (!user) {
        return <div>올바르지 못한 접근입니다.</div>;
    }

    return (
        <div>
        <StyledContainer>
            <Typography variant="h3" gutterBottom>안녕하세요, {user.userName}님!</Typography>
            <Typography variant="h3" gutterBottom>SSAFY 헬스장 입니다.</Typography>
            <Grid container spacing={1}>
                <StyledGridItem item xs={6}>
                    <SquareBox
                        imageUrl={process.env.PUBLIC_URL + "/images/self.png"}
                        text="혼자 운동하기"
                        url="/reservation"
                    />
                </StyledGridItem>
                <StyledGridItem item xs={6}>
                    <SquareBox
                        imageUrl={process.env.PUBLIC_URL + "/images/routine.png"}
                        text="루틴 추천받기"
                        url="/exercise-part"
                    />
                </StyledGridItem>
                <StyledGridItem item xs={6}>
                    <SquareBox
                        imageUrl={process.env.PUBLIC_URL + "/images/change_reservation.png"}
                        text="예약 변경하기"
                        url="/change"
                    />
                </StyledGridItem>
                <StyledGridItem item xs={6}>
                    <SquareBox
                        imageUrl={process.env.PUBLIC_URL + "/images/logout.png"}
                        text="퇴실하기"
                        url={`/exercise-today/${userId}`}
                    />
                </StyledGridItem>
            </Grid>
        </StyledContainer>
        </div>
  );
}

export default Select;
