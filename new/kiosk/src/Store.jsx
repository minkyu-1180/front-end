import { create } from 'zustand';

// 
const Store = create((set) => ({
    users: [
        {
            userId: 0,
            isAdmin: true,
            loginId: "minkyu1180",
            loginPwd: "yj680408",
            pinNumber: "1655",
            userName: "김민규",
            userPhone: "01027421655",
            userGender: 0,
            birthYear: 1998,
            register_data: "2020-08-11",
        },
        {
            userId: 1,
            isAdmin: false,
            loginId: "als1655",
            loginPwd: "yj680408",
            pinNumber: "1180",
            userName: "김민서",
            userPhone: "01074601655",
            userGender: 0,
            birthYear: 2002,
            register_data: "2021-05-23",
        }
    ],
    // machineTypeId가 0일 경우 유산소로 하자
    // 1일 경우 어깨
    // 2일 경우 가슴
    // 3일 경우 하체
    routines: [
        { 
            routineId: 0,
            machineTypeId: 0,
            exercisePart: 0,
            set: 0,
            count: 0,
        },
        { 
            routineId: 1,
            machineTypeId: 1,
            exercisePart: 0,
            set: 1,
            count: 1,
        },    
        { 
            routineId: 2,
            machineTypeId: 2,
            exercisePart: 0,
            set: 2,
            count: 2,
        },
        { 
            routineId: 3,
            machineTypeId: 3,
            exercisePart: 1,
            set: 3,
            count: 3,
        },
        { 
            routineId: 4,
            machineTypeId: 4,
            exercisePart: 1,
            set: 4,
            count: 4,            
        },
        { 
            routineId: 5,
            machineTypeId: 5,
            exercisePart: 1,
            set: 5,
            count: 5,
        },
        { 
            routineId: 6,
            machineTypeId: 6,
            exercisePart: 2,
            set: 6,
            count: 6,
        },
        { 
            routineId: 7,
            machineTypeId: 7,
            exercisePart: 2,
            set: 7,
            count: 7,
        },
        { 
            routineId: 8,
            machineTypeId: 8,
            exercisePart: 2,
            set: 8,
            count: 8,
        },
        { 
            routineId: 9,
            machineTypeId: 9,
            exercisePart: 3,
            set: 9,
            count: 9,
        },
        { 
            routineId: 10,
            machineTypeId: 10,
            exercisePart: 3,
            set: 10,
            count: 10,
        },
        { 
            routineId: 11,
            machineTypeId: 11,
            exercisePart: 3,
            set: 11,
            count: 11,
        },
    ],
    machineDetail: [
        { 
            machineId: 0,
            machineTypeId: 0,
            machineTypeName: "유산소1-1",
            exerciesPart: 0,
        },
        { 
            machineId: 1,
            machineTypeId: 0,
            machineTypeName: "유산소1-2",
            exerciesPart: 0,
        },
        { 
            machineId: 2,
            machineTypeId: 1,
            machineTypeName: "유산소2-1",
            exerciesPart: 0,
        },
        { 
            machineId: 3,
            machineTypeId: 1,
            machineTypeName: "유산소2-2",
            exerciesPart: 0,
        },
        { 
            machineId: 4,
            machineTypeId: 2,
            machineTypeName: "어깨1-1",
            exerciesPart: 1,
        },
        { 
            machineId: 5,
            machineTypeId: 2,
            machineTypeName: "어깨1-2",
            exerciesPart: 1,
        },
        { 
            machineId: 6,
            machineTypeId: 3,
            machineTypeName: "어깨2-1",
            exerciesPart: 1,
        },
        { 
            machineId: 7,
            machineTypeId: 3,
            machineTypeName: "어깨2-2",
            exerciesPart: 1,
        },
        { 
            machineId: 8,
            machineTypeId: 4,
            machineTypeName: "가슴1-1",
            exerciesPart: 2,
        },
        { 
            machineId: 9,
            machineTypeId: 4,
            machineTypeName: "가슴1-2",
            exerciesPart: 2,
        },
        { 
            machineId: 10,
            machineTypeId: 5,
            machineTypeName: "가슴2-1",
            exerciesPart: 2,
        },
        { 
            machineId: 11,
            machineTypeId: 5,
            machineTypeName: "가슴2-2",
            exerciesPart: 2,
        },
        { 
            machineId: 12,
            machineTypeId: 6,
            machineTypeName: "하체1-1",
            exerciesPart: 3,
        },
        { 
            machineId: 13,
            machineTypeId: 6,
            machineTypeName: "하체1-2",
            exerciesPart: 3,
        },
        { 
            machineId: 14,
            machineTypeId: 7,
            machineTypeName: "하체2-1",
            exerciesPart: 3,
        },
        { 
            machineId: 15,
            machineTypeId: 7,
            machineTypeName: "하체2-2",
            exerciesPart: 3,
        },
    ],

    
    isLogin: false,
    setIsLogin: () => {
      set({ isLogin: true });
      localStorage.setItem('isLogin', JSON.stringify(true));
    },
  
    // 로그인한 사용자
    user: null,
    setUser: (userInfo) => {
      set({ user: userInfo });
      localStorage.setItem('user', JSON.stringify(userInfo));
    },
  
    // 선택한 루틴 추천 운동부위
    routineExercisePart: null,
    setRoutineExercisePart: (part) => {
      set({ routineExercisePart: part });
      localStorage.setItem('routineExercisePart', JSON.stringify(part));
    },
  
    // 예약 대기 목록
    reservationWaitList: [],
    setReservationWaitList: (waitList) => {
      set({ reservationWaitList: waitList });
      localStorage.setItem('reservationWaitList', JSON.stringify(waitList));
    },
  
    // 예약 목록(실제 예약)
    reservationList: [],
    setReservationList: (list) => {
      set({ reservationList: list });
      localStorage.setItem('reservationList', JSON.stringify(list));
    },
  
    // 유저 정보를 local storage에 저장하기
    saveUserToLocalStorage: (userId, userData) => {
      const userKey = `userId:${userId}`;
      localStorage.setItem(userKey, JSON.stringify(userData));
    },
  
    // local storage에서 유저 정보 가져오기
    getUserFromLocalStorage: (userId) => {
      const userKey = `userId:${userId}`;
      const userData = localStorage.getItem(userKey);
      return userData ? JSON.parse(userData) : null;
    },
  
    // 사용자 정보 초기화 함수(로그인 시)
    initializeUser: (userId) => {
      const userInfo = set.getUserFromLocalStorage(userId);
  
      if (userInfo) {
        set({
          user: userInfo.user,
          isLogin: userInfo.isLogin,
          routineExercisePart: userInfo.routineExercisePart,
          reservationWaitList: userInfo.reservationWaitList,
          reservationList: userInfo.reservationList,
        });
      } else {
        set({
          user: null,
          isLogin: false,
          routineExercisePart: null,
          reservationWaitList: [],
          reservationList: [],
        });
      }
    },
  }));

    // 로컬 스토리지에서 관리해야 하는 부분
    // 로컬 스토리지에서 값을 받아오는 식으로 해야 할듯/
    // 사용자별로 구분할 수 있는 값을(userId) 통해 사용자별 로컬 스토리지 구분
    // 해당 사용자가 첫 로그인 시, userId값으로 로컬 스토리지 생성(user, isLogin만 활성화하고 나머지는 초기화)
    // 해당 사용자가 로그인 경험이 있을 시, userId값으로 로컬 스토리지를 찾아오기
    // 로그인 여부
