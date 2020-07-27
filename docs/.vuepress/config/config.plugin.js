const demoCode = require('../plugin/demo-code')
const contents = require('../plugin/contents')
const block = require('../plugin/block')

module.exports = [
  // pwa
  ['@vuepress/pwa'],

  // 返回顶部
  ['@vuepress/back-to-top', true],

  // 预览图片
  [
    '@vuepress/medium-zoom',
    { selector: '.theme-default-content :not(a)  img' },
  ],

  // 数学公式
  ['@codeciting/vuepress-plugin-math'],

  // 目录
  [contents],

  // demo-code
  [demoCode],

  // 复制代码
  [
    'one-click-copy',
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
        'div[class*="code-block__inner-code"]',
        '.copy-container',
      ],
      copyMessage: '复制成功',
      duration: 1000,
    },
  ],

  ['container', block],

  // 自定义容器
  [
    'container',
    {
      type: 'message',
      render: (tokens, idx) => {
        const m = tokens[idx].info.trim().match(/^message\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          const description = m && m.length > 1 ? m[1] : ''
          const borderColor = description.split(' ')[0] || '#1989fa'
          const title = description.split(' ')[1] || ''
          const content =
            tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
          return `<div class="custom-block tip" style="border-color: ${borderColor};">
                    ${title ? `<p class="custom-block-title">${title}</p>` : ''}
                    <p>${content}</p>
                `
        }
        return '</div>'
      },
    },
  ],
]
