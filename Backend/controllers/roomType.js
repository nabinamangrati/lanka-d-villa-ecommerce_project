const prisma = require("../db");
const roomTypeRouter = require("express").Router();
const { isAdmin } = require("../utils/middleware");

roomTypeRouter.get("/", async (req, res) => {
  try {
    const roomTypes = await prisma.room_type.findMany();
    res.status(200).json(roomTypes);
  } catch (err) {
    console.log("error in room type api: ", err);
    res.status(500).json({ message: "Failed to fetch room types" });
  }
});

roomTypeRouter.post("/", isAdmin, async (req, res) => {
  const { type } = req.body;
  try {
    const existedType = await prisma.room_type.findFirst({
      where: { type },
    });
    if (existedType) {
      return res.status(400).json({ err: `Room type already exists` });
    }

    const newRoomType = await prisma.room_type.create({
      data: { type },
    });
    res
      .status(201)
      .json({ message: `Room type added successfully`, newRoomType });
  } catch (err) {
    console.log("error in adding room type", err);
    res.status(500).json({ message: `Error in adding room type` });
  }
});

roomTypeRouter.put("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  try {
    const existedType = await prisma.room_type.findFirst({
      where: { type },
    });
    if (existedType) {
      return res.status(400).json({ err: `Room type already exists` });
    }

    const updateRoomType = await prisma.room_type.update({
      where: { id: parseInt(id) },
      data: { type },
    });
    res
      .status(200)
      .json({ message: `Room type updated successfully`, updateRoomType });
  } catch (err) {
    console.log("error in updating room type", err);
    res.status(500).json({ message: `Error in updating room type` });
  }
});

roomTypeRouter.delete("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.room_type.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: `Room type deleted successfully` });
  } catch (err) {
    console.log("error in deleting Room type", err);
    res.status(500).json({ message: `Error in deleting room type` });
  }
});

module.exports = roomTypeRouter;
