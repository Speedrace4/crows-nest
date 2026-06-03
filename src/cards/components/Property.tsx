import { Tooltip } from 'react-tooltip';

const Property = (props: {title: string, key: number}) => {

  return (
    <div>
        <div className="property" data-tooltip-id="my-tooltip">{props.title}</div>
        <Tooltip id="my-tooltip">
            Hello there
        </Tooltip>
    </div>
    
  )
}

export default Property;