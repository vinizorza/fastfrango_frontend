app.factory("utilService", function(){
     var _converteJsonArray = function(json){
			var array = [];
			for (var key in json){
				var element = json[key];
				element["id"] = key;
				array.push(element);
			}
			return array;
	};

     return {
          convertJsonToArray: _converteJsonArray
     };
});
