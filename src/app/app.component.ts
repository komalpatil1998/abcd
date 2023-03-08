import { Component } from '@angular/core';
import { FormControl, FormGroup,FormControlName,Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  // votes=0;

//  onIncrement(): void {
//  this.votes += 1;
//  }

//  onDecrement(): void {
//  this.votes -= 1;
//  }


  //  demoOfBinding ='komal';

  //  username = "sayli";
  //  fullname = "komal";
  //  count:number =0 ;
  //  isDisabled =  false
  //  isupdate : any;
  //  indCurrencyValueShow = false;
  //  isArr:string[]=[];
     
  //  indCurrencyValue: any;
  //  newResult:[] = [];
  //  arrayValue: any;
   
  //  isClicked()
  //  {
  //    this.demoOfBinding ="welcome komal"
  //    this.isDisabled = false
  // }
  // isCount(action:string)
  //  {
  //    if(action ==='+')
  //    {
  //     this.count++;
  //    }
  //     else{
  //       this.count--;
  //     }
  // }
 
// version = 15;
// isButtonClicked = false;
// toDate: Date = new Date();
// range = new FormGroup({
//   start: new FormControl<Date | null>(null),
//   end: new FormControl<Date | null>(null),
// })

// rupay = 1000;
// per: number=.74142;
// getDate:any = [];
// date!:string;

// constructor(){}

// ngOnInit()
// {
//   setInterval(()=>{
//     const currentDate = new Date();
//     this.date = currentDate.toLocaleTimeString();

//   },1000);
// }

// onClicked(){
//   this.isButtonClicked = !this.isButtonClicked;
// }

// onUpdate(event:Event){
//   this.isupdate = (<HTMLInputElement>event.target).value;
//   this.indCurrencyValue = this.isupdate * 84
// }
// onClicked()
// {
//   this.indCurrencyValueShow = true
//   this.isArr.push(this.indCurrencyValue)
//   this.isArr.forEach(arr =>{
//     this.arrayValue = arr;
//   })
// }
//  username="komal patil";
//  isDisabled =  false
// onClick()
//  {
//   this.username="tejal";
//  }
//  onInputClick(event:any)
//  {
//  console.log(event.target.value);
// }

// isMenuOPened: boolean = false;

// toggleMenu()
// {
//   const toggleIcon = document.getElementById('icon')
//   toggleIcon?.classList.toggle('fa-caret-up')
//   this.isMenuOPened = !this.isMenuOPened;
// }

isMenuOPened: boolean = false;
toggleMenu()

{
  const toggleIcon = document.getElementById('icon')
  toggleIcon?.classList.toggle('fa-caret-up')
  this.isMenuOPened = !this.isMenuOPened;
 }
//  showMenu()
//  {
//    const toggleIcon = document.getElementById('icon')
//    toggleIcon?.classList.toggle('fa fa-caret-left')
//    this.isMenuOPened = !this.isMenuOPened;
//   }
//   ***********************
  // onSubmit(form:NgForm)
  // {
  //   console.log(form)
  // }
}

