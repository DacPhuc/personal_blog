import React, { useState, useEffect } from 'react';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NotionRenderer } from 'react-notion';
import { Result, Button } from 'antd';
import { history } from 'umi';
import fetch from 'node-fetch';
import logo from '../../assets/medical.png';
import style from './style.less';

export default function NotionPage(props) {
  const [data, setData] = useState({});
  const [canDisplay, setCanDisplay] = useState(true);

  useEffect(() => {
    const { id } = props.match.params;
    (async () => {
      const content = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`).then((res) =>
        res.json(),
      );
      if (Object.keys(content).length > 0) {
        setData(content);
      } else {
        setCanDisplay(false);
      }
    })();
  }, []);

  return canDisplay ? (
    <div>
      <div className={`${style.header}`}>
        <div className={`${style.logo}`}>
          <img
            src={logo}
            alt="logo"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              history.push('/news');
            }}
          />
        </div>
      </div>
      <NotionRenderer fullPage hideHeader blockMap={data} />
    </div>
  ) : (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.push('/news');
          }}
        >
          Back Home
        </Button>
      }
    />
  );
}
