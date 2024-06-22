import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';



class Server {
    //TODO : Crear la instancia global de nuestra app
    public app: Application;
    //TODO: Generar el constructor
    constructor(){
        this.app = express();
        this.config();
    }

    // *generar un metodo para la configuracion
    private config(): void {

        // * Configuración del puerto para el server.
        this.app.set('port', 3000);


        // * Mostrar las peticiones en consola
        this.app.use(morgan("dev"));

        // * Uso de CORS(Cross Origin)
        this.app.use(cors);

        // * Generar restricciones a la API
        this.app.use(express.json);
        this.app.use(express.urlencoded({extended: false}));
    }
    

    //TODO: Generar un método para la configuración de rutas
    private routes(): void {
        throw new Error ('Not Implemented');
    }
    //TODO: Generar un método para inicializar el servicio
    start(): void{
        this.app.listen(this.app.use("port"), ()=> {
            console.log("Server on port", this.app.get("port"));
        });
    }

}
const server = new Server();
server.start();