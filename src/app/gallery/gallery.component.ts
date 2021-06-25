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
      { player: 'gayle'},
      { player: 'rahul'},
      { player: 'abd'},
      { player: 'maxwell'},
      { player: 'pant'},
      { player: 'russell'},
      { player: 'rashid'},
      { player: 'tahir'},
      { player: 'malinga'},
      { player: 'rabada'},
      { player: 'bumrah'},
    ]
    this.odiPlayers = [
      { player: 'sachin'},
      { player: 'kallis'},
      { player: 'kohli'},
      { player: 'pointing'},
      { player: 'williamson'},
      { player: 'stokes'},
      { player: 'dhoni'},
      { player: 'jadeja'},
      { player: 'narine'},
      { player: 'starc'},
      { player: 'bond'}
    ]
    this.testPlayers = [
      { player: 'warner'},
      { player: 'cook'},
      { player: 'pujara'},
      { player: 'kohli'},
      { player: 'steven_smith'},
      { player: 'sangakkara'},
      { player: 'warne'},
      { player: 'muralitharan'},
      { player: 'amir'},
      { player: 'anderson'},
      { player: 'zaheer'}
    ]
  }

}
