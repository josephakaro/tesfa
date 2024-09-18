'use client'
import { Button } from "../ui/button";

const LogOut= ({ action, icon, text}) => {
  return (
    <Button onClick={ action } className='w-full bg-white hover:bg-slate-100 border-red-600 border text-red-600'>{icon}<span className="ml-1">{text}</span></Button>
  )
}

export default LogOut