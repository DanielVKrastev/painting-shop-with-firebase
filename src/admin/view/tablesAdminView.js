import { html } from "lit-html";

const template = () => html`
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
                        <tr>
                            <th scope="row">1</th>
                            <td>портрети</td>
                            <td>Doe</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>пейзажи</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>абстрактни картини</td>
                            <td>Thornton</td>
                        </tr>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>25см / 35см</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>40цм / 50см</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>40цм / 50см</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>40цм / 50см</td>
                        </tr>
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
                            <tr>
                                <th scope="row">1</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>jhon@email.com</td>
                                <td>USA</td>
                                <td>123</td>
                                <td>Member</td>
                                <td>Member</td>
                                <td>Member</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>mark@email.com</td>
                                <td>UK</td>
                                <td>456</td>
                                <td>Member</td>
                                <td>Member</td>
                                <td>Member</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>jacob@email.com</td>
                                <td>AU</td>
                                <td>789</td>
                                <td>Member</td>
                                <td>Member</td>
                                <td>Member</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Table End -->

`;

export default function(ctx, next){
    ctx.render(template());
}