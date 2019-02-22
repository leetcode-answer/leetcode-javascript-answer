const moment = require('moment');
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
            {
                text: '解题思路',
                link: '/mdDocs/'
            },
        ],
        sidebar: {
            '/mdDocs/': [
                ['', 'Two Sum'],
                ['addTwoNumbers', 'Add Two Numbers'],
            ]
        },
        displayAllHeaders: true,
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: true,
            updatePopup: { 
               message: "有新内容。", 
               buttonText: "刷新" 
            }
        },
        repo: 'leetcode-answer/leetcode-javascript-answer',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
    },
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/active-header-links'],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/blog'],
        ['@vuepress/pagination'],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ],
        ['@vuepress/medium-zoom'],
        ['@vuepress/back-to-top']
    ]
}