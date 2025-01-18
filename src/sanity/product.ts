import { defineType, defineField, defineArrayMember } from "sanity"



export const product =  {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        
        defineField({
            name: 'slug',
            type : 'slug',
            title: 'Slug',
            options: {
                source : "title",
                    maxLength: 20 
            },
            validation: Rule => Rule.required()
        }),
    ]}