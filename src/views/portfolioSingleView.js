import { html, render } from "lit-html";
import paintingApi from "../api/paintingApi";

const template = (painting) => html`
<div class="bg-light py-3">
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-0"><a href="/">Начало</a> <span class="mx-2 mb-0">/</span><a href="/portfolio">Портфолио</a> <span class="mx-2 mb-0">/</span>  <strong class="text-black">${painting.name}</strong></div>
        </div>
    </div>
</div> 

<div class="site-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img src="${painting.imageUrl}" alt="${painting.name}" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h2 class="text-black">${painting.name}</h2>
                <p>${painting.description}</p>

                <i><b>Размери: ${painting.size}</b></i> 
                <br>
                <i><b>Категория: ${painting.category}</b></i> 
                <br>
                <i><b>Бои: ${painting.paints}</b></i> 

                <p><strong class="text-primary h4">${painting.price} лв.</strong></p>
                <p>Направете запитване за поръчка.
                <br>Или се обадете на следния телефон: +359 11 111 1111</p>
                <div class="form-group row">
                    <div class="col-md-6">
                        <label for="c_fname" class="text-black">Име <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="c_fname" name="c_fname">
                    </div>
                    <div class="col-md-6">
                        <label for="c_lname" class="text-black">Фамилия <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="c_lname" name="c_lname">
                    </div>
                </div>

            <div class="form-group row">
                <div class="col-md-12">
                    <label for="c_email" class="text-black">Имейл <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="c_email" name="c_email" placeholder="">
                </div>
            </div>

            <p><a href="#"><input type="submit" class="buy-now btn btn-sm btn-info" value="Направи запитване "></a></p>
            </div>
        </div>
    </div>
</div>

    <!-- Art carousel  VIEW --> 

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