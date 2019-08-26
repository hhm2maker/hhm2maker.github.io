export
default {
        'en-us':
        {
            sidemenu:
            [{
                title:
                'header title',
                children: [{
                    title: 'demo1',
                    link: '/en-us/docs/demo1.html',
                },
                {
                    title: 'demo2',
                    link: '/en-us/docs/demo2.html',
                },
                {
                    title: 'dir',
                    opened: true,
                    children: [{
                        title: 'demo3',
                        link: '/en-us/docs/dir/demo3.html',
                    },
                    ],
                },
                ],
            },
            ],
            barText: 'Documentation',
        },
        'zh-cn': {
            sidemenu: [{
                title: '准备开始',
                children: [{
                    title: '安装',
                    link: '/zh-cn/docs/install.html',
                },
                {
                    title: '文件',
                    link: '/zh-cn/docs/file.html',
                },
                {
                    title: '更新',
                    link: '/zh-cn/docs/update.html',
                },
                ],
            },
            {
                title: '灯光语句',
                children: [{
                    title: '概念',
                    link: '/zh-cn/docs/lightscript_concept.html',
                },
                {
                    title: '实例',
                    opened: true,
                    children: [{
                        title: '左下角至右上角的扩散',
                        link: '/zh-cn/docs/case_diffusion.html',
                    },
                    {
                        title: '方块移动',
                        link: '/zh-cn/docs/case_blockmoving.html',
                    },
                    ],
                },
                {
                    title: '自定义编辑方法',
                    opened: true,
                    children: [{
                        title: '单编辑方法',
                        link: '/zh-cn/docs/single_editing_method.html',
                    },
                    ],
                },
                ]
            },
            {
                title: '博客系统',
                children: [{
                    title: '概念',
                    link: '/zh-cn/docs/blog_concept.html',
                },
                {
                    title: '创建博客界面',
                    link: '/zh-cn/docs/creating_blog_interface.html',
                },
                {
                    title: '编写博客逻辑',
                    link: '/zh-cn/docs/writing_blog_logic.html',
                },
                ],
            },
            {
                title: '错误',
                children: [{
                    title: 'System.InvalidOperationException',
                    link: '/zh-cn/docs/error_1.html',
                },

                ],
            },
            {
                title: '附件',
                children: [{
                    title: '文档',
                    link: '/zh-cn/docs/document.html',
                },
                {
                    title: '位置表',
                    link: '/zh-cn/docs/position.html',
                },
                {
                    title: '颜色表',
                    link: '/zh-cn/docs/color.html',
                },
                {
                    title: '开销',
                    link: '/zh-cn/docs/money.html',
                },
                ],
            },
            ],
            barText: '文档',
        },
    };