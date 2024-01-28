import { create } from 'zustand';

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

    // 로그인 상태 여부
    // isLogin: false,
    isLogin: localStorage.getItem('isLogin') === 'true',
    setIsLogin: () => set({ isLogin: true }),

    // 로그인 사용자 정보
    // user: null,
    user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null,
    setUser: (newUser) => {
        set({ user: newUser });
        localStorage.setItem('user', JSON.stringify(newUser));
    },

    //선택한 운동 부위
    // selectedExercisePart: null,
    selectedExercisePart: localStorage.getItem('selectedExercisePart')
        ? JSON.parse(localStorage.getItem('selectedExercisePart'))
        : null,
    setSelectedExercisePart: (part) => {
        set({ selectedExercisePart: part });
        localStorage.setItem('selectedExercisePart', JSON.stringify(part));
    },
}))

export default Store;