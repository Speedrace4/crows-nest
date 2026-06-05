import type { CraftingInfo } from "@/models/craftinginfo"

const CraftingInfoSlice = (props: CraftingInfo) => {
  return (
    <div className="item_info">
        <div className="card-slice">
            <div className="card-cell">{props.type} +{props.craft_mod}</div>
            <div className="card-cell">{props.materials}</div>
            <div className="card-cell">{props.pp.base}pp</div>
        </div>
    </div>
  )
}

export default CraftingInfoSlice;