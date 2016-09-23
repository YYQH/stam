<div class="dropdown pull-right page-num-setting">
	<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">每页显示50张<span class="caret"></span></button>
	<ul class="dropdown-menu">
		<li ng-repeat="pageNum in content.pageStepNums" ng-click="content.changePageNum(pageNum)"><a onclick="return false;">每页显示50张</a></li>
	</ul>
</div>