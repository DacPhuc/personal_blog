import { Settings as ProSettings } from '@ant-design/pro-layout';


type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  menu: {
    locale: true,
  },
  title: 'Hi!',
  pwa: false,
  iconfontUrl: '',
  footerRender: false,
  splitMenus: false,
};

export type { DefaultSettings };

export default proSettings;
