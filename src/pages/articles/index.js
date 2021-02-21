import React from 'react';
import { connect } from 'dva';
import { Divider } from 'antd';
import InfiniteScroll from './InfiniteScroll';
import HotTrendBox from './HotTrendBox';
import style from './index.less';

@connect(({ news, loading }) => ({
  news,
  loadingGetMore: loading.effects['news/loadMore'],
}))
export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      hasMore: true,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { page } = this.state;
    const payload = { page, size: 10, sort: 'id,desc' };
    dispatch({
      type: 'news/getNews',
      payload,
    });
    dispatch({
      type: 'news/getTrendArticle',
    });
  }

  fetchMoreData = () => {
    const { news } = this.props;
    const { total, list } = news;
    if (list.length === total) {
      this.setState({
        hasMore: false,
      });
    }
    const { page } = this.state;
    if (page !== 0) {
      const { dispatch } = this.props;
      const payload = { page, size: 10, sort: 'id,desc' };
      dispatch({
        type: 'news/loadMore',
        payload,
      });
    }
    this.setState({
      page: page + 1,
    });
  };

  readArticle = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'news/updateViews',
      payload: id,
    });
  };

  render() {
    const { news, loadingGetMore } = this.props;
    const { hasMore } = this.state;
    const { list, trend } = news;
    return (
      <div>
        <HotTrendBox listNews={trend} readArticle={this.readArticle} />
        <Divider />
        <InfiniteScroll
          articles={list}
          readArticle={this.readArticle}
          fetchMoreData={this.fetchMoreData}
          loading={loadingGetMore}
          hasMore={hasMore}
        />
      </div>
    );
  }
}
