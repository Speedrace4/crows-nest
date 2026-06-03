import Card from './cards/Card'
import WeaponCard from './cards/WeaponCard'
import { useState } from 'react';
import { BloodCreatureA } from './data/creatures/monsters/blood-monsters';
import CreatureCard from './cards/CreatureCard';

const CharacterSheet = () => {
  const [cards, setCards] = useState([{title: "Foo", key: 0}])
  const [newCard, setNewCard] = useState('')

  const addCard = () => {
   const tempArr = [...cards];
    const card = {title: newCard, key: cards.length};
    tempArr.push(card);
    setCards(tempArr);
    setNewCard('');
  }

  return (
    <div>
      // Character name
      // Generate character button (with import option? Stretch feature prob), Rest button, Save button, export button
      // Background
      // Feature / Quirk
      // Experience
      // Status
      // Stamina
      // Armor
      // Conditions
      // Skills
      // Characteristics
      // Hand Slots, Belt Slots
      // Magic Item slots
      // Backpack slots (with wound options)

      <div className="add-card-form">
        <input type="text" value={newCard} className="new-card-input" onChange={(e) => setNewCard(e.target.value)}/><button onClick={addCard}>Add card</button>
      </div>
      <div className="list">
        {cards.map((card) => <Card title={card.title} key={card.key} />)}
        <CreatureCard {...BloodCreatureA} />
        <Card title="Boom Wand" key={4} card_info={{tier1: "10dam", tier2: "5dam", tier3: "0dam"}} />
        <WeaponCard title="Flail" key={10} stack={1} slots={2} type="Melee" range={2} modifier="str" tier2="3 + S" tier3="6 + S" />
      </div>
    </div>
    
  )
}

export default CharacterSheet