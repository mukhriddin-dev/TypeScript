interface lang {
  uz: string;
  cyr: string;
  ru: string;
}

interface images {
  image: string;
}

interface product {
  name: lang;
  category: string;
  subCategory: string;
  mainImage: string;
  price: number;
  isHaveColor: boolean;
  images: images[];
  deliveryInfo: lang;
  propertyInfo: lang;
  finalPriceInfo: lang;
  popularInfo: lang;
  packageCode: string;
}

var order:product={
  name: {
    uz: "Divanlar va kreslolar",
    cyr: "Диванлар ва креслолар",
    ru: "Диваны и кресла"
  },
  category: "6564d1c2665dc0d8ac08222f",
  subCategory: "65662be12d9cd235ac924aba",
  mainImage:
    "https://isku.com/wp-content/uploads/2023/05/isku-iki-3h-sohva-korotettu-selkanoja-500x500.jpg",
  price: 12000000,
  isHaveColor: true,
  images: [
    {
      image:
        "https://isku.com/wp-content/uploads/2023/05/isku-iki-3h-sohva-korotettu-selkanoja-500x500.jpg"
    }
  ],
  deliveryInfo: {
    uz: "Divanlar va kreslolar",
    cyr: "Диванлар ва креслолар",
    ru: "Диваны и кресла"
  },
  propertyInfo: {
    uz: "Divanlar va kreslolar",
    cyr: "Диванлар ва креслолар",
    ru: "Диваны и кресла"
  },
  finalPriceInfo: {
    uz: "Divanlar va kreslolar",
    cyr: "Диванлар ва креслолар",
    ru: "Диваны и кресла"
  },
  popularInfo: {
    uz: "",
    cyr: "",
    ru: ""
  },
  packageCode: "213124154"
};

interface colors {
  name: string;
  color: string;
}

interface sizes {
  name: string;
}

interface units {
  title: string;
  sizes: sizes[];
}

type productInfo = {
  name: string;
  images: string[];
  price: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subCategory: string;
  brand: string;
  count: number;
  colors: colors[];
  units: units;
};

console.log(order)
