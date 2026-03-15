import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetvalue',
  imports: [],
  templateUrl: './getsetvalue.html',
  styleUrl: './getsetvalue.css',
})
export class Getsetvalue {

    username = "";

    getUserName(event: Event){

      const name  = (event.target as HTMLInputElement).value
    }

    setUserName()
    {
      this.username = 'Peter';
    }

    getUserNameWithTemplate(val: string)
    {
      this.username = val;
    }



}
