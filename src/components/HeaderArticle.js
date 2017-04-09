import React, { PropTypes }     from 'react';
import Stats                    from './Stats';

const HeaderArticle = props => {
  return (
    <div className="header-articles">
      <Stats articles={props.articles} />
      <h1>Session Admin</h1>
      <h1>Gestion des articles</h1>
    </div>
  );
};

HeaderArticle.propTypes = {
  articles: PropTypes.array.isRequired
};

export default HeaderArticle;
