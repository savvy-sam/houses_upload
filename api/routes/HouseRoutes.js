import express from 'express';

import {getHouses, getHouseById, createHouse, updateHouse, deleteHouse} from "../controllers/HouseControllers.js"

const router = express.Router();

router.get('/houses', getHouses)
router.get ('/houses/:id', getHouseById)
router.post('/houses', createHouse)
router.put('/houses/:id', updateHouse)
router.delete('/houses/:id', deleteHouse)



export default router;