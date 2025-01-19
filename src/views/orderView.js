import { html, render } from "lit-html";
import paintingApi from "../api/paintingApi";

const rootEl = document.getElementById('site-root');

const template = (painting) => html`
<div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="/">Начало</a><span class="mx-2 mb-0">/</span><a href="/artshop">Арт магазин</a> <span class="mx-2 mb-0">/</span><a href="/artshop/${painting.id}">${painting.name}</a><span class="mx-2 mb-0">/</span> <strong class="text-black">Поръчка</strong></div>
        </div>
      </div>
    </div>  

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="h3 mb-3 text-black">Поръчка на ${painting.name}</h2>
          </div>
          <div class="col-md-7">

            <form action="#" method="post">
              
              <div class="p-3 p-lg-5 border">
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black">Име <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="c_fname" name="first-name">
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black">Фамилия <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="c_lname" name="last-name">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_email" class="text-black">Имейл <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="c_email" name="email" placeholder="">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="telephone" class="text-black">Телефон </label> <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" id="telephone" name="telephone">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="city" class="text-black">Град / Село<span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="city" name="city">
                  </div>
                  <div class="col-md-6">
                    <label for="address" class="text-black">Адрес <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="address" name="address">
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-lg-12">
                    <input type="submit" class="btn btn-primary btn-lg btn-block" value="Направи поръчка">
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-5 ml-auto">
            <div class="p-4 border mb-3">
              <span class="d-block text-primary h6 text-uppercase">Попово</span>
              <p class="mb-0">България, Попово, ул. Фейк</p>
            </div>
            <div class="p-4 border mb-3">
              <span class="d-block text-primary h6 text-uppercase">Телефон</span>
              <p class="mb-0">+359 89 392 9210</p>
            </div>
            <div class="p-4 border mb-3">
              <span class="d-block text-primary h6 text-uppercase">Имейл</span>
              <p class="mb-0">info@krastevagallery.com</p>
            </div>

          </div>
        </div>
      </div>
    </div>

`;

export default async function(ctx){
    const paintingId = ctx.params.id;
        try{
            const painting = await paintingApi.getOne(paintingId);
            //console.log(painting);
            ctx.render(template(painting));
    
            const parentDiv = document.querySelector('.site-wrap');
            const loadedNavMobile = document.querySelector('.site-mobile-menu');
    
            // Little cheat, is not good.
            // If open .../portfolio the mobile menu not rendered. Maybe have a loaded asynchronous function is incorrect
            if(!loadedNavMobile){
              const newDivNavMobile = `<!-- Mobile menu -->
              <div class="site-mobile-menu">
                  <div class="site-mobile-menu-header">
                      <div class="site-mobile-menu-logo">
                          <a href="/" class="js-logo-clone">Krasteva Gallery</a>
                      </div>
                      <div class="site-mobile-menu-close">
                          <span class="ion-ios-close js-menu-toggle"></span>
                      </div>
                  </div>
                  <div class="site-mobile-menu-body">
                      <ul class="site-nav-wrap">
                          <li class="active"><a href="/">Начало</a></li>
                          <li><a href="/artshop">Магазин</a></li>
                          <li><a href="/portfolio">Портфолио</a></li>
                          <li><a href="/about">За мен</a></li>
                          <li><a href="/contact">Контакти</a></li>
                      </ul>
                  </div>
              </div>`;
              parentDiv.insertAdjacentHTML('afterbegin', newDivNavMobile);
            }
        }catch(error){
            console.log(error.message);
            
        }
}