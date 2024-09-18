'use client'
import { Button } from "../ui/button";

const AuthButton= ({ action, icon, text}) => {
  return (
    <Button onClick={ action } className='w-full border-yellow-600 border text-yellow-600 bg-neutral-50 hover:bg-slate-200'>{icon}<span className="ml-1">{text}</span></Button>
  )
}

export default AuthButton