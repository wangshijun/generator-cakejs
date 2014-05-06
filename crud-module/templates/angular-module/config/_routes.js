'use strict';

//Setting up route
angular.module('<%= slugifiedPluralName %>').config(['$stateProvider',
    function ($stateProvider) {
        // <%= humanizedPluralName %> state routing
        $stateProvider.
        state('<%= slugifiedPluralName %>/list', {
            url: '/<%= slugifiedPluralName %>',
            templateUrl: 'modules/<%= slugifiedPluralName %>/views/list.html'
        }).
        state('<%= slugifiedPluralName %>/create', {
            url: '/<%= slugifiedPluralName %>/create',
            templateUrl: 'modules/<%= slugifiedPluralName %>/views/create.html'
        }).
        state('<%= slugifiedPluralName %>/view', {
            url: '/<%= slugifiedPluralName %>/:<%= camelizedSingularName %>Id',
            templateUrl: 'modules/<%= slugifiedPluralName %>/views/view.html'
        }).
        state('<%= slugifiedPluralName %>/edit', {
            url: '/<%= slugifiedPluralName %>/:<%= camelizedSingularName %>Id/edit',
            templateUrl: 'modules/<%= slugifiedPluralName %>/views/edit.html'
        });
    }
]);
