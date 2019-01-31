import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreator } from './store';
import './style.scss';

class Detail extends PureComponent {
    render() {
        const { title, content } = this.props;
        return (
            <div className='detail_wrapper'>
                <div className="header">{title}</div>
                <div className="content" dangerouslySetInnerHTML={{__html: content}} />
            </div>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreator.getDetailData(id));
    }
});

// withRouter表示组件可以获取由router传递过来的参数，需要在上面import { withRouter } from 'react-router-dom'
export default connect(mapState, mapDispatch)(withRouter(Detail));