const SHOP_DATA = {
  bestsellers: {
    id: 1,
    title: "Bestsellers",
    routeName: "bestsellers",
    items: [
      {
        id: 1,
        name: "Bút bi sành điệu",
        imageUrl: require("../../image/bestsellers/1.jpg"),
        price: 75
      },
      {
        id: 2,
        name: "Hộp bút đáng yêu",
        imageUrl: require("../../image/bestsellers/2.jpg"),
        price: 120
      },
      {
        id: 3,
        name: "Thước kẻ vip pro",
        imageUrl: require("../../image/bestsellers/3.jpg"),
        price: 68
      },
      {
        id: 4,
        name:
          "Balô chống đạn",
        imageUrl: require("../../image/bestsellers/4.jpg"),
        price: 110
      },
      {
        id: 5,
        name: "Công cụ tính toán tự động",
        imageUrl: require("../../image/bestsellers/5.png"),
        price: 65
      },
      {
        id: 6,
        name: "Vở tí hon",
        imageUrl: require("../../image/bestsellers/6.jpg"),
        price: 85
      },
      {
        id: 7,
        name: "Sổ tay ku te phô mai que",
        imageUrl: require("../../image/bestsellers/7.jpg"),
        price: 60
      },
      {
        id: 8,
        name: "Công cụ phòng vệ",
        imageUrl: require("../../image/bestsellers/8.jpg"),
        price: 95
      },
      {
        id: 9,
        name: "Điện thoại thông minh flashship",
        imageUrl: require("../../image/bestsellers/9.jpg"),
        price: 74
      },
    ]
  },
  luxury: {
    id: 2,
    title: "Luxury",
    routeName: "luxury",
    items: [
      {
        id: 10,
        name: "Combo sản phẩm 1",
        imageUrl: require("../../image/luxury/a1.jpg"),
        price: 235
      },
      {
        id: 11,
        name: "Combo sản phẩm 2",
        imageUrl: require("../../image/luxury/a2.jpg"),
        price: 398
      },
      {
        id: 12,
        name: "Combo sản phẩm 3",
        imageUrl: require("../../image/luxury/a3.jpg"),
        price: 307
      },
      {
        id: 13,
        name: "Combo sản phẩm 4",
        imageUrl: require("../../image/luxury/a4.jpg"),
        price: 205
      },
      {
        id: 14,
        name: "Bịt mắt hỗ trợ giấc ngủ",
        imageUrl: require("../../image/luxury/a6.jpg"),
        price: 290
      },
    ]
  },
  budget: {
    id: 3,
    title: "Budget",
    routeName: "budget",
    items: [
      {
        id: 16,
        name: "Chổi quét nhà phong thuỷ",
        imageUrl: require("../../image/budget/b1.jpg"),
        price: 14.5
      },
      {
        id: 17,
        name: "Rẻ lau bảng còn dùng được",
        imageUrl: require("../../image/budget/b2.jpg"),
        price: 18
      },
      {
        id: 18,
        name: "Bếp củi thân thiện môi trường",
        imageUrl: require("../../image/budget/b3.jpg"),
        price: 25
      },
      {
        id: 19,
        name: "Vương bào",
        imageUrl: require("../../image/budget/b4.jpg"),
        price: 19
      },
      {
        id: 15,
        name: "Mũ quốc phòng thời trang",
        imageUrl: require("../../image/budget/b5.jpg"),
        price: 30
      },
      {
        id: 40,
        name: "Áo đồng phục",
        imageUrl: require("../../image/budget/b6.png"),
        price: 20
      },
      {
        id: 41,
        name: "Ngô ngon nhà trồng",
        imageUrl: require("../../image/budget/b7.jpg"),
        price: 20
      },
      {
        id: 42,
        name: "Áo vest đen XXL  ",
        imageUrl: require("../../image/budget/b8.jpg"),
        price: 35
      },
    ]
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 21,
        name: "Nơ đẹp",
        imageUrl: require("../../image/womens/c1.jpg"),
        price: 95
      },
        // {
        //   id: 20,
        //   name: "Le Labo",
        //   imageUrl: require("../../image/womens/lelabo-100.jpg"),
        //   price: 110
        // },
        // {
        //   id: 23,
        //   name: "Lancome Tresor",
        //   imageUrl: require("../../image/womens/lancome-tresor-50.jpg"),
        //   price: 65
        // },
        // {
        //   id: 22,
        //   name: "Viva la Juicy",
        //   imageUrl: require("../../image/womens/viva-lajuicy-45.jpg"),
        //   price: 80
        // },
        // {
        //   id: 24,
        //   name: "Miss Dior",
        //   imageUrl: require("../../image/womens/missdior-100.jpeg"),
        //   price: 100
        // },
        // {
        //   id: 25,
        //   name: "Chanel Chance",
        //   imageUrl: require("../../image/womens/chanel-chance.jpg"),
        //   price: 120
        // },
        // {
        //   id: 26,
        //   name: "Coco Chanel",
        //   imageUrl: require("../../image/womens/coco-chanel.jpg"),
        //   price: 20
        // },
        // {
        //   id: 43,
        //   name: "Poison Girl Dior",
        //   imageUrl: require("../../image/womens/dior-poison-100.jpg"),
        //   price: 100
        // },
        // {
        //   id: 44,
        //   name: "YSL Black Opium",
        //   imageUrl: require("../../image/bestsellers/ysl-blackopium.jpg"),
        //   price: 85
        // },
        // {
        //   id: 45,
        //   name: "Chanel No.5",
        //   imageUrl: require("../../image/bestsellers/chanel-no5-120.jpg"),
        //   price: 120
        // },
        // {
        //   id: 46,
        //   name:
        //     "Lancome La vie est belle",
        //   imageUrl: require("../../image/bestsellers/lancome-lavie.png"),
        //   price: 110
        // },
    ]
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 27,
        name: "Sách Đệ nhất kiếm tiền",
        imageUrl: require("../../image/mens/d1.jpg"),
        price: 87
      },
      {
        id: 28,
        name: "101 quả Smoke cơ bản cho mẫu giáo",
        imageUrl: require("../../image/mens/d2.jpg"),
        price: 152
      },
      // {
      //   id: 29,
      //   name:
      //     "Invictus",
      //   imageUrl: require("../../image/mens/invictus-52.jpg"),
      //   price: 52
      // },
      // {
      //   id: 30,
      //   name: "CoSTUME National Homme",
      //   imageUrl: require("../../image/mens/custume-45.jpg"),
      //   price: 45
      // },
      // {
      //   id: 31,
      //   name: "Versace Homme",
      //   imageUrl: require("../../image/mens/versace-75.jpg"),
      //   price: 75
      // },
      // {
      //   id: 32,
      //   name: "Jean Paul",
      //   imageUrl: require("../../image/mens/jean-paul-60.jpg"),
      //   price: 60
      // },
      // {
      //   id: 52,
      //   name: "CK be",
      //   imageUrl: require("../../image/mens/ck-35.jpg"),
      //   price: 55
      // },
      // {
      //   id: 53,
      //   name: "Lanuit de l'homme YSL",
      //   imageUrl: require("../../image/mens/ysl-lanuit-70.jpeg"),
      //   price: 70
      // },
      // {
      //   id: 54,
      //   name: "DavidOff Cool water",
      //   imageUrl: require("../../image/bestsellers/Davidoff-Coolwater.jpg"),
      //   price: 68
      // },
    ]
  }
};
export default SHOP_DATA;