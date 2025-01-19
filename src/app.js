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
import loginAdminView from './views/loginAdminView.js';
import orderView from './views/orderView.js';

page(layoutView);

// Setup page routing
page('/', homeView);
page('/artshop', artShopView);
page('/artshop/:id', artShopSingleView);
page('/artshop/:id/order', orderView);
page('/portfolio', portfolioView);
page('/portfolio/:id', portfolioSingleView);
page('/about', aboutView);
page('/contact', contactView);
page('/login', loginAdminView);

// Reload admin section
const currentUrl = new URL(window.location);
function reloadAdminPage(){
    window.location.href = `${currentUrl.origin}/admin/`;
}

page('/admin/create', reloadAdminPage);
page('/admin/tables', reloadAdminPage);
page('/admin/charts', reloadAdminPage);

// Start routing
page.start();