import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider';

const ParentEle = () => {
   const {userDetail} =  useContext(LoginContext);
   console.log(userDetail)
  return (
    <div>{userDetail.firstName}</div>
  )
}

export default ParentEle