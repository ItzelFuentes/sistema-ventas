const swaggertJsDocs = require('swagger-jsdoc');

const options = {
    swaggerDefinition :{
        info:{
            version: "1.0.0",
            tittle: "Sistema Ventas API",
            description: "Documentación API",
            contact:{
                name: "Itzel Fuentes",
                url:"https://github.com"
            },
            servers: [{
                url: "http://localhost:3000",
                description:"Developer Server"
            }]
        }
    },
    basePath:"/",
    apis: ["./src/routes/*.ts"]
};

const swaggerDocs = swaggertJsDocs(options);
export default swaggerDocs;