import { html, render } from "lit-html";
import paintingApi from "../api/paintingApi";
import categoryApi from "../api/categoryApi";
import sizeApi from "../api/sizeApi";

const rootEl = document.getElementById('site-root');

const template = (paintings, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter, filterByCategoty) => html`
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="/">Начало</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Арт магазин</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-9 order-2">

            <div class="row">
              <div class="col-md-12 mb-5">
                <div class="float-md-left mb-4"><h2 class="text-black h5">Арт магазин ${filterByCategoty ? ` - ${filterByCategoty}`: ''}</h2></div>
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
                      <a href="/artshop/${paint.id}"><img src="${paint.imageUrl}" alt="${paint.name}" class="img-fluid"></a>
                    </figure>
                    <div class="block-4-text p-4">
                      <h3><a href="/artshop/${paint.id}">${paint.name}</a></h3>
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

          <div class="col-md-3 order-1 mb-5 mb-md-0">
            <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Категории</h3>
              <ul class="list-unstyled mb-0">
                    ${categories.map(category => html`
                          <li class="mb-1"><a href="javascript:void(0);" class="d-flex" @click="${() => onCategoryClick(category.name)}"><span>${category.name}</span></a></li>
                        `)}
                     <li class="mb-1"><a href="javascript:void(0);" class="d-flex" @click="${() => clearFilter('category')}"><b><span>&#x2715; изчисти</span></b></a></li>
              </ul>
            </div>

            <div class="border p-4 rounded mb-4">
               <!-- 
              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Филтър по цена</h3>
                <div id="slider-range" class="border-primary"></div>
                <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
              </div>
                -->

              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Размери</h3>
                    
                    ${sizes.map(size => html`
                      <label for="s_radio" class="d-flex">
                          <input type="radio" name="size" id="s_radio" class="mr-2 mt-1" value="${size}"  @change="${onRadioChange}"> <span class="text-black">${size} </span>
                      </label>
                        `)}
                      <a href="javascript:void(0);" class="d-flex"  @click="${() => clearFilter('size')}"><b><span>&#x2715; изчисти</span></b></a>
                  
              </div>

            </div>
          </div>
        </div>

        
        
      </div>
    </div>

    <!-- Art categories  VIEW --> 

`;

export default async function artShopView(ctx){
    const categories = await categoryApi.getAll();
    const sizes = await sizeApi.getAll();

    loadData();
    
    async function loadData(){

      const urlParams = new URLSearchParams(window.location.search); // Cut # and create Object
      const category = urlParams.get('category'); // Get value on 'category'
      const size = urlParams.get('size'); // Get value on 'category'
      
        if (!category && !size) {
            try {
              const paintings = await paintingApi.getAllForSales();
              console.log('none');
              ctx.render(template(paintings, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter));
            } catch (error) {
              console.log(error.message);
            }
        } else if(size && !category){
              const sizesCheck = size.split(',');
              const sizeFilter = await paintingApi.getPaintingsBySize(sizesCheck); //equalToCategory is a String, equalToSize is a Array
              console.log('size');
              
            
              ctx.render(template(sizeFilter, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter));
              //paintingFilter(category, sizesCheck);
          }else if(category && !size){
              const categoryFilter = await paintingApi.getPaintingsByCategory(category); //equalToCategory is a String, equalToSize is a Array
              console.log('category');
              ctx.render(template(categoryFilter, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter, category));
              //paintingFilter(category, sizesCheck);
            }
          else{
            const allfilter = await paintingApi.getCombinedPaintings(category, size);
            console.log('filter');
            
            ctx.render(template(allfilter, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter, category));
            //paintingFilter(category);

          }

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
    }
    
    // Sort name by ASC
    async function sortNameASC(e){
      e.preventDefault();
      const paitings = await paintingApi.getAllForSales();
        try{
            const sortedByNameAsc = paitings.sort((a, b) => a.name.localeCompare(b.name));
            ctx.render(template(sortedByNameAsc, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter));
        }catch(error){
            console.log(error.message);
        }
    }

     // Sort name by DESC
    async function sortNameDESC(e){
      const paitings = await paintingApi.getAllForSales();
      e.preventDefault();
        try{
          const sortedByNameDesc = paitings.sort((a, b) => b.name.localeCompare(a.name));
          ctx.render(template(sortedByNameDesc, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter));
        }catch(error){
            console.log(error.message);
        }
    }

    // Sort price by ASC
    async function sortPriceASC(e){
      const paitings = await paintingApi.getAllForSales();
      e.preventDefault();
      try{
        const sortedByNameAsc = paitings.sort((a, b) => a.price - b.price);
        ctx.render(template(sortedByNameAsc, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter));
      }catch(error){
          console.log(error.message);
      }
    }

    // Sort price by DESC
    async function sortPriceDESC(e){
      const paitings = await paintingApi.getAllForSales();
      e.preventDefault();
      try{
        const sortedByPriceDesc = paitings.sort((a, b) => b.price - a.price);
        ctx.render(template(sortedByPriceDesc, categories, sizes, sortNameASC, sortNameDESC, sortPriceASC, sortPriceDESC, onRadioChange, onCategoryClick, clearFilter));
      }catch(error){
          console.log(error.message);
      }
    }

    function getSelectedCategory() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('category');
    }

    function getSelectedSize() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('size');
    }

    function onCategoryClick(selectedCategory) {
      const selectedSize = getSelectedSize();  // Функция, която ще върне избрания размер, ако има такъв
  
      // Вземаме текущия URL
      const currentUrl = new URL(window.location);
  
      // Ако има избрана категория, добавяме параметъра category
      if (selectedCategory) {
          currentUrl.searchParams.set('category', selectedCategory);
      }
  
      // Ако има избран размер, добавяме параметъра size
      if (selectedSize) {
          currentUrl.searchParams.set('size', selectedSize);
      }
  
      // Променяме URL-то без презареждане на страницата
      window.history.pushState({}, '', currentUrl);
      loadData();
      //console.log(currentUrl.toString());
    }
  
    function onRadioChange(event) {
      const selectedSize = event.target.value; // Вземаме стойността на избрания размер

      const selectedCategory = getSelectedCategory();  // Функция, която ще върне избраната категория, ако има такава

      // Вземаме текущия URL
      const currentUrl = new URL(window.location);

      // Ако има избран размер, добавяме параметъра size
      if (selectedSize) {
          currentUrl.searchParams.set('size', selectedSize);
      }

      // Ако има избрана категория, добавяме параметъра category
      if (selectedCategory) {
          currentUrl.searchParams.set('category', selectedCategory);
      }

      // Променяме URL-то без презареждане на страницата
      window.history.pushState({}, '', currentUrl);
      loadData();
      //console.log(currentUrl.toString());
    }

    function clearFilter(clearFilter){
        const currentUrl = new URL(window.location);

        if(clearFilter === 'size'){
          const radioButtons =  document.querySelectorAll('#s_radio');
          
          // clear all radio checked
          radioButtons.forEach(radio => radio.checked = false);
        }

        // Clear filter (category or size)
        currentUrl.searchParams.delete(clearFilter);

        // Refresh url
        history.pushState(null, "", currentUrl.toString());
        loadData();
    }

    
}