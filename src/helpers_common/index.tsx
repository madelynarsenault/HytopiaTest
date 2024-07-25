interface Option {
  title: string;
  description: string;
}

interface ConfigItem {
  title: string;
  items: string[];
  initialIndex?: number;
}

const descriptions = {
  Graphics: {
    title: "Graphics",
    options: {
      Simple: {
        title: "Graphics: Simple",
        description: "Simple Graphics: Basic textures with minimal details for better performance."
      },
      Normal: {
        title: "Graphics: Normal",
        description: "Normal Graphics: Standard textures with a decent balance of quality and performance."
      },
      Wild: {
        title: "Graphics: Wild",
        description: "Wild Graphics: Enhanced textures with more details and vibrant colors."
      },
      Fancy: {
        title: "Graphics: Fancy",
        description: "Fancy Graphics is a Setting in which Blocks and Mobs, by default, have more realistic textures. The option was made default."
      },
      Epic: {
        title: "Graphics: Epic",
        description: "Epic Graphics: Ultra-high-quality textures with the best details and effects."
      }
    }
  }
};

const graphicsOptions = Object.keys(descriptions.Graphics.options);
const initialGraphicsIndex = graphicsOptions.indexOf('Fancy');


const displayConfig: ConfigItem[] = [
  { title: "Graphics Quality", items: graphicsOptions, initialIndex: initialGraphicsIndex },
  { title: "3D Anaglyph", items: ["Off", "On"] },
  { title: "GUI Scale", items: ["Auto", "Small", "Normal", "Large"] },
];
const graphicsConfig: ConfigItem[] = [
  { title: "Clouds", items: ["Off", "On"] },
  {
    title: "Mipmap Levels",
    items: Array.from({ length: 5 }, (_, i) => i.toString()),
    initialIndex: 4
  },
  {
    title: "Render Distance",
    items: Array.from({ length: 44 }, (_, i) => i.toString() + ' Chunks'),
    initialIndex: 20
  },
  { title: "GUI Scale", items: ["Auto", "Small", "Normal", "Large"] },
];
export { descriptions, graphicsConfig, displayConfig };
