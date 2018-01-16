import Poker from './Poker';

// 牌桌类
function Deck() {
  const cards = this.cards = [];
  Poker.Suit.foreach(function(s) {
    Poker.Rank.foreach(function(r) {
      cards.push(new Poker(s, r));
    });
  });
}

// 洗牌: 重新洗牌并返回洗好的牌
Deck.prototype.shuffle = function() {
  const deck = this.cards, len = deck.length;
  for (let i = len - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let temp;
    temp = deck[i];
    deck[i] = deck[r];
    deck[r] = temp;
  }
  return this;
};

// 发牌
Deck.prototype.deal = function(n) {
  if (this.cards.length < n) {
    throw "Out of cards";
  }
  return this.cards.splice(this.cards.length - n, n);
};

Deck.prototype.getValues = function() {
  return this.cards;
};

const deck = (new Deck()).shuffle();
const hand = deck.deal(13).sort(Poker.orderBySuit);

// 查看全部牌
console.log('===== Deck Pockers =====');
deck.getValues().sort(Poker.orderBySuit).forEach(function(card) {
  console.log(card.toString());
});
console.log('========================\n');

// 查看手牌
console.log('===== Hand Pockers =====');
hand.forEach(function(card) {
  console.log(card.toString());
});
console.log('========================');
