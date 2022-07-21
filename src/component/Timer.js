import React, { useState, useEffect } from "react";
import {
  selectMinutesinfo,
  selectSecondsinfo
} from '../reducers/testSlice';

import { useSelector } from 'react-redux';

const Timer = (props) => {

  const [minutes, setMinutes] = useState(parseInt(props.mm));
  const [seconds, setSeconds] = useState(parseInt(props.ss));

  const t_minutes = useSelector(selectMinutesinfo);
  const t_seconds = useSelector(selectSecondsinfo);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
            clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
  

    //로그아웃 0초 
    if(minutes === 0 && seconds === 0 ){
        props.onLogout()
    }else{
        props.setTimer(minutes+`-`+seconds)
    }
    return () => clearInterval(countdown);
  },);
  

  const extensionFive =  () =>{

    if(minutes >= 55 && seconds >= 0){
        alert("60분 이상으로는 연장불가능합니다.")
        setMinutes(60)
        setSeconds(0)
        return false
    }
    setMinutes(minutes + 5)
    setSeconds(seconds)
        
  }

  const extensionTen =  () =>{

    if(minutes >= 50 && seconds >= 0){
        alert("60분 이상으로는 연장불가능합니다.")
        setMinutes(60)
        setSeconds(0)
        return false
    }
    setMinutes(minutes + 10)
    setSeconds(seconds)
        
  }

  const extensionThirty =  () =>{
    if(minutes >= 30 && seconds >= 0){
        alert("60분 이상으로는 연장불가능합니다.")
        setMinutes(60)
        setSeconds(0)
        return false
    }
    setMinutes(minutes + 30)
    setSeconds(seconds)
  }

  return (
    <div> 
      {t_minutes >= 5 && <div>로그아웃까지 : {t_minutes}:{t_seconds < 10 ? `0${t_seconds}` : t_seconds}</div>}
      {t_minutes < 5 && <div><b style={{color:'red'}}>로그아웃까지 : {t_minutes}:{t_seconds < 10 ? `0${t_seconds}` : t_seconds}</b></div>}

      <button onClick={extensionFive}>5분 연장</button>
      <button onClick={extensionTen}>10분 연장</button>
      <button onClick={extensionThirty}>30분 연장</button>
    </div>
  );
};

export default Timer;