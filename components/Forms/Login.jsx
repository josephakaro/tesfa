import Link from 'next/link'
import { Button } from '../ui/button'

const LoginForm = () => {
  return (
    <div>
        <form className="flex flex-col space-y-4">
            <header className='text-yellow-600 text-2xl font-bold'>Welcome to Tesfa</header>
            <label htmlFor="email" className='text-yellow-600'>Email</label>
            <input type="text" id="username" name="username" className='rounded-md h-10'/>
            <label htmlFor="password" className='text-yellow-600'>Password</label>
            <input type="password" id="password" name="password" className='rounded-md h-10' />
            <Button type="submit">Login</Button>
            <Link href={'/'}>Register</Link>
            <Link href={'/dashboard'}>Dashboard</Link>
        </form>
    </div>
  )
}

export default LoginForm