//     isLogin: false,
//     setIsLogin: () => set({ isLogin: true }),

//     // 로그인한 사용자
//     user: null,
//     setUser: (userInfo) => set({user: userInfo}),

//     // 선택한 루틴 추천 운동부위
//     routineExercisePart: null,
//     setRoutineExercisePart: (part) => set({routineExercisePart: part}),

//     // 예약 대기 목록
//     reservationWaitList: [],
//     setReservationWaitList: (waitList) => set({reservationWaitList: waitList}),
    
//     // 예약 목록(실제 예약)
//     reservationList: [],
//     setReservationList: (list) => set({reservationList: list}),
    
//     // 유저 정보를 local storage에 저장하기
//     saveUserToLocalStorage: (userId, userData) => {
//         const userKey = `userId:${userId}`;
//         localStorage.setItem(userKey, JSON.stringify(userData));
//     },

//     // local storage에서 유저 정보 가져오기
//     getUserFromLocalStorage: (userId) => {
//         const userKey = `userId:${userId}`;
//         const userData = localStorage.getItem(userKey);
//         return userData ? JSON.parse(userData) : null;
//     },

//     // 사용자 정보 초기화 함수(로그인 시)
//     initializeUser: (userId) => {
//         // 해당 사용자 정보를 가져옴
//         const userInfo = getUserFromLocalStorage(userId);

//         if (userInfo) {
//         // 기존 정보가 있다면 적용
//         set({
//             user: userInfo.user,
//             isLogin: userInfo.isLogin,
//             routineExercisePart: userInfo.routineExercisePart,
//             reservationWaitList: userInfo.reservationWaitList,
//             reservationList: userInfo.reservationList
//         });
//         } else {
//         // 기존 정보가 없다면 초기 상태로 설정
//         set({
//             user: null,
//             isLogin: false,
//             routineExercisePart: null,
//             reservationWaitList: [],
//             reservationList: []
//         });
//         }
//     },
    
// }));

export default Store;