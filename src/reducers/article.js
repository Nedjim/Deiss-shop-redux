import * as ArticleActionTypes from '../actiontypes/article';

const initialState = {
	articles: [
			{
			name: 'Jupe Zara Redcorp',
			description: 'Jupe Zara bordeau idéal pour l\'été',
			price: 23,
			image: 'https://images.unsplash.com/photo-1486308510493-aa64833637bc?dpr=1&auto=format&fit=crop&w=1080&h=NaN&q=80&cs=tinysrgb&crop=&bg=',
			created: '11/8/2016',
			updated: '11/9/2016'
		},
		{
			name: 'Jupe NewLook ',
			description: 'Cette jupe viendra compléter à la perfection votre garde-robe de soirée de la saison. Complétez votre look par un pull à imprimé léopard et des bottines noires à talons block.',
			price: 17,
			image: 'https://images.unsplash.com/photo-1455637866994-04a24891cfb5?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=&bg=',
			created: '11/8/2016',
			updated: '11/9/2016'
		}
	],
	selectedArticleIndex: -1
}

export default function Article(state=initialState, action) {	

	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();
	
  switch(action.type){
    case ArticleActionTypes.ADD_ARTICLE: {
			const addArticleList = [...state.articles,   { 
          name: action.name,       
					description: action.description,
          price: action.price,
					image: action.image,
          created: `${month}/${day}/${year}`
      }];
      return {
        ...state,
				articles: addArticleList
		 	};
	 	}

    case ArticleActionTypes.REMOVE_ARTICLE: {
			const removeArticleList = [
				...state.articles.slice(0, action.index),
				...state.articles.slice(action.index + 1)
			];
      return {
				...state,
				articles: removeArticleList
			};
		}

    case ArticleActionTypes.UPDATE_ARTICLE: {
			const updateArticleList = state.articles.map((article, index) => {
        if(index === action.index){
          return {
            ...article,
					 	 name: action.name,
						 description: action.description,
						 price: action.price,
						 image: action.image,
             updated: `${month}/${day}/${year}`
           };
        }
        return article;
      });
			return {
				...state,
				articles: updateArticleList
			};
		}

	  case ArticleActionTypes.SELECT_ARTICLE:
		  return {
				...state,
				selectedArticleIndex: action.index
			};

    default:
      return state;
  }
}
