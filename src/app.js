

import './config/firebaseInit.js';

import page from "page";
import layoutView from "./views/layoutView";
import homeView from "./views/homeView";
import aboutView from "./views/aboutView";
import artShopView from './views/artShopView.js';
import portfolioView from './views/portfolioView.js';
import contactView from './views/contactView.js';
import artShopSingleView from './views/artShopSingleView.js';
import portfolioSingleView from './views/portfolioSingleView.js';


page(layoutView);

// Setup page routing
page('/', homeView);
page('/artshop', artShopView);
page('/artshop/:id', artShopSingleView);
page('/portfolio', portfolioView);
page('/portfolio/:id', portfolioSingleView);
page('/about', aboutView);
page('/contact', contactView);

// Start routing
page.start();