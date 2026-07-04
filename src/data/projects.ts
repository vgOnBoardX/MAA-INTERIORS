export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  gallery: string[];
  beforeAfter: { before: string; after: string } | null;
  year: number;
  description: string;
  details?: string[];
}

export const PROJECTS: Project[] = [
  {
    "id": "royal-emerald-acrylic-kitchen",
    "coverImage": "https://i.ibb.co/QvtKWYD4/IMG-20260703-WA0041.jpg",
    "gallery": [
      "https://i.ibb.co/QvtKWYD4/IMG-20260703-WA0041.jpg",
      "https://i.ibb.co/Q3PKsK0S/IMG-20260703-WA0042.jpg",
      "https://i.ibb.co/PsnJMk0p/IMG-20260703-WA0043.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Minimalist Teak Wood & Neutral Tone Master Bedroom Suite",
    "category": "Bedroom",
    "description": "This master bedroom suite showcases a seamless blend of warm natural wood textures, minimalist lines, and luxurious neutral-toned finishes. The sleeping area features a striking floating platform bed anchored by a textured wood-panel headboard and an elegant matching drop-ceiling canopy. A massive floor-to-ceiling modular wardrobe provides highly organized storage with contrasting walnut and matte white laminates, complemented by sophisticated arched wall panels and cove lighting in the adjacent lounge space.",
    "details": [
      "Floating teak-finished platform bed with integrated minimalist nightstands and matching wooden headboard paneling",
      "Dramatic wooden drop-ceiling frame with a recessed white center panel and warm LED ambient lighting",
      "Floor-to-ceiling modular wardrobe featuring dual-tone dark walnut and matte white laminate doors with sleek bar handles",
      "Elegant arched wall panels with integrated warm cove backlighting in the lounge seating area",
      "Curved open corner display shelving on the wardrobe unit finished with contrasting white shelves"
    ]
  },
  {
    "id": "gold-trimmed-slate-wardrobe",
    "coverImage": "https://i.ibb.co/4wvvwfF2/IMG-20260703-WA0045.jpg",
    "gallery": [
      "https://i.ibb.co/4wvvwfF2/IMG-20260703-WA0045.jpg",
      "https://i.ibb.co/bj2NnXN9/IMG-20260703-WA0046.jpg",
      "https://i.ibb.co/KzwxnfRm/IMG-20260703-WA0047.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Bespoke Modern Modular Wardrobes with Metallic Accents",
    "category": "Bedroom",
    "description": "This collection of bespoke modular wardrobes showcases modern bedroom storage designed for maximum space efficiency and sleek, contemporary aesthetics. Featuring floor-to-ceiling configurations, the units utilize premium finishes ranging from rich matte charcoal and high-gloss maroon to contrasting monochromatic palettes accented by elegant metallic trims. Cleverly integrated functional details, such as built-in television consoles, open display shelving, and full-length mirror panels, highlight a sophisticated fusion of utility and luxurious craftsmanship.",
    "details": [
      "Floor-to-ceiling modular construction optimizing vertical storage with spacious overhead loft cabinets.",
      "Premium finish options including matte charcoal grey, high-contrast black and white laminates, and deep maroon gloss.",
      "Elegant metallic hardware accents featuring long, vertical gold-finished profile handles and inlaid gold T-profile strips.",
      "Multi-functional center-aligned media console with integrated TV niche, drawers, and frosted glass overhead storage.",
      "Gracefully curved open side shelving designed for displaying decor items, bags, and shoes."
    ]
  },
  {
    "id": "modern-living-media-center",
    "coverImage": "https://i.ibb.co/BVGhD5wh/IMG-20260703-WA0048.jpg",
    "gallery": [
      "https://i.ibb.co/BVGhD5wh/IMG-20260703-WA0048.jpg",
      "https://i.ibb.co/ZzX5rCm9/IMG-20260703-WA0049.jpg",
      "https://i.ibb.co/LX376V2j/IMG-20260703-WA0050.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Bespoke Modern Floor-to-Ceiling Modular Wardrobe Collection",
    "category": "Bedroom",
    "description": "This bespoke collection of modern floor-to-ceiling modular wardrobes showcases a premium blend of highly customizable configurations tailored to maximize storage while elevating bedroom aesthetics. The designs feature striking material contrasts, ranging from glossy charcoal-grey paired with rich wood grains and integrated full-length mirrors, to pristine high-gloss white laminates accented by diagonal gold-inlaid geometric patterns and tinted glass display cases. Engineered with impeccable craftsmanship, each wardrobe leverages smart space utilization with integrated overhead loft storage and sleek vertical handles for a seamless, sophisticated finish.",
    "details": [
      "High-gloss laminate finishes in charcoal-grey and pristine white paired with natural wood-grain textures",
      "Decorative diagonal gold-finished metal inlays creating a contemporary geometric chevron motif on the doors",
      "Integrated functional elements including dual full-length mirror panels and a central tinted glass display cabinet with internal shelving",
      "Smart space-saving layout extending overhead loft cabinets to maximize vertical storage space",
      "Sleek vertical pull handles in polished gold and brushed silver finishes"
    ]
  },
  {
    "id": "luxe-master-bedroom-suite",
    "coverImage": "https://i.ibb.co/JwzK8pt4/IMG-20260703-WA0051.jpg",
    "gallery": [
      "https://i.ibb.co/JwzK8pt4/IMG-20260703-WA0051.jpg",
      "https://i.ibb.co/pjDhf01P/IMG-20260703-WA0052.jpg",
      "https://i.ibb.co/9Bbmn3h/IMG-20260703-WA0053.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxe Warm Woodgrain & Fluted Accent Bedroom Suite",
    "category": "Bedroom",
    "description": "This modern bedroom suite exhibits a cohesive contemporary design language characterized by warm woodgrain laminates, rich textures, and integrated ambient lighting. The bed area features an elegant tufted grey headboard set against a feature wall composed of illuminated vertical panels and sleek mirror inserts, paired with a matching floating nightstand. Opposite the bed, a custom TV unit with dark fluted paneling and a geometric-grooved door seamlessly coordinates with a high-gloss, dual-toned modular wardrobe offering ample integrated storage and a built-in dressing mirror.",
    "details": [
      "Fluted dark-toned TV accent wall with a contrasting light beige floating media console and mounting panel.",
      "Upholstered grey button-tufted headboard paired with a low-profile platform bed frame and integrated floating bedside drawer.",
      "Feature headboard wall featuring vertical warm LED cove lighting and tall reflective mirror strip inserts.",
      "Dual-tone wardrobe in light cream and medium brown woodgrain laminates with an integrated vertical dressing mirror.",
      "Flush interior doors adorned with custom geometric diagonal groove detailing."
    ]
  },
  {
    "id": "contemporary-dual-tone-kitchen",
    "coverImage": "https://i.ibb.co/Kc3HHJhP/IMG-20260703-WA0055.jpg",
    "gallery": [
      "https://i.ibb.co/Kc3HHJhP/IMG-20260703-WA0055.jpg",
      "https://i.ibb.co/5hg60ThC/IMG-20260703-WA0056.jpg",
      "https://i.ibb.co/JRxw6Q7b/IMG-20260703-WA0057.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Forest Green & Walnut Modular Kitchen",
    "category": "Kitchen",
    "description": "This sophisticated modular kitchen beautifully balances organic warmth and modern luxury, featuring rich walnut-toned overhead cabinetry contrasted by deep forest green base cabinets. A dramatic white marble-textured backsplash with prominent gold and grey veining serves as the striking focal point, bridging the earthy tones of the woodwork and the matte green finishes. Designed for seamless functionality, the layout incorporates integrated under-cabinet LED lighting, a high-end black glass chimney, and elegant rose gold handle profiles that elevate the entire culinary space.",
    "details": [
      "Dual-tone cabinetry featuring rich walnut wood grains for overhead storage and matte forest green for lower units.",
      "Dramatic marble-textured backsplash and countertop with bold grey and gold veining.",
      "Warm white under-cabinet LED strip lighting that illuminates the countertop workspace.",
      "Minimalist handleless base cabinets utilizing sleek rose-gold finished Gola profiles.",
      "Sleek built-in black glass gas cooktop and matching wall-mounted hood chimney."
    ]
  },
  {
    "id": "premium-mirror-wood-wardrobe",
    "coverImage": "https://i.ibb.co/BVJbckVZ/IMG-20260703-WA0059.jpg",
    "gallery": [
      "https://i.ibb.co/BVJbckVZ/IMG-20260703-WA0059.jpg",
      "https://i.ibb.co/MkMjXSNw/IMG-20260703-WA0062.jpg",
      "https://i.ibb.co/rGpK6cpg/IMG-20260704-WA0000.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Warm-Toned Living Space with Textured Brick Accent Wall",
    "category": "Living Room",
    "description": "This residential interior design merges modern functionality with warm, rustic textures to create a cohesive and inviting living space. The design features a prominent faux-stone textured accent wall that frames the cozy L-shaped sectional seating area, complemented by a recessed tray ceiling with warm spotlights and a central wooden pendant fixture. Seamlessly integrated custom woodwork, such as the geometric-patterned sliding wardrobe and deep-toned veneer doors, enhances the home's contemporary aesthetic and practical storage capabilities.",
    "details": [
      "Faux-stone brick textured accent wallpaper framing the main seating area",
      "Multi-tiered gypsum false ceiling featuring warm recessed spotlights and a dark wood border trim",
      "Custom sliding wardrobe with a striking grey and white geometric diagonal-patterned laminate finish",
      "Deep teal accent wall paired with soft mint-blue side walls in the transition hallway",
      "Classic dark wood veneer flush door with routed arched grooves and matching door frame"
    ]
  },
  {
    "id": "sleek-false-ceiling-lighting",
    "coverImage": "https://i.ibb.co/YFXT1Mb1/IMG-20260704-WA0001.jpg",
    "gallery": [
      "https://i.ibb.co/YFXT1Mb1/IMG-20260704-WA0001.jpg",
      "https://i.ibb.co/8nRTtVjm/IMG-20260704-WA0002.jpg",
      "https://i.ibb.co/fzDrR4p8/IMG-20260704-WA0003.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Warm Contemporary Living Room with Custom Ash-Wood TV Unit",
    "category": "Living Room",
    "description": "This warm and inviting contemporary living space integrates seamless custom-built cabinetry with textured architectural elements to maximize functionality and visual depth in a compact layout. The focal point of the room is a dual-tone ash-wood and dark walnut TV console featuring integrated glass display cases, beautifully complemented by a textured stone-cladding accent wall behind the cozy sectional. An elaborate multi-tiered tray false ceiling with warm LED cove lighting and central fixtures unifies the living, dining, and adjoining kitchen zones.",
    "details": [
      "Custom-designed multi-functional TV entertainment unit featuring a dual-tone ash and dark walnut laminate finish with integrated glass display cabinets.",
      "Multi-tiered drop-ceiling design with recessed spotlights, warm yellow LED cove lighting, and a decorative central fan mount.",
      "Textured split-face stone cladding on the living room accent wall, creating a rustic backdrop for the L-shaped sectional sofa.",
      "Elegant arched wall opening that transitions the main living and dining area into a semi-open modular kitchen."
    ]
  },
  {
    "id": "compact-cozy-study-wardrobe",
    "coverImage": "https://i.ibb.co/5gk9Pm3R/IMG-20260704-WA0004.jpg",
    "gallery": [
      "https://i.ibb.co/5gk9Pm3R/IMG-20260704-WA0004.jpg",
      "https://i.ibb.co/mwF5dcy/IMG-20260703-WA0020.jpg",
      "https://i.ibb.co/JFg0P6XP/IMG-20260703-WA0024.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Seafoam Mint Modular Kitchen and Textured Accent Living Space",
    "category": "Living Room",
    "description": "This contemporary residential interior showcases a harmonious blend of warm lighting, rich textures, and functional spatial planning across the living and cooking zones. The cozy lounge area features a rustic stone-clad accent wall, a plush L-shaped sectional, and a dramatic tray ceiling with golden cove illumination. Transitioning seamlessly, the space highlights a stunning dark charcoal accent wall with vertical LED strip inserts and intricate white geometric stenciling, alongside a sleek seafoam-green and white modular kitchen completed by a dark fluted breakfast bar.",
    "details": [
      "Dual-tone modular kitchen cabinetry featuring glossy seafoam mint and crisp white laminate finishes with seamless profiles",
      "Living room accent wall detailed with dark charcoal textured panels, recessed vertical LED strip backlighting, and repeating white mandala-chain motifs",
      "Rustic beige stone-cladding feature wall framing the living room window and a comfortable grey fabric L-shaped sectional sofa",
      "Breakfast bar island clad in dark charcoal vertically fluted panels beneath a warm wood-finished partition frame with built-in niches",
      "Polished white marble flooring with subtle grey veining running throughout the open-concept layout"
    ]
  },
  {
    "id": "chic-u-shaped-acrylic-kitchen",
    "coverImage": "https://i.ibb.co/0RhS0Fz9/IMG-20260703-WA0025.jpg",
    "gallery": [
      "https://i.ibb.co/0RhS0Fz9/IMG-20260703-WA0025.jpg",
      "https://i.ibb.co/yBWmrrpd/IMG-20260703-WA0026.jpg",
      "https://i.ibb.co/1YkgwzLT/IMG-20260703-WA0028.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Dual-Tone Bedroom & Luxury Living Room Interior Suite",
    "category": "Bedroom",
    "description": "This residential design showcase features custom-crafted cabinetry that seamlessly balances modern luxury with functional storage solutions. The bedroom spaces display tailored wardrobes with sleek marble-effect laminates alongside a coordinating dual-tone walnut and white platform bed set. In the living area, a striking book-matched marble feature wall is paired with vertical fluted wood paneling and a floating console to create a sophisticated focal point.",
    "details": [
      "Floor-to-ceiling wardrobes styled with elegant white marble-patterned laminates and slim vertical chrome handles.",
      "Coordinating platform bed featuring a rich walnut wood grain finish contrasted with clean white laminates and an upholstered headboard insert.",
      "Stunning living room media wall featuring a high-gloss, book-matched marble backdrop panel.",
      "Sophisticated vertical wood fluting flanking the TV unit, complemented by a floating slatted wood console with marble-like base accents.",
      "Seamless integrated storage cabinets above and below the custom bedroom wardrobe units for optimized space utilization."
    ]
  },
  {
    "id": "fluted-wall-panel-tv-unit",
    "coverImage": "https://i.ibb.co/zVCYQNN8/IMG-20260703-WA0029.jpg",
    "gallery": [
      "https://i.ibb.co/zVCYQNN8/IMG-20260703-WA0029.jpg",
      "https://i.ibb.co/FbjFFn0C/IMG-20260703-WA0030.jpg",
      "https://i.ibb.co/ksx0rFhx/IMG-20260703-WA0031.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Emerald & Gold Sliding Wardrobe and Bespoke Wood-Paneled Master Bedroom Suite",
    "category": "Bedroom",
    "description": "This master bedroom design seamlessly blends luxurious emerald green, gold accents, and rich warm wood tones to create a highly sophisticated, contemporary sanctuary. The space features a bespoke floating platform bed with an integrated tan leatherette faceted headboard, flanked by floating minimalist nightstands and anchored by a striking floor-to-ceiling wooden canopy paneling. A grand three-door sliding wardrobe serves as a focal piece, sporting high-gloss deep green glass panels accented by bold diagonal white bands and precision-fitted gold-finished metallic inlay profiles.",
    "details": [
      "3-door sliding wardrobe in high-gloss emerald green glass with geometric diagonal white acrylic accents and gold metal T-profile inlays.",
      "Bespoke floating bed frame featuring a rich, curved glossy mahogany-finished wood veneer footboard.",
      "Integrated headboard wall with geometric-patterned light brown faux-leather tufting and dual white floating bedside drawers.",
      "Dramatic dark wood veneer wall-to-ceiling canopy accent panel incorporating a white ceiling fan and ambient cove lighting.",
      "Custom multi-layered headboard paneling featuring integrated warm-lit display niches and polished laminate surfaces."
    ]
  },
  {
    "id": "bespoke-sliding-closet-dressing",
    "coverImage": "https://i.ibb.co/TMHY7zqN/IMG-20260703-WA0032.jpg",
    "gallery": [
      "https://i.ibb.co/TMHY7zqN/IMG-20260703-WA0032.jpg",
      "https://i.ibb.co/NnNvcR6Z/IMG-20260703-WA0035.jpg",
      "https://i.ibb.co/bRdGQw8L/IMG-20260703-WA0036.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Bespoke Modern Bedrooms with Custom Panel Headboards & Integrated Storage",
    "category": "Bedroom",
    "description": "This collection of premium bedroom concepts showcases a masterful blend of contemporary luxury and functional storage, highlighting bespoke headboard wall designs integrated with ambient lighting. The designs utilize a rich palette of materials including plush velvet upholstery, warm wood laminates, dual-tone acrylic wardrobes, and intricate CNC-cut metallic stencils or marble-textured wall paneling. Each space is meticulously crafted to maximize utility and aesthetic appeal, featuring floating nightstands, custom-built niches, recessed cove ceiling details, and seamless wardrobe units.",
    "details": [
      "Custom upholstered headboards ranging from horizontal channel tufting in plush beige to deep-buttoned brown velvet fabrics.",
      "Artistic accent wall panels featuring backlit CNC-cut metallic designs, tree motifs, or book-matched marble look slabs.",
      "Sleek built-in dual-tone wardrobe units with high-gloss white laminates contrasted against dark walnut textured wood.",
      "Integrated multi-level ceiling designs incorporating warm white LED cove lighting, recessed spot lamps, and central fans.",
      "Space-saving functional features including floating side drawers, recessed display wall niches with warm spotlights, and platforms beds with integrated borders."
    ]
  },
  {
    "id": "earthy-living-room-divider",
    "coverImage": "https://i.ibb.co/ymkMYWGh/IMG-20260703-WA0037.jpg",
    "gallery": [
      "https://i.ibb.co/ymkMYWGh/IMG-20260703-WA0037.jpg",
      "https://i.ibb.co/j91JqL0c/IMG-20260703-WA0039.jpg",
      "https://i.ibb.co/1YSkg3x7/IMG-20260703-WA0040.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Luxury Bedroom with Gloss White, Gold Trim & Rich Walnut Wood Accents",
    "category": "Bedroom",
    "description": "This sophisticated modern bedroom design seamlessly blends luxurious textures, featuring glossy white acrylic paneling paired with rich, warm walnut wood grains and elegant gold metal trim accents. The functional layout showcases highly customized furniture, including a modular TV entertainment unit with built-in display niches and a sleek sliding wardrobe designed with integrated full-height mirrored panels. Ambient cove lighting and carefully coordinated marble-texture accents on the flooring and walls elevate the spatial experience, embodying a refined contemporary aesthetic with superior craftsmanship.",
    "details": [
      "Custom sliding wardrobe featuring alternating glossy white laminate panels and reflective gold-toned vertical mirror panels with slim metallic trims.",
      "Bespoke entertainment console integrating dual-tone warm walnut laminate and glossy white backboards with recessed square display niches.",
      "Floating low-profile TV console drawers with horizontal brushed brass pull handles and a matching wall-mounted display shelf.",
      "Textural contrast established through textured fabric-upholstered wardrobe shutter fronts and fluted wood detailing along the lower baseboards.",
      "Dynamic geometry highlighted by the diagonal gold geometric wallpaper patterns and complementary warm white LED cove lighting."
    ]
  }
];
