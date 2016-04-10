'use strict';

angular.module('bifrostApp')
.run(function($rootScope, $state, formlyConfig, gettextCatalog) {

  // Left Sidemenu
  $rootScope.menu = [];

  // Add Sidebar Menu
  $rootScope.addMenu = function(name, uisref, icon, root, subMenu) {
    $rootScope.menu.push({
      name: name,
      sref: uisref,
      icon: icon,
      root: root,
      subMenu: subMenu
    });
  };

  // Add Menu Dashboard
  $rootScope.addMenu(gettextCatalog.getString('Dashboard'), 'main.dashboard',
    'fa-dashboard', 'main.dashboard');

  $rootScope.locales = {
    'de': {
      lang: 'de',
      country: 'DE',
      name: gettextCatalog.getString('German')
    },
    'en': {
      lang: 'en',
      country: 'US',
      name: gettextCatalog.getString('English')
    },
    'es_MX': {
      lang: 'es_MX',
      country: 'MX',
      name: gettextCatalog.getString('Spanish')
    },
    'fr': {
      lang: 'fr',
      country: 'FR',
      name: gettextCatalog.getString('Français')
    },
    'nl': {
      lang: 'nl',
      country: 'NL',
      name: gettextCatalog.getString('Dutch')
    },
    'pt-BR': {
      lang: 'pt_BR',
      country: 'BR',
      name: gettextCatalog.getString('Portuguese Brazil')
    },
    'ru_RU': {
      lang: 'ru_RU',
      country: 'RU',
      name: gettextCatalog.getString('Russian')
    },
    'zh_CN': {
      lang: 'zh_CN',
      country: 'CN',
      name: gettextCatalog.getString('Chinese')
    },
    'te_IN': {
      lang: 'te_IN',
      country: 'IN',
      name: gettextCatalog.getString('Telugu')
    }
  };

  //var lang = $cookies.lang || navigator.language || navigator.userLanguage;
  var lang = 'te_IN'; // to be removed

  $rootScope.locale = $rootScope.locales[lang];

  if (angular.isUndefined($rootScope.locale)) {
    $rootScope.locale = $rootScope.locales[lang];
    if (angular.isUndefined($rootScope.locale)) {
      $rootScope.locale = $rootScope.locales['en'];
    }
  }

  gettextCatalog.setCurrentLanguage($rootScope.locale.lang);

  gettextCatalog.debug = true;

  formlyConfig.extras.removeChromeAutoComplete = true;

  formlyConfig.setType({
      name: 'async-ui-select',
      extends: 'select',
      templateUrl: 'app/templates/async-ui-select.tpl.html'
  });

  formlyConfig.setType({
      name: 'datepicker',
      extends: 'input',
      templateUrl: 'app/templates/datepicker.tpl.html'
  });

  // adi check this
  formlyConfig.setType({
      name: 'radioinline',
      extends: 'radio',
      templateUrl: 'app/templates/inline-radio.html'
  });



  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
          event.preventDefault();
          $state.go('login');
      }
  });

  $rootScope.sidebarCollapse = '';

	$rootScope.toggleSidebar = function() {
		if ($(window).width() > (767)) {
			if($rootScope.sidebarCollapse == 'sidebar-collapse') {
				$rootScope.sidebarCollapse = '';
			} else {
			$rootScope.sidebarCollapse = 'sidebar-collapse';
			}
		} else {
			if($rootScope.sidebarCollapse == 'sidebar-open') {
				$rootScope.sidebarCollapse = '';
			} else {
			$rootScope.sidebarCollapse = 'sidebar-open';
			}
		}
	};
});
