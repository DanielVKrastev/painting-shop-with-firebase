import { html, render } from "lit-html";
import categoryApi from "../../api/categoryApi";
import { auth } from "../../config/firebaseInit";
import sizeApi from "../../api/sizeApi";

const rootEl = document.querySelector('#site-root');
const template = (onSubmitCategory, onSubmitSize) => html`
 <!-- Form Start -->
 <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
            <form>
                <div class="bg-light rounded h-100 p-4">
                    <h6 class="mb-4">Добави картина</h6>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="namePaintingInput" placeholder="Име на картина">
                        <label for="namePaintingInput">Име на картина</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="price" placeholder="Цена">
                        <label for="price">Цена</label>
                    </div>
                    <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect1"
                            aria-label="Floating label select example">
                            <option selected>Категория</option>
                            <option value="1">портрети</option>
                            <option value="2">пейзажи</option>
                            <option value="3">абсрактни картини</option>
                        </select>
                        <label for="floatingSelect1">Категория</label>
                    </div>
                    <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect2"
                            aria-label="Floating label select example">
                            <option selected>Размери</option>
                            <option value="1">25см / 35см</option>
                            <option value="2">40см / 50см</option>
                            <option value="3">60см / 80см</option>
                            <option value="3">100см / 120см</option>
                        </select>
                        <label for="floatingSelect2">Размери</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="imagePaintingInput" placeholder="Снимка URL">
                        <label for="imagePaintingInput">Снимка URL</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="paintingInput" placeholder="Бои">
                        <label for="paintingInput">Бои</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Напиши описание тук"
                            id="floatingTextarea" style="height: 150px;"></textarea>
                        <label for="floatingTextarea">Описание</label>
                    </div>

                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Продадена</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios"
                                    id="gridRadios1" value="yes" checked>
                                <label class="form-check-label" for="gridRadios1">
                                    Да
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios"
                                    id="gridRadios2" value="no">
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
                                <input class="form-check-input" type="radio" name="gridRadios"
                                    id="activeRadio1" value="yes" checked>
                                <label class="form-check-label" for="activeRadio1">
                                    Да
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios"
                                    id="activeRadio2" value="no">
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
                            <input name="name" type="text" class="form-control" id="nameCategory" placeholder="Име на категория">
                            <label for="nameCategory">Име на категория</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input name="imageUrl" type="text" class="form-control" id="categoryImage" placeholder="Снимка URL">
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
                            <input name="size" type="text" class="form-control" id="sizeInput"  placeholder="Размери"> 
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

export default function(ctx, next){
    ctx.render(template(createCategory, createSize));
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