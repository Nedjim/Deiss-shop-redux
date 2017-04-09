import React, { PropTypes }     from 'react';

const HeaderArticle = props => {
  return (
    <div className="header-articles">
        <h1>Gestion des articles</h1>
        <div className='stats'>
          <span>Nombre d'articles en ligne: </span>
          <span>{props.articles.length}</span>
        </div>
    </div>
  );
};

HeaderArticle.propTypes = {
  articles: PropTypes.array.isRequired
};

export default HeaderArticle;
