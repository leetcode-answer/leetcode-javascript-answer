module.exports = {
    title: 'leetcode-javascript-answer',
    description: 'leetcode中使用javascript的解题答案',
    base: '/leetcode-javascript-answer/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    contentLoading: true,
    markdown: {
        lineNumbers: true,
        toc: { includeLevel: [1, 2, 3] }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
        ]
    }
}