import Element from 'element-ui';
import './styles/element-#3EAF7C/index.css';
import 'highlight.js/styles/color-brewer.css';
import './styles/gitalk.css';
import Packages from './packages';
import md5 from 'md5';

function integrateGitalk(router) {
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src =
        'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);

    router.afterEach((to) => {
        if (scriptGitalk.onload) {
            loadGitalk(to);
        } else {
            scriptGitalk.onload = () => {
                loadGitalk(to);
            };
        }
    });

    function loadGitalk(to) {
        let commentsContainer = document.getElementById('gitalk-container');
        if (!commentsContainer) {
            commentsContainer = document.createElement('div');
            commentsContainer.id = 'gitalk-container';
            commentsContainer.classList.add('content');
        }
        const $page = document.querySelector('.page');
        if ($page) {
            $page.appendChild(commentsContainer);
            if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
                renderGitalk(to.fullPath);
            }
        }
    }

    function renderGitalk(fullPath) {
        const gitalk = new Gitalk({
            clientID: 'ba977b201b0419466842',
            clientSecret: '59cb70536d498804589df8e7d521be7ab25b5506', // come from github development
            repo: 'vue-press-blog',
            owner: 'lwj1426282929',
            admin: ['lwj1426282929'],
            id: md5(fullPath),
            distractionFreeMode: false,
            language: 'zh-CN',
        });
        gitalk.render('gitalk-container');
    }
}

export default ({ Vue, options, router }) => {
    Vue.use(Element);
    Vue.use(Packages);
    try {
        document && integrateGitalk(router);
    } catch (e) {
        console.error(e.message);
    }
};
