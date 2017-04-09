import React, { PropTypes }     from 'react';
import Counter                  from './Counter';
import UpdateArticle            from './UpdateArticleForm';

const Article = props => (
  <div>
    <div onClick={() => props.selectArticle(props.index)}>
        <a onClick={() => props.removeArticle(props.index)}> ✖ </a>
        <h3>{props.name}</h3>
    </div>

    <div>
        <Counter price={props.price} />
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
