import * as actionTypes from './headerConstants';

export const searchFocus = () => {
    return {
        type: actionTypes.SEARCH_FOCUS
    }
}

export const searchBlur = () => {
    return {
        type: actionTypes.SEARCH_BLUR
    }
}

export const getListAsync = () => {
    return {
        type: actionTypes.GETLIST_ASYNC
    }
}

export const mouseEnter = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}

export const changePage = (page) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        page
    }
}