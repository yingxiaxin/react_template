import * as actionTypes from './headerConstants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false, // 用于确定是否输入框是否获得焦点，以改变输入框长度
    list: [],   // 输入框自动提示的数据
    page: 1,    // 输入框自动提示的列表的当前页
    totalPage: 1,    //输入框自动提示的列表的总页数
    mouseIn: false  // 鼠标是否在自动推荐列表框上，来确定是否隐藏它
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS: {
            // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
            // 此处并不是在修改原始state数据
            return state.set('focused', true);
        }
        case actionTypes.SEARCH_BLUR: {
            return state.set('focused', false);
        }
        case actionTypes.GETLIST: {
            return state.merge({
                list: fromJS(action.data),
                totalPage: action.totalPage
            })
            // state.set('list', fromJS(action.data)).set('totalPage', fromJS(action.totalPage));
        }
        case actionTypes.MOUSE_ENTER: {
            return state.set('mouseIn', true);
        }
        case actionTypes.MOUSE_LEAVE: {
            return state.set('mouseIn', false);
        }
        case actionTypes.CHANGE_PAGE: {
            return state.set('page', action.page)
        }
        default: {
            return state;
        }
    }
}