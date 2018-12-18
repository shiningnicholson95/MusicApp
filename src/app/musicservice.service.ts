import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicserviceService {
  public getobj;
  public Genres = [
    {
      "ID": "1",
      "Name": "Queen",
      "Country": "UK",
      "Genre": "RocknRoll",
      "Poster":"./assets/queen.jpg"

    },
    {
      "ID": "2",
      "Name": "Pantera",
      "Country": "USA",
      "Genre": "HeavyMetal",
      "Poster":"./assets/pantera.jpg"

    },
    {
      "ID":"3",
    "Name":"LedZeppelin",
    "COuntry":"USA",
    "Genre":"RocknRoll",
     "Poster":"./assets/ledzep.jpg"
    }
  ]
  constructor() { }
}
