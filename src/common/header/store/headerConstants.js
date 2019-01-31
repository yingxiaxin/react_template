export const SEARCH_FOCUS = 'header/SEARCH_FOCUS';
export const SEARCH_BLUR = 'header/SEARCH_BLUR';
export const MOUSE_ENTER = 'header/MOUSE_ENTER';
export const MOUSE_LEAVE = 'header/MOUSE_LEAVE';
export const CHANGE_PAGE = 'header/CHANGE_PAGE';

// 此处的类型成对出现，一个是在actionCreator中派发action，由saga接收，一个是saga异步处理完后派发action，由reducer接收
export const GETLIST = 'header/GETLIST';
export const GETLIST_ASYNC = 'header/GETLIST_ASYNC';