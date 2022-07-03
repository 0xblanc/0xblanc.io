import HeaderMain from '@components/shared/Header/HeaderMain'
import HeaderMobile from './HeaderMobile'

type HeaderProps = {
  navItems: Array<{ text: string; href: string }>
  menuOpen: boolean
  menuToggleHandler: () => void
}

const Header = (props:HeaderProps) => {
  const { navItems, menuToggleHandler, menuOpen } = props
  return (
    <div className='flex-col w-full sticky flex top-0 z-50'>
      <HeaderMain navItems={navItems} />
      {!menuOpen && <HeaderMobile menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />}
    </div>
  )
}
export default Header
