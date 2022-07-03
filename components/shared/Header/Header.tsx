import HeaderMain from './HeaderMain'
import HeaderMobile from './HeaderMobile'

type HeaderProps = {
  menuOpen: boolean
  menuToggleHandler: () => void
}

const Header = (props:HeaderProps) => {
  const { menuToggleHandler, menuOpen } = props
  return (
    <div className='flex-col w-full sticky flex top-0 z-50'>
      <HeaderMain />
      {!menuOpen && <HeaderMobile menuOpen={menuOpen} menuToggleHandler={menuToggleHandler} />}
    </div>
  )
}
export default Header
