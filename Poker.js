import Enumeration from './Enumeration';

// 扑克牌类
export default function Poker(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

// 花色
Poker.Suit = Enumeration({
  Clubs: 1,
  Diamonds: 2,
  Hearts: 3,
  Spades: 4
});

// 牌值
Poker.Rank = Enumeration({
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
});

Poker.prototype.toString = function() {
  return `${this.rank.toString()} of ${this.suit.toString()}`;
};

// 比较牌值大小
Poker.prototype.compareTo = function(that) {
  if (this.rank < that.rank) return -1;
  if (this.rank > that.rank) return 1;
  return 0;
};

// 根据牌值计算的排序函数
Poker.orderByRank = function(a, b) {
  return a.compareTo(b);
};

// 结合花色和牌值计算的排序函数
Poker.orderBySuit = function(a, b) {
  if (a.suit < b.suit) return -1;
  if (a.suit > b.suit) return 1;
  return Poker.orderByRank(a, b);
};