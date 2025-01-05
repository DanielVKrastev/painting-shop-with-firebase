import { html } from "lit-html";
import paintingApi from "../../api/paintingApi";
import sizeApi from "../../api/sizeApi";
import categoryApi from "../../api/categoryApi";

const template = (paintings, categories, sizes) => html`
 <!-- Table Start -->
 <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Категории</h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Снимка (URL)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${categories.map((category, id=0) => html`
                        <tr>
                            <th scope="row">${id++}</th>
                            <td>${category.name}</td>
                            <td>${category.imageUrl}</td>
                        </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Размери</h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Размери</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sizes.map((size, id=0) => html`
                        <tr>
                            <th scope="row">${id++}</th>
                            <td>${size}</td>
                        </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        </div>
    
        <div class="col-12">
            <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Картини</h6>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Име</th>
                                <th scope="col">Категория</th>
                                <th scope="col">Размери</th>
                                <th scope="col">Бои</th>
                                <th scope="col">Снимка (URL)</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Цена</th>
                                <th scope="col">Продадена</th>
                                <th scope="col">Активна</th>
                            </tr>
                        </thead>
                        <tbody>


                            ${paintings.map((painting, id=0) => html`
                            <tr>
                                <th scope="row">${id++}</th>
                                <td>${painting.name}</td>
                                <td>${painting.category}</td>
                                <td>${painting.size}</td>
                                <td>${painting.paints}</td>
                                <td>${painting.imageUrl.length > 20 ? painting.imageUrl.substring(0, 20) + '...' : painting.imageUrl}</td>
                                <td>${painting.description.length > 20 ? painting.description.substring(0, 20) + '...' : painting.description}</td>
                                <td>${painting.price}</td>
                                <td>${painting.sold}</td>
                                <td>${painting.active}</td>
                            </tr>
                        `)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Table End -->

`;

export default async function(ctx, next){
    const paintings = await paintingApi.getAll();
    const sizes = await sizeApi.getAll();
    const categories = await categoryApi.getAll();
    console.log(categories);
    console.log(paintings);
    
    
    ctx.render(template(paintings, categories, sizes));
}