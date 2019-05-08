const mongoose = require("mongoose");
let cardSchema = new mongoose.Schema({
    uid:String,
    url:String,
    email:String,
    password:String,
    siteName:String,
    username:String,
    notes:String
});
class Card{
    //CRUD ON CARDS
    static async addCard(uid,url,email,pass,dom,uname,notes){
        let card = new this.model({
            uid:uid,
            url:url,
            email:email,
            password:pass,
            siteName:dom,
            username:uname,
            notes:notes
        });
        const result = await card.save();
        return result;
    }
    static async findAllCards(uid){
        return await this.model.find({uid:uid});
    }
    static async updateCard(id,newCard){
        try{
            const result = await this.model.findOneAndUpdate({_id:id},{
                $set:{
                    url:newCard.url,
                    email:newCard.email,
                    password:newCard.password,
                    siteName:newCard.siteName,
                    username:newCard.username,
                    notes:newCard.notes
                }
            });
            return result;
        }
        catch(e){
            return e;
        }
    }
    static async deleteCard(id){
        try{
            console.log("RESULTT");
            console.log(id);
            
            const result = await this.model.findByIdAndDelete(id);
            console.log(result);
            
            return result;
        }
        catch(e){
            return e;
        }
    }
    static async display(){
        console.log(await this.model.find());
        
        console.log("CARD");
    }
}
Card.model = new mongoose.model("Card",cardSchema);
module.exports = Card