import React, { PropTypes }     from 'react';
import UpdateArticleForm        from './UpdateArticleForm';

const ArticleDetail = ({ selectedArticle}) => {
  if(selectedArticle){
    return (
      <div className='article-details'>
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
          <div>
            <span>Créer le: {selectedArticle.created} - </span> 
            <span>Mise à jour le: {selectedArticle.updated}</span> 
          </div>      
        </ul>
      </div>
    );
  }
  else {
    return (<div className='article-details'>
                <p>Cliquer sur un article pour avoir plus de détails</p>
            </div>);
  }
};

ArticleDetail.propTypes = {
  selectedArticle: PropTypes.object
};

export default ArticleDetail;
