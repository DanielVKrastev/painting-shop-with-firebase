import page from "page";
import layoutAdminView from "./view/layoutAdminView";
import homeAdminView from "./view/homeAdminView";

page(layoutAdminView);

// Setup page routing
page('/', homeAdminView)
page('/admin', layoutAdminView)

// Start routing
page.start();