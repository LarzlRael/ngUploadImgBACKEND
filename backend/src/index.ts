import app from './app';
//importando la conexion a la base de datos
import { startConection } from './database';
async function main() {
    startConection();
    await app.listen(app.get('port'));
    console.log('server on port : ' + app.get('port'));
}

main();