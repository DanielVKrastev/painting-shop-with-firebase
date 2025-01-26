import { html, render } from "lit-html";
import paintingApi from "../api/paintingApi";

const template = (paintings, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC) => html`
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <a href="/">Начало</a>
            <span class="mx-2 mb-0">/</span><strong class="text-black">Портфолио</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
        <div class="container">

            <div class="row mb-5">
              <div class="col-md-12 order-2">

                <div class="row">
                  <div class="col-md-12 mb-5">
                    <div class="float-md-left mb-4"><h2 class="text-black h5">Портфолио - всички</h2></div>
                    <div class="d-flex">
                      <div class="dropdown mr-1 ml-md-auto">
                      <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Сортиране</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                        <a class="dropdown-item" href="javascript:void(0);" @click=${sortNameASC}>Име, А до Я</a>
                        <a class="dropdown-item" href="javascript:void(0);" @click=${sortNameDESC}>Име, Я до А</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0);" @click=${sortPriceASC}>Цена, възходяща</a>
                        <a class="dropdown-item" href="javascript:void(0);" @click=${sortPriceDESC}>Цена, низходяща</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mb-5">

                ${
                paintings.map(paint => html`
                  <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div class="block-4 text-center border">
                      <figure class="block-4-image">
                        <a href="/portfolio/${paint.id}"><img src="${paint.imageUrl}" alt="${paint.name}" class="img-fluid"></a>
                      </figure>
                      <div class="block-4-text p-4">
                        <h3><a href="/portfolio/${paint.id}">${paint.name}</a></h3>
                        <p class="mb-0">Размери: ${paint.size}</p>
                        <p class="text-primary font-weight-bold">${paint.price} лв.</p>
                      </div>
                    </div>
                  </div>
                  `)
            }

                </div>
                <div class="row" data-aos="fade-up">
                  <div class="col-md-12 text-center">
                    <div class="site-block-27">
                      <ul>
                        <li><a href="#">&lt;</a></li>
                        <li class="active"><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">&gt;</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </div>

        </div>
    </div>
  

    <!-- Art categories  VIEW --> 

`;

export default async function(ctx){

    try{
        const paintings = await paintingApi.getAllForSales();
        //console.log(paintings);
        ctx.render(template(paintings, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC));

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

        // Sort name by ASC
        async function sortNameASC(e){
          e.preventDefault();
            try{
                const sortPaitingNames = await paintingApi.getSort('name');
    
                const sortedByNameAsc = sortPaitingNames.sort((a, b) => a.name.localeCompare(b.name));
                ctx.render(template(sortedByNameAsc, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC));
            }catch(error){
                console.log(error.message);
            }
        }
    
         // Sort name by DESC
        async function sortNameDESC(e){
          e.preventDefault();
            try{
              const sortPaitingNames = await paintingApi.getSort('name');
    
              const sortedByNameDesc = sortPaitingNames.sort((a, b) => b.name.localeCompare(a.name));
              ctx.render(template(sortedByNameDesc, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC));
            }catch(error){
                console.log(error.message);
            }
        }
    
        // Sort price by ASC
        async function sortPriceASC(e){
          e.preventDefault();
          try{
            const sortPaitingPrice = await paintingApi.getSort('price');
    
            const sortedByNameAsc = sortPaitingPrice.sort((a, b) => a.price - b.price);
            ctx.render(template(sortedByNameAsc, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC));
          }catch(error){
              console.log(error.message);
          }
        }
    
        // Sort price by DESC
        async function sortPriceDESC(e){
          e.preventDefault();
          try{
            const sortPaitingPrice = await paintingApi.getSort('price');
    
            const sortedByPriceDesc = sortPaitingPrice.sort((a, b) => b.price - a.price);
            ctx.render(template(sortedByPriceDesc, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC));
          }catch(error){
              console.log(error.message);
          }
        }
    
}