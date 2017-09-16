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