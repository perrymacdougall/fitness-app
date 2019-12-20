const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Recipe = new Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    macros: {
        carbs: {
            type: Number,
            required: true
        },
        fat: {
            type: Number,
            required: true
        },
        protein: {
            type: Number,
            required: true
        },    
    },
    gluten_free: {
        type: Boolean
    },
    dairy_free: {
        type: Boolean
    },
    vegan: {
        type: Boolean
    }
}, {
    collection: 'recipes'
});

module.exports = mongoose.model('recipes', Recipe);