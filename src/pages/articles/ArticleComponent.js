import React from 'react';
import { Card, Badge } from 'antd';
import moment from 'moment';
import { IKImage } from 'imagekitio-react';
import { categoryColor } from '@/utils/constant';
import { history } from 'umi';
import style from './index.less';

// required parameter to fetch images
const urlEndpoint = 'https://ik.imagekit.io/7oa5bu6dn1s';

// optional parameters (needed for client-side upload)
const publicKey = '<YOUR_IMAGEKIT_PUBLIC_KEY>';

export default class ArticleComponent extends React.PureComponent {
  handleGoArticle = () => {
    const { link, readArticle, id } = this.props;
    readArticle(id);
    history.push(`/article/${link}`);
  };

  render() {
    const {
      headline,
      publishDate,
      categories,
      width,
      description,
      fontSize,
      order,
      imgUrl,
    } = this.props;
    return (
      <Card
        hoverable
        size="small"
        bordered={false}
        style={{ width, marginBottom: 35 }}
        onClick={this.handleGoArticle}
      >
        {order ? <div className={`${style.article}`}>0{order}</div> : null}
        <div className={`${style.titleAndImg}`}>
          <div>
            <p style={{ fontSize }}>
              <strong>{headline}</strong>
            </p>
            <div>
              <p>{description}</p>
            </div>
          </div>
          <div>
            {imgUrl ? (
              <IKImage
                urlEndpoint={urlEndpoint}
                path={imgUrl}
                transformation={[
                  {
                    height: '100',
                    width: '100',
                  },
                ]}
                loading="lazy"
              />
            ) : null}
          </div>
        </div>
        <div className={`${style.cardArticle}`}>
          <p>On {moment(publishDate).locale('en').format('ll')}</p>
          {categories ? (
            <Badge
              count={categories[0].categoryName}
              style={{ backgroundColor: categoryColor[categories[0].id], marginLeft: '20px' }}
            />
          ) : null}
        </div>
      </Card>
    );
  }
}
