module.exports = {
    title: 'Qexo',
    description: '一个快速、强大、漂亮的Hexo在线管理器',
    head: [
        ['link', { rel: 'icon', href: '//unpkg.com/qexo-static@1.4.0/assets/img/brand/favicon.ico' }]
    ],
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有文章更新了",
                buttonText: "刷新"
            }
        },
        '@vuepress/back-to-top': true
    },
    markdown: {
        lineNumbers: true
    }, themeConfig: {
        searchMaxSuggestions: 10,
        sidebar: {
            '/zh-cn/v1/': [{
                title: '展示',  //组名
                path: '/zh-cn/v1/'   //该分组下要显示的文件的目录
            }, {
                title: '快速上手',  //组名
                children: ['Vercel 部署', '本地部署', '版本更新', '友链管理', '访客统计', '自定字段', 'Q&A'],   //该分组下要显示的文件的目录
            }, {
                title: '配置',  //组名
                children: ['Github 配置', '自定义图床配置', 'S3 图床配置', 'FTP 图床配置', 'Vercel 更新配置', '统计配置', '消息配置'],   //该分组下要显示的文件的目录
            }, {
                title: '鸣谢',  //组名
                path: '/zh-cn/v1/鸣谢.html'   //该分组下要显示的文件的目录
            }],
            '/zh-cn/v2/': [{
                title: '展示',  //组名
                path: '/zh-cn/v2/'   //该分组下要显示的文件的目录
            }, {
                title: '快速上手',  //组名
                children: ['Vercel 部署', '本地部署', '版本更新', '友链管理', '访客统计', '自定字段', 'Q&A'],   //该分组下要显示的文件的目录
            }, {
                title: '配置',  //组名
                children: ['Github 配置', '自定义图床配置', 'S3 图床配置', 'FTP 图床配置', 'Vercel 更新配置', '统计配置', '消息配置'],   //该分组下要显示的文件的目录
            }, {
                title: '鸣谢',  //组名
                path: '/zh-cn/v2/鸣谢.html'   //该分组下要显示的文件的目录
            }]
        },
        nav: [{text: '快速上手', link: '/zh-cn/v2/'}, {text: 'V1', link: '/zh-cn/v1/'}, {
            text: '对外API',
            link: '/zh-cn/v2/API-%E6%96%87%E6%A1%A3.html'
        }, {text: 'Github', link: 'https://github.com/Qexo/Qexo', target: '_blank'}]
    }
}