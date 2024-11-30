export const menuItems = [
  // {
  //   id: "m1",
  //   label: "Home",
  //   hasSubMenu: false,
  //   link: "/krishi-vikas-udyog/",
  // },
  {
    id: "m2",
    label: "Tractor",
    hasSubMenu: true,
    subMenu: [
      {
        id: "tsm-1",
        label: "Buy New Tractor",
        link: "/krishi-vikas-udyog/tractor/new",
      },
      {
        id: "tsm-2",
        label: "Buy Used Tractor",
        link: "/krishi-vikas-udyog/tractor/old",
      },
      {
        id: "tsm-3",
        label: "Rent Tractor",
        link: "/krishi-vikas-udyog/tractor/rent",
      },
    ],
    image: "http://localhost:5173/krishi-vikas-udyog/src/assets/images/trac-drop.jpg"
  },
  {
    id: "m3",
    label: "Goods Vehicle",
    hasSubMenu: true,
    subMenu: [
      {
        id: "gsm-1",
        label: "Buy New Goods Vehicle",
        link: "/krishi-vikas-udyog/goods-vehicle/new",
      },
      {
        id: "gsm-2",
        label: "Buy Used Goods Vehicle",
        link: "/krishi-vikas-udyog/goods-vehicle/old",
      },
      {
        id: "gsm-3",
        label: "Rent Goods Vehicle",
        link: "/krishi-vikas-udyog/goods-vehicle/rent",
      },
    ],
    image: "http://localhost:5173/krishi-vikas-udyog/src/assets/images/gv-drop.webp"
  },
  {
    id: "m4",
    label: "Agri Inputs",
    hasSubMenu: true,
    subMenu: [
      {
        id: "asm-1",
        label: "Seeds",
        link: "/krishi-vikas-udyog/agri-inputs/seeds",
      },
      {
        id: "asm-2",
        label: "Pesticides",
        link: "/krishi-vikas-udyog/agri-inputs/pesticides",
      },
      {
        id: "asm-3",
        label: "Fertilizer",
        link: "/krishi-vikas-udyog/agri-inputs/fertilizer",
      },
    ],
    image: "http://localhost:5173/krishi-vikas-udyog/src/assets/images/agri-inputs-drop.png"
  },
  {
    id: "m5",
    label: "Harvester",
    hasSubMenu: true,
    subMenu: [
      {
        id: "hsm-1",
        label: "Buy New Harvester",
        link: "/krishi-vikas-udyog/harvester/new",
      },
      {
        id: "hsm-2",
        label: "Buy Used Harvester",
        link: "/krishi-vikas-udyog/harvester/old",
      },
      {
        id: "hsm-3",
        label: "Rent Harvester",
        link: "/krishi-vikas-udyog/harvester/rent",
      },
    ],
    image: "http://localhost:5173/krishi-vikas-udyog/src/assets/images/harvest-drop.webp"
  },
  {
    id: "m6",
    label: "Implements",
    hasSubMenu: true,
    subMenu: [
      {
        id: "ism-1",
        label: "Buy New Implements",
        link: "/krishi-vikas-udyog/implements/new",
      },
      {
        id: "ism-2",
        label: "Buy Used Implements",
        link: "/krishi-vikas-udyog/implements/old",
      },
      {
        id: "ism-3",
        label: "Rent Implements",
        link: "/krishi-vikas-udyog/implements/rent",
      },
    ],
    image: "http://localhost:5173/krishi-vikas-udyog/src/assets/images/implement-drop.jpg"
  },
  {
    id: "m7",
    label: "Tyres",
    hasSubMenu: true,
    subMenu: [
      {
        id: "tysm-1",
        label: "Buy New Tyres",
        link: "/krishi-vikas-udyog/tyre/new",
      },
      {
        id: "tysm-2",
        label: "Buy Used Tyres",
        link: "/krishi-vikas-udyog/tyre/old",
      },
    ],
    image: "http://localhost:5173/krishi-vikas-udyog/src/assets/images/tyres-drop.jpg"
  },
];
