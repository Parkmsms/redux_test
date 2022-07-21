import React , { useState, useEffect} from 'react';
import MainFrame from './MainFrame';
import Clock from './Clock';
import styles from '../features/Counter.module.css';
import Timer from './Timer'
//redux
import {
  selectLoginfo, 
  doLogin,
  doLogout,
  selectIdinfo,
  selectPwdinfo,
  selectTimeinfo,
  selectNicknameinfo,
  selectNameinfo,
  doTimer,
  selectMinutesinfo,
  selectSecondsinfo
} from '../reducers/testSlice';
import { useSelector, useDispatch } from 'react-redux';

//화살표 함수형컴포넌트기본형 rsc

//구조분해할당 props
const Test = (props) => {

    useEffect(() => {
      return () => {
        console.log("useEffect")
      };
    }, []) 
    
    // redux
    const logInfo = useSelector(selectLoginfo);
    const idInfo = useSelector(selectIdinfo);
    const pwdInfo = useSelector(selectPwdinfo);
    const timeInfo = useSelector(selectTimeinfo);
    const nicknameInfo = useSelector(selectNicknameinfo);
    const nameInfo = useSelector(selectNameinfo);
    const t_minutes = useSelector(selectMinutesinfo);
    const t_seconds = useSelector(selectSecondsinfo);

    const dispatch = useDispatch();

    //useState
    const [passwordType, setPasswordType] = useState({
      type: 'password',
      visible: false
    });

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
        id:'',
        password:'',
        time:''
      });

      const { name, nickname, id, password } = inputs; // 비구조화 할당을 통해 값 추출
      const loginfoValue = inputs;
      const propsData = {
        loginfo : logInfo,
        idInfo : idInfo,
        pwdInfo : pwdInfo,
        timeInfo : timeInfo,
        nameInfo : nameInfo,
        nicknameInfo :nicknameInfo
      }

    //Method========================================================================================
    //==============================================================================================

    const handlePasswordType = () => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }
    
    //자식에서 이벤트로 넘어온 값 state 저장
    const onChange = (e) => {

        const { name, value } = e.target; // 우선 e.target 에서 name 과 value 를 추출

        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value, // input = name 키를 가진 값을 value 로 설정 구조분해할당 push같은거
          time: new Date().toLocaleDateString()  + " / " + new Date().toLocaleTimeString(),
        });

      };
    
      //초기화
      const onReset = () => {

        setInputs({
          name: '',
          nickname: '',
          id:'',
          password:'',
        })

      };

      
      //뻘짓1 , Object => Array 변환
      // const insertParam = () => {

      //   let newObj = Object.keys(inputs).map(num => ({[num]: inputs[num]}))

      //   console.log(newObj[0])

      //   console.log("newObj = ",newObj)
      // }

      //로그인
      const onLogin = () =>{

        //임시로 maple123 비밀번호 1234 
        if(inputs.id === "maple123" && inputs.password === "1234"){
          if(inputs.name === ''){
            
            alert("이름을 입력하세요")

          }
          
          if(inputs.nickname === ''){

            alert("닉네임을 입력하세요")

          }
          else{
            alert("로그인성공") ;
       
            dispatch(doLogin(loginfoValue));
          }
                      
        }else{

            alert("아이디 또는 비밀번호가 틀립니다.")

        }
      }
      //로그아웃
      const onLogout = () =>{
          dispatch(doLogout())
          onReset();
      }

      const setTimer123 = (param) =>{
        const param2 = {
          t_seconds : param.substr(param.indexOf('-')+1),
          t_minutes : param.substr(0,param.indexOf('-'))
        }
        dispatch(doTimer(param2));
      }

  
      const frameStyle = {
        width: "100%",
        height: "200px",
        border: "solid 1 px",
        marginLeft: "auto",
        marginRight: "auto"
      };

      return (
        <div className={styles.frameStyle}>
          <h1>Redux persist 연습용 화면</h1>
          <div className={styles.row}>
          <Clock/>
        
         
          </div>
          <div className={styles.row} style={frameStyle}>
          <h1>Redux store</h1><br/>
          1. Redux 로그정보 = {logInfo} <br/>
          2. idInfo = {idInfo} <br/> 
          3. pwdInfo = {pwdInfo} <br/>
          4. timeInfo = {timeInfo} <br/>
          5. nameInfo = {nameInfo} <br />
          6. nicknameInfo = {nicknameInfo} <br />
          </div>
          <div className={styles.row}>
          <p> 공용 ID: <b style={{color:"red"}}>{props.name} </b>, 비밀번호 : <b style={{color:"red"}}>{props.password}</b></p>
          </div>

          {(logInfo ==="" || logInfo === "로그아웃")   &&
          <div>
            <div className={styles.row}>
            <span style={{ color: "red" }}>●</span>
            <label>사용자 이름 : </label>
            <input className={styles.textbox2} name="name" placeholder="이름" onChange={onChange} value={name} />
            </div>

            <div className={styles.row}>
            <span style={{ color: "red" }}>●</span>
            <label>사용자 닉네임 : </label>
            <input className={styles.textbox2} name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            </div>

            <div className={styles.row}>
            <span style={{ color: "red" }}>●</span>
            <label>사용자 ID : </label>
            <input className={styles.textbox2} name="id" placeholder="아이디" onChange={onChange} value={id} />
            </div>

            <div className={styles.row}>
            <span style={{ color: "red" }}>●</span>
            <label>비밀번호 : </label>
            <input  type={passwordType.type} className={styles.textbox2} name="password" placeholder="패스워드" onChange={onChange} value={password}/>
            </div>

            <div className={styles.row}>
            <input type="checkbox" value="체크" placeholder="dd" onClick ={ handlePasswordType }/>
            비밀번호 표시
            </div>

            <div className={styles.row}>
            <button 
            className={styles.button}
            onClick={onLogin} >
            로그인
            </button> <button className={styles.button} onClick={onReset}>초기화</button>
            </div>

          </div>
          }

          {logInfo ==="로그인" && 
            <div>
              <div className={styles.row}>
              <button 
                className={styles.button} 
                onClick={onLogout}>
                로그아웃
              </button>
              </div>

              <div className={styles.row}>
              <Timer mm={t_minutes} ss={t_seconds} onLogout={onLogout} setTimer={setTimer123}/><br/>
              </div>

               {/* 메인프레임 */}
              <div className={styles.row}>
              <MainFrame param={propsData} onLogout={onLogout} />
              </div>

            </div>
          }

          {/* <div className={styles.row}>
          <button 
            className={styles.button}  
            onClick={insertParam}>객체에서 배열 변경 
          </button>
          </div> */}
        </div>
      );
};

export default Test;