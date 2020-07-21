import Element from 'element-ui';
import Packages from './packages';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue, options, router }) => {
    Vue.use(Element);
    Vue.use(Packages);
};
