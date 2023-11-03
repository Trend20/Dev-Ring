import featureImg from '../assets/images/feature.webp';

interface FeaturesInfo{
  title: string;
  desc: string;
}

const featureInfo: FeaturesInfo[]=[
  {
    title:'Location-based Search',
    desc:'Find developer communities tailored to your locality and preferences.'
  },
  {
    title:'Wide Range of Topics',
    desc:'Discover groups centered around diverse technologies, programming languages, and frameworks.'
  },
  {
    title:'Powerful Networking',
    desc:'Expand your professional network by connecting with a pool of skilled developers.'
  }
]

const Features = () => {
  return (
    <div className='flex text-cyan-200 flex-col p-40 w-3/4 m-auto max-md:w-full max-md:p-3'>
      <h3 className='text-4xl'>Find Your Dev Tribe</h3>
      <div className="flex w-full max-md:flex-col">
        <div className="flex flex-col w-1/2 max-md:w-full">
          {
            featureInfo.map((info) =>(
              <div className="flex flex-col mt-20 max-md:mt-6">
              <h5 className='text-2xl'>{info.title}</h5>
              <p className='flex mt-3 w-3/4 text-lg max-md:w-full max-md:mt-1'>{info.desc}</p>
            </div>
            ))
          }
        </div>
       <div className="flex w-1/2 h-auto justify-center items-center max-md:w-full max-md:mt-3">
        <img src={featureImg} alt="feature" className='rounded h-96 object-cover'/>
       </div>
      </div>
    </div>
  )
}

export default Features;