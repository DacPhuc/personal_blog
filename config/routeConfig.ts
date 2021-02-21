export default [
  {
    path: '/article',
    component: '../layouts/BlankLayout',
    routes: [
      {
        name: 'news',
        icon: 'HomeOutlined',
        path: '/article/:id',
        component: './notionpage',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        name: 'news',
        icon: 'CoffeeOutlined',
        path: '/news',
        component: './articles',
      },
    ],
  },
];
