import { html, render } from "lit-html";

const rootEl = document.querySelector('body');
const template = () => html`
 <!-- Form Start -->
 <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
            <form>
                <div class="bg-light rounded h-100 p-4">
                    <h6 class="mb-4">Добави картина</h6>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Име на картина">
                        <label for="floatingInput">Име на картина</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="price" placeholder="Цена">
                        <label for="price">Цена</label>
                    </div>
                    <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Категория</option>
                            <option value="1">портрети</option>
                            <option value="2">пейзажи</option>
                            <option value="3">абсрактни картини</option>
                        </select>
                        <label for="floatingSelect">Категория</label>
                    </div>
                    <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Размери</option>
                            <option value="1">25см / 35см</option>
                            <option value="2">40см / 50см</option>
                            <option value="3">60см / 80см</option>
                            <option value="3">100см / 120см</option>
                        </select>
                        <label for="floatingSelect">Размери</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Снимка URL">
                        <label for="floatingInput">Снимка URL</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Бои">
                        <label for="floatingInput">Бои</label>
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

                    <button type="submit" class="btn btn-primary">Създай картина</button>
                </div>
            </form>
        </div>

        <div class="col-sm-12 col-xl-6">
            <form>
                <div class="bg-light rounded h-100 p-4">
                    <h6 class="mb-4">Добави категория</h6>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Име на категория">
                        <label for="floatingInput">Име на категория</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Снимка URL">
                        <label for="floatingInput">Снимка URL</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Създай категория</button>
                </div>
            </form>

            <br>
            
            <div class="col-sm-12">
                <form>
                    <div class="bg-light rounded h-100 p-4">
                        <h6 class="mb-4">Добави размери</h6>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput"  placeholder="Размери"> 
                            <label for="floatingInput">Размери</label>
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
    ctx.render(template());
    
    
}