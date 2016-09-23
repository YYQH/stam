/**
 * @fileOverview
 * @Writer : zhangrongming@baidu.com
 */

'use strict';

var Tags        = require('stam:widget/ui/tags/tags.jsx');
var CreateMixin = require('stam:widget/mixin/create.jsx').CreateMixin;

var PageCreate = React.createClass({
    mixins : [CreateMixin],
    getDefaultProps : function(){
        return {
            submitUrl : '/stam/add/cate',
            updateUrl : '/stam/update/cate',
            text: {
                name:           '请输入名称！',
                instructions:   '请输入说明！'
            },
        }
    },
    getInitialState : function(){
        if (!this.props.data || this.props.data.length === 0) {
            return {
                name:           '',
                instructions:   ''
            };
        } else {
            return this.props.data;
        }
    },
    changeTypeInfo: function(e) {
        this.changeState('type', e.target.value);
    },
    render : function(){
        return (
            <div className="container-fluid main-form form-horizontal">
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="field_create_name" className="col-lg-2 control-label">名称：</label>
                        <div className="col-lg-5 ">
                            <input type="text" value={this.state.name} name="name" className="form-control field-create-name" placeholder="请输入页面名称" id="field_create_name" data-id="intro" onChange={this.changeInput} />
                        </div>
                        <div className="col-lg-3">
                            <span className="description">分类名称</span>
                        </div>
                    </div>
                </div>
                <div className="row main-select">
                    <div className="form-group">
                        <label className="col-lg-2 control-label">类型：</label>
                        <div className="col-lg-5 textarea-container">
                            <select className="form-control" value={this.state.type} onChange={this.changeTypeInfo}>
                                <option value="demand">需求</option>
                                <option value="project">项目</option>
                                <option value="app">APP</option>
                                <option value="function">功能</option>
                            </select>
                        </div>
                        <div className="col-lg-3">
                            <span className="description">分类描述说明</span>
                        </div>
                    </div>
                </div>
                <div className="row main-textarea">
                    <div className="form-group">
                        <label htmlFor="field_create_instructions" className="col-lg-2 control-label">说明：</label>
                        <div className="col-lg-5 textarea-container">
                            <textarea value={this.state.instructions} name="instructions" className="form-control field-create-instructions" placeholder="请填写页面说明" id="field_create_instructions" onChange={this.changeInput}></textarea>
                        </div>
                        <div className="col-lg-3">
                            <span className="description">分类描述说明</span>
                        </div>
                    </div>
                </div>
                <div className="row no-border mt-30">
                    <div className="col-lg-5 col-lg-offset-2">
                        <button className="btn btn-success ml-n10" onClick={this.submitData.bind(this, '/stam/edit/cate')}>保存继续添加</button>
                        <button className="btn btn-success ml-20" onClick={this.submitData.bind(this, '/stam/view/cate')}>保存预览列表</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PageCreate;
