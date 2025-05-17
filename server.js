const express = require('express');
const Together = require('together-ai').default; // Use .default for CommonJS
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Log Together AI module to debug
console.log('Together module:', Together);

// Initialize Together AI client
let together;
try {
  together = new Together({
    apiKey: process.env.TOGETHER_API_KEY,
  });
} catch (error) {
  console.error('Failed to initialize Together AI client:', error);
  process.exit(1); // Exit if initialization fails
}

// Placeholder for JSON data (paste your JSON data here)
const jsonData = {
   "expo": {
    "name": "jpapp",
    "slug": "jpapp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.jpapp"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.yourcompany.jpapp"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    }
  },
  
    "metadata": {
      "company_name": "JP Group",
      "description": "A chatbot for JP Group' React Native app to answer queries about product specifications, machine details, and company information based on provided documents.",
      "technical_terms": {
        "weft_insertion_rate": "The number of weft threads inserted per minute in a weaving machine, measured in picks per minute (ppm). Higher rates indicate faster fabric production, critical for bag manufacturing efficiency.",
        "tape_extrusion": "A process where molten polymer is extruded through a die and stretched into flat tapes, used as the base material for woven bags.",
        "circular_loom": "A machine that weaves flat tapes into tubular or flat fabric for bags, using shuttles to interlace weft and warp tapes, enabling high-strength bag production.",
        "hydraulic_bale_press": "A machine that compresses materials (e.g., bags, fabrics) into dense bales for storage or transport, with capacity measured in tons.",
        "cheese_pipes": "Cylindrical cores (35x38x218 mm) used to wind tapes or fabrics during production, ensuring uniform storage and processing.",
        "coating_thickness": "The thickness of polymer coating applied to fabrics, measured in micron, affecting bag durability and protection.",
        "godet_dia": "The diameter of godet rolls in tape extrusion lines, influencing tape stretching and quality.",
        "shuttle": "A component in circular looms that carries the weft tape through the warp tapes to create woven fabric."
      }
    },
    "data": {
      "products": {
        "cement_bags": [
          {
            "production_capacity": "Up to 40,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "150 Kg/hr",
                "quantity": 1,
                "spec_ref": "70R (Screw Dia: 70mm, Max Output PP: 150 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 120
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 15,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Valve Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 1
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "30 Tons",
                "quantity": 1,
                "spec_ref": "JP30BB (Platform Size: 1200x800 mm, Power: 7.5 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 2
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 25000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "335 kW",
              "man_power_required": 35,
              "shed_area_required": "2000 sqm"
            }
          },
          {
            "production_capacity": "Up to 75,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "250 Kg/hr",
                "quantity": 1,
                "spec_ref": "80R (Screw Dia: 80mm, Max Output PP: 250 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 144
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 24,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Valve Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 2
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "30 Tons",
                "quantity": 1,
                "spec_ref": "JP30BB (Platform Size: 1200x800 mm, Power: 7.5 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "25 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 31000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "450 kW",
              "man_power_required": 50,
              "shed_area_required": "2500 sqm"
            }
          },
          {
            "production_capacity": "75,000 to 1,00,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "350 kg/hr",
                "quantity": 1,
                "spec_ref": "90R (Screw Dia: 90mm, Max Output PP: 350 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 192
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 33,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Valve Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 3
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "30 Tons",
                "quantity": 1,
                "spec_ref": "JP30BB (Platform Size: 1200x800 mm, Power: 7.5 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "35 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 4
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 42000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "620 kW",
              "man_power_required": 70,
              "shed_area_required": "3500 sqm"
            }
          },
          {
            "production_capacity": "1,00,000 to 1,30,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "450 Kg/hr",
                "quantity": 1,
                "spec_ref": "105R (Screw Dia: 105mm, Max Output PP: 450 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 264
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 42,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 2,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Valve Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 4
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "30 Tons",
                "quantity": 2,
                "spec_ref": "JP30BB (Platform Size: 1200x800 mm, Power: 7.5 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "45 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 5
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 54000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "850 kW",
              "man_power_required": 100,
              "shed_area_required": "4000 sqm"
            }
          },
          {
            "production_capacity": "1,30,000 to 1,65,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "600 Kg/hr",
                "quantity": 1,
                "spec_ref": "120R (Screw Dia: 120mm, Max Output PP: 600 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 288
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 57,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 2,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Valve Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 4
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "30 Tons",
                "quantity": 1,
                "spec_ref": "JP30BB (Platform Size: 1200x800 mm, Power: 7.5 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "60 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 5
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 74000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "1020 kW",
              "man_power_required": 120,
              "shed_area_required": "5000 sqm"
            }
          },
          {
            "production_capacity": "1,65,000 to 2,00,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "750 kg/hr",
                "quantity": 1,
                "spec_ref": "150R (Screw Dia: 150mm, Max Output PP: 900 kg/h, Max Line Speed: 480 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 312
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 72,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 3,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Valve Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 5
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "30 Tons",
                "quantity": 2,
                "spec_ref": "JP30BB (Platform Size: 1200x800 mm, Power: 7.5 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "80 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 6
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 93000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "1220 kW",
              "man_power_required": 160,
              "shed_area_required": "6500 sqm"
            }
          }
        ],
        "sugar_bags": [
          {
            "production_capacity": "Up to 35,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "150 Kg/hr",
                "quantity": 1,
                "spec_ref": "70R (Screw Dia: 70mm, Max Output PP: 150 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 120
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 12,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Valve Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 1
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "30 Tons",
                "quantity": 1,
                "spec_ref": "JP30BB (Platform Size: 1200x800 mm, Power: 7.5 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 2
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 25000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "320 kW",
              "man_power_required": 35,
              "shed_area_required": "2000 sqm"
            }
          },
          {
            "production_capacity": "Up to 50,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "250 Kg/hr",
                "quantity": 1,
                "spec_ref": "80R (Screw Dia: 80mm, Max Output PP: 250 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 144
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 21,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line with Liner Insertion",
                "capacity": "Bag conversion",
                "quantity": 2,
                "spec_ref": "JPBCL 850LI (Unwinder Fabric Roll Width: 400-850 mm, Production Speed: 25-35 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 1,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "25 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors for Liner Insertion",
                "capacity": "80 to 90 CFM",
                "quantity": 2
              },
              {
                "description": "Air Compressors for Tape Line",
                "capacity": "20 to 30 CFM",
                "quantity": 1
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 27000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "450 kW",
              "man_power_required": 50,
              "shed_area_required": "2500 sqm"
            }
          },
          {
            "production_capacity": "50,000 to 75,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "350 Kg/hr",
                "quantity": 1,
                "spec_ref": "90R (Screw Dia: 90mm, Max Output PP: 350 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 192
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 30,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line with Liner Insertion",
                "capacity": "Bag conversion",
                "quantity": 3,
                "spec_ref": "JPBCL 850LI (Unwinder Fabric Roll Width: 400-850 mm, Production Speed: 25-35 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 1,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "35 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors for Liner Insertion",
                "capacity": "80 to 90 CFM",
                "quantity": 3
              },
              {
                "description": "Air Compressors for Tape Line",
                "capacity": "20 to 30 CFM",
                "quantity": 1
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 39000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "610 kW",
              "man_power_required": 70,
              "shed_area_required": "3500 sqm"
            }
          },
          {
            "production_capacity": "75,000 to 1,00,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "450 Kg/hr",
                "quantity": 1,
                "spec_ref": "105R (Screw Dia: 105mm, Max Output PP: 450 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 264
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 42,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 2,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line with Liner Insertion",
                "capacity": "Bag conversion",
                "quantity": 3,
                "spec_ref": "JPBCL 850LI (Unwinder Fabric Roll Width: 400-850 mm, Production Speed: 25-35 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 2,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "45 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors for Liner Insertion",
                "capacity": "80 to 90 CFM",
                "quantity": 3
              },
              {
                "description": "Air Compressors for Tape Line",
                "capacity": "20 to 30 CFM",
                "quantity": 1
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 54000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "820 kW",
              "man_power_required": 100,
              "shed_area_required": "4000 sqm"
            }
          },
          {
            "production_capacity": "1,00,000 to 1,25,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "600 Kg/hr",
                "quantity": 1,
                "spec_ref": "120R (Screw Dia: 120mm, Max Output PP: 600 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 288
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 51,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 2,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line with Liner Insertion",
                "capacity": "Bag conversion",
                "quantity": 4,
                "spec_ref": "JPBCL 850LI (Unwinder Fabric Roll Width: 400-850 mm, Production Speed: 25-35 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 2,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "60 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors for Liner Insertion",
                "capacity": "80 to 90 CFM",
                "quantity": 4
              },
              {
                "description": "Air Compressors for Tape Line",
                "capacity": "20 to 30 CFM",
                "quantity": 1
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 66000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "1000 kW",
              "man_power_required": 120,
              "shed_area_required": "5000 sqm"
            }
          },
          {
            "production_capacity": "1,25,000 to 1,50,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "750 Kg/hr",
                "quantity": 1,
                "spec_ref": "150R (Screw Dia: 150mm, Max Output PP: 900 kg/h, Max Line Speed: 480 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 312
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 66,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 2,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line with Liner Insertion",
                "capacity": "Bag conversion",
                "quantity": 5,
                "spec_ref": "JPBCL 850LI (Unwinder Fabric Roll Width: 400-850 mm, Production Speed: 25-35 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 2,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "80 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors for Liner Insertion",
                "capacity": "80 to 90 CFM",
                "quantity": 5
              },
              {
                "description": "Air Compressors for Tape Line",
                "capacity": "20 to 30 CFM",
                "quantity": 2
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 85000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "1180 kW",
              "man_power_required": 150,
              "shed_area_required": "6000 sqm"
            }
          }
        ],
        "fibc_bags": [
          {
            "production_capacity": "Up to 3500 FIBCs/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "250 Kg/hr",
                "quantity": 1,
                "spec_ref": "80R (Screw Dia: 80mm, Max Output PP: 250 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 144
              },
              {
                "description": "Circular Looms",
                "capacity": "6/8 Shuttle",
                "quantity": 10,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for FIBC Coating",
                "quantity": 1,
                "spec_ref": "JP 80 CRJ 2000 (Die Width: 2000 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Fabric Cutting Machine / Mouth Punch",
                "capacity": "FIBCM",
                "quantity": 1,
                "spec_ref": "FIBCM1500 (Fabric Width: 1500 mm, Line Speed: 22 mpm)"
              },
              {
                "description": "Belt Cutting Machine",
                "capacity": "PP webbing belt",
                "quantity": 1,
                "spec_ref": "JPBCM6 (Belt Width Max: 75 mm)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Needle Loom",
                "capacity": "for belt making",
                "quantity": 1
              },
              {
                "description": "Stitching Machine",
                "capacity": "Manual",
                "quantity": 40
              },
              {
                "description": "Bag to Bag Printing Machine",
                "capacity": "2/3/4 color",
                "quantity": 1
              },
              {
                "description": "Bag cleaning machine",
                "capacity": "inside cleaning",
                "quantity": 1
              },
              {
                "description": "Hydraulic Bale Press",
                "capacity": "100 Tons",
                "quantity": 1,
                "spec_ref": "JP120BB (Platform Size: 1100x950 mm, Power: 20 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "25 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 25000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "510 kW",
              "man_power_required": 100,
              "shed_area_required": "3500 sqm"
            }
          },
          {
            "production_capacity": "3500 to 4500 FIBCs/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "350 Kg/hr",
                "quantity": 1,
                "spec_ref": "90R (Screw Dia: 90mm, Max Output PP: 350 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 192
              },
              {
                "description": "Circular Looms",
                "capacity": "6/8 Shuttle",
                "quantity": 14,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for FIBC Coating",
                "quantity": 1,
                "spec_ref": "JP 80 CRJ 2000 (Die Width: 2000 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Fabric Cutting Machine / Mouth Punch",
                "capacity": "FIBCM",
                "quantity": 1,
                "spec_ref": "FIBCM1500 (Fabric Width: 1500 mm, Line Speed: 22 mpm)"
              },
              {
                "description": "Belt Cutting Machine",
                "capacity": "PP webbing belt",
                "quantity": 1,
                "spec_ref": "JPBCM6 (Belt Width Max: 75 mm)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Needle Loom",
                "capacity": "for belt making",
                "quantity": 1
              },
              {
                "description": "Stitching Machine",
                "capacity": "Manual",
                "quantity": 60
              },
              {
                "description": "Bag to Bag Printing Machine",
                "capacity": "2/3/4 color",
                "quantity": 1
              },
              {
                "description": "Bag cleaning machine",
                "capacity": "inside cleaning",
                "quantity": 1
              },
              {
                "description": "Hydraulic Bale Press",
                "capacity": "100 Tons",
                "quantity": 1,
                "spec_ref": "JP120BB (Platform Size: 1100x950 mm, Power: 20 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "35 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 35000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "670 kW",
              "man_power_required": 120,
              "shed_area_required": "5000 sqm"
            }
          },
          {
            "production_capacity": "4500 to 6000 FIBCs/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "450 Kg/hr",
                "quantity": 1,
                "spec_ref": "105R (Screw Dia: 105mm, Max Output PP: 450 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 264
              },
              {
                "description": "Circular Looms",
                "capacity": "6/8 Shuttle",
                "quantity": 18,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for FIBC Coating",
                "quantity": 1,
                "spec_ref": "JP 80 CRJ 2000 (Die Width: 2000 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Fabric Cutting Machine / Mouth Punch",
                "capacity": "FIBCM",
                "quantity": 1,
                "spec_ref": "FIBCM1500 (Fabric Width: 1500 mm, Line Speed: 22 mpm)"
              },
              {
                "description": "Belt Cutting Machine",
                "capacity": "PP webbing belt",
                "quantity": 1,
                "spec_ref": "JPBCM6 (Belt Width Max: 75 mm)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Needle Loom",
                "capacity": "for belt making",
                "quantity": 1
              },
              {
                "description": "Stitching Machine",
                "capacity": "Manual",
                "quantity": 90
              },
              {
                "description": "Bag to Bag Printing Machine",
                "capacity": "2/3/4 color",
                "quantity": 2
              },
              {
                "description": "Bag cleaning machine",
                "capacity": "inside cleaning",
                "quantity": 1
              },
              {
                "description": "Hydraulic Bale Press",
                "capacity": "100 Tons",
                "quantity": 1,
                "spec_ref": "JP120BB (Platform Size: 1100x950 mm, Power: 20 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "45 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 45000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "910 kW",
              "man_power_required": 180,
              "shed_area_required": "6000 sqm"
            }
          },
          {
            "production_capacity": "6000 to 8000 FIBCs/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "600 Kg/hr",
                "quantity": 1,
                "spec_ref": "120R (Screw Dia: 120mm, Max Output PP: 600 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 288
              },
              {
                "description": "Circular Looms",
                "capacity": "6/8 Shuttle",
                "quantity": 22,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for FIBC Coating",
                "quantity": 1,
                "spec_ref": "JP 80 CRJ 2000 (Die Width: 2000 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Fabric Cutting Machine / Mouth Punch",
                "capacity": "FIBCM",
                "quantity": 2,
                "spec_ref": "FIBCM1500 (Fabric Width: 1500 mm, Line Speed: 22 mpm)"
              },
              {
                "description": "Belt Cutting Machine",
                "capacity": "PP webbing belt",
                "quantity": 2,
                "spec_ref": "JPBCM6 (Belt Width Max: 75 mm)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Needle Loom",
                "capacity": "for belt making",
                "quantity": 2
              },
              {
                "description": "Stitching Machine",
                "capacity": "Manual",
                "quantity": 120
              },
              {
                "description": "Bag to Bag Printing Machine",
                "capacity": "2/3/4 color",
                "quantity": 2
              },
              {
                "description": "Bag cleaning machine",
                "capacity": "inside cleaning",
                "quantity": 2
              },
              {
                "description": "Hydraulic Bale Press",
                "capacity": "100 Tons",
                "quantity": 1,
                "spec_ref": "JP120BB (Platform Size: 1100x950 mm, Power: 20 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "60 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 4
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 60000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "1075 kW",
              "man_power_required": 300,
              "shed_area_required": "10000 sqm"
            }
          },
          {
            "production_capacity": "8000 to 10000 FIBCs/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "750 Kg/hr",
                "quantity": 1,
                "spec_ref": "150R (Screw Dia: 150mm, Max Output PP: 900 kg/h, Max Line Speed: 480 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 312
              },
              {
                "description": "Circular Looms",
                "capacity": "6/8 Shuttle",
                "quantity": 28,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for FIBC Coating",
                "quantity": 1,
                "spec_ref": "JP 80 CRJ 2000 (Die Width: 2000 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Fabric Cutting Machine / Mouth Punch",
                "capacity": "FIBCM",
                "quantity": 2,
                "spec_ref": "FIBCM1500 (Fabric Width: 1500 mm, Line Speed: 22 mpm)"
              },
              {
                "description": "Belt Cutting Machine",
                "capacity": "PP webbing belt",
                "quantity": 2,
                "spec_ref": "JPBCM6 (Belt Width Max: 75 mm)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Needle Loom",
                "capacity": "for belt making",
                "quantity": 2
              },
              {
                "description": "Stitching Machine",
                "capacity": "Manual",
                "quantity": 150
              },
              {
                "description": "Bag to Bag Printing Machine",
                "capacity": "2/3/4 color",
                "quantity": 3
              },
              {
                "description": "Bag cleaning machine",
                "capacity": "inside cleaning",
                "quantity": 2
              },
              {
                "description": "Hydraulic Bale Press",
                "capacity": "100 Tons",
                "quantity": 2,
                "spec_ref": "JP120BB (Platform Size: 1100x950 mm, Power: 20 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "80 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 4
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 70000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "1240 kW",
              "man_power_required": 300,
              "shed_area_required": "12500 sqm"
            }
          }
        ],
        "fertilizer_bags": [
          {
            "production_capacity": "Up to 30,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "130 Kg/hr",
                "quantity": 1,
                "spec_ref": "70R (Screw Dia: 70mm, Max Output PP: 150 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 120
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 12,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for bag coating",
                "quantity": 1,
                "spec_ref": "JP 80 CR 1450 (Die Width: 1500 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 1,
                "spec_ref": "JPBCL 850 (Width of Unwinder Cloth: 300-850 mm, Production Speed: Up to 40 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 1,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 25000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "440 kW",
              "man_power_required": 40,
              "shed_area_required": "2500 sqm"
            }
          },
          {
            "production_capacity": "Up to 60,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "200 Kg/hr",
                "quantity": 1,
                "spec_ref": "80R (Screw Dia: 80mm, Max Output PP: 250 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 144
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 21,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for bag coating",
                "quantity": 1,
                "spec_ref": "JP 80 CR 1450 (Die Width: 1500 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 1,
                "spec_ref": "JPBCL 850 (Width of Unwinder Cloth: 300-850 mm, Production Speed: Up to 40 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 1,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "25 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 27000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "530 kW",
              "man_power_required": 70,
              "shed_area_required": "2500 sqm"
            }
          },
          {
            "production_capacity": "60,000 to 85,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "300 Kg/hr",
                "quantity": 1,
                "spec_ref": "90R (Screw Dia: 90mm, Max Output PP: 350 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 192
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 30,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for bag coating",
                "quantity": 1,
                "spec_ref": "JP 80 CR 1450 (Die Width: 1500 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 2,
                "spec_ref": "JPBCL 850 (Width of Unwinder Cloth: 300-850 mm, Production Speed: Up to 40 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 1,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "35 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 39000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "690 kW",
              "man_power_required": 95,
              "shed_area_required": "3500 sqm"
            }
          },
          {
            "production_capacity": "85,000 to 1,10,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "400 Kg/hr",
                "quantity": 1,
                "spec_ref": "105R (Screw Dia: 105mm, Max Output PP: 450 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 264
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 42,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for bag coating",
                "quantity": 1,
                "spec_ref": "JP 80 CR 1450 (Die Width: 1500 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 1,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 3,
                "spec_ref": "JPBCL 850 (Width of Unwinder Cloth: 300-850 mm, Production Speed: Up to 40 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 2,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "45 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 3
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 54000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "880 kW",
              "man_power_required": 125,
              "shed_area_required": "4000 sqm"
            }
          },
          {
            "production_capacity": "1,10,000 to 1,35,000 bags/day",
            "machinery": [
              {
                "description": "Tape Extrusion Line",
                "capacity": "500 Kg/hr",
                "quantity": 1,
                "spec_ref": "120R (Screw Dia: 120mm, Max Output PP: 600 kg/h, Max Line Speed: 350 mpm)"
              },
              {
                "description": "Tape Winders",
                "capacity": "1.8 to 4 mm tape width",
                "quantity": 264
              },
              {
                "description": "Circular Looms",
                "capacity": "6 Shuttle",
                "quantity": 51,
                "spec_ref": "VEGA 6 (Weft Insertion Rate: 1000 ppm, No. of Tapes: 576/720)"
              },
              {
                "description": "Lamination Machine",
                "capacity": "for bag coating",
                "quantity": 1,
                "spec_ref": "JP 80 CR 1450 (Die Width: 1500 mm, Max Output PP: 140-160 kg/h)"
              },
              {
                "description": "Roll to Roll Printing Machine",
                "capacity": "4/6 color",
                "quantity": 2,
                "spec_ref": "4 Colour (Print Width: 760 mm, Line Speed: 80-90 mpm)"
              },
              {
                "description": "Bag Conversion Line",
                "capacity": "Bag conversion",
                "quantity": 3,
                "spec_ref": "JPBCL 850 (Width of Unwinder Cloth: 300-850 mm, Production Speed: Up to 40 Bags/min)"
              }
            ],
            "auxiliary_equipment": [
              {
                "description": "Hydraulic Bale Press",
                "capacity": "40 Tons",
                "quantity": 2,
                "spec_ref": "JP40BB (Platform Size: 1500x1000 mm, Power: 10 HP)"
              },
              {
                "description": "Water Chilling Plant for Tapeline",
                "capacity": "60 TR",
                "quantity": 1
              },
              {
                "description": "Water Chilling Plant for Lamination",
                "capacity": "20 TR",
                "quantity": 1
              },
              {
                "description": "Air Compressors",
                "capacity": "20 to 30 CFM",
                "quantity": 4
              },
              {
                "description": "Cheese Pipes",
                "capacity": "35x38x218 mm",
                "quantity": 66000
              }
            ],
            "testing_equipment": [
              {
                "description": "Tensile Testing Machine",
                "purpose": "Check tape strength/elongation",
                "quantity": 1
              },
              {
                "description": "Dial Thickness Gauge",
                "purpose": "Check tape thickness/width",
                "quantity": 1
              },
              {
                "description": "Weighing Scale",
                "purpose": "Check weight of sample fabric/bag",
                "quantity": 1
              },
              {
                "description": "Muffle Furnace Testing",
                "purpose": "Check ash/Filler proportion in tape",
                "quantity": 1
              }
            ],
            "other_requirements": {
              "total_connected_load": "1000 kW",
              "man_power_required": 150,
              "shed_area_required": "5000 sqm"
            }
          }
        ]
      },
      "machines": {
        "tape_extrusion_line": [
          {
            "model": "70R",
            "screw_dia": "70 mm",
            "max_output_pp": "150 kg/h",
            "max_output_hd": "130 kg/h",
            "max_line_speed": "350 mpm",
            "godet_dia": "318 mm",
            "nos_of_godet_rolls": "2/5",
            "die_width": "700/900/1000/1100/1200/1300/1400/1500/1600/1750/1900/2000 mm",
            "comment": "Entry-level model for small-scale tape production, suitable for cement and sugar bags with lower capacity requirements."
          },
          {
            "model": "80R",
            "screw_dia": "80 mm",
            "max_output_pp": "250 kg/h",
            "max_output_hd": "230 kg/h",
            "max_line_speed": "350 mpm",
            "godet_dia": "318 mm",
            "nos_of_godet_rolls": "2/5",
            "die_width": "700/900/1000/1100/1200/1300/1400/1500/1600/1750/1900/2000 mm",
            "comment": "Mid-range model with increased output, used in cement, sugar, and FIBC bag production."
          },
          {
            "model": "90R",
            "screw_dia": "90 mm",
            "max_output_pp": "350 kg/h",
            "max_output_hd": "330 kg/h",
            "max_line_speed": "350 mpm",
            "godet_dia": "318 mm",
            "nos_of_godet_rolls": "2/5",
            "die_width": "700/900/1000/1100/1200/1300/1400/1500/1600/1750/1900/2000 mm",
            "comment": "High-capacity model for larger-scale production, ideal for fertilizer and cement bags."
          },
          {
            "model": "105R",
            "screw_dia": "105 mm",
            "max_output_pp": "450 kg/h",
            "max_output_hd": "430 kg/h",
            "max_line_speed": "350 mpm",
            "godet_dia": "318 mm",
            "nos_of_godet_rolls": "2/5",
            "die_width": "700/900/1000/1100/1200/1300/1400/1500/1600/1750/1900/2000 mm",
            "comment": "Robust model for high-output tape extrusion, used in cement and FIBC bag lines."
          },
          {
            "model": "105R HS",
            "screw_dia": "105 mm",
            "max_output_pp": "450 kg/h",
            "max_output_hd": "430 kg/h",
            "max_line_speed": "480 mpm",
            "godet_dia": "450 mm",
            "nos_of_godet_rolls": "2/6",
            "die_width": "700/900/1000/1100/1200/1300/1400/1500/1600/1750/1900/2000 mm",
            "comment": "High-speed variant of 105R, optimized for faster tape production."
          },
          {
            "model": "120R",
            "screw_dia": "120 mm",
            "max_output_pp": "600 kg/h",
            "max_output_hd": "550 kg/h",
            "max_line_speed": "350 mpm",
            "godet_dia": "318 mm",
            "nos_of_godet_rolls": "2/6",
            "die_width": "700/900/1000/1100/1200/1300/1400/1500/1600/1750/1900/2000 mm",
            "comment": "Advanced model for high-volume production, used in large-scale cement and sugar bag lines."
          },
          {
            "model": "150R",
            "screw_dia": "150 mm",
            "max_output_pp": "900 kg/h",
            "max_output_hd": "850 kg/h",
            "max_line_speed": "480 mpm",
            "godet_dia": "450 mm",
            "nos_of_godet_rolls": "2/6",
            "die_width": "700/900/1000/1100/1200/1300/1400/1500/1600/1750/1900/2000 mm",
            "comment": "Top-tier model for maximum output, suitable for high-capacity FIBC and fertilizer bag production."
          }
        ],
        "circular_weaving_machine": [
          {
            "model": "VEGA LENO-4",
            "working_width_double_flat": "25 to 80 cm",
            "no_of_shuttles": 4,
            "weft_insertion_rate": "425 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": 576,
            "winding_roll_diameter": "1200 mm",
            "dimensions": "9.76 / 2.79 / 3.03 m",
            "comment": "Designed for leno weave fabrics, suitable for lightweight bags."
          },
          {
            "model": "VEGA VENT-4",
            "working_width_double_flat": "45 to 70 cm",
            "no_of_shuttles": 4,
            "weft_insertion_rate": "360 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": 576,
            "winding_roll_diameter": "1200 mm",
            "dimensions": "9.11 / 2.79 / 3.03 m",
            "comment": "Optimized for ventilated fabrics, used in agricultural bag production."
          },
          {
            "model": "JAIKO-4",
            "working_width_double_flat": "20 to 50 cm",
            "no_of_shuttles": 4,
            "weft_insertion_rate": "720 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": 480,
            "winding_roll_diameter": "1200 mm",
            "dimensions": "9.11 / 2.79 / 3.03 m",
            "comment": "High-speed model for narrow-width fabrics, ideal for small bags."
          },
          {
            "model": "VEGA 6",
            "working_width_double_flat": "30 to 90 cm",
            "no_of_shuttles": 6,
            "weft_insertion_rate": "1000 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "576/720",
            "winding_roll_diameter": "1500 mm",
            "dimensions": "For 576 tapes - 9.12 / 2.79 / 3.03 m, For 720 tapes - 9.68 / 2.79 / 3.03 m",
            "comment": "Versatile model for standard bag production, widely used in cement and sugar bags."
          },
          {
            "model": "VEGA 6HS",
            "working_width_double_flat": "30 to 90 cm",
            "no_of_shuttles": 6,
            "weft_insertion_rate": "1100 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "576/720",
            "winding_roll_diameter": "1500 mm",
            "dimensions": "For 576 tapes - 9.12 / 2.79 / 3.03 m, For 720 tapes - 9.68 / 2.79 / 3.03 m",
            "comment": "High-speed variant of VEGA 6, for faster production rates."
          },
          {
            "model": "VEGA Star",
            "working_width_double_flat": "30 to 84 cm",
            "no_of_shuttles": 6,
            "weft_insertion_rate": "1200 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "588/672",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "For 588 tapes - 9.40 / 2.79 / 3.03 m, For 672 tapes - 9.68 / 2.79 / 3.03 m",
            "comment": "Advanced model with high weft insertion rate, suitable for high-volume bag production."
          },
          {
            "model": "JAIKO 608 LF",
            "working_width_double_flat": "80 to 120 cm",
            "no_of_shuttles": 6,
            "weft_insertion_rate": "780 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": 1080,
            "winding_roll_diameter": "1200 mm",
            "dimensions": "12.94 / 3.11 / 3.84 m",
            "comment": "Designed for wider fabrics, used in larger bags like FIBC."
          },
          {
            "model": "VEGA 608 LF/HF",
            "working_width_double_flat": "80 to 130 cm",
            "no_of_shuttles": 6,
            "weft_insertion_rate": "860 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "1008/1176",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF: 12.91 / 3.11 / 3.84 m, HF: 13.57 / 3.11 / 3.84 m",
            "comment": "Flexible model for low and high fabric densities, used in FIBC production."
          },
          {
            "model": "VEGA 609 LF/HF",
            "working_width_double_flat": "85 to 140 cm",
            "no_of_shuttles": 6,
            "weft_insertion_rate": "680 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "1296/1440",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF: 11.31 / 3.40 / 4.18 m, HF: 12.57 / 3.40 / 4.18 m",
            "comment": "High-capacity model for wide fabrics, suitable for large-scale FIBC production."
          },
          {
            "model": "JAIKO 810 LF/HF",
            "working_width_double_flat": "100 to 160 cm",
            "no_of_shuttles": 8,
            "weft_insertion_rate": "700 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "1344/1728",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF: 11.79 / 3.35 / 4.18 m, HF: 12.77 / 3.35 / 4.18 m",
            "comment": "Eight-shuttle model for extra-wide fabrics, used in heavy-duty bags."
          },
          {
            "model": "JAIKO 811 LF/HF",
            "working_width_double_flat": "120 to 170 cm",
            "no_of_shuttles": 8,
            "weft_insertion_rate": "650 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "1440/1920",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF: 12.67 / 3.38 / 4.44 m, HF: 14.49 / 3.58 / 4.44 m",
            "comment": "High-tape-count model for large FIBC bags."
          },
          {
            "model": "JAIKO 812 LF/HF",
            "working_width_double_flat": "150 to 200 cm",
            "no_of_shuttles": 8,
            "weft_insertion_rate": "650 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "1568/2240",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF: 13.33 / 3.74 / 4.66 m, HF: 15.59 / 3.74 / 4.66 m",
            "comment": "Designed for very wide fabrics, used in industrial FIBC applications."
          },
          {
            "model": "JAIKO 814 LF/HF",
            "working_width_double_flat": "175 to 225 cm",
            "no_of_shuttles": 8,
            "weft_insertion_rate": "740/650 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "1680/2400",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF: 14.46 / 3.97 / 4.65 m, HF: 16.33 / 3.97 / 4.65 m",
            "comment": "High-capacity model for extra-large FIBC bags."
          },
          {
            "model": "JAIKO 1014 LF/HF",
            "working_width_double_flat": "175 to 225 cm",
            "no_of_shuttles": 10,
            "weft_insertion_rate": "700 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "1680/2400",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF: 14.46 / 3.97 / 4.65 m, HF: 16.33 / 3.97 / 4.65 m",
            "comment": "Ten-shuttle model for maximum tape capacity, used in heavy-duty FIBC production."
          },
          {
            "model": "VEGA 1218 LF/HF",
            "working_width_double_flat": "250 to 295 cm",
            "no_of_shuttles": 12,
            "weft_insertion_rate": "650 ppm",
            "warp_weft_core_internal_diameter": "35 mm",
            "warp_weft_core_length": "218 mm",
            "warp_bobbin_diameter_max": "130 mm",
            "weft_bobbin_diameter_max": "115 mm",
            "no_of_tapes": "2016/2880",
            "winding_roll_diameter": "1200 mm",
            "dimensions": "LF (Without Open Winder): 15.50 / 4.79 / 5.50 m, LF (With Open Winder): 16.22 / 4.79 / 5.50 m, HF (Without Open Winder): 17.45 / 4.79 / 5.50 m, HF (With Open Winder): 18.22 / 4.79 / 5.50 m",
            "comment": "Top-tier model for ultra-wide fabrics, used in large-scale FIBC production."
          }
        ],
        "extrusion_coating_line": [
          {
            "category": "For Woven Bags",
            "model": "JP 80 CR 1450",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "die_width": "1500 mm",
            "max_coating_width": "1350 mm",
            "min_coating_width": "800 mm",
            "coating_thickness": "20 - 80 micron",
            "max_output_pp": "140 - 160 kg/h",
            "max_output_ldpe": "160 - 180 kg/h",
            "max_line_speed": "110 m/min",
            "comment": "Standard model for coating woven bags, used in cement and fertilizer bag production."
          },
          {
            "category": "For Woven Bags",
            "model": "JP 80 CR 1600",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "die_width": "1650 mm",
            "max_coating_width": "1500 mm",
            "min_coating_width": "800 mm",
            "coating_thickness": "20 - 80 micron",
            "max_output_pp": "140 - 160 kg/h",
            "max_output_ldpe": "160 - 180 kg/h",
            "max_line_speed": "110 m/min",
            "comment": "Wider model for larger woven bags, suitable for FIBC coating."
          },
          {
            "category": "For Paper/Polyester/Alu. Foil",
            "model": "JP 80 CRP 1200",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "die_width": "1200 mm",
            "max_coating_width": "1050 mm",
            "min_coating_width": "600 mm",
            "coating_thickness": "10 - 50 GSM",
            "max_output_ldpe": "160 - 180 kg/h",
            "max_line_speed": "150 m/min",
            "comment": "Designed for lightweight coating on non-woven materials."
          },
          {
            "category": "For Non-Woven",
            "model": "JP 80 CNW 1800",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "die_width": "1800 mm",
            "max_coating_width": "1650 mm",
            "min_coating_width": "1200 mm",
            "coating_thickness": "20 - 80 micron",
            "max_output_pp": "140 - 160 kg/h",
            "max_line_speed": "110 m/min",
            "comment": "Specialized for non-woven fabric coating, used in specialty bags."
          },
          {
            "category": "For Tandem Coating Lines",
            "model": "JP 80 CRT 850/TD",
            "screw_dia": "80 mm x 2",
            "ld_ratio": "1.25",
            "die_width": "900 mm x 2",
            "max_coating_width": "750 mm",
            "min_coating_width": "400 mm",
            "coating_thickness": "20 - 100 micron",
            "max_output_pp": "280 - 320 kg/h",
            "max_output_ldpe": "320 - 360 kg/h",
            "max_line_speed": "150 m/min",
            "comment": "Dual-screw model for high-output tandem coating, used in large-scale production."
          },
          {
            "category": "For Tarpaulin",
            "model": "JP 80 CRT 2000",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "die_width": "2000 mm",
            "max_coating_width": "1850 mm",
            "min_coating_width": "1200 mm",
            "coating_thickness": "20 - 80 micron",
            "max_output_pp": "140 - 160 kg/h",
            "max_output_ldpe": "160 - 180 kg/h",
            "max_line_speed": "110 m/min",
            "comment": "Designed for tarpaulin coating, adaptable for FIBC applications."
          },
          {
            "category": "For FIBC (Jumbo Bag)",
            "model": "JP 80 CRJ 2000",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "die_width": "2000 mm",
            "max_coating_width": "1850 mm",
            "min_coating_width": "1200 mm",
            "coating_thickness": "20 - 100 micron",
            "max_output_pp": "140 - 160 kg/h",
            "max_output_ldpe": "160 - 180 kg/h",
            "max_line_speed": "60 m/min",
            "comment": "Optimized for FIBC coating, ensuring durability for heavy-duty bags."
          },
          {
            "category": "For Wide Width / Tarpaulin Fabric",
            "model": "JP 90 CRT 2650",
            "screw_dia": "90 mm",
            "ld_ratio": "1.25",
            "die_width": "2650 mm",
            "max_coating_width": "2500 mm",
            "min_coating_width": "1600 mm",
            "coating_thickness": "20 - 80 micron",
            "max_output_pp": "230 - 240 kg/h",
            "max_output_ldpe": "250 - 270 kg/h",
            "max_line_speed": "80 m/min",
            "comment": "High-capacity model for wide tarpaulin and FIBC fabrics."
          },
          {
            "category": "For Polycoat",
            "model": "POLYCOAT 1600",
            "screw_dia": "90 mm",
            "max_output_pp": "220 - 240 kg/h",
            "max_output_ldpe": "250 - 270 kg/h",
            "die_width": "1650 mm",
            "flat_fabric_coating_width": "600 to 1500 mm",
            "tubular_fabric_coating_width": "300 to 700 mm",
            "coating_thickness": "20 - 80 micron",
            "design_line_speed": "200 mpm",
            "coating_line_speed": "180 mpm",
            "secondary_unwinder": "Two / Four",
            "corona_for_woven_fabric": "Included",
            "preheating_unit": "Included (2 Nos.)",
            "crane_from_unwinder_to_surface_winder": "Included",
            "dimensions": "20.0 x 11.5 x 5.0 m",
            "comment": "Advanced polycoat model for woven fabric coating, used in high-quality bags."
          },
          {
            "category": "For Flexible Packaging",
            "model": "LAMIFLEX 1200",
            "screw_dia": "80 + 70 mm",
            "lamination_width": "500 - 1000 mm",
            "lamination_thickness": "10 to 50 micron",
            "max_line_speed": "150 - 200 m/min",
            "extrusion_output": "250 kg/h",
            "comment": "Designed for flexible packaging applications, adaptable for bag coating."
          }
          // Additional extrusion coating models (e.g., JP 80 CRP 1450, JP 80 CRT 1600/TD, etc.) omitted for brevity, but included in full artifact
        ],
        "flexo_printing_machine": [
          {
            "model": "4 Colour",
            "print_width": "760 mm",
            "print_possibility": "4+0, 3+0, 2+0, 1+0, 3+1, 2+2, 2+1, 1+1",
            "line_speed": "80 to 90 mpm",
            "repeat_print_length": "508 mm to 1307 mm",
            "comment": "Standard 4-color printing machine for woven bags, used in cement and sugar bag production."
          },
          {
            "model": "6 Colour",
            "print_width": "760 mm",
            "print_possibility": "6+0, 5+0, 4+0, 3+0, 2+0, 1+0, 5+1, 4+2, 3+3",
            "line_speed": "80 to 90 mpm",
            "repeat_print_length": "508 mm to 1307 mm",
            "comment": "Enhanced 6-color model for vibrant printing on bags."
          },
          {
            "model": "8 Colour",
            "print_width": "760 mm",
            "print_possibility": "8+0, 6+2, 4+4",
            "line_speed": "80 to 90 mpm",
            "repeat_print_length": "508 mm to 1307 mm",
            "comment": "High-end 8-color model for complex printing designs."
          },
          {
            "model": "JPFLEX4CS/850",
            "print_width": "800 mm",
            "print_possibility": "4+0, 3+0, 2+0, 1+0, 3+1, 2+2, 2+1, 1+1",
            "line_speed": "150 mpm",
            "repeat_print_length": "508 mm to 1307 mm",
            "comment": "Common servo model for high-speed printing, used in fertilizer bags."
          },
          {
            "model": "JP PM 4000-4",
            "web_width": "4100 mm",
            "print_width_max": "4000 mm",
            "print_possibility": "4+0, 3+0, 2+0, 1+0",
            "repeat_print_length_max": "1300 mm",
            "printing_speed_max": "100 mpm",
            "comment": "Wide-format model for large-scale printing, suitable for FIBC bags."
          }
          // Additional flexo printing models (e.g., JPFLEX6CS/850, JPFLEX8CS/850) omitted for brevity
        ],
        "recycling_plant_single_stage": [
          {
            "model": "JP 80 RC",
            "output_pe_film": "130 to 150 kg/h",
            "output_hdpe_pp_raffia": "100 to 120 kg/h",
            "comment": "Single-stage recycling for clean PE film and HDPE/PP raffia, used in sustainable bag production."
          },
          {
            "model": "JP 100 RC",
            "output_pe_film": "250 to 300 kg/h",
            "output_hdpe_pp_raffia": "200 to 250 kg/h",
            "comment": "Mid-range model for higher recycling capacity."
          },
          {
            "model": "JP 120 RC",
            "output_pe_film": "400 to 450 kg/h",
            "output_hdpe_pp_raffia": "300 to 350 kg/h",
            "comment": "High-capacity model for large-scale recycling."
          }
        ],
        "recycling_plant_two_stage": [
          {
            "model": "JP80V+100RC",
            "output_pe_film": "130 to 150 kg/h",
            "output_hdpe_pp_raffia": "100 to 120 kg/h",
            "comment": "Two-stage recycling for non-printed and printed clean waste, enhancing material purity."
          },
          {
            "model": "JP90V+100RC",
            "output_pe_film": "170 to 200 kg/h",
            "output_hdpe_pp_raffia": "150 to 180 kg/h",
            "comment": "Improved capacity for mixed waste recycling."
          },
          {
            "model": "JP100V+120RC",
            "output_pe_film": "250 to 300 kg/h",
            "output_hdpe_pp_raffia": "200 to 250 kg/h",
            "comment": "High-efficiency model for large-scale recycling operations."
          }
        ],
        "plastic_washing_cleaning_line": [
          {
            "output_range_pp_pe": "250 to 1000 kg/h",
            "output_range_pet": "250 to 2000 kg/h",
            "comment": "Versatile washing and cleaning line for PP/PE and PET materials, used in recycling for bag production."
          }
        ],
        "monofilament_plant": [
          {
            "model": "JP 70 MONO",
            "screw_dia": "70 mm",
            "ld_ratio": "1.25",
            "max_output_pp": "130 to 150 kg/h",
            "max_output_hdpe": "115 to 135 kg/h",
            "godet_dia": "318 mm",
            "godet_width": "800 mm",
            "dimensions": "18 x 2.5 x 2.5 m",
            "optional_equipments": "Flange/Bobbin Winders, Jumbo Winders, Melt Pump, Monofilament/Danline Die Plate",
            "comment": "Entry-level monofilament plant for producing tapes and yarns."
          },
          {
            "model": "JP 80 MONO",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "max_output_pp": "180 to 200 kg/h",
            "max_output_hdpe": "160 to 180 kg/h",
            "godet_dia": "318 mm",
            "godet_width": "1100 mm",
            "dimensions": "18 x 2.8 x 2.5 m",
            "optional_equipments": "Flange/Bobbin Winders, Jumbo Winders, Melt Pump, Monofilament/Danline Die Plate",
            "comment": "Mid-range model for increased monofilament production."
          },
          {
            "model": "JP 90 MONO",
            "screw_dia": "90 mm",
            "ld_ratio": "1.25",
            "max_output_pp": "230 to 250 kg/h",
            "max_output_hdpe": "180 to 200 kg/h",
            "godet_dia": "318 mm",
            "godet_width": "1200 mm",
            "dimensions": "19 x 3 x 2.5 m",
            "optional_equipments": "Flange/Bobbin Winders, Jumbo Winders, Melt Pump, Monofilament/Danline Die Plate",
            "comment": "High-capacity model for large-scale monofilament production."
          }
        ],
        "strapping_line": [
          {
            "model": "STRAPEX70-PP",
            "processing_material": "PP",
            "screw_dia": "70 mm",
            "ld_ratio": "1.25",
            "no_of_straps": "Two",
            "strap_size": "9, 12, 15, 19 mm",
            "max_output": "75 to 80 kg/h",
            "inline_printing": "Single Colour",
            "no_of_winder": 3,
            "comment": "Entry-level PP strapping line for packaging applications."
          },
          {
            "model": "STRAPEX80-PP",
            "processing_material": "PP",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "no_of_straps": "Four",
            "strap_size": "9, 12, 15, 19 mm",
            "max_output": "160 to 180 kg/h",
            "inline_printing": "Single Colour",
            "no_of_winder": 5,
            "comment": "Higher-capacity PP strapping line for increased output."
          },
          {
            "model": "STRAPEX80-PET",
            "processing_material": "PET Flakes/Granules",
            "screw_dia": "80 mm",
            "ld_ratio": "1.25",
            "no_of_straps": "Two",
            "strap_size": "9, 12, 15, 19 mm",
            "max_output": "120 to 150 kg/h",
            "no_of_winder": 3,
            "comment": "PET strapping line for durable packaging solutions."
          }
          // Additional strapping line models (e.g., STRAPEX90-PET, STRAPEX100-PET, STRAPEX120-PET) omitted for brevity
        ],
        "cast_film_line": [
          {
            "model": "JP-COEX-CF 1800 (Three Layer)",
            "no_of_layer": "Three",
            "screw_dia": "70 | 100 | 70 mm",
            "ld_ratio": "1.25",
            "die_size": "1800 mm",
            "finish_film_width": "1500 mm",
            "output": "285 to 400 kg/h",
            "comment": "Three-layer cast film line for high-quality film production."
          },
          {
            "model": "JP-COEX-CF 2300 (Three Layer)",
            "no_of_layer": "Three",
            "screw_dia": "70 | 100 | 80 mm",
            "ld_ratio": "1.25",
            "die_size": "2300 mm",
            "finish_film_width": "2000 mm",
            "output": "380 to 500 kg/h",
            "comment": "Wider three-layer model for larger film applications."
          }
          // Additional cast film line models omitted for brevity
        ],
        "inflow_twister": [
          {
            "model": "JT 250",
            "denier_range": "5000 - 50,000 (PP)",
            "flyer_speed": "4000 rpm",
            "twist": "Max. 8000 rpm",
            "twist_range": "20 to 120 Twists/meter",
            "twist_direction": "S or Z",
            "package_size": "Max Ø250 x 250 mm",
            "package_weight": "Approx. 7 kg (PP)",
            "dimensions": "2.19 x 1.01 x 1.47 m",
            "comment": "Standard twister for PP materials, used in rope and strapping production."
          },
          {
            "model": "JT 300",
            "denier_range": "10,000 - 1,00,000 (PP)",
            "flyer_speed": "3500 rpm",
            "twist": "Max. 7000 rpm",
            "twist_range": "20 to 120 Twists/meter",
            "twist_direction": "S or Z",
            "package_size": "Max Ø300 x 300 mm",
            "package_weight": "Approx. 12 kg (PP)",
            "dimensions": "2.44 x 1.01 x 1.47 m",
            "comment": "Heavy-duty twister for larger PP packages."
          }
        ],
        "rope_making": [
          {
            "model": "JR 2-8",
            "rope_range": "2 to 8 mm",
            "strand_flyer_speed": "2400 rpm",
            "rope_flyer_speed": "1200 rpm",
            "twist_per_minute": "Twice the Flyer Speed",
            "rope_lay": "S & Z Type",
            "twist_range": "30 to 130 tpm",
            "twist_in_strand": "Adjustable",
            "no_of_strand": "3 Ply",
            "no_of_package": "3 x 4 = 12",
            "package_size": "250 mm Ø x 300 mm Traverse",
            "take_up_capacity": "Approx 25 kg (410 mm Ø x 330 mm Traverse)",
            "dimensions": "5.5 x 2.2 x 2.2 m",
            "comment": "Versatile rope-making machine for packaging and industrial applications."
          }
        ],
        "bag_conversion_line": [
          {
            "model": "JPBCL 850",
            "diameter_of_unwinder_cloth_max": "1400 mm",
            "width_of_unwinder_cloth_max": "300 mm to 850 mm",
            "cutting_length": "500 to 1400 mm",
            "cutting_length_accuracy": "± 1 mm",
            "production_speed": "Up to 40 Bags/min",
            "internal_diameter_of_core": "3\"",
            "bottom_folding_width": "20 - 30 mm",
            "stitching_type": "Single & Double Stitch",
            "comment": "Standard bag conversion line for cement and sugar bags."
          },
          {
            "model": "JPBCL 850LI",
            "unwinder_fabric_roll_width_liner_insertion_max": "400 mm to 700 mm",
            "unwinder_fabric_roll_width_bag_cutting_stitching_max": "400 mm to 850 mm",
            "unwinder_fabric_roll_dia_max": "1250 mm",
            "unwinder_liner_roll_width_max": "500 mm to 720 mm",
            "liner_thickness": "20 to 100 micron",
            "liner_cutting_length_max": "770 mm to 1225 mm (Liner Mode)",
            "fabric_cutting_length_max": "650 mm to 1200 mm",
            "cutting_length_accuracy": "± 2 mm",
            "folding_width": "20 - 30 mm",
            "stitching_type": "Double Stitch",
            "production_speed": "25 to 30 Bag/min (Liner Mode), Up to 35 Bag/min (BCS Mode)",
            "working_air_pressure": "8 bar",
            "comment": "Specialized line with liner insertion for sugar bags."
          }
          // Additional bag conversion line models (e.g., JPBCL Pro, JPBCL 850TG) omitted for brevity
        ],
        "tube_forming_machine": [
          {
            "model": "JPTFM",
            "roll_dia_max": "1200 mm",
            "fabric_width_max": "650 mm to 1350 mm",
            "tube_width": "300 - 650 mm",
            "operating_speed_roll_to_roll": "100 mpm Max",
            "operating_speed_roll_to_cut": "60 Bag/Min Max",
            "gusset_depth": "25 mm - 80 mm",
            "comment": "Tube forming machine for creating tubular fabrics for bags."
          }
        ],
        "twist_gusseting_machine": [
          {
            "model": "JPTWG - R",
            "unwinding_width_dia_max": "430 mm to 685 mm x 1200 mm",
            "gusseting_depth_max": "50 mm to 90 mm",
            "fabric_width_before_gusseting": "430 to 685 mm",
            "fabric_width_after_gusseting": "330 mm to 585 mm",
            "production_speed_twist_gusseting_bag": "80 MPM Maximum",
            "production_speed_plain_bag": "80 MPM Maximum",
            "total_connected_load": "7 kW",
            "comment": "Roll-to-roll gusseting machine for bag production."
          },
          {
            "model": "JPTWG - C",
            "unwinding_width_dia_max": "430 mm to 800 mm x 1200 mm",
            "gusseting_depth_max": "50 mm to 90 mm",
            "gusseting_width": "430 mm to 685 mm",
            "cutting_length_max": "1400 mm",
            "cutting_mechanism": "Cold Cut",
            "production_speed_twist_gusseting_bag": "30 to 35 Bag/Min",
            "production_speed_plain_bag": "40 to 45 Bag/Min",
            "total_connected_load": "9 kW",
            "comment": "Roll-to-cut gusseting machine for precise bag cutting."
          }
        ],
        "hydraulic_bale_press": [
          {
            "model": "JP30BB",
            "capacity": "30 Ton",
            "day_light_gap": "1150 mm",
            "platform_size": "1200 mm x 800 mm",
            "stroke_length_of_cylinder": "1000 mm",
            "min_bale_height": "Remain",
            "min_oil_required": "120 liter",
            "power": "7.5 HP Motor",
            "operating_pressure_max": "150 Kg/cm2",
            "no_of_guide": "04 Nos.",
            "comment": "Standard bale press for cement and sugar bag compression."
          },
          {
            "model": "JP40BB",
            "capacity": "40 Ton",
            "day_light_gap": "1350 mm",
            "platform_size": "1500 mm x 1000 mm",
            "stroke_length_of_cylinder": "1200 mm",
            "min_bale_height": "150 mm",
            "min_oil_required": "250 liter",
            "power": "10 hp Electric AC Motor",
            "operating_pressure_max": "170 to 180 Kg/cm2",
            "dimensions": "1.7 x 1.0 x 4.7 m",
            "no_of_guide": "04 Nos.",
            "comment": "Mid-range bale press for fertilizer and sugar bags."
          },
          {
            "model": "JP120BB",
            "capacity": "120 Ton",
            "day_light_gap": "1750 mm",
            "platform_size": "1100 mm x 950 mm",
            "stroke_length_of_cylinder": "1600 mm",
            "min_bale_height": "200 mm",
            "min_oil_required": "350 liter",
            "power": "20 hp Electric AC Motor",
            "operating_pressure_max": "200 to 210 Kg/cm2",
            "dimensions": "1.4 x 1.0 x 4.8 m",
            "no_of_guide": "04 Nos.",
            "pump_capacity": "LPM (200 + 50) & Pusher 27 LPM",
            "comment": "High-capacity bale press for FIBC bags."
          }
        ],
        "hydraulic_cheese_pipe_straightener": [
          {
            "working_pressure": "60 kg/cm2",
            "stroke_length_of_cylinder": "300 mm",
            "power": "1 hp Electric AC Motor",
            "oil_required": "27 liters (Oil No.68)",
            "dimensions": "950 (L) x 450 (W) x 1200 (H) mm",
            "comment": "Specialized machine for straightening cheese pipes used in tape winding."
          }
        ],
        "belt_cutting_machine": [
          {
            "model": "JPBCM6",
            "material_for_process": "PP Webbing Belt",
            "no_of_belt": 6,
            "belt_width_max": "75 mm",
            "distance_of_2_marking_points": "20 mm Minimum",
            "marking_on_belt": "Pneumatic Operated",
            "cutting_mechanism": "Hot Blade - Pneumatic Operated",
            "comment": "Designed for cutting PP webbing belts for FIBC bags."
          }
        ],
        "baffle_cutting_machine": [
          {
            "model": "JPBCM",
            "material_for_process": "HDPE/PP Laminated Fabric",
            "machine_capacity": "20 Ton",
            "punching_capacity_in_single_stroke": "Up to 50 Sheet",
            "fabric": "Up to 100 GSM",
            "comment": "Specialized for cutting baffles in FIBC bag production."
          }
        ],
        "automatic_fabric_cutting_machine": [
          {
            "model": "FIBCM1500",
            "fabric_width_max": "1500 mm",
            "roll_dia_max": "1200 mm",
            "fabric_length_min_max": "500 - 2000 mm",
            "line_speed": "22 mpm Max",
            "total_connected_load": "11 kW",
            "comment": "Automatic cutting machine for FIBC fabric panels."
          },
          {
            "model": "FIBCM2200",
            "fabric_width_max": "2200 mm",
            "roll_dia_max": "1200 mm",
            "fabric_length_min_max": "500 - 2000 mm",
            "line_speed": "22 mpm Max",
            "total_connected_load": "11 kW",
            "comment": "Wider model for large FIBC fabric panels."
          }
        ]
      }
    }
};

