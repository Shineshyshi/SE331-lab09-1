(function () {
  'use strict';

  angular
    .module('app')
    .factory('shoppingCartService', shoppingCartService);

  /**@ngInject*/
  function shoppingCartService($resource) {
    return $resource('/shoppingcart/:id', {id: '@_id'}, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });

  }
})();
