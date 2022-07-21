//아이디 비밀번호 저장용 store 입니다 .. 

import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  id:'',
  pwd:'',
  time :'',
  name:'',
  nickname :''
};

export const testSlice = createSlice({
  name: 'loginfo',
  initialState,

  reducers: {

    doRegister : (state, action) => {

    },

    doLogin: (state,action) => {
     
      state.value = '로그인';
      state.id = action.payload.id
      state.pwd = action.payload.password
      state.name = action.payload.name
      state.nickname = action.payload.nickname
      state.time = action.payload.time

    },
    doLogout: (state) => {
      state.value = '로그아웃';
      state.id = ''
      state.pwd = ''
      state.name =''   
      state.nickname = ''
      state.time = ''
      state.minutes = 0
      state.seconds = 10
    },
    
    doTimer : (state, action) => {
      state.minutes = action.payload.t_minutes
      state.seconds = action.payload.t_seconds
    }
  },

});

export const { doRegister,doLogin, doLogout, doTimer } = testSlice.actions;

export const selectLoginfo = (state) => state.loginfo.value;
export const selectIdinfo = (state) => state.loginfo.id;
export const selectPwdinfo = (state) => state.loginfo.pwd;
export const selectTimeinfo = (state) => state.loginfo.time;
export const selectNicknameinfo = (state) => state.loginfo.nickname;
export const selectNameinfo = (state) => state.loginfo.name;
export const selectMinutesinfo = (state) => state.loginfo.minutes;
export const selectSecondsinfo = (state) => state.loginfo.seconds;


export default testSlice.reducer;
