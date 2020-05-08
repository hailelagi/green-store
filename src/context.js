import React, { Component } from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext(undefined, undefined);

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      modalOpen: false,
      modalProduct: {},
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
    };

    this.setProducts = this.setProducts.bind(this);
    this.getItem = this.getItem.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.addTotals = this.addTotals.bind(this);
  }
  componentDidMount() {
    this.setProducts();
  }

  setProducts() {
    /*original object reference fix*/
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      /*could replace with concat and fancy looping*/
      products = [...products, singleItem];
    });
    this.setState({ products });
  }
  getItem(id) {
    return this.state.products.find((item) => item.id === id);
  }
  handleDetail(id) {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  }
  addToCart(id) {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState(
      { products: tempProducts, cart: [...this.state.cart, product] },
      () => this.addTotals()
    );
  }
  openModal(id) {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }
  /*TODO: refactor into single method*/
  increment(id) {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;

    this.setState({ cart: [...tempCart] }, () => {
      return this.addTotals();
    });
  }
  decrement(id) {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;

    if (product.count < 0) this.removeItem(id);
    else {
      product.total = product.count * product.price;
      this.setState({ cart: [...tempCart] }, () => {
        return this.addTotals();
      });
    }
  }
  removeItem(id) {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState({ cart: [...tempCart], products: [...tempProducts] }, () => {
      this.addTotals();
    });
  }
  clearCart() {
    this.setState({ cart: [] }, () => {
      this.setProducts();
      this.addTotals();
    });
  }
  addTotals() {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = subTotal + tax;
    this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
