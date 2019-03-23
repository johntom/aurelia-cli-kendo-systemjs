import environment from './environment';
import 'bootstrap';
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';
import "kendo/js/kendo.datepicker.js";
import "kendo/js/kendo.grid.js";

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-kendoui-bridge')
    .globalResources( "aurelia-kendoui-bridge/datepicker/datepicker" )
    .globalResources( "aurelia-kendoui-bridge/grid/grid" )
    .globalResources( "aurelia-kendoui-bridge/grid/col" )
    .globalResources( "aurelia-kendoui-bridge/common/template" );
  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
