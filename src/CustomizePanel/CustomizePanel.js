import React from 'react'
import Item from '../Item/Item'


class CustomizePanel extends React.Component {
  render() {
    const features = Object.keys(this.props.features)
      .map(key => {
          return (
              <Item 
                name={key} 
                key={key} 
                options={this.props.features[key]} 
                selected={this.props.selected}
                onSelect={this.props.onSelect}
              />
          )
      })

    return (
      <section className="main__form">
        <h2>Customize your laptop</h2>
          {features}
      </section>
    )
  }
}

export default CustomizePanel;



