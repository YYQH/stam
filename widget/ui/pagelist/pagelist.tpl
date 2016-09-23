<nav id="page_list" class="pull-right page-list"></nav>

{%script type="text/x-jsx" %}
	require.async('stam:widget/ui/pagelist/pagelist', function(PageList){
		var count = +'{%$tplData.list.info.count%}';
		var page = +'{%$tplData.list.info.length%}';
		ReactDOM.render(
			<PageList pageNum="{%$tplData.list.info.offset%}" totalNum={Math.ceil(count/page)} />,
			document.getElementById('page_list')
		);
	});
{%/script%}
