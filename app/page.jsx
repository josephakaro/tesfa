import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import { Card } from '@/components/ui/card'
import StatusCard from '@/components/Dashboard/StatusCard'

import { FaHandsHelping, FaUser } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FiSettings } from 'react-icons/fi';

import { GrAnalytics } from "react-icons/gr";
import { RiPresentationLine, RiDashboardFill} from "react-icons/ri";
import SideMenu from '@/components/Dashboard/SideMenu';
import { signOut } from '@/utils/func/google'
import { DropdownButton } from '@/components/Buttons/DropDownButton';
import ProfileAvatar from '@/components/Dashboard/ProfileAvatar';


export default async function Dashboard() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='h-screen w-full grid grid-flow-col grid-cols-12'>
      <aside className='col-span-2 flex flex-col justify-between flex-1 bg-yellow-600 p-4'>
        <div className='p-4 h-[10%] flex justify-center items-center border-b-2 border-white'>
          <h1 className='text-4xl text-white font-bold'>TESFA</h1>
        </div>

       <div className='flex flex-col justify-between h-[90%] mt-4'>
       <ul className='overflow-y-auto'>
       <SideMenu url={'/'} icon={<RiDashboardFill />} title={'Dashboard'}/>
       <SideMenu url={'/'} icon={<FaUser />} title={'Users'}/>
       <SideMenu url={'/'} icon={<FaHandsHelping />} title={'Partners'}/>
       <SideMenu url={'/'} icon={<GrAnalytics />} title={'Reports'}/>
       <SideMenu url={'/'} icon={<FiSettings />} title={'Settings'}/>
          
        </ul>

        {/* <div className='self-end flex flex-row items-center bg-slate-200 rounded-lg p-4'>
          <ProfileAvatar url={data.user.user_metadata.picture} fallback={'JA'}/>
          <div className='flex flex-col'>
            <span className='text-md font-bold'>{data.user.user_metadata.full_name}</span>
          </div>
        </div> */}
       </div>
      </aside>
      <main className='col-span-10 p-4 overflow-y-auto'>
        <Card className='flex flex-row items-center p-4 mb-4'>
          <div className='text-slate-500 flex-auto flex flex-col items-start justify-between'>
            <h1>Dashboard</h1>
            <p>Welcome, {!data.user.user_metadata.full_name ? data.user.email : data.user.user_metadata.full_name}!</p>
          </div>
          <div className='flex-1 flex flex-row items-center justify-end w-24 gap-2'>
            <DropdownButton lable={data.user.user_metadata.full_name}/>
            <ProfileAvatar url={data.user.user_metadata.picture} fallback={'JA'} />
          </div>
        </Card>
        <div className='flex flex-row flex-1 items-stretch justify-between'>
          <StatusCard icon={<FaBuildingUser  className='h-16 w-16'/>} data={'3.5k'} description={'Users'}/>
          <StatusCard icon={<FaHandsHelping  className='h-16 w-16'/>} data={'5k'} description={'Partners'}/>
          <StatusCard icon={<GrAnalytics  className='h-16 w-16'/>} data={'90k'} description={'Reports'}/>
          <StatusCard icon={<RiPresentationLine  className='h-16 w-16'/>} data={'10k'} description={'Trainings'}/>
        </div>
      </main>
    </div>
  )
}