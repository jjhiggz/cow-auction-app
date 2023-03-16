import { prisma } from "./db.server";

async function clearDb() {
  await prisma.cow.deleteMany();
}

async function seedDb() {
  await clearDb();
  const betsy = await prisma.cow.create({
    data: {
      birthingWeight: 1000,
      breed: "Jersey",
      weeningWeight: 220,
      name: "Betsy",
    },
  });

  const boopsy = await prisma.cow.create({
    data: {
      birthingWeight: 1100,
      breed: "Angus",
      weeningWeight: 290,
      name: "Boopsy",
    },
  });
  const floopsy = await prisma.cow.create({
    data: {
      birthingWeight: 1200,
      breed: "",
      weeningWeight: 390,
      name: "Wagyu",
    },
  });
}

seedDb()
  .then(() => {
    console.log("seeded db 🌱");
  })
  .catch((e) => {
    console.error(e);
    console.log("seeding failed 😭");
  });
