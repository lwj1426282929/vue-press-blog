import Element from 'element-ui';
import './styles/element-#3EAF7C/index.css';
import 'highlight.js/styles/color-brewer.css';
import Packages from './packages';

export default ({ Vue, options, router }) => {
    Vue.use(Element);
    Vue.use(Packages);
};
