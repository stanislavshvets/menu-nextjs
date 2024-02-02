'use client'

import Joi from 'joi';
import { IForm } from "@/types/form.type";

const CallBackFormValidator = Joi.object<IForm>(
    {
        // The pattern is used for a Ukrainian mobile number
        phoneNumber:Joi.string().pattern(/^(\+38)?(039|067|068|096|097|098|050|066|095|099|063|073|093|091|092|089|094)\d{7}$/).messages(
            {
                'string.pattern.base' : 'Enter a valid phone number',
                'string.empty' : 'The field cannot be empty',
            })
    }
)

export { CallBackFormValidator };


