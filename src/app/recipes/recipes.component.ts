import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeData:any='';
  recipes=[
    {
      name:' Dosa',
      img:'https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144799.jpg',
      details:'A dosa is a cooked flat thin layered rice batter, originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram ground together in a fine, smooth batter with a dash of salt.'
    },
    {
      name:'Chapati',
      img:'https://image.shutterstock.com/image-photo/chapati-indian-flat-bread-potato-260nw-1390697438.jpg',
      details:'a round flat unleavened bread of India that is usually made of whole wheat flour and cooked on a griddle.'
    },
    {
      name:'Puri',
      img:'https://image.shutterstock.com/image-photo/indian-bread-wheat-grains-background-260nw-250532884.jpg',
      details:'Puri (also spelled Poori) is an unleavened deep-fried bread, originating from the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in Puri bhaji, but may also be eaten with sweet dishes.'
    },
    {
      name:'Idli',
      img:'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818__340.jpg',
      details:'Idli or idly ( pronunciation (help. info)) (/?dli?/) are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in southern India and among Indian-origin Tamils in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice.'
    },
    {
      name:'Lemon-Rice',
      img:'https://image.shutterstock.com/image-photo/lemon-ricechitranna-indian-rice-traditional-260nw-317794625.jpg',
      details:'Quick lemon rice recipe – Lemon rice also known as chitranna or nimmakaya pulihora is a popular south Indian food made for a meal. Lemon rice is made by tempering precooked rice with basic spices, chilies, ginger and peanuts. A generous amount of lemon or lime juice is used to add flavor and tang to the rice.'
    },
    {
      name:'Pizza',
      img:'https://image.shutterstock.com/image-photo/hot-homemade-pepperoni-pizza-ready-260nw-225746563.jpg',
      details:'Pizza (Italian: pitts?]) is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.'
    },
    {
      name:'Tomato-rice',
      img:'https://image.shutterstock.com/image-photo/spicy-tomato-rice-260nw-302496950.jpg',
      details:'Tomato rice is a simple south Indian rice dish made with lots of tomatoes & spices. It is not a traditional dish so each home or region has their own way of making it. As the name indicates this tomato rice is made using tomatoes alone and no vegetables are used except onion.'
    },
    {
      name:'Biriyani',
      img:'https://image.shutterstock.com/image-photo/chicken-kabsa-homemade-arabian-biryani-260nw-1048188121.jpg',
      details:'A world-renowned Indian dish, biryani takes time and practice to make but is worth every bit of the effort. Long-grained rice (like basmati) flavored with exotic spices, such as saffron, is layered with lamb, chicken, fish, or vegetables, and a thick gravy.'
    },
    {
      name:'Kabab',
      img:'https://cdn.pixabay.com/photo/2015/11/25/13/51/barbecue-1062083__340.jpg',
      details:'Kabab koobideh (???? ??????) it kubide (??????) is an Iranian minced meat kabab which is made from ground lamb, beef, or chicken, often mixed with parsley and chopped onions. Kabab Koobideh contains: ground meat, onion, salt, pepper, turmeric, and seasoning.'
    },
    {
      name:'Vegetable salad',
      img:'https://image.shutterstock.com/image-photo/salad-vegetables-greens-260nw-102931295.jpg',
      details:'Common raw vegetables (in the culinary sense) used in a salad include cucumbers, peppers, tomatoes, onions, carrots, celery, radishes, mushrooms, avocado, olives, artichoke hearts, heart of palm, watercress, parsley, garden beets, and green beans.'
    }
  ];
  sendRecipe(recipe){
    this.recipeData=recipe;
  }

  constructor() { }

  ngOnInit() {
  }

}
