var app=angular.module('app',[]);
app.controller('ModalController',['$scope',function($scope){
   var vm=this;
   console.log(1);
   vm.popUpOpen=function(){
       $('#pipeModal').modal("show");
   };
   vm.popUpHide=function(){
    $('#pipeModal').modal("hide");
   };
   vm.submitData=function(){
    $scope.taskForm.$submitted = true;
     if(!$scope.taskForm.$valid){
         return;
     }
      vm.popUpHide();
   };

}]);

app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);