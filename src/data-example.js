const data = {
  elements: [
    {
      id: 1,
      image: "http://lorempixel.com/400/200/",
      name: "Gomas",
      sku: "GGMM1",
      location: "Box2",
      price: 123.0,
      status: true,
      totalStock: 3,
      owner: "rigo"
    },
    {
      id: 2,
      image: "http://lorempixel.com/400/200/",
      name: "Rueda",
      sku: "RROO1",
      location: "Box1",
      price: 1500.2,
      status: true,
      totalStock: 2,
      owner: "rigo"
    },
    {
      id: 3,
      image: "http://lorempixel.com/400/200/",
      name: "Faros",
      sku: "FFFF1",
      location: "Box1",
      price: 300.0,
      status: true,
      totalStock: 5,
      owner: "rigo"
    },
    {
      id: 6,
      image: "http://lorempixel.com/400/200/",
      name: "Probando123",
      sku: "Probando123",
      location: "Probando123",
      price: 3.0,
      status: true,
      totalStock: 3,
      owner: "admin"
    }
  ],
  columns: [
    { name: "id", sortable: false },
    { name: "Imagen", sortable: false, type: "image" },
    { name: "Nombre", sortable: true, type: "string" },
    { name: "SKU", sortable: true, type: "string" },
    { name: "Ubicacion", sortable: true, type: "string" },
    { name: "Precio", sortable: true, type: "number" },
    { name: "Stock", sortable: true, type: "number" },
    { name: "creador", sortable: true },
    { name: "Actions", sortable: false, type: "actions" }
  ]
};

export default data;
