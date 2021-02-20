import { Component } from "react";
import CollectionPreview from "../../components/collection-preview";
import "./shop.styles.scss";
import SHOP_DATA from "./SHOP_DATA";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
