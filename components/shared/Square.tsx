type SquareProps = {
  position: 'left' | 'right'
}

const Square = (props: SquareProps) => {
  const { position } = props

  const positionClass = position === 'left' ? 'left-0 -translate-x-1/3' : 'right-0 translate-x-1/3'

  return (
    <div className='relative w-full flex'>
      <div className={`w-[400px] aspect-square border-gold border-2 opacity-10 rotate-45 absolute z-0 top-1/2 -translate-y-1/2 ${positionClass}`}>
      </div>
    </div>
  )
}

export default Square;
