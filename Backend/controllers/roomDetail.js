const prisma = require("../db");
const roomDetailRouter = require("express").Router();
const { isAdmin } = require("../utils/middleware");

roomDetailRouter.get("/", async (req, res) => {
  try {
    const roomDetail = await prisma.room.findMany();
    res.json(roomDetail);
  } catch (err) {
    console.log(`Error in fetch api to get room detail`);
    res.status(500).json({ message: "Error to fetch room detail" });
  }
});
roomDetailRouter.post("/", isAdmin, async (req, res) => {
  try {
    const { roomId, number, availability, per_day } = req.body;

    const existedRoomNo = await prisma.room.findFirst({
      where: { number },
    });
    if (existedRoomNo) {
      return res.status(400).json({ err: `Room ${number} already exists` });
    }

    const newRoom = await prisma.room.create({
      data: {
        number,
        roomId,
        availability,
        per_day,
      },
    });
    res
      .status(201)
      .json({ message: `Room detail added successfully`, newRoom });
  } catch (err) {
    console.log("error from  roomDetail", err);
    res.status(500).json({ error: "error to add room detail" });
  }
});

roomDetailRouter.put("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;

  const { roomId, number, availability, per_day } = req.body;
  try {
    const updateRoomDetail = await prisma.room.update({
      where: { id: parseInt(id) },
      data: {
        roomId,
        number,
        availability,
        per_day,
      },
    });
    res
      .status(200)
      .json({ message: `Room detail updated successfully`, updateRoomDetail });
  } catch (err) {
    console.log(`Error in updating room detail: `, err);
    res.status(500).json({ error: `Error in updating room details` });
  }
});

roomDetailRouter.delete("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.room.delete({
      where: { id: parseInt(id) },
    });
    res
      .status(200)
      .json({ message: `Room detail has been deleted successfully` });
  } catch (err) {
    console.log(`Error in deleting room detail ${err}`);
    res.status(500).json({ error: `Error in deleting room detail` });
  }
});

module.exports = roomDetailRouter;
