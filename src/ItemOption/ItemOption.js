import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class ItemOption extends React.Component {
  render() {
    return (
      <div className="feature__item">
        <label 
          className="feature__label"
          onClick={() => this.props.onSelect(this.props.featureName, this.props.item)}>
            { this.props.item.name } <span> ({ USCurrencyFormat.format(this.props.item.cost) })</span>
        </label>
      </div>
    )
  }
}

export default ItemOption;