import almond from "../images/almond.png"
import apple from "../images/apple.png"
import artichoke from "../images/artichoke.png"
import apricot from "../images/apricot.png"
import eggs from "../images/eggs.png"
import yogurt from "../images/yogurt.png"
import fruits from "../images/fruits.png"
import pomefruit from "../images/pomefruit.png"
import buttermilk from "../images/buttermilk.png"
const Itemsdata = [
  {
    id: 1,
    title: "Almond",
    price: 2000,
    img: almond,
    category: "Nuts",
    ingredients: ["Nuts","Tree Nut Allergies","Digestive Disorders"]
  },
  {
    id: 2,
    title: "Apple",
    price: 4000,
    img: apple,
    category: "Fruit",
    ingredients:["Oral Syndrome", "Apple Allergens"]
  },
  {
    id: 3,
    title: "Apricot",
    price: 5000,
    img: apricot,
    category: "Fruit",
    ingredients: ["Pollen Allergy" , "Tree Nuts" , "Fruits"],
  },
  {
    id: 4,
    title: "Artichoke",
    price: 6000,
    img: artichoke,
    category: "Nuts",
    ingredients: ["Gallstones","Artichoke Allergy",],
  },
  {
    id: 5,
    title: "Buttermilk",
    price: 8000,
    img: buttermilk,
    category: "Dairy",
    ingredients: ["Lactose Intolerance","Dairy Allergy","Heart Disease","Cholesterol Concerns"],
  },
  {
    id: 6,
    title: "Eggs",
    price: 2100,
    img: eggs,
    category: "Dairy",
    ingredients: ["Cholesterol Concerns","Dairy Allergy"],
  },
  {
    id: 7,
    title: "Yogurt",
    price: 5500,
    img: yogurt,
    category: "Dairy",
    ingredients: ["Lactose Intolerance","Dairy Allergy","Heart Disease","Cholesterol Concerns" ,"High Sugar Content"],
  },
  {
    id: 8,
    title: "Tropical fruit",
    price: 6500,
    img: fruits,
    category: "Fruit",
    ingredients: ["Digestive Disorders","High Sugar Content"],
  },
  {
    id: 9,
    title: "Pome fruit",
    price: 3500,
    img: pomefruit,
    category: "Fruit",
    ingredients: [],
  },
]

export default Itemsdata
