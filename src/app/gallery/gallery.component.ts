import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  t20Players = [];
  testPlayers = [];
  odiPlayers = []

  constructor() { }

  ngOnInit(): void {
    this.setupPlayers()
  }

  setupPlayers() {
    this.t20Players = [
      { player: 'abd'},
      { player: 'rashid'},
      { player: 'russell'},
      { player: 'gayle'},
      { player: 'rahul'},
      { player: 'bumrah'},
      { player: 'tahir'},
      { player: 'maxwell'},
      { player: 'malinga'},
      { player: 'pant'},
      { player: 'rabada'},
    ]
    this.odiPlayers = [
      { player: 'bond'},
      { player: 'dhoni'},
      { player: 'jadeja'},
      { player: 'kallis'},
      { player: 'kohli'},
      { player: 'narine'},
      { player: 'pointing'},
      { player: 'sachin'},
      { player: 'starc'},
      { player: 'stokes'},
      { player: 'williamson'},
    ]
    this.testPlayers = [
      { player: 'amir'},
      { player: 'anderson'},
      { player: 'ashwin'},
      { player: 'cook'},
      { player: 'kohli'},
      { player: 'mccullum'},
      { player: 'pujara'},
      { player: 'sangakkara'},
      { player: 'steven_smith'},
      { player: 'warne'},
      { player: 'zaheer'},
    ]
  }

}
