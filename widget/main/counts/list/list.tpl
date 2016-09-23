{%widget name="stam:widget/ui/common/title.tpl" mainTitle="统计列表" %}

{%widget name="stam:widget/ui/search/search.tpl"%}


<div class="container-fluid main-list">
    <div class="row table-title">
        <div class="col-lg-1" style="width: 50px">ID</div>
        <div class="col-lg-2">名称</div>
        <div class="col-lg-2">页面</div>
        <div class="col-lg-2">分类</div>
        <div class="col-lg-3">字段</div>
        <div class="col-lg-4">说明</div>
        <div class="col-lg-2 t-c">操作</div>

    </div>
    {%foreach from=$tplData['list']['items'] item=item%}
        <div class="row">
            <div class="col-lg-1 col-id" style="width: 50px"><a href="/stam/view/logs?id={%$item['id']%}">{%$item['id']%}</a></div>
            <div class="col-lg-2 form-text">{%$item['name']%}</div>
            <div class="col-lg-2 form-btn t-l">
                {%if $item.page%}
                    <a class="btn btn-primary btn-sm" href="/stam/view/logs?pid={%$item.page.id%}">{%$item.page.name%}</a>
                {%/if%}
            </div>
            <div class="col-lg-2 form-btn t-l">
                {%if $item.cate%}
                    <a class="btn btn-primary btn-sm" href="/stam/view/logs?cid={%$item.cate.id%}">{%$item.cate.name%}</a>
                {%/if%}
            </div>
            <div class="col-lg-3 form-btn t-l">
                {%foreach from=$item['keys'] item=subItem%}
                    <a class="btn btn-primary btn-sm" href="/stam/edit/keys?id={%$subItem['id']%}">{%$subItem['name']%}</a>
                {%/foreach%}
            </div>
            <div class="col-lg-4 form-text">{%$item['instructions']|escape:none%}</div>
            <div class="col-lg-2 form-btn">
                <a class="btn btn-success btn-sm" href="/stam/edit/logs?id={%$item['id']%}">编辑</a>
                <a class="btn btn-danger btn-sm" href="#" onclick="bd.confirmDelete(event, {%$item['id']%});">删除</a>
            </div>
        </div>
    {%/foreach%}
</div>
{%widget name="stam:widget/actions/remove.tpl" api="/stam/del/logs"%}

<div class="page-setter">
    {%widget name="stam:widget/ui/pagelist/pagelist.tpl"%}
</div>
