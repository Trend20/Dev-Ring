interface CardProps{
  svg: any;
  cardValue: string;
  cardDescription: string;
}

const Card = ({svg, cardValue, cardDescription}: CardProps):JSX.Element => {
  return (
    <div className='flex flex-col p-20 bg-neutral-900 h-auto items-center justify-center w-full m-5 rounded'>
      <p className="flex justify-between w-3/4 rotate-45">{svg}</p>
      <h3 className="text-5xl font-bold text-cyan-200 w-1/2 flex justify-center">{cardValue}</h3>
      <p className="text-lg mt-5 text-white w-full flex justify-center">{cardDescription}</p>
    </div>
  )
}

export default Card