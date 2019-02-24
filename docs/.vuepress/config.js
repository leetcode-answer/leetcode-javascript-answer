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
        sidebarDepth: 2,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '解题思路',
                link: '/mdDocs/'
            },
            { text: '更新日志', link: '/version/' }
        ],
        sidebar: {
            '/mdDocs/': [
                ['', '两数之和'],
                ['longestSubstringWithoutRepeatingCharacters', '无重复字符的最长子串'],
                ['zigZagConversion', 'Z 字形变换'],
                ['reverseInteger', '整数反转'],
                ['palindromeNumber', '回文数'],
                ['romanToInteger', '罗马数字转整数']
            ]
        },
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: { 
               message: "有新内容。", 
               buttonText: "刷新" 
            }
        },
        repo: 'leetcode-answer/leetcode-javascript-answer',
        docsRepo: 'leetcode-answer/leetcode-javascript-answer',
        docsDir: 'docs',
        docsBranch: 'master',
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