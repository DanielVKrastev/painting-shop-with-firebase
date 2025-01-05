import { auth } from "../../config/firebaseInit";

export function authMiddleware(ctx, next){
    ctx.user = auth.currentUser;
    ctx.isAuthenticated = !!auth.currentUser;

    next();
}