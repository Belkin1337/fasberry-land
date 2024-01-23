// type ArmorRecipeItem = {
//   name: string,
//   material: string,
//   icon: string,
// }

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
  armorThougness?: {
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
};
