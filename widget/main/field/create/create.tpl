{%widget name="stam:widget/ui/common/title.tpl" mainTitle="字段修改/创建" %}
<div id="main_field_create"></div>

{%script type="text/x-jsx"%}
    require.async('stam:widget/main/field/create/create', function(FC){
        var data = bd.tplData.formInfo;
        ReactDOM.render(
            <FC data={data} />,
            document.getElementById('main_field_create')
        );
    });
{%/script%}
