interface CardProps {
    code: string;
}

const Card: React.FC<CardProps> = ({code})=>{

    

    return (
        <>
          <img
                 src={`https://deckofcardsapi.com/static/img/${code}.png`}
                 alt="card"
                 height="200"
                 width="150"
             />
        </>
    )
  }
  export default Card;