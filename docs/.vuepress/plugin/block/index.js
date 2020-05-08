module.exports = {
    type: 'block',
    render(tokens, idx) {
        const m = tokens[idx].info.trim().match(/^block\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
            const description = m && m.length > 1 ? m[1] : '';
            const color = description.split(' ')[0] || '#1989fa';
            const title = description.split(' ')[1] || '';
            const content =
                tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
            return `<block color="${color}">
                    ${title ? `<p class="custom-block-title">${title}</p>` : ''}
                    <p>${content}</p>
                `;
        }
        return '</block>';
    },
};
