import mongoose, { connect } from 'mongoose';

export async function startConection() {
    await connect('mongodb://localhost/photo-gallery-db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('database is conected');
}

