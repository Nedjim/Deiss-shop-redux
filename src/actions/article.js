import * as ArticleActionTypes from '../actiontypes/article';

export const addArticle = (name, description, price, image) => {  //ajout
  return {
    type: ArticleActionTypes.ADD_ARTICLE,
    name,
    description,
    price,
    image
  };
};

export const removeArticle = index => {
  return {
    type: ArticleActionTypes.REMOVE_ARTICLE,
    index
  };
};

export const updateArticle = (index, name, description, price, image)  => {
   return {
     type: ArticleActionTypes.UPDATE_ARTICLE,
     index,
     name,
     description,
     price,
     image
  };
};

export const selectArticle = index => {
  return {
    type: ArticleActionTypes.SELECT_ARTICLE,
    index
  };
};


