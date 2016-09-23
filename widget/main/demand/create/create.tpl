{%widget name="stam:widget/ui/common/title.tpl" mainTitle="需求创建" %}

<div id="main_demand_create"></div>

{%script type="text/x-jsx"%}
    require.async('stam:widget/main/demand/create/create.jsx', function(DC){
        var data = bd.tplData.formInfo;
        ReactDOM.render(
            <DC data={data} />,
            document.getElementById('main_demand_create')
        );
    });
{%/script%}
