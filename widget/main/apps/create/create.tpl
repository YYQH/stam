{%widget name="stam:widget/ui/common/title.tpl" mainTitle="项目创建" %}

<div id="main_apps_create"></div>

{%script type="text/x-jsx"%}
	require.async('stam:widget/main/apps/create/create.js', function(DC){
		ReactDOM.render(
			<DC />,
			document.getElementById('main_apps_create')
		);
	});
{%/script%}