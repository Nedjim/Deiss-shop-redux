import React, { PropTypes }     from 'react';
import UpdateArticle            from './UpdateArticleForm';

const Article = props => (
  <div className='article'>
    <div onClick={() => props.selectArticle(props.index)} className='article-link'>
        <a onClick={() => props.removeArticle(props.index)}> ✖ </a>
        <h3>{props.name}</h3>
    </div>
    <div className='price'>
        <span>{props.price} euros</span>
    </div>
    <UpdateArticle article={props} updateArticle={props.updateArticle}/>
  </div>
);

Article.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  removeArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
  selectArticle: PropTypes.func.isRequired,
};

export default Article;
