import page from "page";
import layoutView from "./views/layoutView";
import homeView from "./views/homeView";

page(layoutView);

// Setup page routing
page('/', homeView);

// Start routing
page.start();