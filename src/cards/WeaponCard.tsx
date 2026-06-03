import Draggable from 'react-draggable';
import CraftingInfoSlice from './components/CraftingInfoSlice';
import PowerRoll from './components/PowerRoll';
import Property from './components/Property';
import { useRef } from 'react';

const WeaponCard = (props: {title: string, key: number, stack: number, slots: number, type: "Melee" | "Ranged", range: number, modifier: "str" | "agi" | "either", tier2: string, tier3: string}) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".header">
      <div ref={nodeRef} className="card">
        <div className="header">
            <div className="card-slice">
                <div><b><u>{props.title}</u></b></div>
                <div>Stack: {props.stack}</div>
                <div>Slots: {props.slots}</div>
            </div>
            <div className="card-slice">
                <div>{props.type} {props.range}</div>
                <div><b>Attack</b> 2d10 + {props.modifier == "str" ? "S" : props.modifier == "agi" ? "A" : "S or A"}</div>
            </div>
        </div>
        {PowerRoll({tier2: props.tier2, tier3: props.tier3})}
        {Property({title: "Bashing", key: 1})}
        {CraftingInfoSlice({type: "Blacksmithing", craft_mod: 1, materials: ["1 iron bar"], pp: 10, price: 15})}
      </div>
    </Draggable>
  )
}

export default WeaponCard;