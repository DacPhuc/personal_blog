import React, { useEffect, useRef } from 'react';
import { Spin } from 'antd';
import ArticleComponent from './ArticleComponent';
import style from './index.less';

const InfiniteScroll = (props) => {
  const { articles, fetchMoreData, loading, hasMore, readArticle } = props;

  const loader = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && hasMore) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  return (
    <div className={`${style.infiniteContain}`}>
      <div>
        {articles.map((item) => {
          return (
            <div>
              <ArticleComponent
                // eslint-disable-next-line react/no-array-index-key
                fontSize="20px"
                readArticle={readArticle}
                key={item.id}
                headline={item.headline}
                description={item.description}
                publishDate={item.publishDate}
                categories={item.categories}
                link={item.link}
                id={item.id}
                imgUrl={item.image}
                width="100%"
              />
            </div>
          );
        })}
        <div ref={loader}>{loading ? <Spin /> : null}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
