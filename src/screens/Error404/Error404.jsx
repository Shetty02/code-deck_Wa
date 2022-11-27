import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Error404() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/');
    },3000)
  }, [])
  return (
    <div>Page Not Found.Redirecting to the Home Page.....</div>
  )
}

export default Error404