const mongoose = require('mongoose')

const storeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        details: {
            type: String
        },
        active: {
            type: Boolean,
            default: true
        },
        loaction: {
            type: String
        },
        image: {
            type: String
        },
        images: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
)

storeSchema.virtual('id').get(function () {
    return this._id.toHexString();
})

storeSchema.set('toJSON', {
    virtuals: true
})

exports.Store = mongoose.model('Store', storeSchema)
exports.storeSchema = storeSchema