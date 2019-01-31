import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

class List extends PureComponent {
    render() {
        const { articleList } = this.props;
        return (
            <ul className='home_list'>
                {
                    articleList.map((item) => {
                        return (
                            <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                                <li className='list_item'>
                                    <img src={item.get('imgUrl')} alt="" />
                                    <div className='list_info'>
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('desc')}</p>
                                    </div>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List);