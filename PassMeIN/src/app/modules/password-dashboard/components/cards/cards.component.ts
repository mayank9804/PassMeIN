import { Component, OnInit } from '@angular/core';
import { FakedataService } from 'src/app/modules/core/services/fakedata/fakedata.service';
import { CardService } from 'src/app/modules/core/services/cards/card.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cards:any=[];
  public selectedCard:any={};
  constructor(private _cs:CardService) { }

  fetchCards(){
    let card_temp:any=[];
    this._cs.getcards().subscribe(res=>{
      card_temp = res["cards"];
    },err=>{
    
    });
    return card_temp;
  }
  ngOnInit() {
    
    let card_temp = this.fetchCards();
    Object.assign(this.cards,card_temp);
    let tempState:any=[];
    this.cards.forEach(x=>{
      if(x['active']){
        tempState.push(x);
      }
    });
    Object.assign(this.cards,tempState);
  }

  ngDoCheck(){

    let card_temp = this.fetchCards();

    this.cards = [];

    for(let card of card_temp){
      if(card['active'] && card['site-name'].startsWith(this._cs.filter)){
        this.cards.push(card);
      }
    }
  }
  
  public setCard(id:any){
    
    this.selectedCard = {};
    this.cards.forEach(x=>{
      if(x['id']==(id)){
        Object.assign(this.selectedCard,x);
      }
    });
  }

  public deleteCard(){
    this._cs.deleteCard(this.selectedCard['id']);
    this.selectedCard = null;  
  }

  public addCard(newCardForm:any){ 
    this._cs.addCard(newCardForm);
    newCardForm = {};
    this.selectedCard = {};
  }

  public updateCard(){
    this._cs.updateCard(this.selectedCard,this.selectedCard["id"]);
    this.selectedCard = {};
  }

}
