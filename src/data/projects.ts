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
    "id": "luxury-retail-showroom-1",
    "coverImage": "https://i.ibb.co/8nBhTyLW/COMMERCIAL.jpg",
    "gallery": [
      "https://i.ibb.co/8nBhTyLW/COMMERCIAL.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxury Retail Showroom Interior",
    "category": "Commercial",
    "description": "A high-end retail showroom crafted to elevate the customer experience from the moment they walk in. The design merges sophisticated display fixtures with premium lighting and curated finishes, ensuring every product is showcased in its best light while the space itself becomes a brand statement.",
    "details": [
      "Custom-designed display shelving in lacquered white and brass-tipped finishes.",
      "Dramatic ceiling spotlights and LED track lighting for focused product illumination.",
      "Polished large-format marble-look flooring creating a seamless luxury underfoot.",
      "Brand-forward signage wall with backlit logo panel and textured stone cladding.",
      "Dedicated VIP consultation corner with plush seating and a bespoke accent table."
    ]
  },
  {
    "id": "boutique-cafe-interior-2",
    "coverImage": "https://i.ibb.co/yc1wQwYX/COMMERCIAL-2.jpg",
    "gallery": [
      "https://i.ibb.co/yc1wQwYX/COMMERCIAL-2.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Boutique Café & Bistro Interior",
    "category": "Commercial",
    "description": "A warm and character-rich boutique café designed to feel like a destination rather than just a coffee stop. Exposed textures, curated vintage accents, and thoughtful lighting create an atmosphere that invites guests to linger — making every visit a memorable experience.",
    "details": [
      "Exposed brick accent wall paired with warm Edison filament pendant lighting.",
      "Custom timber and steel bar counter with integrated beverage display shelving.",
      "Mixed seating configurations — booth banquettes, café tables, and lounge chairs.",
      "Hand-painted mural or patterned tile feature wall as a social-media-worthy focal point.",
      "Reclaimed wood ceiling beams and open-shelf retail display for curated merchandise."
    ]
  },
  {
    "id": "premium-salon-spa-3",
    "coverImage": "https://i.ibb.co/My5C3yPy/COMMERCIAL-3.jpg",
    "gallery": [
      "https://i.ibb.co/My5C3yPy/COMMERCIAL-3.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Premium Salon & Spa Interior",
    "category": "Commercial",
    "description": "A serene and luxurious salon and spa interior designed to set the tone for relaxation and beauty from the very first moment. Every element — from the soft lighting to the tactile materials — is chosen to create a sense of calm indulgence and professional elegance.",
    "details": [
      "Soft neutral palette of cream, blush, and champagne gold for a tranquil ambience.",
      "Custom backlit vanity mirrors with integrated LED halos for each styling station.",
      "Fluted glass partitions dividing treatment rooms while maintaining spatial openness.",
      "Plush reception sofa with a sleek white marble reception desk and backlit branding.",
      "Herringbone wood-look flooring and cascading indoor greenery for organic warmth."
    ]
  },
  {
    "id": "modern-clinic-interior-4",
    "coverImage": "https://i.ibb.co/hRdF9kvR/COMMERCIAL-4.jpg",
    "gallery": [
      "https://i.ibb.co/hRdF9kvR/COMMERCIAL-4.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Medical Clinic & Wellness Centre",
    "category": "Commercial",
    "description": "A contemporary medical clinic designed to ease patient anxiety through thoughtful, human-centred design. Clean lines, soothing tones, and hygienic materials are balanced with warm wood accents and natural light to create a professional yet welcoming healthcare environment.",
    "details": [
      "Clinical-grade anti-microbial surfaces in easy-clean matte laminates and vinyl flooring.",
      "Warm wood reception desk contrasting with crisp white walls for a calming welcome.",
      "Zoned waiting area with ergonomic seating and soft diffused overhead lighting.",
      "Privacy-optimised consultation rooms with frosted glass sliding doors.",
      "Wayfinding signage system with colour-coded zones for intuitive patient navigation."
    ]
  },
  {
    "id": "upscale-restaurant-interior-5",
    "coverImage": "https://i.ibb.co/S4mj2x0G/COMMERCIAL-5.jpg",
    "gallery": [
      "https://i.ibb.co/S4mj2x0G/COMMERCIAL-5.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Upscale Restaurant & Dining Interior",
    "category": "Commercial",
    "description": "A sophisticated fine-dining restaurant interior where every detail contributes to an unforgettable culinary journey. Layered lighting, rich materials, and a curated spatial flow create an atmosphere of warmth and exclusivity — the perfect backdrop for exceptional food and memorable evenings.",
    "details": [
      "Dramatic statement ceiling with decorative moldings, pendant clusters, and cove uplighting.",
      "Rich velvet booth seating in deep jewel tones, complemented by marble-topped tables.",
      "Custom-designed back bar with tiered bottle display and ambient under-shelf lighting.",
      "Acoustic paneling in fabric-wrapped frames to maintain intimate conversation levels.",
      "Private dining alcoves with curtain dividers and personalised lighting controls."
    ]
  },
  {
    "id": "corporate-lobby-interior-6",
    "coverImage": "https://i.ibb.co/hRXrpzG0/COMMERCIAL-6.jpg",
    "gallery": [
      "https://i.ibb.co/hRXrpzG0/COMMERCIAL-6.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Corporate Headquarters Lobby & Entrance",
    "category": "Commercial",
    "description": "A grand corporate lobby designed to make an immediate and lasting impression. The space balances architectural boldness with refined finishes — a double-height atrium, sculptural reception desk, and statement lighting ensemble communicate corporate prestige from the very first step inside.",
    "details": [
      "Double-height feature wall clad in large-format stone panels with an illuminated company logo.",
      "Sculptural reception counter in corian and brushed stainless steel with embedded LED base.",
      "Statement chandelier or geometric light installation as the lobby's visual centrepiece.",
      "Premium porcelain tile flooring in large slabs with seamless grout lines for a clean finish.",
      "Integrated digital display screens for announcements, wayfinding, and brand storytelling."
    ]
  },
  {
    "id": "modern-executive-office-1",
    "coverImage": "https://i.ibb.co/KpCZPVFN/OFFICE.jpg",
    "gallery": [
      "https://i.ibb.co/KpCZPVFN/OFFICE.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Executive Office Suite",
    "category": "Office",
    "description": "A sleek, high-performance executive office designed to inspire productivity and convey authority. The space features a commanding workstation, premium upholstered seating, and a sophisticated palette of dark tones balanced by warm accent lighting — creating an environment where business decisions feel effortless.",
    "details": [
      "Custom-built executive desk with integrated cable management and built-in storage pedestals.",
      "Floor-to-ceiling dark laminate storage wall with display niches and lockable cabinets.",
      "Warm recessed ceiling lighting complemented by task-specific under-shelf LED strips.",
      "Premium leather executive chair paired with coordinating visitor seating.",
      "Acoustic wall panels and double-glazed glass partitions for sound-proofed privacy."
    ]
  },
  {
    "id": "collaborative-workspace-office-2",
    "coverImage": "https://i.ibb.co/mVg9Ckfv/OFFICE-2.jpg",
    "gallery": [
      "https://i.ibb.co/mVg9Ckfv/OFFICE-2.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Collaborative Open-Plan Workspace",
    "category": "Office",
    "description": "A dynamic open-plan office designed to foster collaboration and team energy. Bright, airy interiors are paired with modular workstations and breakout zones that adapt to different working styles — from focused individual tasks to spontaneous team brainstorming sessions.",
    "details": [
      "Modular workstation clusters with height-adjustable desks for ergonomic flexibility.",
      "Vibrant accent walls and branded graphic elements reinforcing company identity.",
      "Open cable trays and flush floor boxes ensuring a clean, clutter-free workspace.",
      "Dedicated breakout zone with informal lounge seating and writable whiteboard walls.",
      "Ample natural light supplemented by tunable LED overhead panels for wellbeing."
    ]
  },
  {
    "id": "boutique-cabin-office-3",
    "coverImage": "https://i.ibb.co/DPf1CJp8/OFFICE-3.jpg",
    "gallery": [
      "https://i.ibb.co/DPf1CJp8/OFFICE-3.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Boutique Private Cabin Office",
    "category": "Office",
    "description": "An intimate and refined private cabin office that blends professional function with boutique-hotel elegance. Rich wood-paneled walls, tailored joinery, and curated lighting create a space that is deeply personal yet unmistakably impressive — ideal for senior leadership or client-facing meetings.",
    "details": [
      "Rich wood veneer wall paneling with integrated shelving and display niches.",
      "Bespoke built-in desk unit with matching side credenza for ample surface area.",
      "Soft overhead cove lighting combined with directional task spotlights.",
      "Frosted glass partition walls allowing visual privacy while maintaining openness.",
      "Coordinated color scheme in muted neutrals with deep wood and brass accents."
    ]
  },
  {
    "id": "contemporary-reception-office-4",
    "coverImage": "https://i.ibb.co/k2KPFFCD/OFFICE-4.jpg",
    "gallery": [
      "https://i.ibb.co/k2KPFFCD/OFFICE-4.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Office Reception & Lobby",
    "category": "Office",
    "description": "A bold and welcoming office reception area that makes a powerful first impression. The design combines a sculptural reception desk, brand-forward signage, and layered lighting to communicate professionalism and warmth from the moment visitors step through the door.",
    "details": [
      "Signature reception counter in high-gloss white with backlit brand logo panel.",
      "Feature ceiling with geometric coffers and warm pendant lighting for visual impact.",
      "Comfortable lounge waiting area with premium upholstered seating and a glass coffee table.",
      "Seamless large-format porcelain flooring extending from lobby to corridor for continuity.",
      "Curated indoor planting and artwork to add life, colour, and brand personality."
    ]
  },
  {
    "id": "sleek-modular-kitchen-design-1",
    "coverImage": "https://i.ibb.co/SwRgXDcN/KITCHEN.jpg",
    "gallery": [
      "https://i.ibb.co/SwRgXDcN/KITCHEN.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Sleek Contemporary Modular Kitchen",
    "category": "Kitchen",
    "description": "A beautifully crafted contemporary modular kitchen featuring clean lines, premium finishes, and a smart layout designed for both functionality and visual elegance. The space seamlessly blends practicality with modern aesthetics, creating a culinary environment that is as stylish as it is efficient.",
    "details": [
      "Streamlined modular cabinetry with premium high-gloss laminate finishes.",
      "Efficient U-shaped or L-shaped layout for optimized kitchen workflow.",
      "Integrated chimney hood and built-in appliances for a seamless look.",
      "Stone-finish countertops and matching tiled backsplash for easy maintenance.",
      "Concealed under-cabinet LED strip lighting for a warm ambient glow."
    ]
  },
  {
    "id": "luxury-acrylic-kitchen-design-2",
    "coverImage": "https://i.ibb.co/hJvzJj5x/KITCHEN-2.jpg",
    "gallery": [
      "https://i.ibb.co/hJvzJj5x/KITCHEN-2.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxury Acrylic Finish Modular Kitchen",
    "category": "Kitchen",
    "description": "This luxury modular kitchen showcases high-gloss acrylic shutters paired with sleek countertops and sophisticated hardware. The design prioritizes both visual impact and day-to-day ergonomic ease, resulting in a kitchen that feels like the heart of a premium home.",
    "details": [
      "High-gloss acrylic shutter doors offering a mirror-like reflective premium finish.",
      "Thoughtfully planned storage with soft-close drawers and deep pull-out cabinets.",
      "Elegant metallic profile handles adding a refined touch to every cabinet.",
      "Engineered stone countertops resistant to stains, heat, and scratches.",
      "Wall-mounted chimney hood with powerful suction and sleek stainless finish."
    ]
  },
  {
    "id": "warm-tone-kitchen-design-3",
    "coverImage": "https://i.ibb.co/3yN3VGt9/KITCHEN-3.jpg",
    "gallery": [
      "https://i.ibb.co/3yN3VGt9/KITCHEN-3.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Warm-Tone Wood & Matte Kitchen Suite",
    "category": "Kitchen",
    "description": "A warm and inviting modular kitchen blending rich wood-grain laminates with soft matte tones to create a harmonious, nature-inspired cooking space. The design offers a timeless aesthetic with modern functional elements, perfect for families who value both comfort and style.",
    "details": [
      "Rich woodgrain laminate overhead cabinets contrasted with matte base units.",
      "Built-in modular shelving for easy access to everyday kitchen essentials.",
      "Ceramic or porcelain tile backsplash with subtle geometric pattern detailing.",
      "Warm under-cabinet lighting casting a cozy amber tone across the countertop.",
      "Integrated gas hob and stainless steel sink with a single-lever mixer tap."
    ]
  },
  {
    "id": "dual-tone-open-kitchen-design-4",
    "coverImage": "https://i.ibb.co/MkMjZ8sX/KITCHEN-4.jpg",
    "gallery": [
      "https://i.ibb.co/MkMjZ8sX/KITCHEN-4.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Dual-Tone Open Concept Kitchen",
    "category": "Kitchen",
    "description": "This dual-tone open-concept kitchen is designed to be a visual showpiece as well as a highly functional cooking space. The striking contrast between upper and lower cabinets anchors the entire room, while thoughtful storage solutions and premium countertops make everyday cooking a pleasure.",
    "details": [
      "Striking dual-tone cabinetry with contrasting upper and lower cabinet finishes.",
      "Open-plan layout that integrates seamlessly with the adjacent dining or living area.",
      "Quartz or granite countertops with subtle veining for a luxurious countertop surface.",
      "Full-height overhead cabinets maximizing vertical storage in a compact footprint.",
      "Contemporary hardware with long bar handles in brushed gold or chrome finishes."
    ]
  },
  {
    "id": "compact-elegant-kitchen-design-5",
    "coverImage": "https://i.ibb.co/J6FsfLP/KITCHENS.jpg",
    "gallery": [
      "https://i.ibb.co/J6FsfLP/KITCHENS.jpg"
    ],
    "beforeAfter": null,
    "year": 2025,
    "title": "Compact Elegant Modular Kitchen",
    "category": "Kitchen",
    "description": "A compact yet strikingly elegant modular kitchen design that proves great interiors don't need large footprints. Every inch of this kitchen is purposefully designed — from the optimized cabinet configuration to the carefully chosen color palette — delivering a space that is both beautiful and highly practical.",
    "details": [
      "Space-maximizing compact layout with tall pantry units for deep storage.",
      "Neutral or bold color palette tailored to complement the client's home theme.",
      "Sleek profile-handled shutters giving a handleless, minimal aesthetic.",
      "Anti-bacterial, easy-to-clean countertop surfaces for hygienic food preparation.",
      "Integrated modular accessories including pull-out bins, spice racks, and cutlery trays."
    ]
  },
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
    "id": "bedroom-design-1",
    "coverImage": "https://i.ibb.co/N2RBCLfJ/contemporary-bedroom-design-with-a-king-size-bed-and-hanging-lights-img.jpg",
    "gallery": ["https://i.ibb.co/N2RBCLfJ/contemporary-bedroom-design-with-a-king-size-bed-and-hanging-lights-img.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary King Bedroom with Pendant Lighting",
    "category": "Bedroom",
    "description": "A contemporary master bedroom featuring a grand king-size platform bed, dramatic hanging pendant lights, and a calming neutral palette. The space is designed to evoke a five-star hotel retreat with layered textures, warm ambient lighting, and refined furnishings.",
    "details": [
      "Grand king-size platform bed with an upholstered headboard as the room's centrepiece.",
      "Dramatic pendant lights flanking the bed for a boutique hotel ambience.",
      "Neutral warm palette of cream, beige, and taupe for a serene, restful atmosphere.",
      "Layered soft furnishings including plush bedding, accent cushions, and a throw blanket.",
      "Recessed ceiling with warm cove lighting to frame the sleeping zone."
    ]
  },
  {
    "id": "bedroom-design-2",
    "coverImage": "https://i.ibb.co/xqZRpRb9/images-1.jpg",
    "gallery": ["https://i.ibb.co/xqZRpRb9/images-1.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Minimalist Modern Bedroom Suite",
    "category": "Bedroom",
    "description": "A sleek minimalist bedroom suite that celebrates the beauty of restraint. Clean architectural lines, a curated colour palette, and thoughtfully chosen furniture pieces come together to create a space of calm sophistication and visual harmony.",
    "details": [
      "Low-profile platform bed with a streamlined upholstered headboard.",
      "Integrated floating nightstands with hidden storage and ambient lighting.",
      "Floor-to-ceiling wardrobe in matte finish for seamless, clutter-free storage.",
      "Accent feature wall with subtle textured panels and warm LED backlighting.",
      "Polished flooring with a soft area rug defining the sleeping zone."
    ]
  },
  {
    "id": "bedroom-design-3",
    "coverImage": "https://i.ibb.co/xtpZx6FD/images-2.jpg",
    "gallery": ["https://i.ibb.co/xtpZx6FD/images-2.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Warm Woodgrain Luxury Bedroom",
    "category": "Bedroom",
    "description": "A luxurious bedroom enveloped in warm woodgrain textures and earthy tones. Rich natural materials are paired with soft ambient lighting and bespoke furniture to craft a space that feels both grounded and deeply indulgent.",
    "details": [
      "Rich woodgrain laminate paneling on the feature headboard wall for warmth and depth.",
      "Bespoke wooden bed frame with integrated side tables and ambient strip lighting.",
      "Complementing wardrobes in matching wood-tone laminates with soft-close mechanisms.",
      "Layered lighting plan including overhead cove lights, pendant lamps, and reading lights.",
      "Natural fibre rug and plush upholstered bench at the foot of the bed."
    ]
  },
  {
    "id": "bedroom-design-4",
    "coverImage": "https://i.ibb.co/Vdn6tt3/images-3.jpg",
    "gallery": ["https://i.ibb.co/Vdn6tt3/images-3.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Dark Moody Master Bedroom Retreat",
    "category": "Bedroom",
    "description": "A bold and dramatic master bedroom designed around a deep, moody colour palette. Dark walls, rich textures, and strategic lighting combine to create an intimate sanctuary that feels both cocooning and luxuriously sophisticated.",
    "details": [
      "Deep-toned feature wall in matte charcoal or navy as the dramatic focal point.",
      "King-size bed with a velvet-upholstered headboard in a complementary dark hue.",
      "Warm brass or gold hardware accents providing a refined contrast to the dark palette.",
      "Statement bedside pendants with warm Edison-style bulbs for intimate ambiance.",
      "Plush area rug and layered textiles adding softness to the bold design."
    ]
  },
  {
    "id": "bedroom-design-5",
    "coverImage": "https://i.ibb.co/qMNp3n1M/images.jpg",
    "gallery": ["https://i.ibb.co/qMNp3n1M/images.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Elegant White & Gold Bedroom",
    "category": "Bedroom",
    "description": "An elegantly styled bedroom blending crisp white finishes with gleaming gold accents for a look of timeless glamour. The space balances opulence with restraint, creating an environment that feels fresh, airy, and effortlessly luxurious.",
    "details": [
      "Pristine white upholstered headboard with diamond tufting as the room's signature piece.",
      "Gold-finish bedside lamps and hardware adding warmth and a touch of glamour.",
      "High-gloss white wardrobes with integrated gold-profile handles for a seamless look.",
      "Mirrored accent panels reflecting light and adding a sense of spaciousness.",
      "Soft champagne and ivory toned bedding with layered cushions for a plush finish."
    ]
  },
  {
    "id": "bedroom-design-6",
    "coverImage": "https://i.ibb.co/svZM7dwr/originalfile1769103013361-4465.jpg",
    "gallery": ["https://i.ibb.co/svZM7dwr/originalfile1769103013361-4465.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Scandinavian Inspired Serene Bedroom",
    "category": "Bedroom",
    "description": "A Scandinavian-inspired bedroom that embraces hygge — the art of cosy comfort. Light wood tones, soft whites, and a clutter-free layout create a calming retreat where simplicity and warmth take centre stage.",
    "details": [
      "Light oak bed frame and bedside tables in clean Scandinavian silhouettes.",
      "Crisp white walls paired with natural linen textiles for an airy, relaxed feel.",
      "Minimalist built-in shelving displaying curated accessories and indoor plants.",
      "Soft pendant light in a natural woven rattan shade as the room's focal point.",
      "Sheepskin throws, knit cushions, and layered bedding for ultimate comfort."
    ]
  },
  {
    "id": "bedroom-design-7",
    "coverImage": "https://i.ibb.co/C57H1Lrf/VC-Interiors-Modern-Bedroom-Interior-Design.jpg",
    "gallery": ["https://i.ibb.co/C57H1Lrf/VC-Interiors-Modern-Bedroom-Interior-Design.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Interior Design Master Bedroom",
    "category": "Bedroom",
    "description": "A refined modern master bedroom where clean geometry, premium materials, and layered lighting converge to produce a space of quiet luxury. Every detail is intentional, from the furniture proportions to the carefully selected colour palette.",
    "details": [
      "Architectural headboard wall with integrated panels, niches, and ambient LED lighting.",
      "Custom-built floating nightstands with concealed LED under-lighting.",
      "Bespoke full-height wardrobe with push-to-open mechanism for a handleless aesthetic.",
      "Statement ceiling detail with coffers or cove lighting framing the bed below.",
      "Premium flooring in large-format stone-look tiles or engineered hardwood."
    ]
  },
  {
    "id": "bedroom-design-8",
    "coverImage": "https://i.ibb.co/rG8trNrf/546bf7adec73e07760104cb7b526c291.jpg",
    "gallery": ["https://i.ibb.co/rG8trNrf/546bf7adec73e07760104cb7b526c291.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxury Hotel-Style Bedroom Design",
    "category": "Bedroom",
    "description": "A bedroom conceived with the luxury of a five-star hotel in mind. Impeccable detailing, sumptuous fabrics, and a carefully composed spatial arrangement deliver an experience of elevated comfort and timeless elegance every night.",
    "details": [
      "Towering padded headboard spanning the full width of the bed wall for maximum impact.",
      "Premium bedding in high thread-count linens with layered pillows and a bolster.",
      "Symmetrical layout with matching bedside tables, lamps, and wall sconces.",
      "Integrated dressing area with a vanity mirror, stool, and built-in illuminated cabinet.",
      "Plush underfoot carpeting or a large area rug centred under the bed."
    ]
  },
  {
    "id": "bedroom-design-9",
    "coverImage": "https://i.ibb.co/zWvkPPp8/813315f347b718062c1386a9d23d51b2.jpg",
    "gallery": ["https://i.ibb.co/zWvkPPp8/813315f347b718062c1386a9d23d51b2.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Boho Chic Eclectic Bedroom",
    "category": "Bedroom",
    "description": "A free-spirited boho chic bedroom that celebrates texture, pattern, and personality. Layered rugs, macramé wall art, rattan accents, and an eclectic mix of warm tones create a space that feels uniquely curated and effortlessly inviting.",
    "details": [
      "Woven rattan or cane bed headboard for a natural, bohemian centrepiece.",
      "Layered patterned rugs in warm terracotta, rust, and amber tones.",
      "Macramé or tapestry wall hanging adding artisanal texture to the feature wall.",
      "Abundant trailing indoor plants and dried floral arrangements for organic warmth.",
      "Mix-and-match bedside elements with vintage finds and handcrafted accessories."
    ]
  },
  {
    "id": "bedroom-design-10",
    "coverImage": "https://i.ibb.co/Zv3y2bh/bedroom-1.png",
    "gallery": ["https://i.ibb.co/Zv3y2bh/bedroom-1.png"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Tufted Headboard Bedroom with Accent Wall",
    "category": "Bedroom",
    "description": "A classic-contemporary bedroom built around a statement tufted headboard and a boldly designed accent wall. The design fuses traditional elegance with modern sensibility, resulting in a space that is both timeless and on-trend.",
    "details": [
      "Deep-button tufted headboard in plush velvet as the room's defining luxury feature.",
      "Accent wall in a contrasting colour or textured wallpaper framing the bed.",
      "Coordinated bedside tables and wall-mounted reading lamps for symmetry.",
      "Upholstered bench or ottoman at the foot of the bed for added functionality.",
      "Warm lighting from a central chandelier or cluster of pendant lights above."
    ]
  },
  {
    "id": "bedroom-design-11",
    "coverImage": "https://i.ibb.co/xt2P4dYZ/bedroom-interior-decor-design-ideas-scaled.jpg",
    "gallery": ["https://i.ibb.co/xt2P4dYZ/bedroom-interior-decor-design-ideas-scaled.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Premium Bedroom Interior Decor Showcase",
    "category": "Bedroom",
    "description": "A showcase of premium bedroom interior decor ideas that blend aesthetics and comfort seamlessly. From the choice of wall treatments to the curated selection of furniture and accessories, every element works in concert to create a bedroom that is both beautiful and deeply liveable.",
    "details": [
      "Carefully curated colour story running through walls, textiles, and accessories.",
      "Custom furniture proportioned to the room for a bespoke, fitted feel.",
      "Artful layering of textures — smooth lacquer, brushed metal, soft fabric, and natural wood.",
      "Statement lighting as a design element rather than an afterthought.",
      "Considered placement of art, mirrors, and decorative objects to add personality."
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
  },
  {
    "id": "kitchen-design-1",
    "coverImage": "https://i.ibb.co/Fb9RN3KX/contemporary-classic-kitchen-cabinets.jpg",
    "gallery": ["https://i.ibb.co/Fb9RN3KX/contemporary-classic-kitchen-cabinets.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Classic Kitchen Cabinets",
    "category": "Kitchen",
    "description": "A beautifully crafted contemporary-classic kitchen featuring refined cabinetry that bridges timeless tradition with modern clean lines. Rich finishes, elegant hardware, and a harmonious layout make this kitchen as functional as it is visually impressive.",
    "details": [
      "Shaker-style cabinet doors in a premium painted finish for a classic-contemporary look.",
      "Marble or stone countertops with subtle veining as a statement surface.",
      "Under-cabinet lighting illuminating the workspace with a warm, inviting glow.",
      "Integrated appliances keeping the aesthetic clean and uncluttered.",
      "Classic subway tile backsplash complementing the overall timeless character."
    ]
  },
  {
    "id": "kitchen-design-2",
    "coverImage": "https://i.ibb.co/xKqQ5psq/CRkv-VQz7-XZVMv-Rkw-HGd5-DM.jpg",
    "gallery": ["https://i.ibb.co/xKqQ5psq/CRkv-VQz7-XZVMv-Rkw-HGd5-DM.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Open Plan Modern Kitchen Design",
    "category": "Kitchen",
    "description": "A spacious open-plan kitchen designed for both grand entertaining and everyday family life. The layout maximizes flow and function, while premium finishes and a cohesive material palette create a space that is effortlessly stylish and welcoming.",
    "details": [
      "Open-plan layout integrating the kitchen seamlessly with the living and dining areas.",
      "Large kitchen island with a waterfall countertop as both a workspace and social hub.",
      "Full-height cabinetry maximizing storage from floor to ceiling.",
      "Statement pendant lighting cluster above the island for ambiance and task lighting.",
      "High-quality fixtures and fittings including a designer tap and undermount sink."
    ]
  },
  {
    "id": "kitchen-design-3",
    "coverImage": "https://i.ibb.co/zCB5RkZ/home-interior-design-ideas.jpg",
    "gallery": ["https://i.ibb.co/zCB5RkZ/home-interior-design-ideas.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Elegant Home Kitchen Interior",
    "category": "Kitchen",
    "description": "An elegantly designed home kitchen that merges practical daily use with an aspirational aesthetic. Thoughtful planning ensures every zone — prep, cooking, and storage — is optimised, while the refined finishes ensure the space always looks impeccable.",
    "details": [
      "Dual-tone cabinetry with contrasting upper and lower finishes for visual depth.",
      "Quartz countertops in a neutral tone offering durability and understated elegance.",
      "Bespoke tile backsplash with a geometric or handmade pattern as a design accent.",
      "Ergonomic pull-out storage and soft-close drawers for a premium user experience.",
      "Task and ambient lighting working in concert for a well-lit, functional kitchen."
    ]
  },
  {
    "id": "kitchen-design-4",
    "coverImage": "https://i.ibb.co/6RRWv1j3/image2.jpg",
    "gallery": ["https://i.ibb.co/6RRWv1j3/image2.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Sleek White Handleless Kitchen",
    "category": "Kitchen",
    "description": "A crisp, sleek handleless kitchen in pristine white that embodies minimalist perfection. The clean facade, seamless integrated appliances, and carefully chosen countertop material create a kitchen that is a joy to cook in and a delight to look at.",
    "details": [
      "Handleless cabinetry with Gola or J-pull profiles for a completely seamless look.",
      "High-gloss or matte white laminates giving the kitchen a bright, airy character.",
      "Thin-profile worktop in a contrasting dark or natural stone for visual balance.",
      "Integrated fridge, dishwasher, and oven concealed behind matching cabinet panels.",
      "Recessed ceiling lighting and under-cabinet LEDs ensuring even, shadow-free illumination."
    ]
  },
  {
    "id": "kitchen-design-5",
    "coverImage": "https://i.ibb.co/yFphN7bM/images-1.jpg",
    "gallery": ["https://i.ibb.co/yFphN7bM/images-1.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Bold Colour Kitchen with Statement Cabinetry",
    "category": "Kitchen",
    "description": "A bold and characterful kitchen that uses a striking colour palette to make a confident design statement. Far from conventional, this kitchen celebrates personality and creativity while maintaining a high level of practical functionality and quality.",
    "details": [
      "Bold cabinet colour — from deep navy to forest green or terracotta — as the design hero.",
      "Contrasting worktop in butcher block, marble, or light quartz balancing the bold hue.",
      "Open shelving sections displaying curated crockery, plants, and kitchen accessories.",
      "Statement brass or matte black tapware and hardware for a cohesive finishing touch.",
      "Large-format floor tiles in a complementary neutral tone grounding the bold palette."
    ]
  },
  {
    "id": "kitchen-design-6",
    "coverImage": "https://i.ibb.co/QF4BZWfQ/images-2.jpg",
    "gallery": ["https://i.ibb.co/QF4BZWfQ/images-2.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxury Acrylic Modular Kitchen",
    "category": "Kitchen",
    "description": "A high-impact luxury kitchen featuring premium high-gloss acrylic shutters that deliver a mirror-like brilliance. The design is a masterclass in modern luxury — every surface is chosen for its visual quality and its ability to withstand the rigours of daily cooking.",
    "details": [
      "High-gloss acrylic cabinet doors with a flawless reflective surface finish.",
      "Engineered stone countertops resistant to heat, stains, and everyday wear.",
      "Built-in tall larder units providing maximum pantry storage in a slim footprint.",
      "Integrated LED strip lighting beneath wall units casting a premium ambient glow.",
      "Stainless steel or tempered glass splashback complementing the high-shine aesthetic."
    ]
  },
  {
    "id": "kitchen-design-7",
    "coverImage": "https://i.ibb.co/FkmbLC4J/images.jpg",
    "gallery": ["https://i.ibb.co/FkmbLC4J/images.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Natural Wood & Stone Kitchen",
    "category": "Kitchen",
    "description": "A warm and organic kitchen design that celebrates the natural beauty of wood and stone. Combining raw textures with considered detailing, this kitchen achieves a grounded, timeless aesthetic that feels connected to nature without sacrificing modern comfort.",
    "details": [
      "Solid wood or wood-grain laminate cabinetry bringing natural warmth to the space.",
      "Live-edge or book-matched stone countertop as the room's artisanal centrepiece.",
      "Exposed stone or brick feature wall framing the cooking range or hob.",
      "Integrated herb garden shelf or indoor plant display adding life and freshness.",
      "Warm-toned vintage or industrial-inspired light fixtures completing the natural aesthetic."
    ]
  },
  {
    "id": "kitchen-design-8",
    "coverImage": "https://i.ibb.co/mCzF7SFW/interior-design-Chris-Veith-Stonington-Sept-6th-2019-3.jpg",
    "gallery": ["https://i.ibb.co/mCzF7SFW/interior-design-Chris-Veith-Stonington-Sept-6th-2019-3.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Refined Transitional Kitchen Design",
    "category": "Kitchen",
    "description": "A beautifully balanced transitional kitchen that sits at the intersection of traditional warmth and modern clarity. The design draws equally from classic craftsmanship and contemporary aesthetics, resulting in a kitchen that feels both enduring and fresh.",
    "details": [
      "Inset or partial-overlay cabinet doors with refined moulding detail for classic character.",
      "Island unit with a contrasting finish and seating overhang for casual dining.",
      "Farmhouse or apron-front sink as a nod to traditional kitchen design values.",
      "Mixed metal finishes — brushed nickel, unlacquered brass — for layered sophistication.",
      "Integrated wine fridge or coffee station catering to modern lifestyle needs."
    ]
  },
  {
    "id": "kitchen-design-9",
    "coverImage": "https://i.ibb.co/v4NVkbsT/beautiful-kitchen-interior-with-new-stylish-furniture-generative-ai-photo.jpg",
    "gallery": ["https://i.ibb.co/v4NVkbsT/beautiful-kitchen-interior-with-new-stylish-furniture-generative-ai-photo.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Stylish Contemporary Kitchen with New Furniture",
    "category": "Kitchen",
    "description": "A stunning contemporary kitchen fitted with brand-new stylish furniture and fixtures, showcasing the transformative impact of thoughtful interior design. Every element from the cabinetry to the countertops has been selected to create a beautiful and highly functional culinary space.",
    "details": [
      "New contemporary modular furniture in a premium finish creating a fresh, crisp aesthetic.",
      "Statement kitchen island serving as the focal point and primary prep area.",
      "Designer pendant lights hanging above the island for both function and visual impact.",
      "Premium appliances seamlessly integrated into the cabinetry for a unified look.",
      "Coordinated colour scheme tying together the flooring, walls, and kitchen furniture."
    ]
  },
  {
    "id": "office-design-1",
    "coverImage": "https://i.ibb.co/Zpwz63PH/images-5.jpg",
    "gallery": ["https://i.ibb.co/Zpwz63PH/images-5.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Open-Plan Office Workspace",
    "category": "Office",
    "description": "A bright and energising open-plan office workspace designed to maximise collaboration and productivity. The layout pairs ergonomic workstations with breakout zones, while the refined material palette and strategic lighting create a professional environment that teams genuinely want to work in.",
    "details": [
      "Open-plan modular workstation layout with adjustable-height desks for ergonomic flexibility.",
      "Vibrant accent walls and subtle brand colour integration to reinforce company identity.",
      "Dedicated quiet zones and informal breakout seating areas for focused or casual work.",
      "Recessed LED panel lighting with warm supplementary task lamps at each workstation.",
      "Cable management solutions and integrated storage keeping the space tidy and clutter-free."
    ]
  },
  {
    "id": "office-design-2",
    "coverImage": "https://i.ibb.co/vxh1pm7D/images-6.jpg",
    "gallery": ["https://i.ibb.co/vxh1pm7D/images-6.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Sleek Contemporary Corporate Office",
    "category": "Office",
    "description": "A sleek, corporate office interior that communicates professionalism and ambition from the moment you step inside. Clean lines, premium finishes, and a sophisticated monochromatic palette combine to create a space that is both highly functional and visually commanding.",
    "details": [
      "Floor-to-ceiling glazed partitions allowing natural light to penetrate deep into the floor plate.",
      "Premium dark laminate desks with integrated wire management and modesty panels.",
      "Bespoke reception counter in high-gloss lacquer with backlit brand logo panel.",
      "Acoustic ceiling baffles and soft furnishing panels to control noise in busy work areas.",
      "Statement art installations and indoor planting adding warmth to the corporate environment."
    ]
  },
  {
    "id": "office-design-3",
    "coverImage": "https://i.ibb.co/rKQ4XNg4/images.jpg",
    "gallery": ["https://i.ibb.co/rKQ4XNg4/images.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxury Private Executive Office Suite",
    "category": "Office",
    "description": "A commanding executive office suite designed to project authority, confidence, and refined taste. Rich materials, bespoke joinery, and curated lighting work in concert to create a workspace that is as impressive in its aesthetics as it is efficient in its functionality.",
    "details": [
      "Bespoke executive desk in premium veneer with integrated concealed storage and cable ports.",
      "Floor-to-ceiling bookcase joinery in dark walnut providing both storage and visual gravitas.",
      "Plush leather executive chair paired with coordinating visitor seating in a meeting corner.",
      "Indirect cove lighting supplemented by a statement desk lamp for layered illumination.",
      "Acoustic double-glazed glass partition walls ensuring complete privacy for sensitive discussions."
    ]
  },
  {
    "id": "office-design-4",
    "coverImage": "https://i.ibb.co/gZ6xgQQQ/Office-design-interior-for-a-conference-room-by-Courtney-B.jpg",
    "gallery": ["https://i.ibb.co/gZ6xgQQQ/Office-design-interior-for-a-conference-room-by-Courtney-B.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Designer Conference Room Interior",
    "category": "Office",
    "description": "A sophisticated conference room designed to make every meeting feel decisive and inspired. The space centres around a statement table, premium seating, and integrated AV technology, all wrapped in a refined material palette that sets the right tone for high-stakes conversations.",
    "details": [
      "Statement conference table in a premium stone or veneer finish as the room's focal piece.",
      "Executive leather conference chairs in a coordinating colour scheme around the table.",
      "Integrated ceiling-mounted projector and motorised screen for seamless presentations.",
      "Acoustic wall paneling in fabric-wrapped frames to eliminate echo and improve call quality.",
      "Dimmable lighting zones allowing the room to transition from bright brainstorming to focused presentation mode."
    ]
  },
  {
    "id": "office-design-5",
    "coverImage": "https://i.ibb.co/KcHWmKk0/Office-interior-design-services-contemporary-results-by-Decorilla-scaled.jpg",
    "gallery": ["https://i.ibb.co/KcHWmKk0/Office-interior-design-services-contemporary-results-by-Decorilla-scaled.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Office Interior Design",
    "category": "Office",
    "description": "A beautifully executed contemporary office interior that strikes the ideal balance between creative energy and professional focus. Every design decision — from the furniture selection to the lighting strategy — has been made to support both individual deep work and energetic team collaboration.",
    "details": [
      "Contemporary furniture mix featuring linear desks, lounge pods, and high stools at collaboration bars.",
      "Biophilic design elements including living plant walls and potted greenery throughout the space.",
      "Dynamic zoning with distinct areas for focused work, casual meetings, and social interaction.",
      "Premium flooring in a large-format tile or luxury vinyl plank for durability and aesthetics.",
      "Warm task lighting at individual workstations contrasting with cooler ambient ceiling lighting."
    ]
  },
  {
    "id": "office-design-6",
    "coverImage": "https://i.ibb.co/DHLwgyYh/2b41f09b-6831-4859-9c98-c964654f4ab8.jpg",
    "gallery": ["https://i.ibb.co/DHLwgyYh/2b41f09b-6831-4859-9c98-c964654f4ab8.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Minimalist Light-Filled Office Design",
    "category": "Office",
    "description": "A minimalist office design that champions light, openness, and clarity. The pared-back aesthetic reduces visual noise and mental clutter, allowing the architecture itself — clean lines, generous volumes, and beautiful natural materials — to do the talking.",
    "details": [
      "White or light-toned walls and ceilings maximising the sense of space and airiness.",
      "Minimal furniture in simple geometric forms with a consistent neutral colour palette.",
      "Expansive windows or glazed walls channelling maximum natural daylight into the workspace.",
      "Concealed storage solutions ensuring surfaces remain clean, calm, and clutter-free.",
      "Subtle warm-toned wood accents providing textural contrast against the white canvas."
    ]
  },
  {
    "id": "office-design-7",
    "coverImage": "https://i.ibb.co/cMRt3Fj/17.jpg",
    "gallery": ["https://i.ibb.co/cMRt3Fj/17.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Industrial Chic Office Interior",
    "category": "Office",
    "description": "An industrial-chic office interior that pairs raw, honest materials with refined contemporary detailing. Exposed structural elements, reclaimed textures, and warm Edison lighting create a workspace with genuine character and an atmosphere that fuels creative thinking.",
    "details": [
      "Exposed concrete ceiling with conduit runs and structural beams as honest design features.",
      "Reclaimed timber shelving and raw steel desk frames for an authentic industrial aesthetic.",
      "Edison filament pendant cluster lights providing warm, atmospheric overhead illumination.",
      "Polished concrete flooring with area rugs defining different work zones.",
      "Whiteboard or chalkboard feature walls for spontaneous ideation and team brainstorming."
    ]
  },
  {
    "id": "office-design-8",
    "coverImage": "https://i.ibb.co/0RW8zc9w/images-1.jpg",
    "gallery": ["https://i.ibb.co/0RW8zc9w/images-1.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Boutique Cabin Private Office",
    "category": "Office",
    "description": "An intimate boutique cabin office that merges the warmth of a private study with the efficiency of a professional workspace. Rich paneling, curated accessories, and layered lighting make this a space where productivity feels both purposeful and pleasurable.",
    "details": [
      "Wood-paneled walls in a rich veneer creating a cocooning, study-like atmosphere.",
      "Built-in bookshelves flanking the desk for easy access to references and display.",
      "Warm directional desk lamp combined with cove ceiling lighting for a comfortable work environment.",
      "Premium upholstered chair with a matching visitor sofa for informal in-office meetings.",
      "Personalised artwork and curated accessories giving the space a distinctive identity."
    ]
  },
  {
    "id": "office-design-9",
    "coverImage": "https://i.ibb.co/5h0Xp3qh/images-2.jpg",
    "gallery": ["https://i.ibb.co/5h0Xp3qh/images-2.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Biophilic Green Office Design",
    "category": "Office",
    "description": "A biophilic office design that brings the restorative power of nature directly into the workplace. Abundant greenery, natural materials, and organic forms create a workspace that measurably reduces stress, boosts mood, and improves employee wellbeing and output.",
    "details": [
      "Living plant wall as the office's centrepiece, providing both visual impact and air purification.",
      "Natural materials throughout — timber, stone, rattan — echoing the outdoor environment.",
      "Ample natural light supplemented by full-spectrum LED lighting to support circadian rhythms.",
      "Potted plants, hanging planters, and trailing vines integrated throughout all work zones.",
      "Earthy colour palette of greens, terracotta, sand, and warm wood tones throughout."
    ]
  },
  {
    "id": "office-design-10",
    "coverImage": "https://i.ibb.co/rRNK1g1P/images-3.jpg",
    "gallery": ["https://i.ibb.co/rRNK1g1P/images-3.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Premium Office Reception & Lobby",
    "category": "Office",
    "description": "A grand and welcoming office reception designed to make an immediate and lasting first impression. The space projects corporate excellence through its bold architectural statement, premium finishes, and meticulously choreographed visitor journey from entrance to waiting area.",
    "details": [
      "Sculptural reception counter in a high-gloss or stone finish with an illuminated brand logo.",
      "Double-height or feature wall in large-format stone panels creating a dramatic backdrop.",
      "Premium lounge seating in coordinated upholstery for a comfortable visitor waiting experience.",
      "Statement chandelier or geometric light installation as the lobby's visual centrepiece.",
      "Wayfinding signage with a cohesive branded identity guiding visitors through the space."
    ]
  },
  {
    "id": "office-design-11",
    "coverImage": "https://i.ibb.co/VcbXg1kx/images-4.jpg",
    "gallery": ["https://i.ibb.co/VcbXg1kx/images-4.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Creative Studio Office Design",
    "category": "Office",
    "description": "A vibrant and creatively charged studio office designed to inspire innovation and bold thinking. The space encourages free expression through its flexible layout, energetic colour accents, and curated mix of furniture that supports every working style from solo focus to group ideation.",
    "details": [
      "Flexible furniture on castors allowing instant reconfiguration for different team activities.",
      "Bold colour accent walls and graphic artwork reflecting the creative culture of the organisation.",
      "Mix of seating typologies — standing desks, lounge chairs, bar stools — for maximum versatility.",
      "Pin boards, magnetic walls, and glass writing surfaces throughout for visual project management.",
      "High-energy lighting zones transitioning from bright and daylight-balanced to warm and relaxed."
    ]
  },
  {
    "id": "commercial-design-1",
    "coverImage": "https://i.ibb.co/tPxmnChz/images-2.jpg",
    "gallery": ["https://i.ibb.co/tPxmnChz/images-2.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Commercial Retail Interior",
    "category": "Commercial",
    "description": "A dynamic and customer-centric retail interior designed to maximise dwell time and drive purchase decisions. The layout guides visitors through a carefully curated journey, with strategic product placement, compelling focal displays, and premium lighting creating an irresistible shopping experience.",
    "details": [
      "Strategic floor plan with defined pathways guiding the customer through key product zones.",
      "Premium display fixtures in lacquered finishes with integrated LED lighting for product illumination.",
      "Bold feature wall with backlit brand graphics establishing a strong visual identity.",
      "Warm ambient lighting layered with focused track lights to create drama and highlight merchandise.",
      "High-quality flooring in large-format tiles or polished concrete unifying the entire space."
    ]
  },
  {
    "id": "commercial-design-2",
    "coverImage": "https://i.ibb.co/BHVzFZqw/images-3.jpg",
    "gallery": ["https://i.ibb.co/BHVzFZqw/images-3.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Elegant Commercial Lounge & Hospitality Space",
    "category": "Commercial",
    "description": "A refined hospitality and lounge interior that delivers a premium guest experience through thoughtful spatial design. Luxurious seating arrangements, bespoke lighting fixtures, and a harmonious material palette create an atmosphere of comfort and sophisticated elegance.",
    "details": [
      "Curated lounge seating in premium upholstery creating intimate conversation areas.",
      "Statement pendant lighting installation as both a functional and decorative centrepiece.",
      "Rich material palette combining marble surfaces, warm wood accents, and plush soft furnishings.",
      "Acoustic wall treatments ensuring a comfortable noise level for guest comfort.",
      "Bespoke bar or service counter in a high-gloss or stone finish with integrated lighting."
    ]
  },
  {
    "id": "commercial-design-3",
    "coverImage": "https://i.ibb.co/r89Vp1b/images-4.jpg",
    "gallery": ["https://i.ibb.co/r89Vp1b/images-4.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Commercial Showroom Design",
    "category": "Commercial",
    "description": "A sleek and sophisticated commercial showroom designed to present products and services in their absolute best light. The open, flexible layout and premium finishes create a neutral yet impressive canvas that elevates every item on display.",
    "details": [
      "Open-plan showroom layout with flexible display systems adaptable to changing product lines.",
      "Seamless large-format flooring creating an expansive, uninterrupted visual field.",
      "Ceiling-mounted adjustable track lighting enabling precise product illumination from any angle.",
      "Minimalist display pedestals and wall-mounted shelving in premium materials.",
      "Glass partitions and feature walls separating zones while maintaining visual connectivity."
    ]
  },
  {
    "id": "commercial-design-4",
    "coverImage": "https://i.ibb.co/ns5F1vH3/images-7.jpg",
    "gallery": ["https://i.ibb.co/ns5F1vH3/images-7.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Upscale Commercial Dining & Café Interior",
    "category": "Commercial",
    "description": "A warmly designed commercial dining and café space that balances a welcoming atmosphere with efficient service flow. The interior layers natural textures, warm tones, and curated lighting to create the kind of environment where customers feel compelled to return.",
    "details": [
      "Mixed seating configurations including banquette booths, café tables, and counter bar seating.",
      "Warm timber finishes, exposed brick, and hanging greenery for a cosy, inviting character.",
      "Custom-designed service counter with integrated display cases and branded signage.",
      "Pendant lighting clusters above seating areas creating zones of intimate warmth.",
      "Durable, easy-clean floor and wall surfaces that maintain their aesthetic through heavy use."
    ]
  },
  {
    "id": "commercial-design-5",
    "coverImage": "https://i.ibb.co/W47xqVH5/images.jpg",
    "gallery": ["https://i.ibb.co/W47xqVH5/images.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Premium Commercial Wellness & Spa Centre",
    "category": "Commercial",
    "description": "A serene commercial wellness and spa interior designed to transport guests into a world of calm from the moment they arrive. Soft natural tones, organic materials, and carefully controlled lighting and acoustics combine to create a deeply restorative sensory environment.",
    "details": [
      "Soft neutral palette of ivory, stone, and warm wood tones promoting instant relaxation.",
      "Fluted stone or timber wall paneling providing tactile warmth and visual depth.",
      "Diffused ceiling lighting with no harsh shadows, creating a uniformly soft and calming glow.",
      "Plush reception desk in a natural stone or warm lacquer finish with a welcoming feel.",
      "Integrated indoor planting and water features adding organic, restorative sensory elements."
    ]
  },
  {
    "id": "commercial-design-6",
    "coverImage": "https://i.ibb.co/vbDBS2M/Arktura-Soft-Span-24-Duff-Phelps-Kroll-Chicago-IL-WEB-1-1600x1078.jpg",
    "gallery": ["https://i.ibb.co/vbDBS2M/Arktura-Soft-Span-24-Duff-Phelps-Kroll-Chicago-IL-WEB-1-1600x1078.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Architectural Commercial Ceiling Feature Design",
    "category": "Commercial",
    "description": "A bold commercial interior distinguished by its dramatic architectural ceiling feature. The sculptural overhead installation commands attention and transforms the entire spatial experience, demonstrating how a single design element can redefine a commercial space's identity and atmosphere.",
    "details": [
      "Custom architectural ceiling installation in a premium material creating a stunning visual canopy.",
      "Integrated lighting within the ceiling feature for both functional and dramatic effect.",
      "Cohesive flooring and wall treatments designed to complement and ground the ceiling statement.",
      "Acoustic engineering embedded within the ceiling design for optimal sound performance.",
      "Flexible open-plan layout beneath maximising usable floor space for varied commercial uses."
    ]
  },
  {
    "id": "commercial-design-7",
    "coverImage": "https://i.ibb.co/Rk3JrYfG/Commercial-Interior-Design-Steven-G.jpg",
    "gallery": ["https://i.ibb.co/Rk3JrYfG/Commercial-Interior-Design-Steven-G.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxury Commercial Interior by Steven G",
    "category": "Commercial",
    "description": "A masterfully executed luxury commercial interior that sets the gold standard for high-end design. Every element — from the hand-selected materials to the bespoke furniture and custom millwork — speaks to an unwavering commitment to excellence and an eye for timeless sophistication.",
    "details": [
      "Bespoke custom millwork and joinery throughout, crafted to exacting specifications.",
      "Hand-selected premium materials including exotic stone, fine veneers, and polished metals.",
      "Integrated art curation with statement pieces positioned as deliberate focal points.",
      "Precisely calibrated lighting design working across multiple layers for a luminous, inviting space.",
      "Seamless detailing and impeccable craftsmanship visible in every surface and junction."
    ]
  },
  {
    "id": "commercial-design-8",
    "coverImage": "https://i.ibb.co/674HKf5f/commercial-interior-design-724x724.jpg",
    "gallery": ["https://i.ibb.co/674HKf5f/commercial-interior-design-724x724.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Bold Commercial Interior Design Concept",
    "category": "Commercial",
    "description": "A striking commercial interior concept that proves great design can be both bold and functional. The space uses a daring design language — strong geometry, confident colour choices, and unexpected material combinations — to create an environment that is genuinely memorable and distinctive.",
    "details": [
      "Strong geometric forms in both the furniture selection and architectural detailing.",
      "Confident use of colour with a defined palette carried consistently across all surfaces.",
      "Dramatic material contrasts pairing matte and gloss, dark and light, rough and smooth.",
      "Statement furniture pieces acting as sculptural objects within the space.",
      "Purposeful spatial sequencing guiding visitors through a choreographed design experience."
    ]
  },
  {
    "id": "commercial-design-9",
    "coverImage": "https://i.ibb.co/s91p3JYM/commercial-interiors.jpg",
    "gallery": ["https://i.ibb.co/s91p3JYM/commercial-interiors.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Refined Corporate Commercial Interior",
    "category": "Commercial",
    "description": "A refined corporate commercial interior that projects confidence and professional credibility. The design achieves the rare balance between impressive and approachable — creating an environment that is clearly high-quality without feeling cold or intimidating to clients and visitors.",
    "details": [
      "Warm neutral colour palette in premium finishes conveying quality without ostentation.",
      "Custom reception and entrance feature setting a strong first impression for all visitors.",
      "Carefully selected artwork and décor pieces reflecting the organisation's values and culture.",
      "High-specification furniture and fixtures in consistent, coordinated finishes throughout.",
      "Zoned floor plan efficiently accommodating client-facing, collaborative, and private areas."
    ]
  },
  {
    "id": "commercial-design-10",
    "coverImage": "https://i.ibb.co/r2Znv3hS/images-1.jpg",
    "gallery": ["https://i.ibb.co/r2Znv3hS/images-1.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Contemporary Commercial Space Design",
    "category": "Commercial",
    "description": "A fresh and contemporary commercial space designed for the modern era of business. The interior embraces flexibility, natural light, and a human-centred approach to create an environment that genuinely supports the wellbeing and effectiveness of everyone who uses it.",
    "details": [
      "Flexible, adaptable layout supporting a variety of commercial uses and configurations.",
      "Maximised natural light through strategic glazing and light-reflective interior finishes.",
      "Biophilic elements including indoor planting improving air quality and occupant wellbeing.",
      "Durable, sustainable materials selected for longevity, aesthetics, and environmental responsibility.",
      "Technology-integrated spaces with discreet AV, connectivity, and environmental controls."
    ]
  },
  {
    "id": "living-room-design-1",
    "coverImage": "https://i.ibb.co/WWLNq3wL/B4-U1-Dx-Mg.jpg",
    "gallery": ["https://i.ibb.co/WWLNq3wL/B4-U1-Dx-Mg.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Warm Contemporary Living Room with Natural Accents",
    "category": "Living Room",
    "description": "A warm and inviting contemporary living room that uses natural textures and earthy tones to create a deeply comfortable family space. Carefully layered furnishings, organic materials, and considered lighting produce a room that feels both stylish and genuinely liveable.",
    "details": [
      "Plush L-shaped sectional sofa in a warm neutral fabric anchoring the seating zone.",
      "Natural wood coffee table and side units adding organic warmth to the space.",
      "Textured feature wall in a warm tone creating depth and a cosy atmosphere.",
      "Layered lighting with a statement floor lamp, table lamps, and recessed ceiling lights.",
      "Curated décor accessories — vases, books, and plants — adding personality and life."
    ]
  },
  {
    "id": "living-room-design-2",
    "coverImage": "https://i.ibb.co/q3yJ1Mry/Baltimore-L-Shape-Light-Grey-Faux-Leather-Corner-Sofa-Landscape-1-1.jpg",
    "gallery": ["https://i.ibb.co/q3yJ1Mry/Baltimore-L-Shape-Light-Grey-Faux-Leather-Corner-Sofa-Landscape-1-1.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Light Grey Faux Leather Corner Sofa Living Room",
    "category": "Living Room",
    "description": "A clean and sophisticated living room centred around a sweeping light grey faux leather corner sofa. The neutral colour palette and streamlined furniture silhouettes create a bright, airy space that feels both modern and effortlessly elegant.",
    "details": [
      "Generous L-shaped corner sofa in light grey faux leather as the room's defining piece.",
      "Minimalist coffee table in glass or light wood complementing the sofa's clean aesthetic.",
      "Neutral colour palette of white, grey, and warm beige creating a calm, cohesive look.",
      "Statement ceiling light or pendant adding visual interest without overwhelming the space.",
      "Soft area rug in a subtle texture grounding the seating arrangement."
    ]
  },
  {
    "id": "living-room-design-3",
    "coverImage": "https://i.ibb.co/Z1N0qzy3/creating-symmetry-in-modern-living-rooms.jpg",
    "gallery": ["https://i.ibb.co/Z1N0qzy3/creating-symmetry-in-modern-living-rooms.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Symmetrical Modern Living Room Design",
    "category": "Living Room",
    "description": "A masterclass in symmetry and balance, this modern living room uses a carefully mirrored layout to create a sense of order and visual calm. Matching furniture pairs, centred artwork, and a considered spatial plan produce a space of elegant, composed sophistication.",
    "details": [
      "Perfectly symmetrical seating arrangement with matching sofas or armchairs on either side.",
      "Centred coffee table and TV unit creating a strong visual axis through the room.",
      "Paired bedside-style table lamps flanking the sofa for balanced ambient lighting.",
      "Coordinated cushion arrangement and throw placement reinforcing the symmetrical theme.",
      "Feature wall artwork or mirror centred precisely to anchor the room's focal point."
    ]
  },
  {
    "id": "living-room-design-4",
    "coverImage": "https://i.ibb.co/NdF53zJS/cs-2023-AT-Glade-Danielle-2023-Glade-A6-0036-Danielle.jpg",
    "gallery": ["https://i.ibb.co/NdF53zJS/cs-2023-AT-Glade-Danielle-2023-Glade-A6-0036-Danielle.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Fresh Botanical Living Room Interior",
    "category": "Living Room",
    "description": "A fresh and vibrant living room interior that brings the outdoors in through abundant botanical elements and a light, nature-inspired colour palette. The space feels alive, energising, and supremely welcoming — a true sanctuary for modern family life.",
    "details": [
      "Lush indoor plants of varying heights creating a layered, garden-like atmosphere.",
      "Soft sage green or warm white sofa complementing the botanical colour palette.",
      "Natural woven rattan or seagrass accessories adding artisanal texture.",
      "Maximised natural light with sheer curtains filtering the sunshine beautifully.",
      "Botanical print artwork or wallpaper panel bringing pattern and colour to the space."
    ]
  },
  {
    "id": "living-room-design-5",
    "coverImage": "https://i.ibb.co/67syVRch/images-1.jpg",
    "gallery": ["https://i.ibb.co/67syVRch/images-1.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Luxe Dark-Toned Living Room",
    "category": "Living Room",
    "description": "A boldly conceived dark-toned living room that uses rich, deep colours to create an atmosphere of dramatic luxury. Far from gloomy, the space is elevated by curated lighting, lustrous textures, and carefully chosen reflective accents that bring warmth and glamour.",
    "details": [
      "Deep charcoal, navy, or forest green walls creating an enveloping, intimate atmosphere.",
      "Velvet or mohair sofa in a jewel tone or complementary dark hue as the room's centrepiece.",
      "Gold or brass accent fixtures — lamp bases, picture frames, table legs — adding warmth.",
      "Statement chandelier or sculptural pendant providing both light and visual drama.",
      "Layered rugs, plush cushions, and tactile throws adding depth and sensory richness."
    ]
  },
  {
    "id": "living-room-design-6",
    "coverImage": "https://i.ibb.co/ZzmdB7Hs/images-2.jpg",
    "gallery": ["https://i.ibb.co/ZzmdB7Hs/images-2.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Bright Scandi Minimalist Living Room",
    "category": "Living Room",
    "description": "A bright and beautifully restrained Scandinavian-minimalist living room where every element earns its place. The pared-back aesthetic, light wood tones, and crisp white palette create a space of extraordinary clarity and quiet elegance that is a genuine pleasure to inhabit.",
    "details": [
      "Light birch or oak wooden furniture in clean, Scandinavian proportions throughout.",
      "Crisp white walls and ceiling maximising the sense of light and space.",
      "Simple, functional sofa in natural linen or cotton in an off-white or soft grey.",
      "Minimal clutter with a 'less is more' approach to accessories and décor.",
      "Sheepskin throws, knit cushions, and a simple rug adding warmth and hygge."
    ]
  },
  {
    "id": "living-room-design-7",
    "coverImage": "https://i.ibb.co/NnKMgDZs/images.jpg",
    "gallery": ["https://i.ibb.co/NnKMgDZs/images.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Classic Elegant Living Room with Fireplace",
    "category": "Living Room",
    "description": "A classically elegant living room anchored by a beautiful fireplace that serves as the room's natural heart. Traditional architectural details, refined upholstery, and a warm colour palette combine to create a space of enduring charm and timeless sophistication.",
    "details": [
      "Statement fireplace with a detailed mantel as the undisputed focal point of the room.",
      "Classic upholstered sofas and armchairs arranged symmetrically around the hearth.",
      "Crown moulding, skirting boards, and ceiling rose adding classical architectural character.",
      "Rich patterned or plain curtains in a complementary colour puddling gracefully to the floor.",
      "Antique or vintage-inspired accessories giving the room a sense of history and soul."
    ]
  },
  {
    "id": "living-room-design-8",
    "coverImage": "https://i.ibb.co/mVV3wtnB/lavender2-dd461d67ee8240d5bbca3e0b09e9c41c.png",
    "gallery": ["https://i.ibb.co/mVV3wtnB/lavender2-dd461d67ee8240d5bbca3e0b09e9c41c.png"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Soft Lavender & Blush Living Room",
    "category": "Living Room",
    "description": "A dreamy living room drenched in soft lavender and blush tones that feels like stepping into a floral reverie. The delicate colour palette, soft textures, and feminine silhouettes create a space of romantic charm and soothing, gentle luxury.",
    "details": [
      "Soft lavender or lilac upholstered sofa as the room's standout centrepiece.",
      "Blush pink and mauve accents in cushions, throws, and curtain panels.",
      "White or pale cream walls amplifying the softness of the pastel colour story.",
      "Delicate gold or rose gold metallic accents in lamps, picture frames, and side tables.",
      "Fresh or dried floral arrangements reinforcing the room's soft, romantic character."
    ]
  },
  {
    "id": "living-room-design-9",
    "coverImage": "https://i.ibb.co/GfqBc0zr/southernliving-livingroomlayoutmistakes-harperharris-Laurey-Glenn-065b1e66d50b4608bf3e74a1f0b0f452.jpg",
    "gallery": ["https://i.ibb.co/GfqBc0zr/southernliving-livingroomlayoutmistakes-harperharris-Laurey-Glenn-065b1e66d50b4608bf3e74a1f0b0f452.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Well-Planned Living Room Layout Design",
    "category": "Living Room",
    "description": "A thoughtfully planned living room layout that demonstrates how intelligent spatial design can transform a room's functionality and flow. The furniture arrangement creates clearly defined zones for conversation, relaxation, and entertainment without sacrificing the space's sense of openness.",
    "details": [
      "Furniture arranged to create a clear conversation zone with every seat facing the focal point.",
      "Sufficient circulation space maintained around all furniture for comfortable daily movement.",
      "Balanced visual weight achieved through considered placement of large and small pieces.",
      "Defined zones for different activities — reading, lounging, and socialising — within one room.",
      "Cohesive colour palette tying together diverse furniture pieces into a unified whole."
    ]
  },
  {
    "id": "living-room-design-10",
    "coverImage": "https://i.ibb.co/dwR0whJR/image.jpg",
    "gallery": ["https://i.ibb.co/dwR0whJR/image.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Modern Open-Plan Living & Dining Space",
    "category": "Living Room",
    "description": "A seamlessly designed open-plan living and dining space that exemplifies contemporary family living at its finest. The thoughtful integration of both zones creates a fluid, sociable environment perfect for entertaining guests or simply enjoying everyday family moments.",
    "details": [
      "Fluid open-plan layout connecting the living and dining areas in one cohesive space.",
      "Consistent flooring material running across both zones to unify the open-plan flow.",
      "Distinct furniture groupings defining each area without physical barriers.",
      "Shared lighting design linking the spaces — pendant over dining table, floor lamp in living zone.",
      "Statement feature element — a media wall or fireplace — visible and enjoyed from both areas."
    ]
  },
  {
    "id": "living-room-design-11",
    "coverImage": "https://i.ibb.co/PzwZx2gH/8-Wedgewood-Mews-1-min-scaled-e1727868409423-1024x630.jpg",
    "gallery": ["https://i.ibb.co/PzwZx2gH/8-Wedgewood-Mews-1-min-scaled-e1727868409423-1024x630.jpg"],
    "beforeAfter": null,
    "year": 2025,
    "title": "Premium Residential Living Room Showcase",
    "category": "Living Room",
    "description": "A premium residential living room that showcases the very best of contemporary interior design. From the investment-quality furniture to the bespoke architectural detailing, every aspect of this space has been designed to deliver an exceptional living experience.",
    "details": [
      "Premium bespoke sofa and armchairs upholstered in high-quality fabric or leather.",
      "Architectural detailing — paneled walls, coffered ceiling, or built-in joinery — adding character.",
      "Curated artwork collection displayed with intention and professional lighting.",
      "Investment-quality rug anchoring the seating arrangement with pattern and texture.",
      "Bespoke window treatments in a premium fabric complementing the overall design vision."
    ]
  }
];
