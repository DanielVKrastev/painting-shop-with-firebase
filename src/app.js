

import './config/firebaseInit.js';

import page from "page";
import layoutView from "./views/layoutView";
import homeView from "./views/homeView";
import aboutView from "./views/aboutView";
import artShopView from './views/artShopView.js';

page(layoutView);

// Setup page routing
page('/', homeView);
page('/artshop', artShopView);
page('/about', aboutView);

// Start routing
page.start();