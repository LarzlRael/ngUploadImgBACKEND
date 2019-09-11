import { Router } from 'express';
const router = Router();
//importando el controlador
import { createPhoto, getPhotos, getPhoto ,deletePhoto,updatePhoto} from '../controllers/indexControllers';
//imprtando el module multer

import multer from '../libs/multerConfig';
router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto)

//rutas con parametros
router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router;