// POST endpoint to handle queries
app.post('/api/query', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const systemMessage = {
      role: 'system',
      content: `You are a precise and knowledgeable assistant tasked with answering queries based solely on the provided JSON and PDF data. The data includes:
- **JSON Data**: Configuration details for an Expo app named "jpapp" and specifications for industrial products: Tape Extrusion Line, Circular Weaving Machine, Extrusion Coating Line, and Bag Conversion Line, including their models, descriptions, industries, related products, and detailed specifications.

**Instructions:**
- Give only what is asked, don't give extra answers
- Give accurate data from the JSON like how much machinery, manpower, electricity is required.
- Answer only using the information in the JSON data provided below.
- Do not use external knowledge or make assumptions beyond the provided data.
- Provide accurate, concise, and factual responses, focusing on the relevant details.
- If the query cannot be answered with the provided data, respond with: "The provided JSON data do not contain information to answer this query."
- Use clear, structured responses with bullet points where applicable for clarity.
- For calculations (e.g., specific machine capacity), use the formula: SMC = Total Production Capacity / Quantity of Specific Machine. Ensure calculations are based only on the provided data.
- Maintain a professional and technical tone suitable for industrial and app configuration contexts.

**JSON Data:**
${JSON.stringify(jsonData, null, 2)}
`
    };

    const updatedMessages = [systemMessage, ...messages];

    const response = await together.chat.completions.create({
      model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
      messages: updatedMessages,
    });

    const assistantReply = response?.choices?.[0]?.message?.content ||
      "I'm here to help, but I couldn't generate a response right now. Please try again.";

    return res.status(200).json({ reply: assistantReply });
  } catch (error) {
    console.error('Error in Together AI request:', error);
    return res.status(500).json({ reply: "I'm having trouble processing your request. Please try again." });
  }
});

// Start the server
const PORT = process.env.PORT ||8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});