{%extends file="stam/page/base/layout.tpl"%}

{%block name="block_head_css"%}
    {%require name="stam:static/css/markdown.css"%}
{%/block%}
{%block name="block_main"%}
{%widget name="stam:widget/ui/common/title.tpl" mainTitle="字段详情" %}
<div id="det-wrapper">
    <table id="tb-det">
        <caption>{%$tplData.detail.name%}</caption>
        <tr>
            <th width="30%">Name</th>
            <th>Value</th>
        </tr>
        {%foreach from=$tplData.detail key=key item=value%}
            <tr>
                <td>{%$key%}</td>
                <td>{%$value|markdown|escape:none%}</td>
            </tr>
        {%/foreach%}
        <tr>
            <td>-</td>
            <td>
                <a class="btn btn-success btn-sm" href="/stam/edit/keys?id={%$$tplData.detail.id%}">编辑</a>
                <a class="btn btn-danger btn-sm" href="#" onclick="bd.confirmDelete(event, {%$$tplData.detail.id%});">删除</a>
            </td>
        </tr>
    </table>
</div>
{%/block%}
