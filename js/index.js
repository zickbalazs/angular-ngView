let app = angular.module('kerteszet', ['ngRoute']);

app.run(function($rootScope){
    $rootScope.title = "Kertészet";
    $rootScope.author = "2/14SZFT";
    $rootScope.company = "Türr Tech";
    $rootScope.links = [
        {
            'name':'Bemutatkozás',
            'url':'/bemutatkozas'
        },
        {
            'name':'Munkáink',
            'url':'/referenciak'
        },
        {
            'name':'Termékek',
            'url':'/shop'
        },
        {
            'name':'Szolgáltatásaink',
            'url':'/szolgaltatasok'
        },
        {
            'name':'Kapcsolat',
            'url':'/kontaktok'
        }
    ]
});

app.config(function($routeProvider){
    $routeProvider
    .when('/bemutatkozas', {templateUrl: 'views/home.html', controller:'homeController'})
    .when('/referenciak', {templateUrl:'views/references.html', controller:'referenceController'})
    .when('/shop', {templateUrl:'views/shop.html', controller:'shopController'})
    .when('/szolgaltatasok', {templateUrl:'views/services.html', controller:'serviceController'})
    .when('/kontaktok', {templateUrl:'views/contacts.html', controller:'contactController'})
    .otherwise('/bemutatkozas')
});