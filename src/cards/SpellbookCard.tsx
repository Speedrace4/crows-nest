import Draggable from 'react-draggable';
import { useState, useRef } from 'react';
import PowerRoll from './components/PowerRoll';

const Card = (props: {title: string, key: number, card_info?: {tier1: string, tier2: string, tier3: string}}) => {
  const nodeRef = useRef(null);
  const [text, setText] = useState('Write something here.');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Draggable nodeRef={nodeRef} handle=".header">
      <div ref={nodeRef} className="card">
        <div className="header">{props.title}</div>
        <div className="content">
          {isEditing ? <div><textarea className="text-input" value={text} onChange={(e) => 
          setText(e.target.value)} onDoubleClick={() => setText('')} /><button onClick={() => 
          setIsEditing(false)}>Save</button></div> : <p onClick={() => setIsEditing(true)}>{text}</p>}
        </div>
        {props.card_info ? PowerRoll({tier1: props.card_info.tier1, tier2: props.card_info.tier2, tier3: props.card_info.tier3}) : null}
      </div>
    </Draggable>
  )
}

export default Card;