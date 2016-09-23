exports.CreateMixin = {
    changeState: function(key, value){
        var obj = new Object();
        obj[key] = value;
        this.setState(obj);
    },
    changeInput: function(e){
        var key     = e.target.name;
        var value   = e.target.value;
        this.changeState(key, value);
    },
    changeTags : function(key, value){
        var obj = {};
        obj[key] = this.tagsDataToString(value);
        this.setState(obj);
    },
    tagsDataToString : function(data){
        var str = '';
        if(!data || !data.length){
            return str;
        }
        for(var i = data.length - 1; i >= 0; i--){
            str += ',' + data[i].id;
        }
        return str.slice(1);
    },
    changeCheckbox: function(e){
        var key     = e.target.name;
        var value   = !!+this.state[key] ? false : true;
        this.changeState(key, value);
    },
    checkData: function(){
        var props       = this.props,
            text        = props.text,
            data        = this.state;
        for (var i in text) {
            if (data[i] === '') {
                alert(text[i])
                return false;
            }
        }
        return true;
    },
    adaptData: function(){
        var checkbox    = this.props.checkbox,
            data        = this.state;
        for (var i in data) {
            if(checkbox && !!~checkbox.indexOf(i)){
                if (Object.prototype.toString.call(data[i]) !== '[object Boolean]') {
                    data[i] = !!+data[i];
                }
            }
        }
        return data
    },
    submitData : function(url){
        if (!this.checkData()) {
            return;
        }
        var ajaxUrl = this.state.id ? this.props.updateUrl : this.props.submitUrl;
        $.post(
            ajaxUrl,
            this.adaptData(),
            function(res){
                res = JSON.parse(res);
                if (res && res.error === 0) {
                    window.location = url;
                } else if (res && res.error !== 0) {
                    alert(res.msg)
                } else {
                    alert('返回错误')
                }
            }
        );
    },
}
