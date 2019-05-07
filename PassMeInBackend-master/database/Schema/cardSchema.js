const mongoose = require("mongoose");
let cardSchema = new mongoose.Schema({
    uid:String,
    url:String,
    email:String,
    password:String,
    siteName:String,
    username:String
});
class Card{
    //CRUD ON CARDS
    static async addCard(uid,url,email,pass,dom,uname){
        let card = new this.model({
            uid:uid,
            url:url,
            email:email,
            password:pass,
            siteName:dom,
            username:uname
        });
        const result = await card.save();
        return result;
    }
    static async findAllCards(uid){
        return await this.model.find({uid:uid});
    }
    static async updateCard(id,newCard){
        try{
            const result = await this.model.findByIdAndUpdate(id,{
                $set:{
                    url:newCard.url,
                    email:newCard.email,
                    password:newCard.password,
                    siteName:newCard.sitename,
                    username:newCard.username
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
            const result = await this.model.findByIdAndRemove(id);
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