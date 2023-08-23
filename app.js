const express = require("express");
const app = express();

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

// Makes the files in public available for the browser
app.use(express.static("public"));

// app.get(path, code)
app.get("/", (req, res, next) => {
  const homePage = {
    title: "Home",
  };
  res.render("homepage", homePage);
});

app.get("/contact", (req, res, next) => {
  const contactPage = {
    title: "Contact",
  };
  res.render("contact", contactPage);
});

app.get("/pizzas/margarita", (req, res, next) => {
  // res.render(path, data);

  const dataMargarita = {
    title: "Pizza Margarita",
    price: 12,
    recommendedDrink: "beer",
    imageFile: "pizza-margarita.jpg",
    ingredients: [
      {
        ingredientName: "mozzarella",
        calories: 400,
      },
      {
        ingredientName: "tomato sauce",
        calories: 200,
      },
      {
        ingredientName: "tomato sauce",
        calories: 200,
      },
    ],
  };

  res.render("product", dataMargarita);
});

app.get("/pizzas/veggie", (req, res, next) => {
  const dataVeggie = {
    title: "Veggie Pizza",
    price: 15,
    recommendedDrink: "power smoothie",
    imageFile: "pizza-veggie.jpg",
    ingredients: [
      {
        ingredientName: "cherry tomatoes",
        calories: 80,
      },
      {
        ingredientName: "basilicum",
        calories: 30,
      },
      {
        ingredientName: "olives",
        calories: 300,
      },
    ],
  };

  res.render("product", dataVeggie);
});

app.get("/pizzas/seafood", (req, res, next) => {
  const dataSeafood = {
    title: "Seafood Pizza",
    recommendedDrink: "white wine",
    imageFile: "pizza-seafood.jpg",
    //ingredients: ["tomato sauce", "garlic", "prawn"],
  };

  res.render("product", dataSeafood);
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));
