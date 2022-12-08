import { Component, OnInit } from '@angular/core';
import { CalculServiceService } from 'src/app/Service/calcul-service.service';
import { Utilisateur } from 'src/app/utilisateur';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers!:Utilisateur[]
  constructor(private calculServiceService:CalculServiceService) { }

  ngOnInit(): void {
    this.listUsers=[
      {"id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz"},
      {"id": 2, "name": "Ervin Howell", "username": "Bret", "email":"Shanna@melissa.tv"},
      {"id": 3, "name": "Clementine Bauch", "username": "Samantha", "email":"Nathan@yesenia.net"}
      ]
  }

  u = new Utilisateur;
  nbrUsersOfUsername(){
    this.calculServiceService.getNumberOf(this.listUsers, "username", this.u.username)
  }

}
