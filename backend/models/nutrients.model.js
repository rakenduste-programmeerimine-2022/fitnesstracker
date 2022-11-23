const { Schema, model} = require('mongoose')

const nutrientsSchema = new Schema(
    {
        calories: { type: Number, required: true },
        fats: { type: Number, required: true },
        carbs: { type: Number, required: true },
        protein: { type: Number, required: true },
        date: { type: String, required: true }
    }
)

nutrientsSchema.statics.savenutrients = async ({ calories, fats, carbs, protein, date }) => {
    return new Promise(async (resolve, reject) => {
        const newNutrients = new Nutrients({
            calories,
            fats,
            carbs,
            protein,
            date
        })

        newNutrients.save((err) => {
            if (err) return reject(err)
            resolve(newNutrients)
        })
    })
}

const Nutrients = model('NutrientsModel', nutrientsSchema)

module.exports = Nutrients