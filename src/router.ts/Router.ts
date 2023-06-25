import express,{Request,Response} from "express";

export const Router = express.Router();

Router.get("/", async (req: Request, res: Response)=>{
    res.render("index")
})
