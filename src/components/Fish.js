import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const isAvailable = this.props.deets.status === "available";
    return (
      <li className="menu-fish">
        <img src={this.props.deets.image} alt={this.props.deets.name} />
        <h3 className="fish-name">
          {this.props.deets.name}
          <span className="price">{formatPrice(this.props.deets.price)}</span>
        </h3>
        <p>{this.props.deets.desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
