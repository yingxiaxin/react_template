import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from './store/';
import './style.scss';

class Header extends PureComponent {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();    // list是immutable的数据，要转换成普通的数组
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < (page * 10); i++) {
                if (newList[i]) {
                    pageList.push(
                        <a href="#" key={newList[i]}>{newList[i]}</a>
                    );
                }
            }
        }

        if ((focused || mouseIn)) {
            return (
                <div className="search_info"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className="search_info_title">热门搜索</div>
                    <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe7e9;</i>
                    <span className="search_info_switch" onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}>换一批</span>
                    <div className="search_info_contents">
                        {pageList}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        const { focused, list, handleInputFocus, handleInputBlur } = this.props;
        return (
            <div className='header_wrapper'>
                <Link to='/'>
                    <div className='logo'></div>
                </Link>
                <nav>
                    <span className='left active'>首页</span>
                    <span className='left'>下载APP</span>
                    <span className="right iconfont">&#xe636;</span>
                    <span className='right'>登录</span>

                    <div className="search_wrapper">
                        <input id='navSearch' className={focused ? "focused" : ""} placeholder='搜索'
                            onFocus={() => {handleInputFocus(list)}}
                            onBlur={handleInputBlur} />
                        <i className={focused ? "focused iconfont" : "iconfont"}>&#xe617;</i>
                        {this.getListArea()}
                    </div>
                </nav>
                <div className='addition'>
                    <div className='btn writting'>
                        <i className="iconfont">&#xe6a4;</i>
                        写文章
                    </div>
                    <div className='btn reg'>注册</div>
                </div>
            </div>
        )
    }

}

const mapState = (state) => {
    return {
        focused: state.get('header').get('focused'),
        // 或者此处也可以用以下immutable对象的联写形式
        // focused: state.getIn(['header', 'focused'])
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleInputFocus(list) {
            list.size === 0 && dispatch(actionCreator.getListAsync());  // 仅在list没有值的时候派发获取搜索框推荐的异步数据的action
            dispatch(actionCreator.searchFocus());  // 派发搜索框获得焦点的action，改变state状态
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());   // 牌法搜索框失去焦点的action，改变state状态
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            const reg = /rotate\((\d+)deg\)/g;
            const matchRst = reg.exec(spin.style.transform);
            const deg = matchRst === null ? 360 : parseInt(matchRst[1]) + 360;
            spin.style.transform = 'rotate(' + deg + 'deg)';

            let p = 0;
            if (page < totalPage) {
                p = page + 1;
            } else {
                p = 1;
            }
            dispatch(actionCreator.changePage(p));
        }
    }
}

export default connect(mapState, mapDispatch)(Header);