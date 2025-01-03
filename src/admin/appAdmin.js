import page from "page";
import layoutAdminView from "./view/layoutAdminView";
import homeAdminView from "./view/homeAdminView";
import createAdminView from "./view/createAdminView";

page(layoutAdminView);

// Setup page routing
page('/admin', homeAdminView);
page('/admin/create', createAdminView);

// Start routing
page.start();