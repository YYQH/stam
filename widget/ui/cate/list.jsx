
var CateList = React.createClass({
    getDefaultProps : function(){
        var tags = bd.tplData.categories;
        tags.unshift({id: 0, name: '选择分类'});
        return {
            tags: tags
        }
    },
    changeCate: function(e) {
        this.props.callback(e.target.value);
    },
    listCate: function() {
        return this.props.tags.map(function(tag, ind) {
            return (<option value={tag.id}>{tag.name}</option>);
        });
    },
    render: function() {
        return (
            <select className="form-control" onChange={this.changeCate}>{this.listCate()}</select>
        );
    }
});

module.exports = CateList;
