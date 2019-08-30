const data = {
  elements: [
    {
      id: 1,
      name: "Gomas",
      sku: "GGMM1",
      location: "Box2",
      price: "123.00",
      status: true,
      totalStock: 3,
      owner: "rigo",
      actions: "lalala"
    },
    {
      id: 2,
      name: "Rueda",
      sku: "RROO1",
      location: "Box1",
      price: "1500.00",
      status: true,
      totalStock: 2,
      owner: "rigo",
      actions: "lalala"
    },
    {
      id: 3,
      name: "Faros",
      sku: "FFFF1",
      location: "Box1",
      price: "300.00",
      status: true,
      totalStock: 5,
      owner: "rigo",
      actions: "lalala"
    },
    {
      id: 6,
      name: "Probando123",
      sku: "Probando123",
      location: "Probando123",
      price: "3.00",
      status: true,
      totalStock: 3,
      owner: "admin",
      actions: "lalala"
    }
  ],
  columns: [
    { name: "id", sortable: false },
    { name: "Nombre", sortable: true },
    { name: "SKU", sortable: true },
    { name: "Ubicacion", sortable: true },
    { name: "Precio", sortable: true },
    { name: "Estado", sortable: false },
    { name: "Stock", sortable: true },
    { name: "Creador", sortable: true },
    { name: "Actions", sortable: false }
  ]
};

export default data;
