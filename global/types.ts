// type ArmorRecipeItem = {
//   name: string,
//   material: string,
//   icon: string,
// }

type RulesList = {
  id: string;
  name: string;
  content: Array<{
    title: string;
    punishment?: string;
    description?: string;
    subtitle?: string | Array<string>;
  }>;
};

type DonateItem = {
  name: string;
  rating: number;
  description: {
    screen: string;
    text: string;
  };
  commands: Array<string>;
  price: number;
};

type ArmorItem = {
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
