app.factory("combosAPI", function($http, config){
     var _getCombos = function(){
          return $http.get(config.baseUrl + "/combos.json");
     };

     var _getCombo = function(comboId){
          return $http.get(config.baseUrl + "/combos/" + comboId + ".json");
     };

     var _saveCombo = function(combo){
          return $http.post(config.baseUrl + "/combos.json", combo);
     };

     var _updateCombo = function(combo, id){
          return $http.put(config.baseUrl + "/combos/" + id + ".json", combo);
     };

     var _deleteCombo = function(combo){
          return $http.delete(config.baseUrl + "/combos/" + combo.id + ".json");
     };

     return{
          getCombos: _getCombos,
          getCombo: _getCombo,
          saveCombo: _saveCombo,
          updateCombo: _updateCombo,
          deleteCombo: _deleteCombo
     };
});
