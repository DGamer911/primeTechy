import Galaxy23Ultra from "../assets/item51.jpg";
import ROGZephyrusG14 from "../assets/item50.jpg";
import IPadPro12_9 from "../assets/item52.jpg";
import Macbook from "../assets/item1.jpg";


const featuredProducts = [
  {
    id: 1,
    name: "MacBook Pro 14 M2",
    price: 1999,
    rating: 4.8,
    discount: 10,
    image: Macbook,
    category: "Laptops",
    slug: "macbook-pro-14-m2"

  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199,
    rating: 4.9,
    discount: 12,
    image: Galaxy23Ultra,
        category: "Smartphones",
    slug: "samsung-galaxy-s23-ultra"

  },
  {
    id: 3,
    name: "Asus ROG Zephyrus G14",
    price: 1599,
    rating: 4.7,
    discount: 15,
    image: ROGZephyrusG14,
    category: "Laptops",
    slug: "asus-rog-zephyrus-g14"

  },
  {
    id: 4,
    name: "iPad Pro 12.9",
    price: 1099,
    rating: 4.9,
    discount: 8,
    image: IPadPro12_9,
        category: "Ipads & Tablets",
    
    slug: "ipad-pro-12.9"

  },
];

export default featuredProducts;
