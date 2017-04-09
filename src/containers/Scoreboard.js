import React, { Component, PropTypes }  from 'react';
import { bindActionCreators }           from 'redux';
import { connect }                      from 'react-redux';
import * as ArticleActionCreators       from '../actions/article';

import HeaderArticle                    from '../components/HeaderArticle';
import Article                          from '../components/Article';
import AddArticleForm                   from '../components/AddArticleForm';
import ArticleDetail                    from '../components/ArticleDetail';

class Scoreboard extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, articles, selectedArticleIndex } = this.props;
    const addArticle = bindActionCreators(ArticleActionCreators.addArticle, dispatch);      //modifier pour add
    const removeArticle = bindActionCreators(ArticleActionCreators.removeArticle, dispatch);
    const updateArticle = bindActionCreators(ArticleActionCreators.updateArticle, dispatch);
    const selectArticle = bindActionCreators(ArticleActionCreators.selectArticle, dispatch);

    let selectedArticle;

    if(selectedArticleIndex !== -1){
      selectedArticle = articles[selectedArticleIndex];
    }

    const articleComponents = articles.map((article, index) => (
      <Article
        index={index}
        name={article.name}
        description={article.description}
        price={article.price}
        image={article.image}
        key={article.name}
        updateArticle={updateArticle}
        removeArticle={removeArticle}
        selectArticle={selectArticle}
      />
    ));
    return (
      <div>
        <HeaderArticle articles={articles}/>
        <AddArticleForm addArticle={addArticle} />
        <div className="players">
          { articleComponents }
        </div>
        
        <div className="player-detail">
          <ArticleDetail selectedArticle={selectedArticle}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    articles: state.articles,
    selectedArticleIndex: state.selectedArticleIndex
  }
);

export default connect(mapStateToProps)(Scoreboard);
