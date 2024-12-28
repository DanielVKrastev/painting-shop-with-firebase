

import './config/firebaseInit.js';

import page from "page";
import layoutView from "./views/layoutView";
import homeView from "./views/homeView";
import aboutView from "./views/aboutView";

page(layoutView);

// Setup page routing
page('/', homeView);
page('/about', aboutView);

// Start routing
page.start();