type TitleProps = {
  text: string
  mode?: 'dark' | 'light'
}

const Title = (props: TitleProps) => {
  const { text, mode = 'light' } = props

  return (
    <div className='flex items-center justify-center md:justify-start max-w-full w-[992px]'>
      <div className='mr-3'>
        <img src={`${mode === 'dark' ? 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1661610361/website/logo_gold_etg6qr.svg' : 'https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656857424/website/logo_v7iyqq.svg'}`} alt='Logo' width={42} height={42} />
      </div>
      <h2 className={`uppercase text-3xl md:text-5xl font-bold ${mode === 'dark' ? 'text-gold' : 'text-darkBlue'}`}>{text}</h2>
    </div>
  )
}

export default Title
