
import './Card.css';

const Card = ({ image, title, onClick}) => {
  return (
    <>
      <li className='card' onClick={onClick}>
        <img
          className='card__image'
          src={`http://localhost:8055/assets/${image}`}
          alt={title}
        />
      </li>
    </>
  );
};

export default Card;
