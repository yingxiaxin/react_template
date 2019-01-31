import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.scss';

class Recommend extends PureComponent {
    render() {
        const { recommendList } = this.props;   
        return (
            <ul className="recommend_wrapper">
                {
                    recommendList.map((item) => {
                        const styleObj = {
                            background: 'url(' + item.get('imgUrl') + ')',
                            backgroundSize: 'contain'
                        };
                        return (
                            <li className="recommend_item" style={styleObj} key={item.get('id')}></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapState = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);