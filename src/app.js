   import materialize from 'materialize-css';
  
//    
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'bakery', name: 'bakery', moduleId: './bakery/index', nav: true, title: 'Socket-io' },
      { route: 'parallax', moduleId: './parallax/index', nav: true, title: 'parallax' },

    ]);

    this.router = router;
  }
  attached() {
    // using ref="modal" in html template
    materialize.Modal.init(this.modal);
    // for better reuse, wrap materialize js features
    // behind Aurelia custom elements or attributes.
  }
  detached() {
    const ins = materialize.Modal.getInstance(this.modal);
    if (ins) ins.destroy();
  }
}



// { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome/index', nav: true, title: 'Welcome' },

// { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },

// { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
// { route: 'kendo', moduleId: './kendo/index', nav: true, title: 'kendo' },
// { route: 'kendocrud', moduleId: './kendocrud/index', nav: true, title: 'kendocrud' },
// { route: 'kendocrud2', moduleId: './kendocrud2/index', nav: true, title: 'kendocrud2' },

// { route: 'bcsstatus', moduleId: './bcsstatus/index', nav: true, title: 'bcsstatus' },
// { route: 'aboutus', moduleId: './aboutus/index', nav: true, title: 'aboutus' },
// { route: 'agencies', moduleId: './agencies/index', nav: true, title: 'Agencies' },
// { route: 'clients', moduleId: './clients/index', nav: true, title: 'Clients' },
// { route: 'news', moduleId: './news/index', nav: true, title: 'News' },
// { route: 'profile', moduleId: './profile/index', nav: true, title: 'Profile' },
// { route: 'propertyupload', moduleId: './propertyupload/index', nav: true, title: 'Property Upload' },
// { route: 'propertysummary', moduleId: './propertysummary/index', nav: true, title: 'property summary' },
// { route: 'bin', moduleId: './bin/index', nav: true, title: 'bin' },
// { route: 'admin', moduleId: './admin/index', nav: true, title: 'admin' },
// { route: 'user', moduleId: './user/index', nav: true, title: 'user' },
// { route: 'login', moduleId: './login/index', nav: true, title: 'login' },
// { name: 'services',        route: 'services',        moduleId: 'services/index',        title: 'services',        nav: true      },
