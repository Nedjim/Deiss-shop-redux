import React, { Component, PropTypes } from 'react';

export default class AddArticleForm extends Component {
  
  static propTypes = {
    addArticle: PropTypes.func.isRequired,
  };

  state = { 
    name: '',
    description: '',
    price: 0,
    image: ''
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description });
  };

  onPriceChange = (e) => {
    const price = e.target.value;
    this.setState({ price });
  };

  onImageChange = (e) => {
    const image = e.target.value;
    this.setState({ image });
  };

  addArticle = (e) => {
    if (e) e.preventDefault();
    this.props.addArticle(this.state.name, this.state.description, this.state.price, this.state.image); //ajouter description, prix, image
    this.setState({ 
      name: '',
      description: '',
      price: 0,
      image: '' 
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addArticle}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Nom"
          />
          <input
            type="text"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder="Description"
          />
          <input
            type="text"
            value={this.state.price}
            onChange={this.onPriceChange}
            placeholder="Prix (euros)"
          />
          <input
            type="text"
            value={this.state.image}
            onChange={this.onImageChange}
            placeholder="Image (url)"
          />
          <input type="submit" value="Ajouter un article" />
        </form>
      </div>
    );
  }
}
