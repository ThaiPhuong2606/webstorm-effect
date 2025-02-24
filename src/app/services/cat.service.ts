import { Injectable } from '@angular/core';
import {CatModel} from '../models/cat.model';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor() { }

viewDetail(id: number) {
    const cat :CatModel | undefined = this.cats.find((e : CatModel) : any => e.id = id )
  console.log(cat)
}

  cats: CatModel[] = [
    {
      image: "https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp",
      name: "Meo meo",
      breed: "Anh",
      price: 1000,
      id: 0,
      bio: "Meet Meo Meo, a charming British Shorthair with a luxurious coat and a playful personality. Meo Meo loves to explore and is always curious about new surroundings. With a gentle temperament and a love for cuddles, Meo Meo is the perfect companion for anyone looking for a loyal and affectionate friend. Whether it's chasing after toys or lounging in the sun, Meo Meo brings joy and warmth to any home."
    },

    {
      image: "https://file.hstatic.net/200000491469/file/image-3-4_3fc887c9cc6340d696c7460cdd273d12_large.jpg",
      name: "Meo",
      breed: "Anh",
      price: 2000,
      id: 1,
      bio: "Meet Meo, a beautiful Siamese cat with striking blue eyes and a sleek, elegant coat. Meo is a playful and affectionate feline who loves to be the center of attention. With a lively and outgoing personality, Meo is always up for an adventure and enjoys exploring new places. Whether it's chasing after toys or curling up on your lap for a nap, Meo is sure to bring joy and laughter to your home."
    },

    {
      image: "data:image/jpeg;base64,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",
      name: "bếu",
      breed: "Anh",
      price: 3000,
      id: 2,
      bio: "Meet Bếu, a charming Scottish Fold with a sweet personality and a love for cuddles. Bếu has a playful nature and enjoys chasing after toys and exploring new spaces. With his distinctive folded ears and expressive eyes, Bếu is sure to capture your heart. Whether it's lounging in the sun or curling up on your lap, Bếu brings joy and warmth to any home."
    },


    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MS0eRSPZGdjVNDDOZ58SgA2wlqzmiPBm7A&s",
      name: "Mồn lèo",
      breed: "Anh",
      price: 13000,
      id: 3,
      bio: "Meet Mồn lèo, a playful and affectionate Maine"
    },


    {
      image: "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
      name: "Mèo méo meo",
      breed: "Anh",
      price: 10000,
      id: 4,
      bio: "Meet Mèo méo meo, a charming British Shorthair with a luxurious coat and a playful personality. Mèo méo meo loves to explore and is always curious about new surroundings. With a gentle temperament and a love for cuddles, Mèo méo meo is the perfect companion for anyone looking for a loyal and affectionate friend. Whether it's chasing after toys or lounging in the sun, Mèo méo meo brings joy and warmth to any home."
    },

    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BswGz8ThAnDs5xybRDD4R3TRI09rFQ5TvQ&s",
      name: "Mèo méo meo",
      breed: "Anh",
      price: 10000,
      id: 5,
      bio: "Meet Mèo méo meo, a charming British Shorthair with a luxurious coat and a playful personality. Mèo méo meo loves to explore and is always curious about new surroundings. With a gentle temperament and a love for cuddles, Mèo méo meo is the perfect companion for anyone looking for a loyal and affectionate friend. Whether it's chasing after toys or lounging in the sun, Mèo méo meo brings joy and warmth to any home."
    },
  ]

}
