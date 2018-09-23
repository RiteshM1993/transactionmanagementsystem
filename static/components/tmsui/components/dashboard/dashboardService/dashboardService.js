angular.module('dashboardService',[])
.service('adminDashboardService',['$http',function($http){

    adminDashboard = {}

    adminDashboard.fetchDashboardVals = function(success,failure){
        $http.get('api/fetchusercount/').then(success,failure)
    }

    return adminDashboard;

}])