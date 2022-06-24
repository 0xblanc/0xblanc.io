import Logo from '@assets/logo/text_logo.svg'
import Circle from '@components/shared/Service/Circle'
const serviceList = [
  {
    name: 'NFT generic propagation',
    icon: Logo,
  },
  {
    name: 'Custom metadata',
    icon: Logo,
  },
  {
    name: 'IPFS data upload',
    icon: Logo,
  },
  {
    name: 'Minting website',
    icon: Logo,
  },
  {
    name: 'EVM Smart Contract Service',
    icon: Logo,
  },
  {
    name: 'Solana related service',
    icon: Logo,
  },
  {
    name: 'Web 3 integration service',
    icon: Logo,
  },
  {
    name: 'Traditional web service',
    icon: Logo,
  },
]
const Service = () => {
  return (
    <div className='h-screen bg-white justify-center flex items-center flex-col'>
      <div className='flex flex-col items-center justify-center w-full text-center'>
        <img className='h-20 w-full' alt='logo' src={Logo} />
        <h1 className='text-darkBlue text-5xl font-bold'>SERVICE WE PROVIDE</h1>
      </div>
      <div className='gird grid-flow-col auto-cols-max'>
        {serviceList.map((item, index) => {
          return (
            <div className='col-span-1'>
              <Circle serviceName={item.name}></Circle>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Service
