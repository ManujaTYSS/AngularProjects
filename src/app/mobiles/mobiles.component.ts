import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
mobileData: any='';
mobiles =[
  {
    brand:'oppo',
    img:'https://image.shutterstock.com/image-vector/smartphone-mobile-phone-isolated-realistic-260nw-703670326.jpg',
    description:'Price list of all Oppo mobile phones in India with specifications and features from different online stores at 91mobiles. Read user reviews, compare mobile prices'
  },
  {
    brand:'samsung',
    img:'https://cdn.pixabay.com/photo/2017/05/29/16/42/woman-2354157__340.jpg',
    description:'Price list of all Samsung mobile phones in India with specifications and features from different online stores at 91mobiles. Read user reviews, compare mobiles'
  },
  {
    brand:'apple',
    img:'https://cdn.pixabay.com/photo/2014/08/05/10/28/iphone-410316__340.jpg',
    description:'Apple Mobile price list gives price in India of all Apple mobile phones, including latest Apple phones, best phones under 10000. Find lowest price to help you'
  },
  {
    brand:'lenovo',
    img:'https://cdn.pixabay.com/photo/2015/08/07/00/39/lenovo-878841__340.jpg',
    description:'Price list of all Lenovo mobile phones in India with specifications and features from different online stores at 91mobiles. Read user reviews, compare mobile'
  },
  {
    brand:'honor',
    img:'https://cdn.pixabay.com/photo/2017/07/31/13/13/huawei-2557932__340.jpg',
    description:'Price list of all Honor mobile phones in India with specifications and features from different online stores at 91mobiles. Read user reviews, compare mobile'
  },
  {
    brand:'moto',
    img:'https://cdn.pixabay.com/photo/2017/08/06/18/16/mobile-2594848__340.jpg',
    description:'Find Motorola mobiles with all latest, upcoming phones list. Also find Motorola 4g smartphones, camera phones & best Motorola mobiles with price,'
  },
  {
    brand:'micromax',
    img:'https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731__340.jpg',
    description:'Micromax offers a wide range of latest smartphones in India. Explore our collection to buy new smartphones online, with advanced technology & design.'
  },
  {
    brand:'redme',
    img:'https://image.shutterstock.com/image-vector/realistic-smartphone-blank-screen-isolated-260nw-640277947.jpg',
    description:'Want to buy Mi mobile phones? Get the price list of Xiaomi mobiles in India August 2019 with specs, performance and reviews. Redmi phones are affordable'
  },
  {
    brand:'nokia',
    img:'https://cdn.pixabay.com/photo/2016/07/07/15/53/mobile-1502601__340.jpg',
    description:'Nokia Mobile price list gives price in India of all Nokia mobile phones, including latest Nokia phones, best phones under 10000. Find lowest price to help you '
  },
]

  constructor() { }

  sendMobile(mobile)
{
  this.mobileData = mobile;
}
  ngOnInit() {
  }

}
