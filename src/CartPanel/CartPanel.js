import React from 'react'
import CartItems from '../CartItems/CartItems';
import TotalAmount from '../TotalAmount/TotalAmount';


 class CartPanel extends React.Component {
    render() {
      return (
        <section className="main__summary">
          <h2>Your cart</h2>
            < CartItems selected={this.props.selected} />
            < TotalAmount selected={this.props.selected} />
        </section>
      )
    }
}

export default CartPanel