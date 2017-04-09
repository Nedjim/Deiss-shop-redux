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
      <div id="add-article">
        <h3>Ajouter un article</h3>
        <form method='post' onSubmit={this.addArticle} action='/admin/addArticle'>
              <input
                type="text"
                value={this.state.name}
                onChange={this.onNameChange}
                name='name'
                placeholder="Nom"
              />
              <input
                type="text"
                value={this.state.description}
                onChange={this.onDescriptionChange}
                name='description'
                placeholder="Description"
              />
              <input
                type="text"
                value={this.state.price}
                onChange={this.onPriceChange}
                name='price'
                placeholder="Prix (euros)"
              />
              <input
                type="text"
                value={this.state.image}
                onChange={this.onImageChange}
                name='image'
                placeholder="Image (url)"
              />
              <button type="submit">Ajouter un article</button>
        </form>
      </div>
    );
  }
}
