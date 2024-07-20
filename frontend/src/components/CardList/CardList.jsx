import { useEffect } from 'react';
import { card } from '../stores/card';
import './CardList.css';
import { observer } from 'mobx-react-lite';
import Card from '../Card/Card';
import { ImagePopup } from '../ImagePopup/ImagePopup';
import Preloader from '../Preloader/Preloader';

const CardList = observer(() => {
  useEffect(() => {
    card.fetchCard();
  }, []);

  return (
    <>
      <ul className='card-list'>
        {card.isLoading ? (
          <Preloader />
        ) : (
          card.cards
            .slice(0, card.visibleCards)
            .map((c, index) => (
              <Card
                key={c.id}
                title={c.title}
                image={c.image}
                onClick={() => card.handleOpenPopup(index)}
              />
            ))
        )}
      </ul>
      {card.visibleCards < card.cards.length && (
        <button
          className='card-list__more-btn'
          onClick={() => card.handleLoadMore()}
        >
          Показать ещё
        </button>
      )}
      <ImagePopup
        isOpen={card.isPopupOpen}
        onClose={() => card.handleClosePopup()}
        index={card.selectedCardIndex}
        cardsLength={card.cards.length}
        title={card.cards[card.selectedCardIndex]?.title}
        image={card.cards[card.selectedCardIndex]?.image}
        onNext={() => card.handleNextCard()}
        onPrevious={() => card.handlePreviousCard()}
      />

      {card.cards.length === 0 && (
        <p className='card-list__error'>Тут пока ничего нет...</p>
      )}
    </>
  );
});

export default CardList;
