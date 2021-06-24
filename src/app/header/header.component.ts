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
  userName = 'Dick';

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(usersDB));
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  onSubmit(form){
    console.log("adding form values ");
    console.log(form);
    console.log('FromLocalStorage:', localStorage.getItem('users'));
    const usersList = JSON.parse(localStorage.getItem('users'));
    usersList.forEach(user => {
      if (form.value.uid === user.userid && form.value.pswd === user.password) {
        this.modalService.dismissAll();
        this.userName = user.username;
        this.isLoggedIn = true;
        this.router.navigate(['gallery']);
      }
    })
    // if (form.value.uname === 'tom') {
    //   this.router.navigate(['gallery']);
    // }
  }

  onLogoutClicked() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

}
