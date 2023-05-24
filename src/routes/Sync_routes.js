import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/equipos',controller.equipos)
router.get('/locales',controller.locales)
router.get('/versiones',controller.versiones_prp)

router.get('/preciosyarts',controller.Precios_arts)


export default router