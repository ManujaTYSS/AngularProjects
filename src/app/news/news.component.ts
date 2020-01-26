import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
newsData :any='';
newsrecent =[ 
{
  name:'Nature',
  img:'https://image.shutterstock.com/image-photo/lake-sawat-valley-pakistan-260nw-601379636.jpg',
  description:'First published in 1869, Nature is the worlds leading multidisciplinary science journal. Nature publishes the finest peer-reviewed research that drive'
},
{
  name:'dalai lama',
  img:'https://cdn.pixabay.com/photo/2016/01/30/08/06/dalai-lama-1169299__340.png',
  description:'His Holiness the 14th Dalai Lama, Tenzin Gyatso, describes himself as a simple Buddhist monk. He is the spiritual leader of Tibet. He was born on 6 July 1935'
},
{
  name:'taj Mahal',
  img:'https://image.shutterstock.com/image-photo/fabulous-taj-mahal-260nw-225821824.jpg',
  description:'Welcome to Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal Taj Mahal is famous for Own beauty and one of the wonders of the world.'
},
{
  name:'Go green',
  img:'https://image.shutterstock.com/image-photo/world-environment-day-concept-tree-260nw-425106391.jpg',
  description:'The Go Green Iniatiative is all about helping schools create a campus-wide culture of conservation. We believe in a teamwork approach that includes students,'
},
{
  name:'pollution',
  img:'https://image.shutterstock.com/image-photo/air-pollution-power-plant-chimneys-260nw-659747284.jpg',
  description:'Pollution is when some harmful substances are added in the environment which alter its natural composition . Polluted water or garbage in the water bodies is a '
},
{
  name:'vivekananda',
  img:'https://image.shutterstock.com/image-photo/swamy-vivekananda-statue-hyderabad-india-260nw-768655147.jpg',
  description:'Swami Vivekananda born Narendranath Datta was an Indian Hindu monk, a chief disciple of the 19th-century Indian mystic Ramakrishna. He was a key figure in'
},
{
  name:'obama',
  img:'https://cdn.pixabay.com/photo/2016/01/08/19/51/barack-obama-1129156__340.jpg',
  description:'Welcome to the Office of Barack and Michelle Obama. We Love You Back. Play video. The Office of Barack and Michelle Obama · Obama Foundation. obama.'
},
{
  name:'solar power',
  img:'https://cdn.pixabay.com/photo/2013/02/05/19/22/energy-78116__340.jpg',
  description:'Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), indirectly using concentrated solar power,'
},
{
  name:'Chandrayana - 2',
  img:'https://image.shutterstock.com/image-illustration/space-ship-on-moon-indian-260nw-1456275176.jpg',
  description:'Chandrayaan 2 is an Indian lunar mission that will boldly go where no country has ever gone before — the Moons south polar region. Through this effort, the'
}
];
  constructor() { }
  sendNews(news){
    this.newsData=news;
  }

  ngOnInit() {
  }

}
