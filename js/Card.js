const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const VALUE_LABELS = 
  ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]
const TYPES = ["d", "c", "h", "s"]
const TYPE_LABELS = ["hearts","diamonds","clubs","spades"];

class Card {
  static values() {
    return VALUES
  }

  static valueLabels() {
    return VALUE_LABELS
  }

  static types() {
    return TYPES
  }
  static typesLabels(){
    return TYPE_LABELS
  }
  constructor(label) {
    this.label = label
  }

  value() {
    return this.label.split('').slice(0, this.label.length - 1).join()
  }

  valueLabel() {
    return Card.valueLabels()[Card.values().indexOf(this.value())]
  }

  type() {
    return this.label.split('')[this.label.length-1]
  }
  valueType() {
    return Card.valueTypes()[Card.types().indexOf(this.value())]
  }

  score() {
    return parseInt(`${this.valueScore()}${this.typeScore()}`)
  }

  valueScore() {
    return Card.values().indexOf(this.value()) + 2
  }

  typeScore() {
    return Card.types().indexOf(this.type()) + 1
  }
}

export default Card

