import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.scss';

class Topic extends PureComponent {
    render() {

        const { topicList } = this.props;
        return (
            <div className='topic_wrapper'>
                {
                    topicList.map((item) => {
                        return (
                            <div className="topic_item" key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt=""/>
                                {item.get('title')}
                            </div>
                        )
                    })
                }                
            </div>
        );
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);