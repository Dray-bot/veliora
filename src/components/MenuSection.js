import MenuSection from "@/components/MenuSection";

const dishes = [
  {
    name: "Grilled Salmon",
    desc: "Fresh Atlantic salmon grilled with herbs and lemon.",
    price: "₦8,500",
    img: "/images/salmon.jpg",
  },
  {
    name: "Pasta Alfredo",
    desc: "Creamy Alfredo pasta with mushrooms and chicken.",
    price: "₦5,000",
    img: "/images/pasta.jpg",
  },
  {
    name: "Caesar Salad",
    desc: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: "₦3,000",
    img: "/images/salad.jpg",
  },
  {
    name: "Jollof Rice & Chicken",
    desc: "Classic Nigerian jollof rice served with spicy grilled chicken.",
    price: "₦4,500",
    img: "/images/jollof.jpg",
  },
  {
    name: "Pounded Yam & Egusi",
    desc: "Soft pounded yam paired with rich egusi soup and assorted meat.",
    price: "₦6,000",
    img: "/images/egusi.jpg",
  },
  {
    name: "Burger Deluxe",
    desc: "Juicy beef patty with cheese, lettuce, tomato, and house sauce.",
    price: "₦4,000",
    img: "/images/burger.jpg",
  },
];

export default function MenuPage() {
  return <MenuSection dishes={dishes} />;
}
