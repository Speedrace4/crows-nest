import type { CraftingInfo } from "@/models/craftinginfo"

const CraftingInfoSlice = (props: CraftingInfo) => {
  return (
    <div className="item_info">
        <div className="card-slice">
            <div className="card-cell">{props.type} +{props.craft_mod}</div>
            <div className="card-cell">{props.materials.join(", ")}</div>
            <div className="card-cell">{props.pp}pp</div>
            <div className="card-cell">{props.price}gc</div>
        </div>
    </div>
  )
}

export default CraftingInfoSlice;