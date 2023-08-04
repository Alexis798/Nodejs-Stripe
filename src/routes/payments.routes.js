import { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";

const router = Router()

router.post('/create-checkout-session', createSession)
router.get('/success', (req, res) => res.redirect("/success.html"))
router.get('/cancel', (req, res) => res.redirect("/index.html"))

export default router;

//? Este codigo nos permite crear un enrutador y pasarle de una vez las rutas que podemos consultar
//? Para la prueba la primera ruta estaba en get, pero para poder usarlo en frontend la cambiamos a post