import React from 'react';
import ItemOption from '../ItemOption/ItemOption';


 class Item extends React.Component {
  render() {
    const options = this.props.options.map((item, index) => {
    return (
      <ItemOption 
          key={index} 
          onSelect={this.props.onSelect}
          item={item}
          featureName={this.props.name}
      />
    )})

    return (
      <fieldset className="feature" key={this.props.name}>
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        <ul>
          {options}
        </ul>
      </fieldset>
    )
  }
}

export default Item;
