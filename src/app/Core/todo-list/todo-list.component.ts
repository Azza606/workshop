import { Component, OnInit } from '@angular/core';
import { CalculServiceService } from 'src/app/Service/calcul-service.service';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist!: Todo[];
  nbrElComp!: number;
  todos!: Todo[]
  constructor(private calculServiceService:CalculServiceService, private todoService: TodoService) { }

  ngOnInit(): void {
   this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem","completed": true},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];
      
      this.todoService.getTodos().subscribe(
        (result)=>{
          this.todolist=result
          console.log(result)
        }
        
      );
    }
  

  completedTrue() {
  this.nbrElComp = this.calculServiceService.getNumberOf(this.todos, 'completed', false);
}



}
