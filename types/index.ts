// type ArmorRecipeItem = {
//   name: string,
//   material: string,
//   icon: string,
// }

export type Products = {
  response: Array<{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
  }>;
};

export type Player = {
  uuid: string;
  name_raw: string;
};

export type Status = {
  online: boolean;
  players: {
    online: number;
    max: number;
    list: Player[];
  };
};

export type Payment = {
  paymentId?: number,
  amount?: number,
  phone?: string,
  email?: string,
  nickname: string,
  us_subscription?: string,
}

export type SubItem = {
  id?: number;
  origin_name: string,
  name: string;
  rating: number,
  description: string;
  price: number;
  old_price?: number;
  servers?: Array<string>;
  updated_at?: string;
  image: string;
  commands: Array<string>
};

export type RulesList = {
  id: string;
  name: string;
  content: Array<{
    title: string;
    punishment?: string;
    description?: string;
    subtitle?: string | Array<string>;
  }>;
};

export type DonateItem = {
  name: string;
  rating: number;
  description: {
    screen: string;
    text: string;
  };
  commands: Array<string>;
  price: number;
};

export type ArmorItem = {
  attribute: {
    name: string;
    icon?: string;
  };
  effects?: {
    effect_name: string;
    effect_level?: number;
    effect_duration?: number;
  };
  isNatural?: {
    populators?: {
      ore?: {
        name: string;
        icon: string;
      };
      height?: {
        min: number;
        max: number;
      };
      structory?: Array<string>;
      chance?: number;
      available_tools?: Array<string>;
    };
  };
  durability?: {
    helmet: {
      generic: number;
      points?: number;
    };
    chestplate: {
      generic: number;
      points?: number;
    };
    leggings: {
      generic: number;
      points?: number;
    };
    boots: {
      generic: number;
      points?: number;
    };
  };
  armor?: {
    helmet: {
      generic: number;
    };
    chestplate: {
      generic: number;
    };
    leggings: {
      generic: number;
    };
    boots: {
      generic: number;
    };
  };
  armorThougness?: {
    helmet: {
      generic: number;
    };
    chestplate: {
      generic: number;
    };
    leggings: {
      generic: number;
    };
    boots: {
      generic: number;
    };
  };
};

export type DataMessage = {
  us_nickname: string;
  us_subscription: string;
  MERCHANT_ID: number;
  MERCHANT_ORDER_ID: number;
  SIGN: string;
  P_EMAIL?: string;
  P_PHONE?: number;
  AMOUNT?: number
};

export type ScreenshotItem = {
  title: string,
  description?: string,
  createdDate: string,
  image: string,
}