const Dishes = [
    {
        category: "continental", subcategory: {
            Soup: [
                {
                    id: "coso001",
                    name: "Cream Of Mushroom Soup",
                    price: 130,
                    img: "",
                    type: "veg",
                    genre: "soup",
                    description: "A THICK CREAMY SOUP MADE WITH FRESH MASHROOM & HERBS."
                },
                {
                    id: "coso002",
                    name: "Cream OF Chicken Soup",
                    price: 150,
                    img: "/Dishes_photos/cream of chicken.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: "A THICK CREAMY SOUP MADE WITH CHICKEN STOCK & SPICES."
                }
            ],
            Salad: [
                {
                    id: "cosa001",
                    name: "Greek Salad",
                    price: 160,
                    img: "/Dishes_photos/Green_salad.jpg",
                    type: "veg",
                    description: "SERVED WITH SLICED FRESH VEGGIES, LIKE CHERRY TOMATO, CUCUMBER, RED & YELLOW CAPSICUM, LETTUCE, MINT, ONION SLICES, OLIVES, TOPPED WITH FETA CHEESE & SERVED WITH VINAIGRETTE DRESSING."
                },
                {
                    id: "cosa002",
                    name: "Mix Salad With Pomogranates",
                    price: 180,
                    img: "/Dishes_photos/Mix salad  (1).jpg",
                    type: "veg",
                    description: "CRISPY FRIED CHICKEN WINGS TOSSED WITH HONEY GLAZE BARBECUE SAUCE, SERVED(8 PCS)."
                },
                {
                    id: "cosa003",
                    name: "Caesar Salad With Chicken",
                    price: 180,
                    img: "/Dishes_photos/Caesar salad with chicken.jpg",
                    type: "nonveg",
                    description: "MADE WITH LETTUCE, CHICKEN CROUTONS, CHEESE AND CAESAR DRESSING."
                }
            ],
            Starter: [
                {
                    id: "cost001",
                    name: "French Fries",
                    price: 150,
                    img: "",
                    type: "veg",
                    genre: "fries",
                    description: "THIN STRIPS OF POTATO DEEP FRIED, SERVED WITH DIPPING MAYO"
                },
                {
                    id: "cost002",
                    name: "Chessy French Fries",
                    price: 180,
                    img: "/Dishes_photos/CHEESY FRENCH FRIES.jpg",
                    type: "veg",
                    genre: "fries",
                    description: "DEEP FRIED FRENCH FRIES GARNISHED WITH MELTED CHEESE."
                },
                {
                    id: "cost003",
                    name: "Potato Wedges",
                    price: 140,
                    img: "",
                    type: "veg",
                    genre: "fries",
                    description: "WEDGES SHAPED POTATO WHICH IS UNPEELED AND DEEP FRIED."
                },
                {
                    id: "cost004",
                    name: "BBQ Chicken Wings",
                    price: 240,
                    img: "/Dishes_photos/BBQ chicken wing.jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: " CRISPY FRIED CHICKEN WINGS TOSSED WITH HONEY GLAZE BARBECUE SAUCE, SERVED(8 PCS)."
                },
                {
                    id: "cost005",
                    name: "Chickend Nuggets",
                    price: 200,
                    img: "/Dishes_photos/Chicken nuggets.jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "IT'S A PIECE OF DEBONED CHICKEN THAT IS BREADDED AND DEEP FRIED, SERVED WITH DEPPING MAYO."
                },
                {
                    id: "cost006",
                    name: "Crspy Sardine",
                    price: 160,
                    img: "/Dishes_photos/Crispy sardine  (1).jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "TARLE FISH MARINATED WITH FRESH HERBS & COATED WITH PANKO BREAD CRUMBS & SHALLOW FRIED, SERVED WITH GARLIC MAYO"
                },
                {
                    id: "cost007",
                    name: "Crispy Calamari",
                    price: 295,
                    img: "/Dishes_photos/Calm.jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "MARINATE BATTER SQUID FRIED AND SERVED WITH MAYO."
                },
                {
                    id: "cost008",
                    name: "Onion Rings",
                    price: 120,
                    img: "/Dishes_photos/Onion rings  (2).jpg",
                    type: "veg",
                    genre: "fries",
                    description: "ONION RINGS MARINATED WITH HERBS & COATED WITH PANCO BREAD CRUMBS, THEN DEEP FRIED & SERVED WITH MAYO."
                },
                {
                    id: "cost009",
                    name: "Chesse Stuffed Button Mushroom ",
                    price: 240,
                    img: "/Dishes_photos/Cheese stuffed button mushroom.jpg",
                    type: "veg",
                    genre: "fries",
                    description: "CHEESE & VEGGIE STUFFED IN FRESH MASHROOM, BREADED FRIED AND SERVED WITH GARLIC MAYONESE."
                },
                {
                    id: "cost010",
                    name: "Falafel",
                    price: 150,
                    img: "/Dishes_photos/FALAFAL-1 (1).jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "FALAFAL IS MEDITERRANEAN DISH MADE FROM THE MIXTURE OF CHEAK PEAS FRESH CORIENDER BELL PEPPER, GREEN CHILLY, DEEP FRIED, SERVED WITH YOGURT SAUCE"
                },
                {
                    id: "cost011",
                    name: "Chesse Corn Balls",
                    price: 200,
                    img: "",
                    type: "veg",
                    genre: "fries",
                    description: "FRESH CORN, GRATED POTATO, TENDER AND CHEESY INSIDE, BREADED AND FRIED, CRUNCHY AND CRISPY SERVED WITH MAYO DIPPING."
                }
            ],
            Sandwich: [
                {
                    id: "cosa001",
                    name: "Veg club Sandwich",
                    price: 150,
                    img: "/Dishes_photos/Veg club sandwich.jpg",
                    type: "veg",
                    genre: "sandwich",
                    description: "CONSISTING OF MIX VEG FILLING BETWEEN THE BREAD SERVED WITH FRENCH FRIES AND SALAD."
                },
                {
                    id: "cosa002",
                    name: "Chicken Club Sandwich",
                    price: 170,
                    img: "Dishes_photos/Chicken club sandwich  (1).jpg",
                    type: "nonveg",
                    genre: "sandwich",
                    description: " MIXTURE OF VEG, EGG AND CHICKEN FILLING BETWEEN THE BREAD AND SERVED WITH FRENCH FRIES AND SALAD."
                },
                {
                    id: "cosa003",
                    name: "chicken Grilled Sandwich",
                    price: 160,
                    img: "/Dishes_photos/GRILLED CHICKEN SANDWICH.jpg",
                    type: "nonveg",
                    genre: "sandwich",
                    description: "MIXTURE OF SHREDDED CHICKEN, FRESH LETTUCE, MAYO, CHEESE BETWEEN & GRILLED BREAD, SERVED WITH FRENCH FRIES AND SALAD."
                },
                {
                    id: "cosa004",
                    name: "Egg Sandwich",
                    price: 150,
                    img: "/Dishes_photos/egg sandwich.jpg",
                    type: "nonveg",
                    genre: "sandwich",
                    description: "MIXTURE OF BUTTER, GRATED BOILED EGG,FRESH LETTUCE, MAYONESE, CHEESE BETWEEN THE GRILLED BREAD, SERVED WITH FRENCH FRIES & SALAD"
                }
            ],
            Pizza: [
                {
                    id: "copi001",
                    name: "Mix Veg Pizza ( 8 Inches)",
                    price: 250,
                    img: "/Dishes_photos/Mix veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH FRESH VEGETABLE. (8 INCHES)"
                },
                {
                    id: "copi002",
                    name: "Chicken Pizza (8 Inches )",
                    price: 280,
                    img: "/Dishes_photos/Chicken pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH BONELESS CHICKEN & VEGETABLE. (8 INCHES) "
                },
                {
                    id: "copi003",
                    name: "Sea Food Pizza (8 Inches)",
                    price: 320,
                    img: "/Dishes_photos/Seafood pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUIDS & VEGETABLE. (8 INCHES)"
                },
                {
                    id: "copi004",
                    name: "Chefs Special Veg Pizza (8 Inches)",
                    price: 280,
                    img: "/Dishes_photos/Chef special veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED BAYBYCORN RED YELLOW CAPSICUM, MASHROOM. (8 INCHES) "
                },
                {
                    id: "copi005",
                    name: "Chefs Special non-Veg Pizza (8 inches)",
                    price: 300,
                    img: "/Dishes_photos/CHEF_S SPE. NON VEG PIZZA.jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUID, CHICKEN. (8 INCHES)"
                },
                {
                    id: "copi006",
                    name: "Mix Veg Pizza (8 Inches)",
                    price: 190,
                    img: "public/Dishes_photos/Mix veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH FRESH VEGETABLE. (6 INCHES)"
                },
                {
                    id: "copi007",
                    name: "Chicken Pizza (6 Inches)",
                    price: 220,
                    img: "/Dishes_photos/Chicken pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH BONELESS CHICKEN & VEGETABLE. (6 INCHES) "
                },
                {
                    id: "copi008",
                    name: 'Sea Food Pizza (6 Inches)',
                    price: 250,
                    img: "/Dishes_photos/Seafood pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUIDS & VEGETABLE. (6 INCHES)"
                },
                {
                    id: "copi009",
                    name: "Chefs Special Veg Pizza (6 Inches)",
                    price: 220,
                    img: "/Dishes_photos/Chef special veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED BAYBYCORN RED YELLOW CAPSICUM, MASHROOM. (6 INCHES)"
                },
                {
                    id: "copi010",
                    name: "Chefs Special Non-Veg Pizza (6 Inches)",
                    price: 250,
                    img: "/Dishes_photos/CHEF_S SPE. NON VEG PIZZA.jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUID, CHICKEN. (6 INCHES) "
                }
            ],
            Pasta: [
                {
                    id: "copa001",
                    name: "Lasanga (Veg)",
                    price: 270,
                    img: "/Dishes_photos/Veg lasagna  (2).jpg",
                    type: "veg",
                    genre: "pasta",
                    description: "LASAGNA IS A BAKED PASTA, STUFFED WITH FRESH VEGGIES, SPINACH, BEANS, CARROT, GREEN PEAS & CHEESE, SERVED WITH TOMATO SAUCE."
                },
                {
                    id: "copa001",
                    name: "Lasanga (Chicken)",
                    price: 350,
                    img: "/Dishes_photos/Chicken lasagna.jpg",
                    type: "nonveg",
                    genre: "pasta",
                    description: "LASAGNA IS A BAKED PASTA, STUFFED WITH CHICKEN MINCED & CHEESE, SERVED WITH TOMATO SAUCE."
                },
                {
                    id: "copa002",
                    name: "Pasta (Veg)",
                    price: 200,
                    img: "/Dishes_photos/VEG PASTA.jpg",
                    type: "veg",
                    genre: "pasta",
                    description: "PASTA COOKED WITH BROCCOLI, BELL PEPPERS, CARROT, MUSHROOM & CHEESE, SERVED WITH CHOICE OF SELECTED SAUCE & PASTA."
                },
                {
                    id: "copa003",
                    name: 'pasta (Chicken)',
                    price: 250,
                    img: "/Dishes_photos/Penne pasta chicken  (2).jpg",
                    type: "nonveg",
                    genre: "pasta",
                    description: "PASTA COOKED WITH BONELESS CHICKEN & CHEESE, SERVED WITH CHOICE OF SELECTED SAUCE & PASTA."
                },
                {
                    id: "copa004",
                    name: "Sea Food Pasta",
                    price: 300,
                    img: "/Dishes_photos/Seafood Pasta.jpg",
                    type: "nonveg",
                    genre: "pasta",
                    description: "PASTA COOKED WITH SQUIDS, PRAWNS & CHEESE, SERVED WITH CHOICE OF SELECTED SAUCE & PASTA."
                }
            ],
            Burger: [
                {
                    id: "cobu001",
                    name: "Veg Burger",
                    price: 190,
                    img: "",
                    type: "veg",
                    genre: "burger",
                    description: "SUPER CRISPY VEGGIE PATTY LOADED INTO A SOFT BUTTER TOSSED BUNS TOPPED WITH ONIONS TOMATOES LETTUCE & CREAMY DELICIOUS DRESSING, SERVED WITH FRENCH FRIES AND COLESLAW SALAD."
                },
                {
                    id: "cobu002",
                    name: "Paneer Burger",
                    price: 220,
                    img: "",
                    type: "veg",
                    genre: "burger",
                    description: "SUPER CRISPY PANEER PATTY LOADED INTO A SOFT BUTTER TOSSED BUNS TOPPED WITH ONIONS TOMATOES LETTUCE & CREAMY DELICIOUS DRESSING, SERVED WITH FRENCH FRIES AND COLESLAW SALAD."
                },
                {
                    id: "cobu003",
                    name: "Chicken Burger",
                    price: 260,
                    img: "/Dishes_photos/Chicken burger.jpg",
                    type: "nonveg",
                    genre: "burger",
                    description: "SUPER CRISPY CHICKEN PATTY LOADED INTO A SOFT BUTTER TOSSED BUNS TOPPED WITH SUNNY SIDE EGG, ONIONS, TOMATOES, LETTUCE & CREAMY DELICIOUS DRESSING, SERVED WITH FRENCH FRIES AND COLESLAW SALAD."
                },
            ],
            Shawarma: [{
                id: "cosh001",
                name: "Chicken Shawarma (With French Fries & Salad)",
                price: 180,
                img: "/Dishes_photos/Chicken shawarma  (2).jpg",
                type: "nonveg",
                genre: "shawarma",
                description: "BONELSS CHICKEN MARINATED INTO SHAWARMA SPICES COOKED IN TANDOORI OVEN, WRAPPED WITH ROTI, SERVED WITH FRENCH FRIES & SALAD."
            },
            {
                id: "cosh002",
                name: "Falafel Shawarma (With French Fries & Salad)",
                price: 140,
                img: "/Dishes_photos/Falafel shawarma  (2).jpg",
                type: "veg",
                genre: "shawarma",
                description: "FALAFAL & CHEESE WRAPPED IN TORTILA BREAD, SERVED WITH FRENCH FRIES & SALAD."
            },
            {
                id: "cosh003",
                name: "Paneer Shawarma (With French Fries)",
                price: 150,
                img: "/Dishes_photos/Paneer shawarma.jpg",
                type: "veg",
                genre: "shawarma",
                description: "PANEER MARINATED INTO SHAWARMA SPICES COOKED IN TANDOORI OVEN, WRAPPED WITH ROTI, SERVED WITH FRENCH FRIES & SALAD."
            },
            ],
        },
    },
    {
        category: "asian", subcategory: {
            Momos: [
                {
                    id: "asmo001",
                    name: "Steamed Momos",
                    price: 180,
                    img: "/Dishes_photos/Veg momos  (2).jpg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo002",
                    name: "Steamed Momos Chicken",
                    price: 200,
                    img: "/Dishes_photos/Chicken steamed momos  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo003",
                    name: "Pan Fried Momos",
                    price: 180,
                    img: "/Dishes_photos/Pan fried momos veg.jpg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo004",
                    name: "Pan Fried Momos Chicken",
                    price: 200,
                    img: "/Dishes_photos/Pan fried momos chicken  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo005",
                    name: "Fried Momos Veg",
                    price: 180,
                    img: "/Dishes_photos/Pan fried momos  (2).jpg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo006",
                    name: "Fried Momos Chicken",
                    price: 200,
                    img: "/Dishes_photos/Pan fried momos  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo007",
                    name: "Kurkure Momos veg",
                    price: 190,
                    img: "/Dishes_photos/Kurkure momos veg.jpg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo008",
                    name: "Kurkure Momos Chicken",
                    price: 220,
                    img: "/Dishes_photos/Chicken kurkure momos.jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo009",
                    name: "Schezwan Tossed Momos(Veg)",
                    price: 190,
                    img: "/Dishes_photos/Schezwan tossed momo veg.jpg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo010",
                    name: "Schezwan Tossed Momos Chicken",
                    price: 220,
                    img: "/Dishes_photos/Chicken schezwan tossed momos  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo011",
                    name: "Butter Garlic Momos",
                    price: 180,
                    img: "/Dishes_photos/Veg butter garlic momos  (2).jpg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo012",
                    name: "Butter Garlic Momos Chicken",
                    price: 220,
                    img: "/Dishes_photos/BUTTER GARLIC MOMOS (CHICKEN).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo013",
                    name: "Momos Platter Veg",
                    price: 340,
                    img: "/Dishes_photos/MOMO PAlTTER VEG.png",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo014",
                    name: "Momos Platter Chicken",
                    price: 400,
                    img: "/Dishes_photos/MOMO PLATTER CHICKEN.png",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo015",
                    name: "Panner Momo",
                    price: 180,
                    img: "/Dishes_photos/PANEER STEAMED MOMO.jpeg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo016",
                    name: "Tandoori Momos Veg",
                    price: 190,
                    img: "/Dishes_photos/TANDOORI MOMOS VEG.jpeg",
                    type: "veg",
                    genre: "momos",
                    description: ""
                },
                {
                    id: "asmo017",
                    name: "Tandoori Momos Chicken",
                    price: 220,
                    img: "/Dishes_photos/Tandoori Momos chicken.jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: ""
                }
            ]
        }
    },
    {
        category: "chinese", subcategory: {
            Soup: [
                {
                    id: "chosoup001",
                    name: "Veg Manchow Soup ",
                    img: "/Dishes_photos/Veg manchow soup.jpg",
                    price: 110,
                    type: "veg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup002",
                    name: "Chicken Manchow Soup",
                    price: 120,
                    img: "",
                    type: "nonveg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup003",
                    name: "Veg Sweet Corn Soup",
                    price: 110,
                    img: "/Dishes_photos/Veg sweet corn soup.jpg",
                    type: "veg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup004",
                    name: "Chicken Sweet Corn Soup",
                    price: 130,
                    img: "/Dishes_photos/Chicken sweet corn soup.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup005",
                    name: "Veg Hot & Sour Soup",
                    price: 110,
                    img: "/Dishes_photos/Tom yum veg soup.jpg",
                    type: "veg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup006",
                    name: "Chicken Hot & Sour Soup",
                    price: 110,
                    img: "",
                    type: "nonveg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup007",
                    name: "Veg Clear Soup",
                    price: 90,
                    img: "/Dishes_photos/Clear Soup Veg-1.jpg",
                    type: "veg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup008",
                    name: "Chicken Clear Soup",
                    price: 110,
                    img: "",
                    type: "nonveg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "chosoup009",
                    name: "sea Food Tom Yum Soup",
                    price: 170,
                    img: "/Dishes_photos/Tom yum seafood soup.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: ""
                },
            ],
            Starter: [
                {
                    id: "chostar001",
                    name: "Chicken 65",
                    price: 230,
                    img: "/Dishes_photos/Chicken 65  (1).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "chostar002",
                    name: "Chicken Chilly",
                    price: 230,
                    img: "/Dishes_photos/Chicken chilli fry.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "chostar003",
                    name: "Crispy Chicken",
                    price: 250,
                    img: "/Dishes_photos/Crispy chicken  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "chostar004",
                    name: "Honey Chicken",
                    price: 250,
                    img: "/Dishes_photos/Honey chicken  (1).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "chostar005",
                    name: "Chicken Dry Fry",
                    price: 240,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "chostar006",
                    name: "Chicken Spring Roll",
                    price: 230,
                    img: "/Dishes_photos/Chicken spring roll.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "chostar007",
                    name: "Chicken Salt & Pepper",
                    price: 250,
                    img: "/Dishes_photos/Chicken salt and papper  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "chostar008",
                    name: "Chicken Manchurian Dry",
                    price: 230,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar009",
                    name: "Chicken Manchurian Gravy",
                    price: 230,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar010",
                    name: "Golden Fried Prawns",
                    price: 320,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar011",
                    name: "Prawns Chilly Dry",
                    price: 300,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar012",
                    name: "Prawns Chilly Gravy",
                    price: 220,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar013",
                    name: "Paneer Chilly Dry",
                    price: 220,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "chostar014",
                    name: "Paneer Chilly Gravy",
                    price: 220,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "chostar015",
                    name: "Paneer Manchurian ",
                    price: 220,
                    img: "/Dishes_photos/Paneer manchurian.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar016",
                    name: "Veg Crispy",
                    price: 180,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar017",
                    name: "Veg Spring Roll",
                    price: 160,
                    img: "/Dishes_photos/Veg spring roll.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "chostar018",
                    name: "Baby Corn Chilly Dry ",
                    price: 180,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar019",
                    name: "Baby Corn Chilly Gravy",
                    price: 180,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar020",
                    name: "Honey Sesame Potato",
                    price: 180,
                    img: "/Dishes_photos/Honeyy sesame potato  (2).jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "chostar021",
                    name: "Paneer 65",
                    price: 220,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "chostar022",
                    name: "Paneer Salt & Pepper",
                    price: 220,
                    img: "/Dishes_photos/Paneer salt and pepper  (2).jpg",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "chostar023",
                    name: "Veg Manchurian Gravy",
                    price: 180,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar024",
                    name: "Veg Manchurian Dry",
                    price: 170,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar025",
                    name: "Gobi Manchurian gravy ",
                    price: 180,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar026",
                    name: "Gobi Manchurian Dry",
                    price: 170,
                    img: "/Dishes_photos/Gobhi manchurian.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar027",
                    name: "Mushroom Chilly Gravy",
                    price: 180,
                    img: "/Dishes_photos/Mushroom chilli gravy.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar028",
                    name: "Mushroom Chilly Dry",
                    price: 180,
                    img: "/Dishes_photos/Mushroom chilli.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: ""
                },
                {
                    id: "chostar029",
                    name: "Chicken Masala Lollypop",
                    price: 250,
                    img: "/Dishes_photos/MASALA LOLIPOP.jpg",
                    type: "nonveg",
                    genre: "manchurian",
                    description: ""
                }
            ],
            Rice: [
                {
                    id: "chorice001",
                    name: "Veg Combination Fried Rice",
                    price: 160,
                    img: "/Dishes_photos/VEG COMBINATION FRIED RICE.jpg",
                    type: "veg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice002",
                    name: "Veg Fried Rice",
                    price: 150,
                    img: "/Dishes_photos/Veg fried rice  (1).jpg",
                    type: "veg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice003",
                    name: "Chicken Fried Rice",
                    price: 190,
                    img: "/Dishes_photos/Chicken fried rice  (1).jpg",
                    type: "nonveg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice004",
                    name: 'Egg Fried Rice',
                    price: 160,
                    img: "/Dishes_photos/Egg fried  rice.jpg",
                    type: "nonveg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice005",
                    name: "Veg Schezwan Fried Rice",
                    price: 150,
                    img: "/Dishes_photos/VEG Schezwan fried rice.jpg",
                    type: "veg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice006",
                    name: "Chicken Schezwan Fried Rice",
                    price: 200,
                    img: "",
                    type: "nonveg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice007",
                    name: "Chefs Special Veg Fried Rice",
                    price: 180,
                    img: "",
                    type: "veg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice008",
                    name: "Chefs Special non-Veg Fired Rice ",
                    price: 220,
                    img: "/Dishes_photos/Chef special fried rice.jpg",
                    type: "nonveg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice009",
                    name: "Mix Seafood Fried Rice",
                    price: 260,
                    img: "/Dishes_photos/MIX SEAFOOD FRIED RICE NON VEG.jpeg",
                    type: "nonveg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "chorice010",
                    name: "Tripple Schezwan Chicken Fried Rice",
                    price: 260,
                    img: "/Dishes_photos/TRIPPLE CHICKEN SCHEZWAN FRIED RICE.jpg",
                    type: "nonveg",
                    genre: "rice",
                    description: ""
                },
            ],
            Noodles: [
                {
                    id: "chonoodles001",
                    name: "Veg Noodles",
                    price: 150,
                    img: "/Dishes_photos/Veg  hakka noodles  (3).jpg",
                    type: "veg",
                    genre: "noodles",
                    description: ""
                },
                {
                    id: "chonoodles002",
                    name: "Chicken Noodles",
                    price: 190,
                    img: "/Dishes_photos/Chicken  hakka nooldes.jpg",
                    type: "nonveg",
                    genre: "noodles",
                    description: ""
                },
                {
                    id: "chonoodles003",
                    name: "Egg Noodles",
                    price: 170,
                    img: "/Dishes_photos/Egg nooldes.jpg",
                    type: "nonveg",
                    genre: "noodles",
                    description: ""
                },
                {
                    id: "chonoodles004",
                    name: "Veg Schezwan Noodles",
                    price: 150,
                    img: "/Dishes_photos/Veg schezwan noodles.jpg",
                    type: "veg",
                    genre: "noodles",
                    description: ""
                },
                {
                    id: "chonoodles005",
                    name: "Chicken Schezwan Noodles",
                    price: 190,
                    img: "/Dishes_photos/Chicken schezwan noodles.jpg",
                    type: "nonveg",
                    genre: "noodles",
                    description: ""
                }
            ]
        },
    },
    {
        category: "indian",
        subcategory: {
            Soup: [
                {
                    id: "indsoup001",
                    name: "Veg Chefs Special Soup",
                    price: 130,
                    img: "",
                    type: "veg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "indsoup002",
                    name: "Chicken Chefs Special Soup",
                    price: 140,
                    img: "/Dishes_photos/chef special chicken soup.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "indsoup003",
                    name: "Tomato Shorba",
                    price: 100,
                    img: "",
                    type: "veg",
                    genre: "soup",
                    description: ""
                }
            ],
            Starter: [
                {
                    id: "indstarter001",
                    name: "Masala Omelet",
                    price: 70,
                    img: "",
                    type: "nonveg",
                    description: ""
                }
            ],
            Salad: [
                {
                    id: "indsalad001",
                    name: "Green Salad",
                    price: 120,
                    img: "/Dishes_photos/Green_salad.jpg",
                    type: "veg",
                    description: ""
                }
            ],
            Gravy: [
                {
                    id: "indgravy001",
                    name: "Veg Kadai",
                    price: 210,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy002",
                    name: "Veg Kolhapuri",
                    price: 210,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy003",
                    name: 'Veg handi',
                    price: 220,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy004",
                    name: "Mutter Mushroom Masala",
                    price: 220,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy005",
                    name: "Paneer kadai",
                    price: 230,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "indgravy006",
                    name: "Paneer Butter Masala",
                    price: 230,
                    img: "/Dishes_photos/Panner butter masala.jpg",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "indgravy007",
                    name: "Paneer Masala",
                    price: 230,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "indgravy008",
                    name: "Paneer Tikka Masala",
                    price: 270,
                    img: "/Dishes_photos/PANEER TIKKA MASALA-1 (1).jpg",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "indgravy009",
                    name: "Matar Paneer",
                    price: 220,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "indgravy010",
                    name: "Palak paneer",
                    price: 220,
                    img: "/Dishes_photos/Egg nooldes.jpg",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "indgravy011",
                    name: "Dal Tadka",
                    price: 150,
                    img: "/Dishes_photos/DAL TADKA.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy012",
                    name: "Dal Fry",
                    price: 150,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy013",
                    name: "Chefs Special Veg Gravy",
                    price: 240,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy014",
                    name: "Butter Chicken ",
                    price: 240,
                    img: "/Dishes_photos/Butter chicken.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy015",
                    name: "Chicken Tikka Masala",
                    price: 340,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy016",
                    name: "Chicken Korma",
                    price: 270,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy017",
                    name: 'Chefs Special Non-Veg ',
                    price: 350,
                    img: "/Dishes_photos/Chef special non veg gravy  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy018",
                    name: "Veg Hydrabadi",
                    price: 290,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "indgravy019",
                    name: "Chicken Kolhapuri",
                    price: 240,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy020",
                    name: "Chicken Handi",
                    price: 250,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy021",
                    name: "Chicken Kadai",
                    price: 250,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy022",
                    name: "Chicken Masala",
                    price: 250,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy023",
                    name: "Mutton Masala",
                    price: 330,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "indgravy024",
                    name: "Veg Makhani",
                    price: 220,
                    img: "",
                    type: "veg",
                    description: ""
                }
            ],
            Rice: [
                {
                    id: "indrice001",
                    name: "Steamed Rice",
                    price: 120,
                    img: "",
                    type: "veg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "indrice002",
                    name: "Jira Rice",
                    price: 120,
                    img: "/Dishes_photos/Jeera rice.jpg",
                    type: "veg",
                    genre: "rice",
                    description: ""
                },
                {
                    id: "indrice003",
                    name: 'Veg Pulao',
                    price: 180,
                    img: "/Dishes_photos/Veg Pulao.jpg",
                    type: "veg",
                    genre: "rice",
                    description: ""
                }
            ],
            Biryani: [
                {
                    id: "indbiryani001",
                    name: "Veg Biryani",
                    price: 180,
                    img: "/Dishes_photos/Veg biryani  (2).jpg",
                    type: "veg",
                    genre: "biryani",
                    description: ""
                },
                {
                    id: "indbiryani002",
                    name: "Egg Biryani",
                    price: 190,
                    img: "/Dishes_photos/Egg biryani.jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: ""
                },
                {
                    id: "indbiryani003",
                    name: "Prawns Biryani",
                    price: 350,
                    img: "/Dishes_photos/Prawns biryani.jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: ""
                },
                {
                    id: "indbiryani004",
                    name: "Chicken Biryani",
                    price: 290,
                    img: "/Dishes_photos/Chicken biryani  (2).jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: ""
                },
                {
                    id: "indbiryani005",
                    name: "Mutton Biryani",
                    price: 350,
                    img: "/Dishes_photos/Mutton biryani.jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: ""
                }
            ]
        }
    },
    {
        category: "tandoor", subcategory: {
            Grilled: [
                {
                    id: "tagrgril001",
                    name: "Tandoori Chicken Full",
                    price: 450,
                    img: "/Dishes_photos/Tandoori chicken  (1).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrgril002",
                    name: "Tandoori Chicken Half ",
                    price: 260,
                    img: "/Dishes_photos/Tandoori chicken  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrgril003",
                    name: "Grilled Mushroom TIkka",
                    price: 250,
                    img: "",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrgril004",
                    name: "Tandoori Broccoli",
                    price: 280,
                    img: "/Dishes_photos/Tandoori broccoli (2).jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrgril005",
                    name: "Tandoori Baby Corn",
                    price: 280,
                    img: "/Dishes_photos/TANDOORI BABYCORN.jpeg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrgril006",
                    name: "Tandoori Gobi",
                    price: 220,
                    img: "/Dishes_photos/Tandoori gobhi.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrgril007",
                    name: "Tandoori Wings",
                    price: 270,
                    img: "/Dishes_photos/tandoori wings.png",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrgril008",
                    name: "Chicken Afghani Kebab",
                    price: 300,
                    img: "/Dishes_photos/CHICKEN AFGHANI KEBAB.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrgril009",
                    name: "Grilled Chicken Lolypop",
                    price: 250,
                    img: "/Dishes_photos/MASALA LOLIPOP.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrgril010",
                    name: "Tandoori Grilled Prawns",
                    price: 400,
                    img: "/Dishes_photos/TANDOORI PRAWNS.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrgril011",
                    name: "Grilled Mackrel",
                    price: 180,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrgril012",
                    name: "Tandoori Malai Brocolli",
                    price: 250,
                    img: "",
                    type: "veg",
                    description: ""
                }
            ],
            Kebab: [
                {
                    id: "tagrkeba001",
                    name: "Tangdai Kebab",
                    price: 300,
                    img: "/Dishes_photos/Tangadi Kabab-1.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrkeba002",
                    name: "Malai Kebab",
                    price: 330,
                    img: "/Dishes_photos/Malai kebab.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrkeba003",
                    name: "Haryani Chicken Tikka",
                    price: 299,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrkeba004",
                    name: "Chicken Shish Taouk",
                    price: 299,
                    img: "/Dishes_photos/chicken sheesh taouk.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrkeba005",
                    name: " Chicken TIkka",
                    price: 290,
                    img: "/Dishes_photos/Chicken tikka  (1).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrkeba006",
                    name: "Chicken Seekh Kabab",
                    price: 295,
                    img: "/Dishes_photos/CHICKEN SEEKH KEBAB.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrkeba007",
                    name: "Mutthon Seekh Kabab",
                    price: 360,
                    img: "/Dishes_photos/mutton seekh kebab.jpeg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "tagrkeba008",
                    name: "Paneer Haryani Kabab",
                    price: 270,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "tagrkeba009",
                    name: "Paneer Tikka",
                    price: 260,
                    img: "/Dishes_photos/Paneer tikka  (2).jpg",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "tagrkeba010",
                    name: "Paneer Malai Tikka",
                    price: 280,
                    img: "/Dishes_photos/PANEER TIKKA.jpg",
                    type: "veg",
                    genre: "paneer",
                    description: ""
                },
                {
                    id: "tagrkeba011",
                    name: "Veg Seekh Kebab",
                    price: 230,
                    img: "",
                    type: "veg",
                    description: ""
                }
            ],
            Roti: [
                {
                    id: "tagrroti001",
                    name: "Tandoori Roti",
                    price: 20,
                    img: "/Dishes_photos/Plain roti.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti002",
                    name: "Butter Roti",
                    price: 20,
                    img: "/Dishes_photos/Butter roti.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti003",
                    name: "Butter Naan",
                    price: 45,
                    img: "/Dishes_photos/Butter naan.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti004",
                    name: "Plain Naan",
                    price: 30,
                    img: "/Dishes_photos/Plain naan.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti005",
                    name: "Chesse Garlic Naan",
                    price: 130,
                    img: "/Dishes_photos/CHEESE GARLIC NAAN (2).jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti006",
                    name: "Tandoori Butter Paratha",
                    price: 40,
                    img: "/Dishes_photos/Butter paratha.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti007",
                    name: "Tandoori Plain Paratha",
                    price: 30,
                    img: "/Dishes_photos/Plain paratha.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti008",
                    name: "Garlic Naan",
                    price: 50,
                    img: "/Dishes_photos/BUTTER GARLIC NAAN1.jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti009",
                    name: "Onion Butter Kulcha ",
                    price: 50,
                    img: "/Dishes_photos/Onion garlic naan  (2).jpg",
                    type: "veg",
                    description: ""
                },
                {
                    id: "tagrroti010",
                    name: "Butter Garlic Naan",
                    price: 50,
                    img: "/Dishes_photos/BUTTER GARLIC NAAN1.jpg",
                    type: "veg",
                    description: ""
                }
            ]
        }
    },
    {
        category: "goan", subcategory: {
            Starter: [
                {
                    id: "goststa001",
                    name: "Chicken Tawa Fry",
                    price: 290,
                    img: "/Dishes_photos/Chicken tawa fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa002",
                    name: "Chicken Rawa Fry",
                    price: 280,
                    img: "/Dishes_photos/Chicken rawa fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa003",
                    name: "Prawns (Rawa Fry)",
                    price: 280,
                    img: "/Dishes_photos/Prawns rawa fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa004",
                    name: "KingFish Rawa Fry",
                    price: 390,
                    img: "/Dishes_photos/Prawns rawa fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa005",
                    name: "Kingfish Masala Fry",
                    price: 390,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa006",
                    name: "Mackerel Rawa Fry",
                    price: 160,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa007",
                    name: "Mackerel Masala Fry",
                    price: 180,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa008",
                    name: "Mackerel Recheado",
                    price: 200,
                    img: "/Dishes_photos/RECHEAD MACKREL FRY.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa009",
                    name: "Chonak Rawa Fry",
                    price: 390,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa010",
                    name: "Chonak Masala Fry",
                    price: 390,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa011",
                    name: "Silver Fish Rawa Fry",
                    price: 180,
                    img: "/Dishes_photos/Sliver fish rawa fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa012",
                    name: "Silver Fish Masala Fry",
                    price: 180,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa013",
                    name: "Squid Chilly Fry",
                    price: 290,
                    img: "/Dishes_photos/Squied chilli fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa014",
                    name: "Modso Rawa Fry",
                    price: 290,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa015",
                    name: "Modso Masala Fry",
                    price: 350,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa016",
                    name: "Chilly Chicken Fry",
                    price: 250,
                    img: "/Dishes_photos/Chilly chicken fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa017",
                    name: "Calamari Chilly Fry",
                    price: 290,
                    img: "",
                    type: "nonveg",
                    description: ""
                }
            ],
            Gravy: [
                {
                    id: "gogragra001",
                    name: "Chicken Cafreal",
                    price: 260,
                    img: "/Dishes_photos/Chicken carfeal  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "gogragra002",
                    name: "Chicken Xacuti",
                    price: 250,
                    img: "/Dishes_photos/Chicken xacuti  (2).jpg",
                    type: "nonveg",
                    description: ""
                }
            ],
            Thali: [
                {
                    id: "goththali001",
                    name: "Fish Thali",
                    price: 230,
                    img: "/Dishes_photos/King fish thali.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goththali002",
                    name: "Veg Thali",
                    price: 190,
                    img: "/Dishes_photos/VEG THALI.jpg",
                    type: "veg",
                    description: ""
                }
            ],
            Rice: [
                {
                    id: "goririce001",
                    name: "Prawns Peas Pulav",
                    price: 280,
                    img: "",
                    type: "nonveg",
                    genre: "rice",
                    description: ""
                }
            ],
            Curry: [
                {
                    id: "gocucurry001",
                    name: "Prawns Curry",
                    price: 280,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "gocucurry002",
                    name: "KingFish Curry",
                    price: 280,
                    img: "",
                    type: "nonveg",
                    description: ""
                }
            ]
        }
    }
]


export default Dishes