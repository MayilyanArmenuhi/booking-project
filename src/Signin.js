import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Signin() {
    const dispatch = useDispatch();
    const valid = useSelector(state => state.valid);
    const open = useSelector(state => state.open);
    const allState = useSelector(state => state);

    const changeing = (e,keyName) => {
        dispatch({
            type : 'CHANGE_VALID',
            payload : {
                key : keyName,
                value : e.target.value
            }
        })
    }

  return (
    <div className='signin__container' >
{
    localStorage.getItem('info') !== null ? 
    <>
        <div className='person'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="" />
            <div className="names">
            {Object.values(JSON.parse(localStorage.getItem('info'))).map((item,i) => {
                if(i < 2) {
                    return <span>{item}</span>
                }
            })}
            </div>
        </div>
    </> : 
    <>
      <input type="text" placeholder='Name' value={valid.name} onChange={(e) => changeing(e, 'name')}/>
        <input type="text" placeholder='Surname' value={valid.surname} onChange={(e) => changeing(e, 'surname')}/>
        <input type="text" placeholder='Login' value={valid.login} onChange={(e) => changeing(e, 'login')}/>
        <input type="password" placeholder='Password' value={valid.password} onChange={(e) => changeing(e, 'password')}/>
        <button onClick={(e) => {
            if(!Object.values(valid).includes('')) {
                localStorage.setItem('info',JSON.stringify(valid));
                dispatch({type : 'STORAGE',payload : true});
                dispatch({type : 'ADD__INFO', payload : Object.values(valid)});
            }
        }}>Sign in</button>
    </>
}    
    </div>
  )
}