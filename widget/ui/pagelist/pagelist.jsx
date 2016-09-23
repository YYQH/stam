/**
 * @fileOverview
 */

'use strict';

var TagsMixin 	= require('stam:widget/mixin/querySearch.jsx').QuerySearchMixin;


var PageList = React.createClass({
	mixins : [TagsMixin],
	getDefaultProps : function(){
		return {
			pageNum 	: 1,
			totalNum 	: 1,
			divideNum 	: 11,
			groupNum 	: 4
		}
	},
	getInitialState : function(){
		// var props = this.props;
		// if(props.totalNum > props.divideNum){
		// 	return this.getSearchPageConf();
		// }else{
			return this.getDefaultPageConf();
		// }
	},
	componentWillMount : function(){

	},
	componentDidMount : function(){

	},
	pushPageArr : function(arr, i, current){
		arr.push({
			num 	: i + 1,
			active 	: i == current ? 'active' : (i == '...' ? 'disabled' : '')
		});
	},
	confResult : function(pageArr, current, len){
		return {
			page 		: pageArr.length > 0 ? pageArr : [{num:1,active:'active'}],
			pageCurrent : current,
			pageTotal 	: len > 0 ? len : 1,
			pageFirst 	: current == 1 		? 'disabled' : '',
			pageLast 	: current == len 	? 'disabled' : (len == 0 ? 'disabled' : ''),
			isSearchPage: +this.props.totalNum > this.props.divideNum ? true : false,
			couldSearch : 'disabled'
		};
	},
	getDefaultPageConf : function(){
		var props 		= this.props,
			len 	 	= +props.totalNum,
			current 	= +props.pageNum,
			pageArr 	= [],
			i 			= 0;
		for(; i < len; i++){
			this.pushPageArr(pageArr, i, current);
		}
		return this.confResult(pageArr, current, len);
	},
	getSearchPageConf : function(){
		var props 		= this.props,
			pageTotal 	= +props.totalNum,
			current 	= +props.pageNum,
			pageShowNum = props.divideNum,
			pageGroup 	= props.groupNum,
			pageArr 	= [],
			/* 1 2 3 4 choose(5) 6 7 8 9 ... 99 100 */
			pageLast 	= pageShowNum - pageGroup * 2 - 1,
			i;
		// 距末尾相差至少pageShowNum页 '...'在前面
		if(pageTotal - current > pageGroup + pageLast){
			if(current <= pageGroup){
				for(i = 1; i <= pageGroup * 2 + 1; i++){
					this.pushPageArr(pageArr, i, current);
				}
			}else{
				for(i = current - pageGroup; i <= current + pageGroup; i++){
					this.pushPageArr(pageArr, i, current);
				}
			}
			// 后三页
			this.pushPageArr(pageArr, '...', 		 current);
			this.pushPageArr(pageArr, pageTotal - 1, current);
			this.pushPageArr(pageArr, pageTotal,	 current);
		// 距末尾相差小于pageShowNum页，取后pageShowNum页
		}else if(pageTotal - current <= pageGroup + pageLast){
			for(i = pageTotal - pageShowNum; i <= pageTotal; i++){
				this.pushPageArr(pageArr, i, current);
			}
		}
		return this.confResult(pageArr, current, pageTotal);
	},
	// resetLocation : function(value){
	// 	window.location.herf = window.location.href
	// 		.replace(/[^\&]?pn\=[^\&]*/gi, function(){
	// 			return 'pn=' + value;
	// 		})
	// },
	changePageListNum : function(e){
		var cls = $(e.target).parent().attr('class').replace(' ', '');
		var val = $(e.target).html();
		if(cls === 'pre'){
			this.goSearch('offset', 1)
		}else if(cls === 'next'){
			this.goSearch('offset', this.props.totalNum)
		}else{
			this.goSearch('offset', val);
		}

	},
	changePageSearchNum : function(e){
		var tar = $(e.target);
		if(!tar.parent().hasClass('disabled')){
			
		}
	},
	changeSearchInputNum : function(e){
		var value = +$(e.target).val();
		if(!isNaN(value) && value <= this.props.totalNum && value > 0){
			this.setState({
				couldSearch : ''
			})
		}else{
			this.setState({
				couldSearch : 'disabled'
			})
		}
		
	},
	getListDom : function(){
		var page = this.state.page;
		var that = this;
		return page.map(function(item, i){
			return (
				<li key={i} className={item.active} onClick={that.changePageListNum}><span>{item.num}</span></li>
			);
		});
	},
	render : function(){
		var state = this.state,
			isSearchPage = state.isSearchPage ? '' : 'hide';
		return (
			<ul className="pagination">
				<li className={'pre ' + state.pageFirst} onClick={this.changePageListNum}><span>&laquo;</span></li>
				{this.getListDom()}
				<li className={'next ' + state.pageLast} onClick={this.changePageListNum}><span>&raquo;</span></li>
			</ul>
		);
	}
});


module.exports = PageList;