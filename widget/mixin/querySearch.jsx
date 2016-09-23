exports.QuerySearchMixin = {
	goSearch : function(key, value){
		var obj = this.getQueryMap();console.log(obj)
		obj[key] = value;
		this.loadSearch(obj);
	},
	getQueryMap : function(){
		if(location.search){
			var result = {};
			var arr = location.search.slice(1).split('&');
			var ctx;
			for(var i = arr.length - 1; i >= 0; i--){
				ctx = arr[i].split('=');
				result[ctx[0]] = ctx[1];
			}
			return result;
		}else{
			return {};
		}
	},
	loadSearch : function(obj){
		var url = '';
		for(var i in obj){
			url += '&' + i  + '=' + encodeURIComponent(obj[i]);
		}
		location.search = url.slice(1);
	}
}