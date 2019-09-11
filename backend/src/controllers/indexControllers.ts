import { Request, Response } from 'express';
//importando el model de la foto
import path from 'path';
import fs from 'fs-extra';

import photoModel from '../models/imageModel'

export async function createPhoto(req: Request, res: Response) {

    const { title, description } = req.body;

    const imagePath = req.file.path;
    const newPhoto = {
        title,
        description,
        imagePath
    };

    const createPhoto = new photoModel(newPhoto);

    await createPhoto.save();

    return res.json({
        message: 'photo successfully saved'
    });

}

export async function getPhotos(req: Request, res: Response) {

    const all_Image = await photoModel.find();
    return res.json(all_Image);

}


export async function getPhoto(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const onePhoto = await photoModel.findById(id);
        return res.json(onePhoto);
    } catch (error) {
        res.redirect('/')
    }
}
export async function deletePhoto(req: Request, res: Response) {
    const { id } = req.params;
    const photoDelete = await photoModel.findByIdAndRemove(id);
    if (photoDelete) {
        await fs.unlink(path.resolve(photoDelete.imagePath));
    }
    return res.json({ message: 'photo delete' });

}

export async function updatePhoto(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;
    const photoDelete = await photoModel.findByIdAndUpdate(id, {
        title, description
    });

    return res.json({ message: 'photo updated' });

}