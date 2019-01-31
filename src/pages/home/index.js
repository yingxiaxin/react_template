import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import { constants as actionTypes } from './store';
import './style.scss';

class Home extends PureComponent {
    render() {
        return (
            <div className='home_wrapper'>
                <div className="home_left">
                    <img className='banner_img' src="https://upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </div>
                <div className="home_right">
                    <Recommend />
                    <Writer />
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.changeHomeData(); 
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch({
            type: actionTypes.GET_HOME_DATA
        })
    }
});

export default connect(null, mapDispatch)(Home);