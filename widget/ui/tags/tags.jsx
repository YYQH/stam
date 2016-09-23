/**
 * @fileOverview
 * @Writer : zhangrongming@baidu.com
 */

'use strict';


module.exports = React.createClass({
    getDefaultProps : function(){
        return {
            id              : 'keys',
            title           : '字段：',
            description     : '请输入字段名称进行搜索',
            placeholder     : '请输入字段名称',
            mode            : 'default',    // single 唯一tag
            url             : '/stam/get/keys',
            tags            : [],
            parentCallback  : function(){}
        }
    },
    getInitialState : function(){
        return {
            chooseTags  : this.props.tags||[],
            tagSugs     : []
        }
    },
    deleteTag : function(e){
        var value       = +$(e.currentTarget).attr('data-id'),
            chooseTags  = this.state.chooseTags,
            i           = chooseTags.length - 1;
        for(; i >= 0; i--){
            if(chooseTags[i].id == value){
                chooseTags.splice(i, 1);
            }
        }
        this.setState({
            chooseTags : chooseTags
        })
        this.props.parentCallback(this.props.id, this.state.chooseTags);
    },
    addTag : function(e){
        var key         = +$(e.currentTarget).attr('data-id'),
            value       = $(e.currentTarget).text(),
            chooseTags  = this.state.chooseTags;
        if(this.props.mode === 'single'){
            if(chooseTags[0] && chooseTags[0].id == key){
                return;
            }
            chooseTags = [{
                id      : key,
                name    : value
            }];
        }else if(!~chooseTags.indexOf(value)){
            for(var i = chooseTags.length - 1; i >= 0; i--){
                if(chooseTags[i].id == key){
                    return;
                }
            }
            chooseTags.push({
                id      : key,
                name    : value
            });
        }
        this.setState({
            chooseTags : chooseTags
        });
        this.props.parentCallback(this.props.id, chooseTags);
    },
    searchTags : function(e){
        var that = this;
        var value = e.target.value;
        if(this._searchTagValue === value) {
            return ;
        }
        $.get(this.props.url + '?s=' + value, function(res){
            var response = JSON.parse(res);
            if(response.error === 0 && response.list && response.list.items){
                that.setState({
                    tagSugs : response.list.items
                });
            }
        });
        
        this._searchTagValue = value;
    },
    createChooseTags : function(){
        var that = this;
        if(!this.state.chooseTags) {
            return ;
        }
        return this.state.chooseTags.map(function(data, index, obj){
            return (<span className="btn btn-primary" data-id={data.id} key={index} onClick={that.deleteTag}>{data.name}<span className="glyphicon glyphicon-remove"></span></span>)
        });
    },
    createTagSug : function(){
        var that = this;
        return this.state.tagSugs.map(function(data, index, obj){
            var tagFlag = '';
            var tagCls = 'btn btn-info';
            if(+data.is_common) {
                tagFlag = 'flg-comm';
            }
            if(+data.is_depracated) {
                tagFlag = 'flg-depr';
            }

            tagCls = tagCls + ' ' + tagFlag;
            
            return (<span className={tagCls} data-id={data.id} key={index} onClick={that.addTag}>{data.name}<span className="glyphicon glyphicon-ok"></span></span>)
        })
    },
    render : function(){
        return (
            <div className="row main-tags">
                <div className="form-group">
                    <label htmlFor="field_create_pattern" className="col-lg-2 control-label">{this.props.title}</label>
                    <div className="col-lg-10">
                        <input type="text" className="form-control tags-select" placeholder={this.props.placeholder} onChange={this.searchTags} onFocus={this.searchTags} />
                        <span className="description">{this.props.description}</span>
                        <span>{this.createChooseTags()}</span>
                        <div>{this.createTagSug()}</div>
                    </div>
                </div>
            </div>
        );
    }
});
