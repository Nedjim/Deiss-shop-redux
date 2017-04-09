import React, { PropTypes } from 'react';

const Stats = props => {
  const articleCount = props.articles.length;

  return (
        <div className='stats'>
          <span>Nombre d'articles en ligne: </span>
          <span>{articleCount}</span>
        </div>
  );
}

Stats.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Stats;
