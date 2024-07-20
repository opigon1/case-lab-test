import { makeAutoObservable } from 'mobx';

class Card {
  cards = [];
  isPopupOpen = false;
  selectedCardIndex = null;
  visibleCards = 12;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(boolean) {
    this.isLoading = boolean;
  }

  setCards(cards) {
    this.cards = cards.data;
  }

  handleLoadMore() {
    this.visibleCards = this.visibleCards + 3;
  }

  handleOpenPopup(index) {
    this.isPopupOpen = true;
    this.selectedCardIndex = index;
  }

  handleClosePopup() {
    this.isPopupOpen = false;
    this.selectedCardIndex = null;
  }

  handleNextCard() {
    if (this.selectedCardIndex !== null && this.cards.length > 0) {
      this.selectedCardIndex = (this.selectedCardIndex + 1) % this.cards.length;
    }
  }

  handlePreviousCard() {
    if (this.selectedCardIndex !== null && this.cards.length > 0) {
      this.selectedCardIndex =
        (this.selectedCardIndex - 1 + this.cards.length) % this.cards.length;
    }
  }

  async fetchCard() {
    try {
      this.setIsLoading(true);
      const fecth = await fetch('http://localhost/directus/items/card');
      const res = await fecth.json();
      this.setCards(res);
    } catch (error) {
      console.log('error', error);
    } finally {
      this.setIsLoading(false);
    }
  }
}

export const card = new Card();
