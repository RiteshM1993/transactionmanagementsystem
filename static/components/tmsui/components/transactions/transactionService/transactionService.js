angular.module('transactionsService',[])
.service('transactionService',['$http',function($http){
     var transactions = {};

     transactions.createTransaction = function(dataobj,success,failure){
        $http.post('api/savetransaction/',{
            "name" : dataobj.name,
            "amount" : dataobj.amount,
            "referenceId" : dataobj.referenceId,
            "status" : dataobj.status,
            "transactiontype" : dataobj.transactiontype,
            "address": dataobj.address,
        }).then(success,failure)
     }

     transactions.listTransactions = function(success,failure){
        $http.get('api/listtransactions/').then(success,failure)
     }
//
     transactions.getCsv = function(startDate,endDate,success,failure){
        $http.post('api/getcsv/',{
            "startDate":startDate,
            "endDate":endDate,
        }).then(success,failure)
     }
//
//     userRegister.geteditdata = function(id, success, failure){
//        $http.get('api/geteditdata/?id='+id).then(success,failure)
//     }
//
//     userRegister.updatedUser = function(dataobj, success, failure){
//        $http.put('api/updateuser/',{
//            'id' : dataobj.id,
//            "username" : dataobj.userName,
//            "email" : dataobj.email,
//            "dob" : dataobj.dob,
//        }).then(success,failure)
//     }

     return transactions;

}])