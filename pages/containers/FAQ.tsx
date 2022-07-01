import Title from '@components/shared/Title'

const faq_boxes = [
  {
    titles: ['Who is Akira?'],
    texts: ['We are NFT galfrens Waiting you in the metaverse.'],
  },
  {
    titles: ['How many Akiragals will there be?'],
    texts: ['There will be', '6,666 NFTs in the collection'],
  },
  {
    titles: ['Why Akiragal?'],
    texts: [
      'fully community driven, web 3.0 and ai techonology integration',
      'The first virtual Galfren that could be',
      'truly owned by you, so why not?',
    ],
  },
  {
    titles: ['When is the mint day and price ?'],
    texts: ['Will be released', 'closer to the mint day'],
  },
  {
    titles: ['How to WL?'],
    texts: ['Be an active member in discord,', 'join our campaigns and events !'],
  },
  {
    titles: ['How to request a collaboration/ partnership?'],
    texts: ['DM @00.01 on our discord', 'to discuss further.'],
  },
]

const FAQ = props => {
  return (
    <div className='h-screen'>
      <div className='w-full justify-around flex flex-row pt-36'>
        <Title text='FAQ'></Title>

        <h1 className='text-darkBlue text-5xl'></h1>
      </div>
    </div>
  )
}

export default FAQ
