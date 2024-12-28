import { html, render } from "lit-html";

const rootEl = document.getElementById('site-root');

const layoutTemplate = (body) => html`
<div class="site-wrap" id="site-root">
    <header class="site-navbar" role="banner">
        <div class="site-navbar-top">
            <div class="container">
            <div class="row align-items-center">
    
                <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action="" class="site-block-top-search">
                    <span class="icon icon-search2"></span>
                    <input type="text" class="form-control border-0" placeholder="Търси">
                </form>
                </div>
    
                <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div class="site-logo">
                    <a href="/" class="js-logo-clone">Krasteva Gallery</a>
                </div>
                </div>
    
                <div class="col-6 col-md-4 order-3 order-md-3 text-right">
                <div class="site-top-icons">
                    <ul>
                    <!-- <li><a href="#"><span class="icon icon-person"></span></a></li> -->
                    <!-- <li><a href="#"><span class="icon icon-heart-o"></span></a></li> -->
                    <li>
                        <a href="cart.html" class="site-cart">
                        <span class="icon icon-shopping_cart"></span>
                        <span class="count">2</span>
                        </a>
                    </li> 
                    <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li>
                    </ul>
                </div> 
                </div>
    
            </div>
            </div>
        </div> 
        <nav class="site-navigation text-right text-md-center" role="navigation">
            <div class="container">
            <ul class="site-menu js-clone-nav d-none d-md-block">

                <li class="active"><a href="/">Начало</a></li>
                <li><a href="/artshop">Магазин</a></li>
                <li><a href="/portfolio">Портфолио</a></li>
                <li><a href="/about">За нас</a></li>
                <li><a href="/contact">Контакти</a></li>
            </ul>
            </div>
        </nav>
    </header>

    <!-- BODY CONTENT HERE -->
    ${body}

    <footer class="site-footer border-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <div class="row">
                    <div class="col-md-12">
                      <h3 class="footer-heading mb-4">Навигация</h3>
                    </div>
                    <div class="col-md-6 col-lg-4">
                      <ul class="list-unstyled">
                        <li><a href="/">Начало</a></li>
                        <li><a href="/artshop">Магазин</a></li>
                        <li><a href="/portfolio">Портфолио</a></li>
      
                      </ul>
                    </div>
                    <div class="col-md-6 col-lg-4">
                      <ul class="list-unstyled">
                        <li><a href="/about">За нас</a></li>
                        <li><a href="/contact">Контакти</a></li>
                        <li><a href="#">Количка</a></li>
                      </ul>
                    </div>
      
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="block-5 mb-5">
                    <h3 class="footer-heading mb-4">Контакти</h3>
                    <ul class="list-unstyled">
                      <li class="address">България, Попово, ул. Фейк</li>
                      <li class="phone"><a href="tel://23923929210">+359 89 392 9210</a></li>
                      <li class="email">info@krastevagallery.com</li>
                    </ul>
                  </div>
      
                  <div class="block-7">
                    <form action="#" method="post">
                      <label for="email_subscribe" class="footer-heading">Абониране</label>
                      <div class="form-group">
                        <input type="text" class="form-control py-4" id="email_subscribe" placeholder="Имейл">
                        <input type="submit" class="btn btn-sm btn-primary" value="Изпрати">
                      </div>
                    </form>
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-3">
                  <div class="block-5 mb-5">
                    <h3 class="footer-heading mb-4">Последвай ни:</h3>
                    <ul class="list-unstyled">
                      <a href="#"><img width="40" height="40" src="https://img.icons8.com/color/48/facebook-new--v1.png" alt="facebook-new--v1"/></a>
                      <a href="#"><img width="40" height="40" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                      <a href="#"><img width="40" height="40" src="https://img.icons8.com/color/48/twitterx--v1.png" alt="x--v1"/></a>
                    </ul>
                  </div>
      
                </div>
              </div>
              <div class="row pt-5 mt-5 text-center">
                <div class="col-md-12">
                  <p>
                  &copy; Krasteva Gallery. Всички права запазени. Уеб дизайн Colorlib
                </p>
                  <p>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Web design by Daniel Krastev, based on a template made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  </p>
                </div>
                
              </div>
            </div>
          </footer>

`;

export default function(ctx, next){
    
    ctx.render = (templateResult) => {
        render(layoutTemplate(templateResult), rootEl);
    }

    next();
}