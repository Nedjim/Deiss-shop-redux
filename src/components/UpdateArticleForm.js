import React, { Component, PropTypes } from 'react';

export default class UpdateArticleForm extends Component {

state = { 
    index: this.props.article.index,
    name: this.props.article.name,
    description: this.props.article.description,
    price: this.props.article.price,
    image: this.props.article.image
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
    console.log(this.props)
    return (
      <div >
        <form onSubmit={this.updateArticle} className="add-player-form" >
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder={this.state.name}
          />
          <input
            type="text"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder={this.state.description}
          />
          <input
            type="text"
            value={this.state.price}
            onChange={this.onPriceChange}
            placeholder={this.state.price}
          />
          <input
            type="text"
            value={this.state.image}
            onChange={this.onImageChange}
            placeholder={this.state.image}
          />
          <input type="submit" value="Mettre à jour" />
        </form>
      </div>
    );
  }
}
