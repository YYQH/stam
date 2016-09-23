/**
 * @fileOverview
 * @Writer : zhangrongming@baidu.com
 */

'use strict';

var Tags        = require('stam:widget/ui/tags/tags.jsx');
var Pages        = require('stam:widget/ui/pages/list.jsx');
var CateList        = require('stam:widget/ui/cate/list.jsx');
var CreateMixin = require('stam:widget/mixin/create.jsx').CreateMixin;

var CountCreate = React.createClass({
    mixins : [CreateMixin],
    getDefaultProps : function(){
        return {
            submitUrl : '/stam/add/logs',
            updateUrl : '/stam/update/logs',
            text: {
                keys:           '请选择字段！',
                name:           '请输入名称！',
                instructions:   '请输入说明！'
            },
        }
    },
    changeCate: function(value) {
        this.changeState('cate_id', value);
    },
    changePage: function(value) {
        this.changeState('page_id', value);
    },
    getInitialState : function(){
        if (this.props.data.length === 0) {
            return {
                name:           '',
                instructions:   '',
                keys:           '',
                cate_id:        0
            };
        } else {
            return this.props.data;
        }
    },
    render : function(){
        return (
            <div className="container-fluid main-form form-horizontal">
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="field_create_name" className="col-lg-2 control-label">名称：</label>
                        <div className="col-lg-5 ">
                            <input type="text" value={this.state.name} name="name" className="form-control field-create-name" placeholder="请输入统计名称" id="field_create_name" data-id="intro" onChange={this.changeInput} />
                        </div>
                        <div className="col-lg-3">
                            <span className="description">统计名称</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="col-lg-2 control-label">页面：</label>
                        <div className="col-lg-5 ">
                            <Pages callback={this.changePage} />
                        </div>
                        <div className="col-lg-3">
                            <span className="description">选择所属页面</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="col-lg-2 control-label">分类：</label>
                        <div className="col-lg-5 ">
                            <CateList callback={this.changeCate} />
                        </div>
                        <div className="col-lg-3">
                            <span className="description">选择分类</span>
                        </div>
                    </div>
                </div>
                <Tags parentCallback={this.changeTags} tags={this.state.keys} />
                <div className="row main-textarea">
                    <div className="form-group">
                        <label htmlFor="field_create_instructions" className="col-lg-2 control-label">说明：</label>
                        <div className="col-lg-5 textarea-container">
                            <textarea value={this.state.instructions} name="instructions" className="form-control field-create-instructions" placeholder="请填写统计说明" id="field_create_instructions" onChange={this.changeInput}></textarea>
                        </div>
                        <div className="col-lg-3">
                            <span className="description">统计描述说明</span>
                        </div>
                    </div>
                </div>
                <div className="row no-border mt-30">
                    <div className="col-lg-5 col-lg-offset-2">
                        <button className="btn btn-success ml-n10" onClick={this.submitData.bind(this, '/stam/edit/logs')}>保存继续添加</button>
                        <button className="btn btn-success ml-20" onClick={this.submitData.bind(this, '/stam/view/logs')}>保存预览列表</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CountCreate;
