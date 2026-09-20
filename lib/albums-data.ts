export interface AlbumProject {
  id: string;
  name: string;
  vehicle: string;
  tagline: string;
  category: string;
  cover: string;
  specs: string[];
  photos: string[];
}

export const CARMATE_ALBUMS: AlbumProject[] = [
  {
    "id": "black-beast",
    "name": "Project Black Beast",
    "vehicle": "Toyota Prius 30 / 50 Custom Blackout",
    "tagline": "Stealth Aerodynamic Silhouette & Custom Smoked Styling",
    "category": "Full Custom Project",
    "cover": "/assets/black-beast-front.webp",
    "specs": [
      "Custom Smoke Windscreen",
      "Aggressive Front Lip",
      "Custom Rear Diffuser",
      "Gloss Black Mirrors",
      "Smoked Tail Lamps",
      "Carmate Badge"
    ],
    "photos": [
      "/assets/black-beast-front.webp",
      "/assets/Project Black Beast/575198610_122167108766392102_5425594792100099991_n.jpg",
      "/assets/Project Black Beast/576310151_122167108238392102_1470618799282135184_n.jpg",
      "/assets/Project Black Beast/576384968_122167108928392102_415136640813699918_n.jpg",
      "/assets/Project Black Beast/577441242_122167108814392102_7985599878288693874_n.jpg",
      "/assets/Project Black Beast/577565894_122167108352392102_2128952320475898719_n.jpg",
      "/assets/Project Black Beast/577565933_122167108718392102_8600154666109647363_n.jpg",
      "/assets/Project Black Beast/577569319_122167109270392102_1358431506469750484_n.jpg",
      "/assets/Project Black Beast/577570172_122167108892392102_1405132609480210607_n.jpg",
      "/assets/Project Black Beast/577592916_122167109006392102_5206592081125537167_n.jpg",
      "/assets/Project Black Beast/577605662_122167109198392102_9051984673457243914_n.jpg",
      "/assets/Project Black Beast/577612353_122167107950392102_4576836140741423597_n.jpg",
      "/assets/Project Black Beast/577639690_122167108178392102_5011922889980751347_n.jpg",
      "/assets/Project Black Beast/577657665_122167108004392102_7266368517082764837_n.jpg",
      "/assets/Project Black Beast/577660454_122167108406392102_2226714056173054693_n.jpg",
      "/assets/Project Black Beast/577748978_122167108544392102_8243788311298673722_n.jpg",
      "/assets/Project Black Beast/577970821_122167108496392102_6810587380079385246_n.jpg",
      "/assets/Project Black Beast/578225779_122167108964392102_2423608494062485661_n.jpg",
      "/assets/Project Black Beast/578260758_122167109108392102_8966697411758168694_n.jpg",
      "/assets/Project Black Beast/579038688_122167108118392102_3982370368871276814_n.jpg",
      "/assets/Project Black Beast/Black Beast (5).webp"
    ]
  },
  {
    "id": "red-phantom",
    "name": "Project Red Phantom",
    "vehicle": "Toyota Prius SP KV-5354",
    "tagline": "Multi-Color App-Controlled RGB Projector DRLs & Low Stance",
    "category": "Lighting & Aero Engineering",
    "cover": "/assets/carmate-project-2.jpg",
    "specs": [
      "Bi-LED RGB Projectors",
      "Dynamic Flowing DRLs",
      "Crimson Red Finish",
      "Aero Side Splitters",
      "Custom Mesh Grille"
    ],
    "photos": [
      "/assets/carmate-project-2.jpg",
      "/assets/Project 2/571486225_122166675122392102_2231467071253684191_n.jpg",
      "/assets/Project 2/571495932_122166675218392102_8921034117263850570_n.jpg",
      "/assets/Project 2/572135829_122166675680392102_4100242337022606299_n.jpg",
      "/assets/Project 2/573316666_122166675074392102_818176753089136041_n.jpg",
      "/assets/Project 2/573328714_122166675002392102_4975995818029870928_n.jpg",
      "/assets/Project 2/573628064_122166675284392102_5714244683744529827_n.jpg",
      "/assets/Project 2/574001812_122166675794392102_6067924469609213364_n.jpg",
      "/assets/Project 2/574071455_122166675470392102_5093503090682801247_n.jpg",
      "/assets/Project 2/574575623_122166675728392102_6631909145168793479_n.jpg"
    ]
  },
  {
    "id": "silver-aero",
    "name": "Project Silver Aero GT",
    "vehicle": "Toyota Prius CAC 8260 Track Spec",
    "tagline": "High-Downforce Carbon GT Wing & Dual-Tone Rear Diffuser",
    "category": "Aero Dynamics & Track Styling",
    "cover": "/assets/cac-8260-front-lights.jpg",
    "specs": [
      "High-Mount Carbon GT Wing",
      "Dual-Tone Rear Diffuser",
      "Vertical LED Strobe Bars",
      "Lowered Sports Profile",
      "Aerodynamic Canards"
    ],
    "photos": [
      "/assets/cac-8260-front-lights.jpg",
      "/assets/carmate-project-1.jpg",
      "/assets/Project 3/526608805_122158954742392102_5020559378903224198_n.jpg",
      "/assets/Project 3/527338693_122158954814392102_5401758998814820438_n.jpg",
      "/assets/Project 3/527510876_122158954826392102_1976168002021677208_n.jpg",
      "/assets/Project 3/527600793_122158954700392102_2621677716485758811_n.jpg",
      "/assets/Project 3/527630126_122158955240392102_8296586242788187289_n.jpg",
      "/assets/Project 3/527690535_122158954778392102_442284961957292888_n.jpg",
      "/assets/Project 3/527750376_122158955378392102_4705890314746140912_n.jpg",
      "/assets/Project 3/527792133_122158955036392102_7746687790611541521_n.jpg",
      "/assets/Project 3/527972935_122158955522392102_6196827252669580792_n.jpg",
      "/assets/Project 3/528352844_122158955390392102_7056083923390975658_n.jpg",
      "/assets/Project 3/528355231_122158955510392102_8416041898958416131_n.jpg",
      "/assets/Project 3/528733912_122158955228392102_5433200020706439040_n.jpg"
    ]
  },
  {
    "id": "interior-cockpit",
    "name": "Carmate Bespoke Interior",
    "vehicle": "Custom Cockpit & Ambient Suite",
    "tagline": "Handcrafted Leather Upholstery & 64-Color Fiber-Optic Cabin",
    "category": "Interior Architecture",
    "cover": "/assets/interior/486641855_122144325842392102_3296230462916711787_n.jpg",
    "specs": [
      "Diamond-Stitched Leather",
      "Contrast Red Racing Stitching",
      "64-Color Fiber-Optic Suite",
      "Custom Steering Wrap",
      "Acoustic Console"
    ],
    "photos": [
      "/assets/interior/486641855_122144325842392102_3296230462916711787_n.jpg",
      "/assets/interior/486756654_122144326214392102_3828207945445587868_n.jpg",
      "/assets/interior/486760047_122144326166392102_3199015949132741179_n.jpg",
      "/assets/interior/486770633_122144326112392102_1388308366916112670_n.jpg",
      "/assets/interior/605800834_122172084422392102_8691872000032147499_n.jpg",
      "/assets/interior/605821572_122172084392392102_7152044387832013969_n.jpg",
      "/assets/interior/605965364_122172084368392102_3798246045763110391_n.jpg",
      "/assets/interior/606076893_122172084434392102_6626188684078899595_n.jpg",
      "/assets/interior/606486706_122172084326392102_4180440084634328168_n.jpg",
      "/assets/interior/607940414_122172084362392102_2241940099454201476_n.jpg",
      "/assets/interior/715512016_122184403322392102_5693730649662234200_n.jpg"
    ]
  }
];