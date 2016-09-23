<div id="main_search" class="row main-search"></div>

{%script type="text/x-jsx" %}
	require.async('stam:widget/ui/search/search', function(Search){
		ReactDOM.render(
			<Search />,
			document.getElementById('main_search')
		);
	});
{%/script%}
