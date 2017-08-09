var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var QuestionSchema = new Schema ({
    value: Number,
    question: String,
    answer: String 

});
var CategorySchema = new Schema ({
    name: String,
    questions: [QuestionSchema]
});

var GameSchema = new Schema ({
    name: String,
    points: Number,
    board: [Boolean] ,
    categories: [CategorySchema] 
});




var GameModel = mongoose.model("Game", GameSchema);
var CategoryModel = mongoose.model("Category", CategorySchema);
var QuestionModel = mongoose.model("Question", QuestionSchema);

module.exports = {
    Game: GameModel,
    Category: CategoryModel,
    Question: QuestionModel
};

