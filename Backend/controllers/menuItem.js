const prisma = require("../db");
const menuItemRouter = require("express").Router();
const { isAdmin } = require("../utils/middleware");

menuItemRouter.get("/", async (req, res) => {
  try {
    const menuItems = await prisma.menu_item.findMany();
    res.status(200).json(menuItems);
  } catch (err) {
    console.log("error in menu item api: ", err);
    res.status(500).json({ message: "Failed to fetch menu items" });
  }
});

menuItemRouter.post("/", isAdmin, async (req, res) => {
  const { item_name, item_price, menuId, availability, item_description } =
    req.body;

  try {
    const existedItem = await prisma.menu_item.findFirst({
      where: { item_name },
    });
    if (existedItem) {
      return res.status(400).json({ err: `Menu item already exists` });
    }

    const newMenuItem = await prisma.menu_item.create({
      data: {
        item_name,
        item_price,
        menuId,
        availability,
        item_description,
      },
    });
    res
      .status(201)
      .json({ message: `Menu Item added successfully`, newMenuItem });
  } catch (err) {
    console.log("error from  menuItemRouter", err);
    res.status(500).json({ error: "error to create menu item" });
  }
});

menuItemRouter.put("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;

  const { item_name, item_price, menuId, availability, item_description } =
    req.body;
  try {
    const updateMenuItem = await prisma.menu_item.update({
      where: { id: parseInt(id) },
      data: {
        item_name,
        item_price,
        menuId,
        availability,
        item_description,
      },
    });
    res
      .status(200)
      .json({ message: `Menu Item updated successfully`, updateMenuItem });
  } catch (err) {
    console.log(`Error in updating menu item ${err}`);
    res.status(500).json({ error: `Error in updating menu item` });
  }
});

menuItemRouter.delete("/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.menu_item.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: `Menu item deleted successfully` });
  } catch (err) {
    console.log(`Error in deleting menu item ${err}`);
    res.status(500).json({ error: `Error in deleting menu item` });
  }
});

module.exports = menuItemRouter;
