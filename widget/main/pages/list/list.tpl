{%widget name="stam:widget/ui/common/title.tpl" mainTitle="页面列表" %}


{%widget name="stam:widget/ui/search/search.tpl"%}

<div class="container-fluid main-list">
    <div class="row table-title">
        <div class="col-lg-1">ID</div>
        <div class="col-lg-2">名称</div>
        <div class="col-lg-5">统计</div>
        <div class="col-lg-2">说明</div>
        <div class="col-lg-2 t-c">操作</div>

    </div>
    {%foreach from=$tplData['list']['items'] item=item%}
        <div class="row">
            <div class="col-lg-1"><a href="/stam/edit/pages?id={%$item['id']%}">{%$item['id']%}</a></div>
            <div class="col-lg-2 form-text">{%$item['name']%}</div>
            <div class="col-lg-5 form-btn t-l">
                <a class="btn btn-success btn-sm" href="/stam/view/logs?pid={%$item['id']%}">查看</a>
                {%foreach from=$item['logs'] item=subItem%}
                    <a class="btn btn-primary btn-sm" href="/stam/edit/logs?id={%$subItem['id']%}">{%$subItem['name']%}</a>
                {%/foreach%}
            </div>
            <div class="col-lg-2 form-text">{%$item['instructions']%}</div>
            <div class="col-lg-2 form-btn">
                <a class="btn btn-success btn-sm" href="/stam/edit/pages?id={%$item['id']%}">编辑</a>
                <a class="btn btn-danger btn-sm" href="#" onclick="bd.confirmDelete(event, {%$item['id']%});">删除</a>
            </div>
        </div>
    {%/foreach%}
</div>
{%widget name="stam:widget/actions/remove.tpl" api="/stam/del/pages"%}
<div class="page-setter">
    {%widget name="stam:widget/ui/pagelist/pagelist.tpl"%}
</div>
