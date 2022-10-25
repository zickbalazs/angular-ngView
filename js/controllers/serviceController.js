app.controller('serviceController', function($scope){
    $scope.services = [
        {
            name:'Fűnyírás',
            money:1000,
            unit:'Ft/mm'
        },
        {
            name:'Ültetés',
            money:550,
            unit:'Ft/db'
        },
        {
            name:'Permetezés',
            money:6000,
            unit:'Ft/alkalom'
        }
    ]
})