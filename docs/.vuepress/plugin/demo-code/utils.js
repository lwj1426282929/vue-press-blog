const highlight = require('highlight.js')

const filterHTMLTokenFromTokens = (blockMap, tokens) => {
    if (!blockMap) return []
    return tokens.filter(token => {
        const { map, type } = token
        return (
            type === 'html_block' &&
            map[0] >= blockMap[0] &&
            map[1] <= blockMap[1]
        )
    })
}

const getHighlightCode = (str, lang = 'vue') => {
    const code = highlight.highlightAuto(str, ['xml'])
    return `<pre><code class="html xml hljs ">${code.value}</code></pre>`
}

module.exports = {
    filterHTMLTokenFromTokens,
    getHighlightCode
}
