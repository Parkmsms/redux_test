import React from 'react';
import styles from '../features/Counter.module.css';
import {Link} from "react-router-dom";

const Test3 = (props) => {

    return (
        <div>
            {props.param.nameInfo}님 안녕하세요 ^_^<br/>
            아이디 : {props.param.idInfo}<br/>
            비밀번호 : {props.param.pwdInfo}<br/>
            닉네임:{props.param.nicknameInfo}<br/>
            로그인 시각 : {props.param.timeInfo}<br/>
            <Link to="/product">
            <button className = {styles.button} >상품으로</button>
            </Link> 
        </div>
    );
};

export default Test3;