/**
 * @fileOverview
 */

'use strict';

var TagsMixin 	= require('stam:widget/mixin/querySearch.jsx').QuerySearchMixin;


var Search = React.createClass({
	mixins : [TagsMixin],
	searchContent : function(e){
		var val = $(e.target).parent().siblings('input').val();
		if(val){
			this.goSearch('s', val);
		}
	},
	render : function(){
		return (
			<div className="col-lg-5">
		        <div className="input-group">
		            <input type="text" className="form-control" placeholder="输入您要搜索的内容" />
		            <span className="input-group-btn">
		                <button className="btn btn-default go-search" type="button" onClick={this.searchContent}>搜索</button>
		            </span>
		        </div>
		    </div>
		);
	}
});


module.exports = Search;