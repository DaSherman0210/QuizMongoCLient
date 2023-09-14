import express from "express";
import { postAcudientes, postCitas, postConsultorios, postEspecialidad, postGeneros, postMedicos, postTipo_documentos, postUsuarios , endpoint1,endpoint2, endpoint3, endpoint4, endpoint6, endpoint7, endpoint8, endpoint9} from "../controllers/controller.js";

const router = express.Router();

router.get("/endpoint1", endpoint1);
router.get("/endpoint2", endpoint2);
router.get("/endpoint3", endpoint3);
router.get("/endpoint4", endpoint4);
router.get("/endpoint6", endpoint6);
router.get("/endpoint7", endpoint7);
router.get("/endpoint8", endpoint8);
router.get("/endpoint9", endpoint9);

router.post("/acudientes",postAcudientes);
router.post("/citas",postCitas);
router.post("/consultorios",postConsultorios);
router.post("/especialidad",postEspecialidad);
router.post("/generos",postGeneros);
router.post("/medicos",postMedicos);
router.post("/tipo_documento",postTipo_documentos);
router.post("/usuarios",postUsuarios);

export default router;