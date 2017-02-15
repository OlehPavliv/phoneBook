var app = angular.module('phoneBook',[]);
app.controller('myCtrl' , function($scope){
    $scope.data = data;
    
    $scope.sortType = '';
    $scope.sortReverse = false
    
    $scope.addNewPerson = function(){
        if($scope.addFirstName ===undefined ||$scope.addLastName === undefined  || $scope.addPhone ===undefined){
            alert('Enter valid information');
        }
  else{
        $scope.data.push({firstName:$scope.addFirstName,lastName:$scope.addLastName,phone:$scope.addPhone});
        $scope.addFirstName = '';
        $scope.addLastName = '';
        $scope.addPhone = '';
        }
    };
    
    $scope.dellPerson = function($index){
        $scope.data.splice($index,1);
    };
    
    $scope.findIndex = function($index){
        $scope.index = $index;
        $scope.nameChange = $scope.data[$scope.index].firstName;
        $scope.surnameChange = $scope.data[$scope.index].lastName;
        $scope.phoneChange = $scope.data[$scope.index].phone;
        
    }
    
    $scope.changeInf = function(){
        $scope.data[$scope.index].firstName = $scope.nameChange;
        $scope.data[$scope.index].lastName  = $scope.surnameChange;
        $scope.data[$scope.index].phone = $scope.phoneChange;    
    };
    
   
});











var data = [
    {
        firstName:'Oleh',
        lastName:'Pavliv',
        phone:'0936236402'
    },{
        firstName:'Vika',
        lastName:'Pavliv',
        phone:'0932353232'
    },{
        firstName:'Inna',
        lastName:'Makar',
        phone:'0652235038'
    },{
        firstName:'Masha',
        lastName:'Babyk',
        phone:'0562365432'
    },{
        firstName:'Katya',
        lastName:'Pruslyk',
        phone:'0633232323'
    },{
        firstName:'Igor',
        lastName:'Baran',
        phone:'0653432123'
    }
]