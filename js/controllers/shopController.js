app.controller('shopController', function($scope){
    $scope.products = [
        {
            itemName:'Talicska',
            description: 'Egy talicska négy kerékkel.',
            price: 7800,
            unit: '/db',
            img:'./img/shop/talicska.jpg'
        },
        {
            itemName:'Növényföld',
            description: 'Egy zsák növényeknek való föld.',
            price: 7800,
            unit: '/10kg',
            img:'./img/shop/soil.png'
        },
        {
            itemName:'Szárított marhatrágya',
            description: 'Egy zsák szárított marhatrágya. Vegyél egyet Ginál Zsolt Felebarátunknak!',
            price: 7800,
            unit: '/5kg',
            img:'./img/shop/tragya.jpg'
        },
        {
            itemName:'Stihl© Sövényvágó',
            description: 'A legjobb©©©©© sövényvágó készülék.',
            price: 178000,
            unit: '/db',
            img:'./img/shop/stihl.png'
        },
        {
            itemName:'Borélesztő',
            description: 'Egy zacskó borélesztő.',
            price: 800,
            unit: '/db',
            img:'./img/shop/boreleszto.jpg'
        }
    ]
})