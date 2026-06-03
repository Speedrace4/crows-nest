const PowerRoll = (props: {tier1?: string, tier2: string, tier3: string}) => {

  return (
    <div className="power-roll">
        <div className="card-slice">
            {props.tier1 ?
            <div className="power-roll-tier">
                <div className="card-cell">{"<11"}</div>
                <div className="card-cell">{props.tier1}</div>
            </div>
            : null
            }
            <div className="power-roll-tier">
                <div className="card-cell">12-16</div>
                <div className="card-cell">{props.tier2}</div>
            </div>
            <div className="power-roll-tier">
                <div className="card-cell">17+</div>
                <div className="card-cell">{props.tier3}</div>
            </div>
        </div>
    </div>
  )
}

export default PowerRoll;