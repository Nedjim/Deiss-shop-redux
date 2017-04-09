import React, { PropTypes }     from 'react';
import UpdateArticleForm        from './UpdateArticleForm';

const ArticleDetail = ({ selectedArticle}) => {
  if(selectedArticle){
    return (
      <div>
        <h3>{selectedArticle.name}</h3>
        <ul>
          <li>
            <span>Description: </span> 
            {selectedArticle.description}
          </li>
          <li>
            <span>Prix: </span> 
            {selectedArticle.price}
          </li>
          <li>
            <img src={selectedArticle.image}/>
          </li>
          <li>
            <span>Created: </span> 
            {selectedArticle.created}
          </li>
          <li>
            <span>Updated: </span> 
            {selectedArticle.updated}
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Cliquer sur un article pour avoir plus de détails</p>);
  }
};

ArticleDetail.propTypes = {
  selectedArticle: PropTypes.object
};

export default ArticleDetail;
