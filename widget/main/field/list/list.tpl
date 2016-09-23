{%widget name="stam:widget/ui/common/title.tpl" mainTitle="字段列表" %}

{%widget name="stam:widget/ui/search/search.tpl"%}
<div class="container-fluid main-list">
    <div class="row table-title">
        <div class="col-lg-1" style="width: 50px">ID</div>
        <div class="col-lg-2">名称</div>
        <div class="col-lg-2">PHP表达式</div>
        <div class="col-lg-1" style="width: 60px">公用</div>
        <div class="col-lg-1" style="width: 60px">废弃</div>
        <div class="col-lg-4">说明</div>
        <div class="col-lg-2 t-c">操作</div>

    </div>
    {%foreach from=$tplData['list']['items'] key=k item=item%}
        <div class="row">
            <div class="col-lg-1 col-id" style="width: 50px"><a href="/stam/view/keys?id={%$item['id']%}">{%$item['id']%}</a></div>
            <div class="col-lg-2">{%$item['name']%}</div>
            <div class="col-lg-2">{%$item['patterns']%}</div>
            <div class="col-lg-1 form-checkbox" style="width: 60px; position: relative;">{%if $item['is_common'] == '1' %}<span class="flg flg-comm"></span>{%/if%}</div>
            <div class="col-lg-1 form-checkbox" style="width: 60px; position: relative;">{%if $item['is_depracated'] == '1' %}<span class="flg flg-depr"></span>{%/if%}</div>
            <div class="col-lg-4">{%$item['instructions']%}</div>
            <div class="col-lg-2 form-btn">
                <a class="btn btn-success btn-sm" href="/stam/edit/keys?id={%$item['id']%}">编辑</a>
                <a class="btn btn-danger btn-sm" href="#" onclick="bd.confirmDelete(event, {%$item['id']%});">删除</a>
            </div>
        </div>
    {%/foreach%}
</div>
{%widget name="stam:widget/actions/remove.tpl" api="/stam/del/keys"%}
<div class="page-setter">
    {%widget name="stam:widget/ui/pagelist/pagelist.tpl"%}
</div>

