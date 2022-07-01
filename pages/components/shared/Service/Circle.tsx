const Circle = props => {
  const serviceName = props.serviceName
  const icon = props.icon
  return (
    <div className='w-[150px] h-[150px] flex rounded-full bg-aliceBlue text-center justify-center items-center'>
      {/* <img src={icon} alt={serviceName} /> */}
      <div>{serviceName}</div>
    </div>
  )
}
export default Circle
