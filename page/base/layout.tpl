<!DOCTYPE html>
{%* 自定义变量 *%}
{%block name="block_assign"%}{%/block%}

{%* html头部可复写：css hack用 *%}
{%block name="block_html"%}
{%html framework="stam:static/js/core.js"%}
{%/block%}

<!--STATUS OK-->
    {%head%}
        {%* 页面title *%}
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="baidu-site-verification" content="6dab5779bd511c4aadce3fae9a8eb97d"/>
        <title>{%block name="block_title"%}百度图片 统计管理系统{%/block%}</title>
        <script>
            var bd = {};
            bd.tplData = {%json_encode($tplData|default:'{}')%};
        </script>
        {%block name="block_dnsprefetch"%}
            <link rel='dns-prefetch' href="http://imgt6.bdstatic.com" />
            <link rel='dns-prefetch' href="http://imgt7.bdstatic.com" />
            <link rel='dns-prefetch' href="http://imgt8.bdstatic.com" />
            <link rel='dns-prefetch' href="http://imgt9.bdstatic.com" />
            <link rel='dns-prefetch' href="http://a.hiphotos.baidu.com" />
            <link rel='dns-prefetch' href="http://b.hiphotos.baidu.com" />
            <link rel='dns-prefetch' href="http://c.hiphotos.baidu.com" />
            <link rel='dns-prefetch' href="http://d.hiphotos.baidu.com" />
            <link rel='dns-prefetch' href="http://e.hiphotos.baidu.com" />
            <link rel='dns-prefetch' href="http://f.hiphotos.baidu.com" />
            <link rel='dns-prefetch' href="http://g.hiphotos.baidu.com" />
            <link rel='dns-prefetch' href="http://h.hiphotos.baidu.com" />
        {%/block%}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {%* RESET CSS *%}
        {%block name="block_reset_css"%}
            {%require name="stam:static/css/bootstrap-3-3-5.css"%}
        {%/block%}

        {%* 头部css *%}
        {%block name="block_head_css"%}{%/block%}

        {%* 通用配置 通用变量 *%}
        {%block name="block_config"%}{%/block%}

        {%* 头部js *%}
        {%block name="block_head_js"%}{%/block%}

    {%/head%}

    {%body class="{%$bodyCls%}"%}

        {%* 内容区域  *%}
        {%block name="block_content"%}

            <div id="app" class="app">

                {%* header part *%}
                {%widget name="stam:widget/header/header.tpl"%}

                {%* nav part *%}
                {%widget name="stam:widget/nav/nav.tpl"%}

                {%* main part *%}
                <div class="app-main">
                     {%block name="block_main"%}{%/block%}
                </div>

            </div>

        {%/block%}

        {%* 底部js区域 *%}
        {%block name="block_foot_js"%}{%/block%}

        {%block name="block_page_end"%}{%/block%}

    {%/body%}
{%/html%}
