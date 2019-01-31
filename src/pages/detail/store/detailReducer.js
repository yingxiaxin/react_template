import * as actionTypes from './detailConstants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.DETAIL_ITEM_RETURNED: {
            return state.merge({
                title: fromJS(action.data.title),
                content: fromJS(action.data.content)
            });
        }
        default: {
            return state;
        }
    }
}