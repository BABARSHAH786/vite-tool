// // grog languagae
// // *[_type=='product'] | order(_createdAt asc){
// //   price,image,color,category
// // }
import { defineType, defineField, defineArrayMember } from "sanity";

export const productSchema = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      validation: (Rule) => Rule.required(),
    }),

    //slug field

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title:'Image',
    }),
    defineField({
        name:'content',
        type:'array',
        title:'Content',
        of:[
            defineArrayMember({
                type:'block'
            })
        ]
    }),
    
  ],
});



// slug error
// export const productSchema = {
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     fields: [
//       {
//         name: 'productName',
//         title: 'Product Name',
//         type: 'string',
//       },
//       {
//         name: 'category',
//         title: 'Category',
//         type: 'string',
//       },
//       {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//       },
//       {
//         name: 'inventory',
//         title: 'Inventory',
//         type: 'number',
//       },
//       {
//         name: 'colors',
//         title: 'Colors',
//         type: 'array',
//         of: [{ type: 'string' }],
//       },
//       {
//         name: 'status',
//         title: 'Status',
//         type: 'string',
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image', // Using Sanity's image type for image field
//         options: {
//           hotspot: true,
//         },
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//       {
//         name: "slug",
//         type: "slug",
//         title: "Slug",
//         options: {
//           source: "productName",
//           maxLength: 96,
//         }
//       }
//     ],
//   }


