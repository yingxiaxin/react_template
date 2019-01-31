import * as actionTypes from './detailConstants';

export const getDetailData = (id) => {
    return {
        type: actionTypes.GET_DETAIL_ITEM,
        id: id
    }
}