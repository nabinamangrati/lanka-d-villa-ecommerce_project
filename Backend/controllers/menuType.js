const prisma = require("../db");
const menuTypeRouter = require("express").Router();
const { isAdmin } = require("../utils/middleware");

menuTypeRouter.get("/", async (req, res) => {
  try {
    const menuTypes = await prisma.menu_type.findMany();
    res.status(200).json(menuTypes);
  } catch (err) {
    console.log("error in menu type api: ", err);
    res.status(500).json({ message: "Failed to fetch menu types" });
  }
});

menuTypeRouter.post("/", isAdmin, async (req, res) => {
  const { type } = req.body;
  try {
    const existedType = await prisma.menu_type.findFirst({
      where: { type },
    });
    if (existedType) {
      return res.status(400).json({ err: `Menu type already exists` });
    }

    const newMenuType = await prisma.menu_type.create({
      data: { type },
    });
    res
      .status(201)
      .json({ message: `Menu Type added successfully`, newMenuType });
  } catch (err) {
    console.log("error in adding menu type", err);
    res.status(500).json({ message: `Error in adding menu type` });
  }
});

menuTypeRouter.put("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  try {
    const updateMenuType = await prisma.menu_type.update({
      where: { id: parseInt(id) },
      data: { type },
    });
    res
      .status(200)
      .json({ message: `Menu type updated successfully`, updateMenuType });
  } catch (err) {
    console.log("error in updating menu type", err);
    res.status(500).json({ message: `Error in updating menu type` });
  }
});

menuTypeRouter.delete("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.menu_type.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: `Menu type deleted successfully` });
  } catch (err) {
    console.log("error in deleting menu type", err);
    res.status(500).json({ message: `Error in deleting menu type` });
  }
});

module.exports = menuTypeRouter;
