import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

//Async 0.5초 setTimeout 방식
export const incrementAsync = createAsyncThunk(

  //url Action 값 
  'counter/fetchCount', //이게뭐냐 .. 

  //payloadCreator = 프로미스 반환 
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
); //createAsyncThunk는 action creator 를 반환 pending,fulfilled,rejected
//이후 createSlice 에서 extraRecuer 함수를 이용해 각 상황에 맞는 리듀서를 추가해주어야 한다.
//상시로는 쓰지않음 .. 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount , decrementByAmount} = counterSlice.actions;


export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
