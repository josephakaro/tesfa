import Link from "next/link"

const SideMenu = ({url, icon, title }) => {
  return (
    <li className='hover:bg-neutral-50 rounded-lg mb-1'>
            <Link href={url} className='flex flex-row items-center text-2xl p-2 align-middle text-white hover:text-yellow-600 gap-1'>
              { icon }
              <span className="text-lg font-normal">{ title }</span>
            </Link>
    </li>
  )
}

export default SideMenu