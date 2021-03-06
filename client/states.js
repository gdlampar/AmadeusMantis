angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.tableviewadvancedcool', {
        views: {
            app: {
                controller: 'app_tableviewadvancedcool',
                templateProvider: function (app) {
                    return app.templateProvider('app.tableviewadvancedcool');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.issuelist', {
        views: {
            app: {
                controller: 'app_issuelist',
                templateProvider: function (app) {
                    return app.templateProvider('app.issuelist');
                }
            }
        }
    }).state('app.createissue', {
        views: {
            app: {
                controller: 'app_createissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.createissue');
                }
            }
        }
    });
});