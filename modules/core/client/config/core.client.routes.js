'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/client/views/home.client.view.html',
      data: {
        title: 'NewVote'
      }
    })

    .state('topics', {
      url: '/topics',
      abstract: true
    })
    .state('topics.list', {
      url: '/',
      templateUrl: 'modules/core/client/views/topics.client.view.html',
      data: {
        title: 'Topics'
      }
    })
    .state('topics.create', {
      url: '/create',
      templateUrl: 'modules/core/client/views/create-topic.client.view.html',
      data: {
        title: 'Create Topic'
      }
    })
    .state('topics.view', {
      url: '/:topicId',
      templateUrl: 'modules/core/client/views/topic.client.view.html',
      data: {
        title: 'Topic Name'
      }
    })


    .state('ideas', {
      url: '/ideas',
      abstract: true
    })
    .state('ideas.list', {
      url: '/',
      templateUrl: 'modules/core/client/views/ideas.client.view.html',
      data: {
        title: 'Ideas'
      }
    })
    .state('ideas.create', {
      url: '/create',
      templateUrl: 'modules/core/client/views/create-idea.client.view.html',
      data: {
        title: 'Create Idea'
      }
    })
    .state('ideas.view', {
      url: '/:ideaId',
      templateUrl: 'modules/core/client/views/idea.client.view.html',
      data: {
        title: 'Idea Name'
      }
    })

    .state('results', {
      url: '/results',
      templateUrl: 'modules/core/client/views/results.client.view.html',
      data: {
        title: 'Results'
      }
    })




    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);
