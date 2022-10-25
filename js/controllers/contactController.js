app.controller('contactController', function($scope){
    $scope.formElements = [
        {
            name:'Név',
            type:'text'
        },
        {
            name:'E-Mail cím',
            type:'email'
        },
        {
            name:'Titkos üzenet',
            type:'text'
        },
    ]
    $scope.teamMembers = [
        {
            name:'Zick Balázs',
            pos:'CEO (Chief Executive Officer)',
            desc:['Location: Check', 'Desire: Check'],
            pic:'./img/people/zb.png'
        },
        {
            name:'Ginál Zsolt',
            pos:'CFO (Chief Financial Officer)',
            desc:['Location: The jolly village of Hajós', 'Desire: Money'],
            pic:'./img/people/gzs.png'
        },
        {
            name:'Kocsis Dávid',
            pos:'COO (Chief Operations Officer)',
            desc:['Location: Black Gulch (Jánoshalma)', 'Desire: funni'],
            pic:'./img/people/kd.png'
        },
        {
            name:'Beretka Gellért',
            pos:'Kertész',
            desc:['Location: Your Garden', 'Desire: S O I L'],
            pic:'./img/people/bg.png'
        }
    ]
})