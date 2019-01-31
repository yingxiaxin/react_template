import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => {
        return import('./') // 此处的意思是引入需要异步加载的组件
    },
    // loading是一个函数，表示在加载过程中，需要显示什么内容，可以返回一个jsx
    loading: function () {
        return <div>正在加载...</div>
    }
});

// 此处可以简写成无状态组件的形式
export default () => <LoadableComponent />;


