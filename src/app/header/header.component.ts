import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { usersDB } from './../users-mockdata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  closeResult: string;
  isLoggedIn = false;
  invalidUser = false;
  userName = '';

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(usersDB));
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(form) {
    const usersList = JSON.parse(localStorage.getItem('users'));
    usersList.forEach(user => {
      if (form.value.userid === user.userid && form.value.password === user.password) {
        this.modalService.dismissAll();
        this.userName = user.username;
        this.isLoggedIn = true;
        this.router.navigate(['gallery']);
      }
    })
    if (!this.isLoggedIn) {
      this.invalidUser = true;
    }
  }

  onLogoutClicked() {
    this.isLoggedIn = false;
    this.invalidUser = false;
    this.router.navigate(['/']);
  }

}
