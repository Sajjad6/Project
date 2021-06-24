import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  t20Players = [];

  constructor() { }

  ngOnInit(): void {
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
  }

}
