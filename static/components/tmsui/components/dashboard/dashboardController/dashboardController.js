angular.module('dashboardController',[])

.controller('dashboardController',['$state','$stateParams','adminDashboardService',function($state,$stateParams,adminDashboardService){

    var dashboardScope = this;

    dashboardScope.fetchDashboardVals = function(){

        var success = function(response){
            console.log(response.data.data)
            console.log('success')
            dashboardScope.data = response.data.data
        }

        var failure = function(response){
            console.log(response)
            console.log('failure')
        }

        adminDashboardService.fetchDashboardVals(success, failure)

    }

    return dashboardScope;

}])