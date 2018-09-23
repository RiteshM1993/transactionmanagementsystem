angular.module('tmsApp',[
    'ui.router',
    'smart-table',
    'ngMaterial',
    'tmsApp.transactions',
    'tmsApp.dashboard',

])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/transaction');


    $stateProvider

    .state('transaction',{
        url: '/transaction',
        templateUrl: '/static/components/tmsui/components/transactions/views/transaction.html',
        controller: 'transactionController',
        controllerAs: 'transactionScope',
    })

            //listing registed users

    .state('listtransactions',{
        url:'/listtransactions',
        templateUrl:'/static/components/tmsui/components/transactions/views/listtransactions.html',
        controller: 'transactionController',
        controllerAs: 'transactionScope',
    })

//    Dashboard
    .state('dashboard',{
        url: '/dashboard',
        templateUrl: '/static/components/tmsui/components/dashboard/views/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashboardScope',
    })


}])

