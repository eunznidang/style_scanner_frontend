import { useState, useEffect } from 'react';
import '../css/Login.css';


export default function Register() {
    return (
        <div className="App">
        <div className='menubar'>메뉴바</div>
            <div className="LoginPage">
                <h1 id='title'>Style Scanner</h1>
                <p id='subTitle'> 당신의 취향을 만들어 드릴게요! </p>

                <form>
                    <label for="email" >이메일 주소</label>
                    <input style={{marginBottom: '30px'}} className='inputBox' type="text" id="email" name="email" />

                    <label for="password" >비밀번호</label>
                    <input className='inputBox' type="password" id="password" name="password" />

                    <input id='submitBox' type="submit" value="로그인"></input>
                </form>
                <table id='etcBox'>
                    <tr>
                        <td> <a href='/'>이메일 가입</a></td>
                        <td><a href='/'>이메일 찾기</a></td>
                        <td><a href='/'>비밀번호 찾기</a></td>
                    </tr>
                </table>

            </div>
        </div>
    );
}