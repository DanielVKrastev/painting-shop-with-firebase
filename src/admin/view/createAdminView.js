import { html, render } from "lit-html";
import categoryApi from "../../api/categoryApi";
import { auth } from "../../config/firebaseInit";
import sizeApi from "../../api/sizeApi";
import paintingApi from "../../api/paintingApi.js";

const rootEl = document.querySelector('#site-root');
const template = (onSubmitPainting, onSubmitCategory, onSubmitSize, sizes, categories) => html`
 <!-- Form Start -->
 <div class="container-fluid pt-4 px-4">
    <div class="row g-4">

    <a href="https://photos.google.com/share/AF1QipPyeiYbVGbvqtQbeuj4Q8I-34SP-Oyvt6u7YfhDLdl2WGbFf7hgKXbcqxvDP8kPgQ?key=WVktQk9pTkp4T1o1a2ZFWXRLR3pGVDJ2dFJZc2Zn" target="_blank" class="btn btn-primary" > Добави снимки</a>

        <div class="col-sm-12 col-xl-6">

            
            <form method="POST" @submit=${onSubmitPainting}>
                <div class="bg-light rounded h-100 p-4">
                    <h6 class="mb-4">Добави картина</h6>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="namePaintingInput" placeholder="Име на картина" name="name" required>
                        <label for="namePaintingInput">Име на картина</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="price" placeholder="Цена" name="price" required>
                        <label for="price">Цена</label>
                    </div>
                    <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect1"
                            aria-label="Floating label select example" name="category">
                            <option selected>Категория</option>
                            ${categories.map(category => html`
                                <option value=${category.name}>${category.name}</option>
                            `)}
                        </select>
                        <label for="floatingSelect1">Категория</label>
                    </div>
                    <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect2"
                            aria-label="Floating label select example" name="size">
                            <option selected>Размери</option>
                            ${sizes.map(size => html`
                                <option value=${size}>${size}</option>
                            `)}
                        </select>
                        <label for="floatingSelect2">Размери</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="imagePaintingInput" placeholder="Снимка URL" name="imageUrl" required>
                        <label for="imagePaintingInput">Снимка URL</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="paintingInput" placeholder="Бои" name="paints" required>
                        <label for="paintingInput">Бои</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Напиши описание тук"
                            id="floatingTextarea" style="height: 150px;" name="description" required></textarea>
                        <label for="floatingTextarea">Описание</label>
                    </div>

                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Продадена</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio"
                                    id="gridRadios1" value="yes" name="sold" >
                                <label class="form-check-label" for="gridRadios1">
                                    Да
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio"
                                    id="gridRadios1" value="no" name="sold" checked>
                                <label class="form-check-label" for="gridRadios2">
                                    Не
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Активна в сайта</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio"
                                    id="activeRadio1" value="yes" name="active" checked>
                                <label class="form-check-label" for="activeRadio1">
                                    Да
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio"
                                    id="activeRadio1" value="no" name="active">
                                <label class="form-check-label" for="activeRadio2">
                                    Не
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <button type="submit" class="btn btn-primary">Създай картина</button>
                </div>
            </form>
        </div>

        <div class="col-sm-12 col-xl-6">
            <form method="POST" @submit=${onSubmitCategory}>
                <div class="bg-light rounded h-100 p-4">
                        <h6 class="mb-4">Добави категория</h6>
                        <div class="form-floating mb-3">
                            <input name="name" type="text" class="form-control" id="nameCategory" placeholder="Име на категория" required>
                            <label for="nameCategory">Име на категория</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input name="imageUrl" type="text" class="form-control" id="categoryImage" placeholder="Снимка URL" required>
                            <label for="categoryImage">Снимка URL</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Създай категория</button>
                </div>
            </form>

            <br>
            
            <div class="col-sm-12">
                <form  method="POST" @submit=${onSubmitSize}>
                    <div class="bg-light rounded h-100 p-4">
                        <h6 class="mb-4">Добави размери</h6>
                        <div class="form-floating mb-3">
                            <input name="size" type="text" class="form-control" id="sizeInput"  placeholder="Размери" required> 
                            <label for="sizeInput">Размери</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Създай размер</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
            <!-- Form End -->

`;

export default async function(ctx, next){
    const sizes = await sizeApi.getAll();
    const categories = await categoryApi.getAll();
    ctx.render(template(createPainting, createCategory, createSize, sizes, categories));
}

async function createPainting(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const paintingData = Object.fromEntries(formData);
    
 
    try{
        const user = auth.currentUser;
        user.getIdToken() //get USER TOKEN, return promise
            .then((token) => {
                paintingApi.create(paintingData, token);
            })
        
        e.target.reset();
        
    }catch(err){
        console.log(err.message);
    }
}

async function createCategory(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const categoryData = Object.fromEntries(formData);

    try{
        const user = auth.currentUser;
        user.getIdToken() //get USER TOKEN, return promise
            .then((token) => {
                categoryApi.create(categoryData, token);
            })
        
        //await categoryApi.create(categoryData);
        e.target.reset();
        
    }catch(err){
        console.log(err.message);
    }
}

async function createSize(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const sizeData = Object.fromEntries(formData);
    
 
    try{
        const user = auth.currentUser;
        user.getIdToken() //get USER TOKEN, return promise
            .then((token) => {
                sizeApi.create(sizeData.size, token);
            })
        
        //await categoryApi.create(categoryData);
        e.target.reset();
        
    }catch(err){
        console.log(err.message);
    }
}