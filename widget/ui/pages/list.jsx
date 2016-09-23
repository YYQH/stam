
var Pages = React.createClass({
    getDefaultProps : function(){
        var pages = bd.tplData.pages;
        pages.unshift({id: 0, name: '选择页面'});
        return {
            pages: pages
        }
    },
    changePage: function(e) {
        this.props.callback(e.target.value);
    },
    listPages: function() {
        return this.props.pages.map(function(page, ind) {
            return (<option value={page.id}>{page.name}</option>);
        });
    },
    render: function() {
        return (
            <select className="form-control" onChange={this.changePage}>{this.listPages()}</select>
        );
    }
});


module.exports = Pages;
