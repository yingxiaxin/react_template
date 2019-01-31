import * as actionTypes from './homeConstants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.HOME_DATA_RETURNED: {
            return state.merge({
                topicList: fromJS(action.data.topicList),
                articleList: fromJS(action.data.articleList),
                recommendList: fromJS(action.data.recommendList)
            });
        }
        default: {
            return state;
        }
    }
}