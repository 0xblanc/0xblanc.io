import Logo from '@assets/logo/logo.svg'

type TitleProps = {
  text: string
}

const Title = (props: TitleProps) => {
  const { text } = props

  return (
    <div className='flex items-center justify-center md:justify-start max-w-full w-[992px]'>
      <div className='mr-3'>
        <img src={Logo} alt='Logo' />
      </div>
      <h2 className='text-darkBlue uppercase text-3xl md:text-5xl font-bold '>{text}</h2>
    </div>
  )
}

export default Title
