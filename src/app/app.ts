import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

count=100
inject(){
  this.count++;
}

dec(){
  this.count--;
}

reset(){
  this.count=0
}

  num=100
  text="ABCD"
  isBtnOn=false

  btnOnOff(){
    this.isBtnOn=!this.isBtnOn
  }

  isEvent(){
    if (this.num%2==0){
      return'green'
    }
    else{
      return'red'
    }
  }
}
