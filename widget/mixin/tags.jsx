exports.TagMixin = {
	tagChange : function(key, value){
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
	}
};