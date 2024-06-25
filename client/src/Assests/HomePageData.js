const data = [
  {
    _id: 1,
    price: 49.79,
    image: "ethnic-wear.jpg",
    title: "Women's Ethnic-wear",
    discount: "50-80% OFF",
    search: "womens-ethnic-wear"
  },
  {
    _id: 2,
    price: 49.99,
    image: "mens-ethnic-wear.jpg",
    title: "Men's Ethnic Wear",
    discount: "20-40% OFF",
    search: "mens-ethnic-wear"
  },
  {
    _id: 3,
    price: 48.99,
    image: "https://maharaniwomen.b-cdn.net/wp-content/uploads/2021/09/A2.jpg",
    title: "Sarees",
    discount: "30-80% OFF",
    search: "Sarees"
  },
  {
    _id: 4,
    price: 40.99,
    image: "https://maharaniwomen.b-cdn.net/wp-content/uploads/2021/09/A2.jpg",
    title: "Sarees",
    discount: "30-80% OFF",
    search: "Sarees"
  },
  {
    _id: 5,
    price: 520.99,
    image: "https://i.pinimg.com/originals/50/96/f5/5096f57f5ca2d5b0a31f1f55399c0763.jpg",
    title: "Elegant Silk Saree",
    discount: "25-70% OFF",
    search: "Elegant-Silk-Saree"
  },
  {
    _id: 6,
    price: 490.99,
    image: "https://i.pinimg.com/originals/2a/0c/11/2a0c1195ac0e81c5659243343fed3ab7.jpg",
    title: "Cotton Printed Saree",
    discount: "20-60% OFF",
    search: "Cotton-Printed-Saree"
  },
  {
    _id: 7,
    price: 491.99,
    image: "https://cdn.sareeka.com/image/data2021/cotton-printed-multi-colour-printed-saree-186983.jpg",
    title: "Designer Wedding Saree",
    discount: "40-90% OFF",
    search: "Designer-Wedding-Saree"
  },
  {
    _id: 8,
    price: 495.99,
    image: "https://dvanza.com/wp-content/uploads/Beautiful-Floral-Printed-Cotton-saree-dvz0003045.jpeg",
    title: "Traditional Banarasi Saree",
    discount: "35-75% OFF",
    search: "Traditional-Banarasi-Saree"
  },
  {
    _id: 9,
    price: 4965.99,
    image: "https://dvanza.com/wp-content/uploads/Beautiful-Floral-Printed-Cotton-saree-dvz0003045.jpeg",
    title: "Embro_idered Georgette Saree",
    discount: "30-70% OFF",
    search: "Embro_idered-Georgette-Saree"
  },
  {
    _id: 10,
    price: 494.99,
    image: "https://th.bing.com/th/_id/OIP.g3mCUzVgHb9-FHoKAmIBdAHaLH?w=900&h=1350&rs=1&p_id=ImgDetMain",
    title: "Kanjivaram Silk Saree",
    discount: "40-80% OFF",
    search: "Kanjivaram-Silk-Saree"
  },
  {
    _id: 11,
    price: 495.99,
    image: "https://i.pinimg.com/originals/f0/ff/ea/f0ffea5026977dc2bd6c08778a4c3db2.jpg",
    title: "Bollywood Style Saree",
    discount: "25-60% OFF",
    search: "Bollywood-Style-Saree"
  },
  {
    _id: 12,
    price: 49784.99,
    image: "https://th.bing.com/th/_id/OIP.FicY4-xbtNJDcbh8HW6clwHaLH?w=500&h=750&rs=1&p_id=ImgDetMain",
    title: "Chiffon Party Wear Saree",
    discount: "30-65% OFF",
    search: "Chiffon-Party-Wear-Saree"
  },
  {
    _id: 13,
    price: 4956.99,
    image: "https://th.bing.com/th/_id/OIP.FicY4-xbtNJDcbh8HW6clwHaLH?w=500&h=750&rs=1&p_id=ImgDetMain",
    title: "Casual Cotton Saree",
    discount: "20-50% OFF",
    search: "Casual-Cotton-Saree"
  },
  {
    _id: 14,
    price: 4019.99,
    image: "mens-casual-wear.jpg",
    title: "Mens's Casual Wear",
    discount: "50-80% OFF",
    search: "mens-casual-wear"
  },
  {
    _id: 15,
    price: 409.99,
    image: "Watches.jpg",
    title: "Watches",
    discount: "30-80% OFF",
    search: "watches"
  },
  {
    _id: 16,
    price: 4129.99,
    image: "Womens-sport-wear.jpg",
    title: "Women's Sport Wear",
    discount: "50-80% OFF",
    search: "womens-sport-wear"
  },
  {
    _id: 17,
    price: 4369.99,
    image: "mens-sports-wear.jpg",
    title: "Mens's Sport Wear",
    discount: "10-80% OFF",
    search: "mens-sport-wear"
  },
  {
    _id: 18,
    price: 499.99,
    image: "k_ids-wear.jpg",
    title: "K_ids's  Wear",
    discount: "60-80% OFF",
    search: "k_ids-wear"
  },
  {
    _id: 19,
    price: 509.99,
    image: "mens-footwear.jpg",
    title: "Mens's Footwear",
    discount: "20-80% OFF",
    search: "mens-footwear"
  },
  {
    _id: 20,
    price: 529.99,
    image: "womens-footwear.jpg",
    title: "Womens's Footwear",
    discount: "40-80% OFF",
    search: "womens-footwear"
  },
  {
    _id: 21,
    price: 539.99,
    image: "jewellery.jpg",
    title: "Jewellery",
    discount: "20-40% OFF",
    search: "jewellery"
  },
  {
    _id: 22,
    price: 549.99,
    image: "handbags.jpg",
    title: "Handbags",
    discount: "30-65% OFF",
    search: "handbags-and-clutches"
  },
  {
    _id: 23,
    price: 569.99,
    image: "beauty-and-makeup.jpg",
    title: "Beauty & Makeup",
    discount: "20-40% OFF",
    search: "beauty-and-makeup"
  },
  {
    _id: 24,
    price: 579.99,
    image: "women-western-wear.jpg",
    title: "Women's Western wear",
    discount: "10-55% OFF",
    search: "womens-western-wear"
  }
];

export default data;
