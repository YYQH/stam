{%$uri=$smarty.server.REQUEST_URI%}

<div id="app_nav" class="app-nav">
    <ul class="nav-g">
        <li class="nav-i{%if $uri === '/stam'%} on{%/if%}"><a href="/stam">INDEX</a></li>
    </ul>
    <ul class="nav-g">
        <li class="nav-i{%if $uri === '/stam/view/logs'%} on{%/if%}"><a href="/stam/view/logs">统计列表</a></li>
        <li class="nav-i{%if $uri === '/stam/edit/logs'%} on{%/if%}"><a href="/stam/edit/logs">添加统计</a></li>
    </ul>
    <ul class="nav-g">
        <li class="nav-i{%if $uri === '/stam/view/cate'%} on{%/if%}"><a href="/stam/view/cate">需求(分类)列表</a></li>
        <li class="nav-i{%if $uri === '/stam/edit/cate'%} on{%/if%}"><a href="/stam/edit/cate">添加需求(分类)</a></li>
    </ul>
    <ul class="nav-g">
        <li class="nav-i{%if $uri === '/stam/view/keys'%} on{%/if%}"><a href="/stam/view/keys">字段列表</a></li>
        <li class="nav-i{%if $uri === '/stam/edit/keys'%} on{%/if%}"><a href="/stam/edit/keys">添加字段</a></li>
    </ul>
    <ul class="nav-g">
        <li class="nav-i{%if $uri === '/stam/view/pages'%} on{%/if%}"><a href="/stam/view/pages">页面列表</a></li>
        <li class="nav-i{%if $uri === '/stam/edit/pages'%} on{%/if%}"><a href="/stam/edit/pages">添加页面</a></li>
    </ul>
    <ul class="nav-g">
        <li class="nav-i{%if $uri === '/stam/view/document'%} on{%/if%}"><a href="/stam/view/document">使用文档</a></li>
    </ul>
</div>
