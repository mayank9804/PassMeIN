import { Component, OnInit } from '@angular/core';
import { FakedataService } from 'src/app/modules/core/services/fakedata/fakedata.service';
import { CardService } from 'src/app/modules/core/services/cards/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cards:any=[];
  public selectedCard:any={};
  constructor(private _cs:CardService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.cards = data["cards"]["cards"];  
      }
    )
  }
  
  ngDoCheck(){
    
    let tempCards = this.cards;

    this.cards = [];
    if(this._cs.filter!=null && this._cs.filter!=""){
      for(let card of tempCards){
        
        if(card['siteName'].startsWith(this._cs.filter)){
          this.cards.push(card);
          console.log(this.cards);   
        }

      }
    }else{
      this.cards = tempCards;
    }
  }
  
  public setCard(id:any){
    
    this.selectedCard = {};
    this.cards.forEach(x=>{
      if(x['_id']==(id)){
        console.log(x);
        Object.assign(this.selectedCard,x);
        console.log(this.selectedCard);
        
      }
    });
  }

  public deleteCard(){
    console.log(this.selectedCard);
    
    this._cs.deleteCard(this.selectedCard['_id']).subscribe(res=>{
      let tempCards = this.cards;
      this.cards = [];
      
      
      for(let card of tempCards){
        console.log(card['_id'],this.selectedCard['_id']);
        if(card['_id']!=this.selectedCard['_id']){
          console.log(card);
          this.cards.push(card);
        }
      }
      
    },err=>{
      console.log(err);
    },()=>{
      this.selectedCard = {};  
    });
    
  }

  public addCard(newCardForm:any){ 
    this._cs.addCard(newCardForm).subscribe(res=>{
      console.log(res);
      this.cards.push(res);
    },err=>{
      console.log(err);
    },()=>{
      newCardForm = {};
      this.selectedCard = {};
    }); 
    
  }

  public updateCard(newCard:any){
    console.log(newCard);
    console.log(this.selectedCard["_id"]);
    
    
    this._cs.updateCard(newCard,this.selectedCard["_id"]).subscribe(res=>{
      this.cards = res;
    },err=>{},()=>{
      this.selectedCard = {};
    });
  }

}
