import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function Dashboard() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='h-screen w-full grid grid-flow-col grid-cols-9'>
      <aside className='col-span-1 bg-yellow-600'>
        <div className='p-4'>
          <h3 className='text-lg font-bold'>Navigation</h3>
          <ul>
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
            <li>
              <a href='/profile'>Profile</a>
            </li>
            <li>
              <a href='/settings'>Settings</a>
            </li>
          </ul>
        </div>
      </aside>
      <main className='col-span-8 p-4'>
        <h2 className='text-2xl font-bold'>Dashboard</h2>
        <p className='text-lg'>This is your dashboard.</p>
      </main>
    </div>
  )
}