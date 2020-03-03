import Element from 'element-ui';
import './styles/element-#3EAF7C/index.css';

import copy from './common/copy';

export default ({ Vue }) => {
  Vue.use(Element);
  setTimeout(() => {
    try {
      document && (() => { copy(); })();
    } catch {}
  }, 500);
};
