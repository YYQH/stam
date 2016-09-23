{%extends file="stam/page/base/layout.tpl"%}


{%block name="block_main"%}
<div class="index-box">
    <div class="ball b-page"><a href="/stam/view/pages">页面列表</a></div>
    <div class="ball b-keys"><a href="/stam/view/keys">字段查询</a></div>
    <div class="ball b-monitor"><a href="/stav/view/logs">监控与报警</a></div>
    <div class="ball b-doc"><a href="/stam/view/document">使用文档</a></div>
    <div class="ball b-demands"><a href="/stam/eidt/demands" onclick="return false;">新增需求</a></div>
</div>
{%/block%}
