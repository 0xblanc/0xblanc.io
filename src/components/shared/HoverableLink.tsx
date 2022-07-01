type HoverableLinkProps = {
  text: string
  href: string
  color?: string
  padding?: string
}

const HoverableLink = (props: HoverableLinkProps) => {
  const { text, href, color = 'white', padding = 'py-4 px-8' } = props

  const hoverEnter = e => {
    const text = e.target.querySelector('.actual-text')
    const shadow = e.target.querySelector('.shadow-text')
    text.classList.add('-translate-y-6')
    shadow.classList.remove('hidden')
    shadow.classList.remove('translate-y-6')

    // shadow.classList.add('flex')
  }

  const hoverLeave = e => {
    const text = e.target.querySelector('.actual-text')
    const shadow = e.target.querySelector('.shadow-text')
    text.classList.remove('-translate-y-6')
    // shadow.classList.remove('flex')
    shadow.classList.add('translate-y-6')
    shadow.classList.add('hidden')
  }

  return (
    <a className={padding} href={href} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
      <p className={`text-lg uppercase flex flex-col overflow-hidden relative text-${color} whitespace-nowrap`}>
        <span className='actual-text transition-all duration-500'>{text}</span>
        <span className='shadow-text absolute top-0 translate-y-6 transition-all duration-500'>{text}</span>
      </p>
    </a>
  )
}
export default HoverableLink
