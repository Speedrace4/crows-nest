import Draggable from 'react-draggable';
import { useRef } from 'react';
import type { Characteristic, Creature, Speed } from '@/models/creature';
import type { Range } from '@/models/attack';

const CreatureCard = (props: Creature) => {
  const nodeRef = useRef(null);

  const speedToStr = (speed: Speed) => {
    const speeds = [];
    speeds.push(speed.walk)
    if (speed.climb) {
      speeds.push("climb " + speed.climb)
    }
    if (speed.fly) {
      speeds.push("fly " + speed.fly)
    }
    if (speed.swim) {
      speeds.push("swim " + speed.swim)
    }
    return speeds.join(", ")
  }

  const getAttackRange = (range: Range) => {
    if (!range.melee) {
      return "Ranged " + range.ranged;
    }
    else if (!range.ranged) {
      return "Melee " + range.melee;
    }
    return "Melee " + range.melee + " \ " + "Ranged " + range.ranged;
  }

  const getAttackCharacteristic = (characteristics: Characteristic[]) => {
    let characteristicValues = [];
    if (characteristics.includes("Agility")) {
      characteristicValues.push(props.characteristics.agility);
    }
    else if (characteristics.includes("Mind")) {
      characteristicValues.push(props.characteristics.mind);
    }
    let characteristicValue = Math.max(...characteristicValues);
    return characteristicValue >= 0 ? "+" + characteristicValue : "-" + characteristicValue;
  }

  return (
    <Draggable nodeRef={nodeRef} handle=".header">
      <div ref={nodeRef} className="card">
        <div className="header">
            <div className="card-slice">
                <div><b><u>{props.name}</u></b></div>
            </div>
            <div className="card-slice">
                <div><b>Size:</b> {props.size}</div>
                <div><b>Power:</b> {props.power}</div>
                <div><b>Type:</b> {props.type}</div>
            </div>
            <div className="card-slice">
                <div><b>Stamina:</b> {props.stamina}</div>
                <div><b>Speed:</b> {speedToStr(props.speed)}</div>
                {props.slots ? <div><b>Slots:</b> {props.slots}</div> : null}
            </div>
            <div className="card-slice">
                <div><b>Agility:</b> {props.characteristics.agility}</div>
                <div><b>Mind:</b> {props.characteristics.mind}</div>
                <div><b>Strength:</b> {props.characteristics.strength}</div>
            </div>
        </div>
        <div className="card-slice">
            <div><b>Attack</b></div>
            <div><b>Range</b></div>
            <div><b>12-16</b></div>
            <div><b>17+</b></div>
        </div>
        {props.attacks.map(attack => 
          <div className="card-slice">
              <div><b>{attack.name} ({getAttackCharacteristic(attack.characteristics)})</b></div>
              <div>{getAttackRange(attack.range)}</div>
              <div>{attack.damage.t2} dam</div>
              <div>{attack.damage.t3} dam</div>
          </div>
        )}
        {props.features.map(feature => 
          <div className="description">
              <div><b><u>{feature.name}</u></b></div>
              <div>{feature.description}</div>
          </div>
        )}
      </div>
    </Draggable>
  )
}

export default CreatureCard;