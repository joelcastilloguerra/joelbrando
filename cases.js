// ── Case Study Data ──
const BASE = 'https://images.squarespace-cdn.com/content/v1/6516ebba36e6816404da7be0/';
const ASSETS_BASE = location.hostname === 'localhost'
  ? 'website_assets/'
  : 'https://pub-545adea3391841c896c875b02d24aa3a.r2.dev/website_assets/';
const asset = url => url && !url.startsWith('http') ? ASSETS_BASE + url : url;
window.CASES = {
  'hm': {
    title: 'Beauty',
    subtitle: 'FOOH Campaign Series',
    category: '3D · VFX · FOOH',
    client: 'H&M / Sokos',
    year: '2024–2025',
    role: 'VFX & Compositing',
    collab: 'Locus Solus Studio',
    heroImg: BASE + '482ca887-68be-48af-8eb7-0b1beea8333b/ezgif-8a953634f6729c.gif',
    heroVideo: 'Selected%20work/Beauty/hm-beauty-card-thumb.mp4',
    heroPosition: 'top',
    tools: ['Blender', 'Octane', 'SynthEyes', 'DaVinci Resolve'],
    overview: 'A series of Fake Out of Home campaign films for H&M Beauty and partner brands — blending 3D and real-world footage to bring beauty product launches to life across European cities.',
    sections: [
      {
        title: 'Store Loading',
        date: 'December 2024',
        body: 'A FOOH film for H&M Beauty, capturing the moment product deliveries arrive at the store — a campaign built around the retail drop as spectacle.\n\nSince the store was still under construction at the time of production, a full 3D recreation of the building facade was built from reference photography to bring the concept to life. I handled the VFX integration and compositing, merging the 3D environment seamlessly with real-world footage.',
        video: 'Selected%20work/Beauty/V3-blur.mp4'
      },
      {
        title: 'Maybelline × H&M Beauty — Light as Air',
        date: 'March 2025',
        body: 'Maybelline partnered with H&M Beauty to promote their new foundation — the kind that feels weightless on your skin. To translate that promise into something you can actually see, we used VFX to make the products float effortlessly through the store environment.\n\nThe challenge was keeping the floatation believable rather than jarring — every product needed to feel like it genuinely belonged mid-air. I worked on the VFX integration and compositing, blending 3D-tracked product animation with live store footage.',
        video: 'Selected%20work/Beauty/Maybelline_V03.mp4'
      },
      {
        title: 'Sokos × Moira — Amsterdam Central',
        date: 'October 2025',
        body: 'For Finnish beauty retailer Sokos, a Fake Out of Home video was created to launch Moira\'s makeup line — brought to life at Amsterdam Central. \n\nThe concept leans into the scale of the location: Moira\'s bold colour palette spilling across the station\'s architecture, turning a familiar landmark into something unexpected. Rendered in Blender Octane for maximum visual fidelity.',
        video: 'Selected%20work/Beauty/Moira_V02.mp4'
      }
    ]
  },
  'five-guys': {
    title: 'Five Guys',
    subtitle: '3D Campaign Series',
    category: '3D · Brand · FOOH',
    client: 'Five Guys',
    year: '2025–2026',
    role: '3D Design & Animation',
    collab: null,
    heroImg: BASE + 'a09afd45-381f-4650-8b3b-19965d5be280/ezgif-134aadc31e1e3d.gif',
    heroVideo: 'Selected%20work/Five%20Guys/five-guys-card-thumb.mp4',
    tools: ['Blender', 'Houdini', 'Photoshop', 'Illustrator', 'SynthEyes', 'DaVinci Resolve'],
    overview: 'An ongoing series of 3D campaign films for Five Guys — from a Combideal debut and a cherry shake launch to a Fake Out of Home video marking their first Scandinavian opening.',
    sections: [
      {
        title: 'Combideal Debut',
        date: 'June 2025',
        body: 'For the launch of Five Guys\' first combo deal menu, I developed a campaign film to introduce the new offer across their digital channels.\n\nThe food needed to look both photorealistic and irresistible — playful in tone, but never cartoonish. Houdini (a 3D VFX software) handled the simulation work: fries cascading into frame, a drink bursting with energy. Every element was lit individually for maximum control before being composited into a cohesive final look. The layout was also built with versioning in mind — clear space for copy means the film can be adapted into multiple languages without a re-edit.',
        video: 'Selected%20work/Five%20Guys/Five-Guys_Combideal_V04.2-nograin-5noise-no-copy.mp4',
        btsVideo: 'Selected%20work/Five%20Guys/FG%20Combideal%20-%20Breakdown.mp4'
      },
      {
        title: 'Cherry Shake',
        date: 'April 2026',
        body: 'For the launch of their new cherry shake, Five Guys needed a film that could hold its own across social channels and in-store POS screens.\n\nThe approach was deliberately cinematic — a liquid-simulation-heavy animation built in Houdini and Blender, structured around slow motion so the cherry and liquid had room to move with real drama. The deep red palette carries the mood, letting the colour do the talking. Built to stop the scroll.',
        video: 'Selected%20work/Five%20Guys/Five-Guys_Cherry_1920x1080.mp4'
      },
      {
        title: 'Stockholm Opening',
        date: 'February 2025',
        body: 'For the first Five Guys opening in Scandinavia, they wanted to go big. The concept came from the brand\'s most iconic detail: the brown paper bag of fries, always overflowing.\n\nWorking with drone footage captured at the new Stockholm location, the building above the restaurant was transformed into a giant brown bag — and then the fries exploded across the scene. Camera tracking was handled in SynthEyes, 3D integration in Blender, and Houdini (3D VFX software) drove the large-scale fry simulation. The result landed far beyond Stockholm on social.',
        video: 'Selected%20work/Five%20Guys/Five-Guys_Stockholm_FOOH_V5_With-Sound.mp4'
      }
    ]
  },
  'sightings': {
    title: 'In the Wild',
    subtitle: 'Selected FOOH Work',
    category: '3D · VFX · FOOH',
    client: 'Various',
    year: '2024',
    role: '3D & VFX',
    collab: 'Various',
    heroImg: null,
    heroVideo: 'Selected%20work/Other/sightings-card-thumb.mp4',
    tools: ['Blender', 'SynthEyes', 'DaVinci Resolve'],
    overview: 'FOOH work across clients, cities, and categories — a collection that doesn\'t belong to a single campaign series, but demonstrates the same eye across different briefs.',
    sections: [
      {
        title: 'Pepsi — Zero Sugar',
        date: '2024',
        collab: 'Unit9',
        body: 'A FOOH billboard for Pepsi Zero Sugar, placed in the streets of Paris.\n\nThe animation uses chrome-plated botanicals and fruit forms drifting across a vivid pink backdrop — keeping the visual language bold and premium while referencing the flavours of the product. Composited into real street footage for the final delivery.',
        video: 'Selected%20work/Other/Pepsi_Billboard_V06.mp4'
      },
      {
        title: 'NockNock Art Fair',
        date: '2024',
        collab: null,
        body: 'A FOOH announcement for NockNock, an independent art fair held in Amsterdam.\n\nGiant art supplies — spray cans, canvases, brushes, rulers — erupt from the top of the venue\'s iconic cylindrical industrial building, turning the landmark itself into an advertisement for what\'s happening inside.',
        video: 'Selected%20work/Other/NockNockArtfair_FOOH_V2.1_Joel_Brando.mp4'
      },
      {
        title: 'Sokos — Christmas',
        date: '2024',
        collab: 'Locus Solus Studio',
        body: 'A Christmas FOOH campaign for Finnish department store Sokos.\n\nTheir flagship Helsinki building is transformed into a giant gift — wrapped in dark satin fabric, tied with a red bow, snow settling across the scene. The store becomes the present. Made in Blender with particle simulation for the snowfall.',
        video: 'Selected%20work/Other/V6_02.mp4'
      }
    ]
  },
  'personal': {
    title: 'Personal Work — 3D',
    subtitle: 'Experimental 3D & CGI',
    category: '3D · Art Direction · Print',
    client: 'Personal',
    year: '2022–2025',
    role: 'Art Direction & 3D',
    collab: null,
    heroImg: 'Selected%20work/Personal/thousand-eyes.webp',
    heroVideo: 'Selected%20work/Personal/personal-card-thumb.mp4',
    tools: ['Blender', 'Octane', 'Houdini', 'Photoshop', 'Illustrator'],
    overview: 'A collection of personal 3D and design work — the experiments, the self-directed pieces, and the work made purely because it needed to exist. No brief, no client, no constraints.',
    sections: [
      {
        title: 'Time is a Contemporary Fetish',
        date: '2024',
        body: 'A looping animated piece exploring the modern obsession with time — measured, spent, performed.\n\nTime is treated less as a resource and more as a ritual object: something to be accumulated, displayed, and ultimately consumed. The loop is intentional. Made in Blender.',
        video: 'Selected%20work/Personal/Time_is_a_contemporary_fetish.mp4'
      },
      {
        title: 'Chrome Studies — Surface & Skin',
        date: '2023–2024',
        body: 'A series of personal renders exploring material contrast — chrome, crystal and reflective surfaces placed in direct tension with organic human form.\n\nEach piece is an exercise in lighting and material fidelity, using Cycles to push physically accurate renders as far as possible. Skin as surface. Surface as skin.',
        gallery: [
          'Selected%20work/Personal/thousand-eyes.webp',
          'Selected%20work/Personal/diamond-head-final.webp'
        ],
        galleryAspect: '2/3'
      },
      {
        title: 'Poster Studies',
        date: '2022–2024',
        body: 'Experimental poster work made outside of client briefs — a space to push layout, collage, and visual density to places briefs rarely allow.\n\nEach piece mixes 3D renders, photography, typography, and found imagery. Influences range from Letraset-era print to underground zine culture.',
        gallery: [
          'Selected%20work/Personal/legacy-poster-by-joel-castillo-guerra-%40joelbrando_v6.webp',
          'Selected%20work/Personal/drive-my-car-by-joel-castillo-guerra.webp',
          'Selected%20work/Personal/falling-poster-by-joel-castillo-guerra.webp'
        ]
      }
    ]
  },
  'tommy-pride': {
    title: 'Tommy Pride',
    subtitle: 'In-Store Campaign',
    category: 'Graphic Design · Retail',
    client: 'Tommy Hilfiger',
    year: 'September 2022',
    role: 'Graphic Design',
    collab: 'Colourcake',
    heroImg: 'Selected%20work/Tommy%20Hilfiger/ezgif-66ac8c9f763915.gif',
    tools: ['Blender', 'Photoshop', 'Illustrator', 'InDesign'],
    overview: 'In-store campaign for Tommy Hilfiger during Pride, designed to highlight the Tommy Photobooth and celebrate self-expression through colour and inclusivity.',
    sections: [
      {
        title: 'The Posters',
        date: 'September 2022',
        body: 'To promote the Tommy Photobooth during Pride, I designed two in-store posters — each in a different style to reflect the diversity of the audience.\n\nOne is bold and expressive: loud typography, Polaroid snapshots, a rainbow arc sweeping across the frame. The other is more minimal — clean layout, product-led, refined. Both use the rainbow to celebrate inclusivity while staying fully on-brand. The goal was to grab attention, invite people to snap a photo, and share the moment.',
        gallery: [
          'Selected%20work/Tommy%20Hilfiger/POS-01%20%281%29.webp',
          'Selected%20work/Tommy%20Hilfiger/POS-0212%20%281%29.webp'
        ]
      },
      {
        title: 'Stickers & Badges',
        date: null,
        body: 'Alongside the main posters, a set of stickers and badge designs extended the campaign into shareable print assets — giving the Pride activation something tactile and collectible in-store.',
        img: 'Selected%20work/Tommy%20Hilfiger/Artboard%2B1.webp'
      }
    ]
  },
  'johnnie-walker': {
    title: 'Johnnie Walker',
    subtitle: 'Blue Label × Friandries',
    category: 'Packaging Design · Brand Collaboration',
    client: 'Johnnie Walker / Diageo',
    year: '2024',
    role: 'Art Direction · Packaging Design',
    collab: 'Colourcake',
    heroImg: 'Selected%20work/Johnnie%20Walker/IMGL3923.webp',
    heroPosition: 'center',
    tools: ['Illustrator', 'Photoshop', 'Blender'],
    overview: 'A limited-edition gift box designed for the collaboration between Johnnie Walker Blue Label and Friandries Chocolates — a piece built to be kept, not thrown away. Deep navy, gold foil, marbled interiors, and a box construction worthy of what\'s inside.',
    sections: [
      {
        title: 'The Packaging',
        date: '2024',
        body: 'The brief called for something that felt at home next to a bottle of Blue Label — which means it needed to earn its shelf space. The result is a rigid navy box dressed in signature JW typography, with metallic turquoise script wrapping the exterior edge and a marble-pattern interior that echoes the slow swirl of a fine Scotch.\n\nGold foil stamping carries the Blue Label wordmark. The Friandries name sits below in a clean serif — confident enough to share the stage without competing.',
        gallery: [
          'Selected%20work/Johnnie%20Walker/IMGL3923.webp',
          'Selected%20work/Johnnie%20Walker/IMGL3907.webp'
        ]
      },
      {
        title: 'The Process',
        date: '2024',
        body: 'Structural dieline development and 3D prototyping were central to the process — working out how the box would open, how the chocolates would sit, and how the whole thing would feel in someone\'s hands before a single physical unit was produced.',
        img: 'Selected%20work/Johnnie%20Walker/Artboard%2B1%404x.webp',
        gallery: [
          'Selected%20work/Johnnie%20Walker/johhnie_walker_friandries_chocolate_box_render.webp',
          'Selected%20work/Johnnie%20Walker/JWxFriandries_edit.webp'
        ]
      }
    ]
  },
  'personal-graphic': {
    title: 'Personal Work — Graphic',
    subtitle: 'Self-Initiated Poster & Print',
    category: 'Graphic Design · Personal',
    client: 'Personal',
    year: '2021–2024',
    role: 'Art Direction & Design',
    collab: null,
    heroImg: 'Selected%20work/Personal%20graphic%20work/ISSEY-87.webp',
    tools: ['Photoshop', 'Illustrator'],
    overview: 'A collection of self-initiated graphic work — posters made outside of client briefs, exploring typography, colour, and image-making on personal terms.',
    sections: [
      {
        title: 'Issey Miyake \'87',
        date: 'February 2023',
        body: 'A response to the iconic 1987 Issey Miyake collection. The poster treats the garment as a graphic object — flattened, distorted, and re-examined through experimental typography and colour.\n\nHigh-contrast image manipulation gives the composition a woodcut-like quality, compressing what was physical and three-dimensional into something purely optical.\n\nThe two photographs below are the source images — archival fashion photographs from the original 1987 collection that served as the raw visual material for the poster.',
        img: 'Selected%20work/Personal%20graphic%20work/ISSEY-87.webp',
        gallery: [
          'Selected%20work/Personal%20graphic%20work/81922_f748892d3dbbe61b_b.webp',
          'Selected%20work/Personal%20graphic%20work/ed07fe3f31a99899c769c54b31ce68e8.webp'
        ],
        galleryWidth: '100%'
      },
      {
        title: 'Dior SS — Men \'24',
        date: 'March 2024',
        body: 'Three poster variations built around the Dior Spring/Summer Men\'s 2024 collection. Each piece works as a standalone image and as part of a set — exploring the tension between luxury restraint and graphic maximalism.\n\nThe series uses the collection\'s garments as raw material: colour-blocked, reframed, and stripped of context to become compositional elements in their own right.',
        gallery: [
          'Selected%20work/Personal%20graphic%20work/dior-ss-m-24Artboard%201.webp',
          'Selected%20work/Personal%20graphic%20work/dior-ss-m-24Artboard%201%20copy%202.webp',
          'Selected%20work/Personal%20graphic%20work/dior-ss-m-24Artboard%201%20copy%203.webp'
        ]
      },
      {
        title: 'Fantasy Soul',
        date: 'August 2021',
        body: 'A festive poster built around a dream soul music lineup. Vintage concert poster techniques were studied and reconstructed — embracing uneven registration, rough halftones, and layered colour as part of the aesthetic rather than something to correct.\n\nThe result feels found rather than made.',
        img: 'Selected%20work/Personal%20graphic%20work/fantasy-soul-v2.webp'
      }
    ]
  },
  'posters': {
    title: 'Print Work',
    subtitle: 'Tommy Hilfiger · James Dean · CitizenM',
    category: 'Poster Design · Print',
    client: 'Various',
    year: '2022–2023',
    role: 'Graphic Design',
    collab: 'Various',
    heroImg: 'Selected%20work/Posters/DotInk_James_Dean_Poster_5512x7874px.webp',
    tools: ['Blender', 'Photoshop', 'Illustrator', 'InDesign'],
    overview: 'A collection of poster work across clients and contexts — from retail campaigns and gig print to a film poster and event posters dotting the streets of New York.',
    sections: [
      {
        title: 'Tommy Hilfiger',
        date: '2022–2023',
        collab: 'Colourcake',
        body: 'Over time, I\'ve had the privilege of working on several projects for Tommy Hilfiger. Here are two of the highlights.\n\nThe Christmas campaign poster was built around a 3D-rendered TH ornament — made in Blender, then placed into a layered InDesign layout. The ornament carries the brand monogram in gold; a tartan surface grounds it in Tommy\'s heritage. Ran across in-store POS and print for the French market.\n\nThe ADE poster was for Appelsap\'s Amsterdam Dance Event showcase, sponsored by Tommy Jeans. Built to work hard on the street — duotone treatment, maximum contrast, all essential info readable at a glance.',
        img: 'Selected%20work/Posters/Tommy/th-christmas-ornaments.webp',
        gallery: [
          'Selected%20work/Posters/Tommy/kevin-nana-fofie-TH-appelsap-ADE-poster-v3.webp',
          'Selected%20work/Posters/Tommy/51a36652-177c-4a0e-a7ff-0abf5fcfdd92.webp'
        ]
      },
      {
        title: 'James Dean',
        date: '2023',
        collab: null,
        body: 'A film poster for the short film James Dean, directed by Gerson Oratmangoen for Dotink Cinema — a story about a young actor\'s pursuit of fame and the harsh realities he faces along the way. As he strives to make a name for himself, he falls victim to manipulation by industry power players.\n\nThe minimalist design reflects the film\'s emotional depth, using stark contrasts to convey the tension, vulnerability, and struggle at the heart of the story. Black and white only — no room for anything else.',
        img: 'Selected%20work/Posters/DotInk_James_Dean_Poster_5512x7874px.webp',
        gallery: [
          'Selected%20work/Posters/james-dean-source-image-01.webp',
          'Selected%20work/Posters/james-dean-source-image-02.webp'
        ],
        galleryWidth: '100%',
        installVideo: 'Selected%20work/Posters/IMG_9563.mp4'
      },
      {
        title: 'CitizenM — NYC',
        date: 'April 2023',
        collab: 'Colourcake',
        body: 'When CitizenM NYC hotel decided to host a rooftop party, the challenge was to make it known far and wide. What better way to achieve this than by dotting the city with posters?\n\nThe concept was straightforward yet visually striking. These posters, when stacked together in layers, formed an attention-grabbing visual that couldn\'t be missed — cocktails in pink and black on white, the same image at different scales, repeating across New York City walls.',
        gallery: ['Selected%20work/Posters/cM-posters-on-wall.webp']
      }
    ]
  }
};
