app.controller('shopController', function($scope){
    $scope.products = [
        {
            itemName:'Talicska',
            description: 'Egy piros Talicska egy kerékkel.',
            price: 7800,
            unit: '/db'
        },
        {
            itemName:'Növényföld',
            description: 'Egy zsák növényeknek való föld.',
            price: 7800,
            unit: '/10kg'
        },
        {
            itemName:'Szárított marhatrágya',
            description: 'Egy zsák szárított marhatrágya.',
            price: 7800,
            unit: '/db'
        },
        {
            itemName:'Stihl© Sövényvágó',
            description: 'A legjobb©©©©© sövényvágó készülék.',
            price: 17800,
            unit: '/db'
        },
        {
            itemName:'Borélesztő',
            description: 'Egy zacskó borélesztő.',
            price: 800,
            unit: '/db'
        }
    ]
})