import { FiMenu } from 'react-icons/fi';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { FaRegBell } from 'react-icons/fa';
import { HiOutlinePlusSm, HiFolderOpen } from 'react-icons/hi';
import { profileSample } from '../../../assets';

const NavbarDesktop = () => {
  return (
    <div className='w-full h-full px-5 hidden sm:flex justify-between items-center bg-secondaryBgHover bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
      <section className='flex items-center text-iconsColor text-base font-semibold'>
        {/* Menu icon */}
        <button className='w-navItem h-navItem mr-3 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
          <FiMenu className='w-iconSize h-iconSize' />
        </button>
        {/* Dashboard */}
        <button className='h-navItem px-1 mr-3 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
          <RiLayoutMasonryFill className='w-iconSize h-iconSize sm:mr-1' />
          <h6 className='hidden sm:block'>Dashboard</h6>
        </button>
        {/* Collection */}
        <button className='h-navItem px-1 flex justify-center items-center rounded-standard hover:bg-secondaryBgHover transition-colors duration-200'>
          <HiFolderOpen className='w-iconSize h-iconSize sm:mr-1' />
          <h6 className='hidden sm:block'>Collections</h6>
        </button>
      </section>
      <section className='flex items-center'>
        {/* Add todo icon */}
        <button className='w-navItem h-navItem mr-3 flex justify-center items-center rounded-standard bg-gradient-to-tr from-pink-500 via-pink-400 to-yellow-100'>
          <HiOutlinePlusSm className='w-iconSize h-iconSize text-white' />
        </button>
        {/* Notifications icon */}
        <button className='w-navItem h-navItem mr-3 flex justify-center items-center rounded-standard text-iconsColor hover:bg-secondaryBgHover transition-colors duration-200'>
          <FaRegBell className='w-iconSize h-iconSize' />
        </button>
        {/* Profile */}
        <button className='w-navItem h-navItem rounded-full overflow-hidden'>
          <img className='object-cover' src={profileSample} alt='profile sample' />
        </button>
      </section>
    </div>
  )
}

export default NavbarDesktop