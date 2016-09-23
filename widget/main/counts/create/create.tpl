{%widget name="stam:widget/ui/common/title.tpl" mainTitle="统计修改/创建" %}

<div id="main_counts_create"></div>
{%script type="text/x-jsx"%}
    
    require.async('stam:widget/main/counts/create/create.jsx', function(CC){
        var data = bd.tplData.formInfo;
        ReactDOM.render(
            <CC data={data} />,
            document.getElementById('main_counts_create')
        );
    });
{%/script%}
