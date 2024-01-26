// zustand
import { create } from 'zustand'; // state 보관함

import dummyUsers from '../dummyUsers';

const Store = create((set) => ({
    users: dummyUsers,
    user: null,
    setUser: (newUser) => set({user: newUser}),
    isLogin: false,
    setIsLogin: () => set({isLogin: true}),
    setIsLogout: () => set({isLogin: false, user: {}}),
}))

export default Store;