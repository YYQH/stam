/**
 * @fileOverview
 * @Writer : zhangrongming@baidu.com
 */

'use strict';

var CreateMixin     = require('stam:widget/mixin/create.jsx').CreateMixin;

var FieldCreate = React.createClass({
    mixins : [CreateMixin],
    getDefaultProps : function(){
        return {
            submitUrl: '/stam/add/keys',
            updateUrl: '/stam/update/keys',
            text: {
                name:           '请输入名称！',
                patterns:       '请输入规则！',
                instructions:   '请输入说明！'

            },
            checkbox : ' is_common is_depracated'
        }
    },
    vtype_msg: {
        'var': '变量类型, 请使用正则表达式匹配',
        'const': '常量请直接写值',
        'enum': '请输入取值列表, 中间以"|"分隔'
    },
    getInitialState : function(){
        if (this.props.data.length === 0) {
            return {
                name:           '',
                patterns:       '',
                instructions:   '',
                is_common:      false,
                is_depracated:  false
            };
        } else {
            return this.props.data;
        }
    },
    changeVtypeInfo: function(e) {
        var key = 'vtype';
        var value = e.target.value;
        this.changeState(key, value);
        $('#vtype_info').html(this.vtype_msg[value]);
    },
    render : function(){
        return (
            <div className="container-fluid main-form form-horizontal">
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="field_create_name" className="col-lg-2 control-label">name：</label>
                        <div className="col-lg-5 ">
                            <input type="text" value={this.state.name} name="name" className="form-control field-create-name" placeholder="请填写字段名称" id="field_create_name" onChange={this.changeInput} />
                        </div>
                        <div className="col-lg-3">
                            <span className="description">统计字段名称</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="col-lg-2 control-label">类型：</label>
                        <div className="col-lg-5 ">
                            <select className="form-control ipt-sele" value={this.state.vtype} name="vtype" id="field_create_vtype" onChange={this.changeVtypeInfo}>
                                <option value="var">变量</option>
                                <option value="const">常量</option>
                                <option value="enum">枚举</option>
                            </select>
                            <span className="vtype-info" id="vtype_info"></span>
                        </div>
                        <div className="col-lg-3">
                            <span className="description">统计字段取值类型</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="field_create_pattern" className="col-lg-2 control-label">pattern：</label>
                        <div className="col-lg-5 ">
                            <input type="text" value={this.state.patterns} name="patterns" className="form-control field-create-pattern" placeholder="请填写字段规则" id="field_create_pattern" onChange={this.changeInput} />
                        </div>
                        <div className="col-lg-3">
                            <span className="description">统计信息规则</span>
                        </div>
                    </div>
                </div>
                <div className="row main-textarea">
                    <div className="form-group">
                        <label htmlFor="field_create_instructions" className="col-lg-2 control-label">instructions：</label>
                        <div className="col-lg-5 textarea-container">
                            <textarea value={this.state.instructions} name="instructions" className="form-control field-create-instructions" placeholder="请填写字段说明" id="field_create_instructions" onChange={this.changeInput}></textarea>
                        </div>
                        <div className="col-lg-3">
                            <span className="description">统计描述说明</span>
                        </div>
                    </div>
                </div>
                <div className="row main-checkbox">
                    <div className="form-group">
                        <label htmlFor="field_create_common" className="col-lg-2 control-label">是否是公共字段：</label>
                        <div className="col-lg-1 ipt-chk">
                            <input type="checkbox" name="is_common" className="form-control field-create-common" id="field_create_common" checked={!!+this.state.is_common} onChange={this.changeCheckbox} />
                        </div>
                        <div className="col-lg-7">
                            <span className="description">选中则为公共字段，不勾选则为非公共字段</span>
                        </div>
                    </div>
                </div>
                <div className="row main-checkbox">
                    <div className="form-group">
                        <label htmlFor="field_create_depracated" className="col-lg-2 control-label">是否被废弃：</label>
                        <div className="col-lg-1 ipt-chk">
                            <input type="checkbox" name="is_depracated" className="form-control field-create-depracated" id="field_create_depracated" checked={!!+this.state.is_depracated} onChange={this.changeCheckbox} />
                        </div>
                        <div className="col-lg-7">
                            <span className="description">选中则为废弃字段，不勾选则为非废弃字段</span>
                        </div>
                    </div>
                </div>
                <div className="row no-border mt-30">
                    <div className="col-lg-5 col-lg-offset-2">
                        <button className="btn btn-success ml-n10" onClick={this.submitData.bind(this, '/stam/edit/keys')}>保存继续添加</button>
                        <button className="btn btn-success ml-20" onClick={this.submitData.bind(this, '/stam/view/keys')}>保存预览列表</button>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = FieldCreate;
