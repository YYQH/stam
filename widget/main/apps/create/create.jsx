/**
 * @fileOverview
 * @Writer : zhangrongming@baidu.com
 */

'use strict';

var Tags 		= require('stam:widget/ui/tags/tags.js');
var TagsMixin 	= require('stam:widget/mixin/tags.js').TagMixin;
var CreateMixin 	= require('stam:widget/mixin/create.js').CreateMixin;

var CountCreate = React.createClass({
	mixins : [TagsMixin, CreateMixin],
	getDefaultProps : function(){
		return {
			submitUrl : '/stam/add/pages'
		}
	},
	getInitialState : function(){
		return {
			page 	: '',
			app		: '',
			keys	: '',
			intro 	: ''
		}
	},
	componentDidMount : function(){
		var that = this,
			$root = $(ReactDOM.findDOMNode(this).parentNode);
		$root.delegate('.field-create-submit-list', 'click', function(){
			that.submitData('/stam/view/pages');
		}).delegate('.field-create-submit-add', 'click', function(){
			that.submitData(location.href);
		})
	},
	render : function(){
		return (
			<div className="container-fluid main-form form-horizontal">
				<div className="row">
					<div className="form-group">
			            <label htmlFor="apps_create_names" className="col-lg-2 control-label">name：</label>
			            <div className="col-lg-5 ">
			                <input type="text" className="form-control field-create-instructions" placeholder="请输入需求名称" id="apps_create_names" data-id="intro" onChange={this.changeValue} />
			            </div>
			            <div className="col-lg-3">
			                <span className="description">需求名称</span>
			            </div>
			        </div>
				</div>
				<Tags id="page" title="页面" description="请输入页面名称进行搜索" placeholder="请输入页面名称" parentCallback={this.tagChange} mode="single" />
			    <div className="row">
			        <div className="form-group">
			            <label htmlFor="apps_create_instructions" className="col-lg-2 control-label">instructions：</label>
			            <div className="col-lg-5 ">
			                <input type="text" className="form-control field-create-instructions" placeholder="请输入说明文案" id="apps_create_instructions" data-id="intro" onChange={this.changeValue} />
			            </div>
			            <div className="col-lg-3">
			                <span className="description">统计描述说明</span>
			            </div>
			        </div>
			    </div>
			    <div className="row no-border mt-30">
			        <div className="col-lg-5 col-lg-offset-2">
			            <button className="btn btn-success field-create-submit-add ml-n10">保存继续添加</button>
			            <button className="btn btn-success field-create-submit-list ml-20">保存预览列表</button>
			        </div>
			    </div>
			</div>
		);
	}
});

module.exports = CountCreate;