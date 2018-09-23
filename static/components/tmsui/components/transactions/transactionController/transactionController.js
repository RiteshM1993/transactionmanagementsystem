angular.module('transactionsController',[])
.controller('transactionController',['transactionService','$stateParams','$state',function(transactionService,$stateParams,$state){

    var transactionScope = this;

    transactionScope.saveTransaction = function(){


        dataobj = {
            "name" : transactionScope.name,
            "amount" : transactionScope.amount,
            "referenceId" : transactionScope.referenceid,
            "status" : transactionScope.status,
            "transactiontype" : transactionScope.transactiontype,
            "address": transactionScope.address,

        }

        var success = function(response){
            console.log(response)
            transactionScope.successmsg = true
            transactionScope.errormsg = false
        }

        var failure = function(response){
            console.log(response)
            transactionScope.successmsg = false
            transactionScope.errormsg = true
        }

        transactionService.createTransaction(dataobj,success,failure)
    }

    transactionScope.gettransactions = function(){
        var success = function(response){
            console.log(response.data.data)
            transactionScope.transactions = response.data.data
        }

        var failure = function(response){
            console.log(response)

        }

        transactionService.listTransactions(success,failure)
    }


    transactionScope.createcsv = function(){

        var startDate = transactionScope.startDate.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
        var endDate = transactionScope.endDate.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");

        var success = function(response){
            console.log(response)
            console.log('success')
        }

        var failure = function(response){
            console.log(response)
            console.log('fail')
        }

        transactionService.getCsv(startDate,endDate,success,failure)


    }

    return transactionScope;

}])