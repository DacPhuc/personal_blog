import React from 'react';
import { RiseOutlined } from '@ant-design/icons';
import ArticleComponent from './ArticleComponent';
import style from './index.less';

export default class HotTrendBox extends React.PureComponent {
  render() {
    const { listNews, readArticle } = this.props;
    return (
      <div>
        <div style={{ fontSize: '22px' }}>
          <RiseOutlined />
          <span> Trending now</span>
        </div>
        <div className={`${style.hotTrend}`}>
          {listNews.map((item, index) => {
            return (
              <div className={`${style.trendChild}`}>
                <div className={`${style.articleBox}`}>
                  <ArticleComponent
                    // eslint-disable-next-line react/no-array-index-key
                    fontSize="16px"
                    readArticle={readArticle}
                    key={item.id}
                    headline={item.headline}
                    publishDate={item.publishDate}
                    categories={item.categories}
                    link={item.link}
                    id={item.id}
                    order={index + 1}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
