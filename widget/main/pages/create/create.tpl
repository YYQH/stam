{%widget name="stam:widget/ui/common/title.tpl" mainTitle="页面修改/创建" %}
<div id="main_pages_create"></div>

{%script type="text/x-jsx"%}
    require.async('stam:widget/main/pages/create/create.jsx', function(PC){
        var data = bd.tplData.formInfo;
        ReactDOM.render(
            <PC data={data} />,
            document.getElementById('main_pages_create')
        );
    });
{%/script%}
