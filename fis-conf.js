/**
 * @file Describe the file
 *
 * fis3 编译配置文件，FIS3 的构建是不会对源码做修改的，
 * 而是构建产出到了另外一个目录，并且构建的结果才是用来上线使用的
 *
 * 资源定位
 * 文件指纹
 * CDN domain
 *
 */

fis.require('smarty')(fis);

// 配置命名空间
fis.set('namespace', 'stam');

// swf关闭文件指纹
fis.match('*.{swf,html}', {
    useHash: false
});

// 压缩优化
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

// 编译 js 中的 jsx
fis.match('widget/**.jsx', {
    isMod: true,
    parser: fis.plugin('babel2'),
    rExt: '.js'
});
// 编译 tpl 中的 jsx
fis.match('widget/**.tpl:jsx', {
    parser: fis.plugin('babel2')
});


// 文件pack
fis.match('::package', {
    packager: fis.plugin('map', {
        'pkg/stam.css': [
            /widget\/.*\.(less|css)/i
        ],
        'pkg/stam.js': [
            /widget\/.*\.(js|jsx)/i
        ]
    })
});

// 移除.sh
fis.media('*.sh', {
    release: '$0'
});

// 定义上传方法
function push(to) {
    return fis.plugin('http-push', {
        receiver: RECEIVER,
        to: to
    });
}

// 默认media，fis3 release
fis.media('dev').match('*', {
    useHash: false,
    useSprite: false,
    optimizer: null
});

// 下面的覆盖上面的，deploy有bug
fis.media('deploy')
    .match('*.{js,less,css,html,swf}', {
        optimizer: null,
        deploy: push(rootDIR + '/webroot')
    }).match('*-map.json', {
        deploy: push(rootDIR + '/data/smarty')
    }).match('::image', {
        optimizer: null,
        deploy: push(rootDIR + '/webroot')
    }).match('/plugin/**.php', {
        deploy: push(rootDIR + '/data/smarty/plugin')
    }).match('*.tpl', {
        deploy: push(rootDIR)
    })

// 部署fis到线上
// fis.media('prod')
//     .match(/^\/page\/detail\/.*?([^\/]+)\.tpl$/i, {
//         release: '/template/stam/page/$1/page.tpl'
//     }).match(/^\/page\/json\/.*?([^\/]+)\.tpl$/i, {
//         release: '/template/stam/page/$1/page.tpl'
//     }).match('*.sh', {
//         release: false
//     });


