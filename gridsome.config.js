// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Devin Goble\'s blog',
    siteDescription: 'A simple blog designed with Gridsome',
    plugins: [{
        use: '@gridsome/source-filesystem',
        options: {
            path: 'content/posts/**/*.md',
            typeName: 'Post',
            route: '/blog/:year/:month/:day/:title',
            refs: {
                tags: {
                    typeName: 'Tag',
                    create: true
                },
            }
        }
    },
    {
        use: 'gridsome-plugin-tailwindcss',
        options: {
            tailwindConfig: './tailwind.config.js',
        }
    }
    ],
    templates: {
        Tag: '/tag/:id',
        Post: '/blog/:year/:month/:day/:title'
    },
    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    }
}