'use client'
import { Button } from "../ui/button";

const AuthButton= ({ action, icon, text}) => {
  return (
    <Button onClick={ action } className='w-full bg-white hover:bg-slate-100 border-yellow-600 border text-yellow-600'>{icon}<span className="ml-1">{text}</span></Button>
  )
}

export default AuthButton