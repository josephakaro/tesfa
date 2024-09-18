import { AuthForm } from '@/components/Forms/AuthForm'
import AuthButton from '@/components/Buttons/AuthButton';
import { signInWithGoogle } from '@/utils/func/google';
import Image from 'next/image'

import { FaGoogle } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { login } from '../action';
import { Button } from '@/components/ui/button';


const Login = () => {
  return (
    <div className="h-[90vh] w-[90%] grid sm:grid-flow-col gap-4 grid-flow-row grid-cols-2 bg-white rounded-3xl p-4 shadow-sm">
     <div className="col-span-1 flex justify-center items-center bg-yellow-600 rounded-2xl overflow-hidden">
      <Image src='https://ripoti.net/newapp/assets/images/login.jpg' className="w-full h-full opacity-50" width={1024} height={920} alt='children smile' />
     </div>
     <div className="col-span-1 flex flex-col flex-1 justify-center items-center p-24">
      <AuthForm formAction={ login } title={'Login'} button={'Login'} />
      <div className='flex flex-row items-stretch justify-between mt-4 sm:w-[300px]'>
        <AuthButton action={ signInWithGoogle } icon={<FaGoogle className='h-4 w-4' />} text={'Google'} />
      </div>
     </div>
    </div>
  )
}

export default Login