import { signup } from '../controller/auth.js';
import { Router } from 'express';
const auth = Router();
auth.post("/signup", signup);
export default auth;
//# sourceMappingURL=Authentication.js.map