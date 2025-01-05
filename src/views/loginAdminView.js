import { signInWithEmailAndPassword } from "firebase/auth";
import { html, render } from "lit-html";
import { auth } from "../config/firebaseInit";

const rootEl = document.querySelector('#site-root');
const template = (onSubmit) => html`
<div class="container-xxl position-relative bg-white d-flex p-0">
    <!-- Sign In Start -->
    <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                    <form @submit=${onSubmit} method="POST" action="#">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>Krasteva Painting - Admin</h3>
                            </a>
                            <h3>Вход</h3>
                        </div>
                        <div class="form-floating mb-3">
                            <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                            <label for="floatingInput">Имейл</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Парола" required>
                            <label for="floatingPassword">Парола</label>
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Влез</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Sign In End -->
</div>
`;

export default function loginAdminView(ctx, next){
    render(template(loginFormSubmit), rootEl);
}

async function loginFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {email, password } = Object.fromEntries(formData);

    if(!email || !password) return;

    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        const currentUrl = new URL(window.location);
        window.location.href = `${currentUrl.origin}/admin/`;
    }catch(err){
        console.log(err.message);
    }
}