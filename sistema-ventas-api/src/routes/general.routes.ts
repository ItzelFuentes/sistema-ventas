import { Router } from "express";

class GeneralRoutes {
    public router: Router;
    constructor (){
        this.router = Router();
        this.config();
    }
    
}