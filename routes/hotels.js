import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel,searchHotel, updateHotel, countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// CREATE
router.post("/", verifyAdmin,createHotel);

// UPDATE 
router.put("/:id", verifyAdmin, updateHotel)

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

// GET
router.get("/find/:id", getHotel)

// GET By Text
router.get("/search/:search",searchHotel)

// GET ALL
router.get("/", getAllHotel)

router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

export default router;