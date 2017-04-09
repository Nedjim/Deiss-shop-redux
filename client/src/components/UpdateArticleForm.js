import React, { Component, PropTypes } from 'react';

export default class UpdateArticleForm extends Component {

state = { 
    index: this.props.article.index,
    name: '',
    description: '',
    price: '',
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

  updateArticle(e){
    if (e) e.preventDefault();
    props.updateArticle(this.state.index, this.state.name, this.state.description, this.state.price, this.state.image);
  }
  
  render() {
    return (
      <div className='update-article'>
        <form onSubmit={this.updateArticle}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder='Nom'
          />
          <input
            type="text"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder='Decription'
          />
          <input
            type="text"
            value={this.state.price}
            onChange={this.onPriceChange}
            placeholder='Prix (euros)'
          />
          <input
            type="text"
            value={this.state.image}
            onChange={this.onImageChange}
            placeholder='Image (url)'
          />
          <button type='submit'>Mettre à jour</button>
        </form>
      </div>
    );
  }
}
