interface CardProps{
  svg: any;
  cardValue: string;
  cardDescription: string;
}

const Card = ({svg, cardValue, cardDescription}: CardProps):JSX.Element => {
  return (
    <div className='flex flex-col justify-center text-center p-20'>
      <p>{svg}</p>
      <h3>{cardValue}</h3>
      <p>{cardDescription}</p>
    </div>
  )
}

export default Card