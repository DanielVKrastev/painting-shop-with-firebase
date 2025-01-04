import page from "page";
import layoutAdminView from "./view/layoutAdminView";
import homeAdminView from "./view/homeAdminView";
import createAdminView from "./view/createAdminView";
import tablesAdminView from "./view/tablesAdminView";
import chartsAdminView from "./view/chartsAdminView";

page(layoutAdminView);

// Setup page routing
page('/admin', homeAdminView);
page('/admin/create', createAdminView);
page('/admin/tables', tablesAdminView);
page('/admin/charts', chartsAdminView);
console.log(typeof Chart);
// Start routing
page.start();