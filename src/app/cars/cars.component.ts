import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carData: any='';
  cars =[
    {
      name:'BMW',
      img:'https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_1280.jpg',
      description:'BMW cars in India. Know everything you want to know about BMW car models. CarWale offers BMW history, reviews, photos and news etc. Find BMW dealers'
    },
    {
      name:'audi',
      img:'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg',
      description:'Audi cars in India. Know everything you want to know about Audi car models. CarWale offers Audi history, reviews, photos and news etc. Find Audi dealers'
    },
    {
      name:'jaguar',
      img:'https://cdn.pixabay.com/photo/2016/05/01/13/50/sports-car-1364955_1280.jpg',
      description:'Jaguar Cars India offers 5 Models in price range of Rs.40.61 lakh to Rs. 2.80 crore Check latest car Model Prices FY 2019, Images, Featured Reviews, Latest'
    },
    {
      name:'maruthi',
      img:'https://cdn.pixabay.com/photo/2019/06/29/09/51/suzuki-sx4-4305877__340.jpg',
      description:'Maruti Suzuki cars in India. Know everything you want to know about Maruti Suzuki car models. CarWale offers Maruti Suzuki history, reviews, photos and news'
    },
    {
      name:'Toyota',
      img:'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__340.jpg',
      description:'Toyota has currently 12 car models on sale, get a complete price list of Toyota cars, read expert reviews, specs, see images, & dealers at CarDekho.'
    },
    {
      name:'Volvo',
      img:'https://cdn.pixabay.com/photo/2017/08/24/15/17/car-2677128_1280.jpg',
      description:'Volvo XC60 crossover SUV with City Safety is a car for the love of the road. Drive in style and comfort. Experience the XC60 here.'
    },
    {
      name:'Honda',
      img:'https://cdn.pixabay.com/photo/2015/09/08/23/31/touring-car-930917__340.jpg',
      description:'Honda Cars India Ltd. is a subsidiary of Honda, a leading premium car manufacturer and exporters of Cars in India. Honda offers premium Sedan, Hatchbacks '
    },
    {
      name:'Benz',
      img:'https://cdn.pixabay.com/photo/2016/04/19/06/03/mercedes-1338063__340.jpg',
      description:'A blend of luxury, sportiness & performance. Be it Saloon, Estate, Coupé, Cabriolet, Roadster, SUV & more. Experience the products from Mercedes-Benz.'
    },
    {
      name:'Nissan',
      img:'https://cdn.pixabay.com/photo/2019/07/28/16/37/nissan-4368985__340.jpg',
      description:'Nissan cars in India. Know everything you want to know about Nissan car models. CarWale offers Nissan history, reviews, photos and news etc. Find Nissan'
    },
    {
      name:'Ford',
      img:'https://cdn.pixabay.com/photo/2015/01/02/20/00/ford-fairlane-586930__340.jpg',
      description:'Ford has currently 6 car models on sale, get a complete price list of Ford cars, read expert reviews, specs, see images, & dealers at CarDekho.'
    }
  ];

  constructor() { }
 
  sendCar(car){
    this.carData=car;
  }
  ngOnInit() {
  }

}
