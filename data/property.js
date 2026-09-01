/* =============================================================================
   PROPERTY CONFIGURATION — the ONLY file you edit for a new property.
   -----------------------------------------------------------------------------
   1. Duplicate the master template folder
   2. Edit this file
   3. Drop new photos in /photos (paths below)
   4. Change branding colors below
   5. Publish (any free static host)
   -----------------------------------------------------------------------------
   Leave any image value as "" to show a labeled placeholder instead.
   Delete any array item you don't need. Empty arrays hide their section.
   NEVER put door codes, alarm codes or sensitive data in this file —
   a static URL is public. Use the "sent separately" placeholder pattern.
   ========================================================================== */

(function () {
if (window.propertyData) return;

var propertyData = {

  property: {
    name: "The Stay",
    tagline: "A quiet retreat, five minutes from downtown",
    description:
      "A light-filled three-bedroom home with a hot tub, fast Wi-Fi and a walkable street. Everything you need is in this guide.",
    address: "1428 Juniper Lane",
    city: "Bend",
    state: "OR",
    zip: "97701",
    heroImage: "",                     // e.g. "photos/hero.jpg"
    heroImageLabel: "Hero photo — exterior or best room, 1600×1200",
    guideQrImage: ""                   // optional PNG of this guide's URL
  },

  branding: {
    primaryColor: "#1F3A33",           // headers, nav, primary buttons
    secondaryColor: "#F2EDE4",         // soft fills, chips
    accentColor: "#C0653C",            // highlights, badges, progress
    logo: "",                          // e.g. "photos/logo.svg"
    appIcon: "icons/icon-512.png"
  },

  welcome: {
    title: "Welcome to The Stay",
    message:
      "We're so glad you're here. This guide has everything — the Wi-Fi, how the hot tub works, and where we actually eat when we're in town.",
    hostMessage:
      "Message me any time. I usually reply within an hour, and always before 10pm."
  },

  checkIn: {
    time: "4:00 PM",
    selfCheckIn: true,
    parkingInstructions:
      "Park in the driveway — either spot is yours. Street parking is fine overnight; please don't block the neighbor's mailbox.",
    arrivalInstructions:
      "Turn off Juniper Lane and look for the black mailbox marked 1428. The driveway is on the left, just past the tall pine.",
    entranceInstructions:
      "Use the side door under the covered porch, not the front door. The porch light is on a motion sensor.",
    doorInstructions:
      "The keypad is a smart lock — press the screen to wake it, enter your code, then turn the handle within 5 seconds.",
    accessCodeNote:
      "Your access code will be sent separately by your host on the morning of arrival.",
    additionalNotes:
      "Arriving late? No problem — self check-in works any hour. Early bag drop is usually fine, just ask.",
    photos: []                         // e.g. ["photos/checkin-door.jpg"]
  },

  checkOut: {
    time: "11:00 AM",
    instructions:
      "No deep cleaning needed — just the short list below, then pull the side door firmly shut. The lock engages on its own.",
    tasks: [
      "Towels in the bathroom tub",
      "Load and start the dishwasher",
      "Trash and recycling to the bins outside",
      "Turn off all lights and fans",
      "Set the thermostat to 62°",
      "Hot tub cover latched",
      "Check drawers and chargers for belongings",
      "Pull the side door shut until it clicks"
    ]
  },

  wifi: {
    network: "TheStay_Guest",
    password: "junipertrail24",
    note: "Strong on both floors. The mesh unit in the hallway can be power-cycled if speeds drop.",
    qrImage: ""                        // optional PNG Wi-Fi QR code
  },

  host: {
    name: "Dana Whitfield",
    role: "Your host",
    phone: "+15415550142",
    phoneDisplay: "(541) 555-0142",
    email: "dana@thestay.example",
    photo: "",
    photoLabel: "Host photo",
    responseTime: "Usually replies within an hour",
    coHost: {
      name: "Marcus Reed",
      role: "Local co-host",
      phone: "+15415550188",
      phoneDisplay: "(541) 555-0188",
      note: "For anything urgent on-site — he's 10 minutes away."
    }
  },

  houseRules: [
    { icon: "smoke_free", title: "No smoking", detail: "Indoors or on the covered porch. Smoking outside is fine, please use the tin by the fire pit." },
    { icon: "celebration", title: "No parties or events", detail: "Registered guests only. Daytime visitors are welcome — just let us know." },
    { icon: "bedtime", title: "Quiet hours 10pm – 8am", detail: "Sound carries on this street. Please keep the hot tub conversation low after 10." },
    { icon: "pets", title: "Dogs welcome, 2 max", detail: "$40/stay pet fee. Please keep them off the beds and pick up in the yard." },
    { icon: "groups", title: "Maximum 6 guests", detail: "Including children. Occupancy is set by our permit." },
    { icon: "local_parking", title: "Parking for 2 cars", detail: "Driveway only. No RVs, trailers or boats." },
    { icon: "hot_tub", title: "Hot tub after a shower", detail: "Rinse before getting in, no glass on the deck, cover back on when you're done." },
    { icon: "delete", title: "Trash day is Thursday", detail: "Bins go to the curb Wednesday night if you're here." },
    { icon: "content_cut", title: "No unregistered guests overnight", detail: "It keeps our permit and our neighbors happy." }
  ],

  houseGuide: [
    { icon: "tv", title: "Living room TV", description: "65\" smart TV, Apple TV, soundbar",
      image: "", steps: ["Use the small silver remote — the TV wakes on any button.", "Input is already set to Apple TV; the black remote controls it.", "Volume is on the silver remote only.", "If the screen is black, hold the TV power button for 5 seconds."] },
    { icon: "smart_display", title: "Streaming accounts", description: "Netflix, Max, Disney+ and YouTube signed in",
      image: "", steps: ["All accounts are already signed in — please don't sign out.", "Feel free to add a guest profile.", "Live TV is available in the YouTube TV app."] },
    { icon: "thermostat", title: "Thermostat", description: "Hallway, second floor",
      image: "", steps: ["Tap the dial to wake it, turn to change the target.", "Heat and A/C switch automatically — no mode change needed.", "Please stay between 62° and 76° to keep the system happy.", "The bedroom ceiling fans are on wall switches."] },
    { icon: "coffee_maker", title: "Coffee maker", description: "Drip brewer + pour-over kit",
      image: "", steps: ["Filters and local beans are in the cabinet above.", "Fill to the line for the number of cups you want.", "Grinder is in the drawer to the left of the sink.", "A pour-over cone and kettle are on the shelf if you prefer."] },
    { icon: "countertops", title: "Kitchen", description: "Fully stocked, gas range",
      image: "", steps: ["Oil, salt, pepper and basic spices are yours to use.", "The gas range clicks a few times before lighting.", "Sharp knives are in the block; the pull-out pantry is beside the fridge.", "Water filter pitcher lives in the fridge door."] },
    { icon: "dishwasher_gen", title: "Dishwasher", description: "Pods under the sink",
      image: "", steps: ["Pod goes in the small door on the inside of the front panel.", "Press Normal, then Start and close firmly.", "It runs about two hours and beeps when finished."] },
    { icon: "local_laundry_service", title: "Washer", description: "Main floor closet",
      image: "", steps: ["Detergent is on the shelf above.", "Normal wash handles almost everything.", "Please don't overfill — the door needs to latch."] },
    { icon: "dry_cleaning", title: "Dryer", description: "Stacked, main floor closet",
      image: "", steps: ["Clean the lint screen before each load.", "Normal cycle, about 50 minutes.", "Drying rack is behind the door for delicates."] },
    { icon: "hot_tub", title: "Hot tub", description: "Back deck, 102° year round",
      image: "", steps: ["Unlatch all four cover clips, then fold the cover back onto the stand.", "Jets: press the bubble button on the topside panel.", "Lights: press the bulb button, tap again to change color.", "Please latch the cover when you're done — it keeps the heat and the leaves out."] },
    { icon: "outdoor_grill", title: "Grill", description: "Propane, side of the deck",
      image: "", steps: ["Open the lid first, then the propane valve on the tank.", "Turn a burner to high and press the igniter.", "Brush the grates while warm and shut the tank valve when finished.", "A spare tank is in the garage."] },
    { icon: "fireplace", title: "Fireplace", description: "Gas, living room",
      image: "", steps: ["Wall switch to the right of the mantel turns it on.", "There's no wood-burning option — please don't add anything to the firebox.", "It shuts off automatically after 3 hours."] },
    { icon: "garage", title: "Garage", description: "Bikes, sleds and the spare tank",
      image: "", steps: ["The button by the side door opens it.", "Two bikes and helmets are yours to use — please return them inside.", "Snow shovel and sleds are on the left wall in winter."] },
    { icon: "sports_esports", title: "Game room", description: "Basement",
      image: "", steps: ["Board games and puzzles are on the shelf.", "Ping pong paddles and balls are in the bin under the table.", "Please keep the volume down after 10pm — it shares a wall."] }
  ],

  restaurants: [
    { name: "Ember & Rye", category: "Dinner", badges: ["Host Favorite", "Date Night"],
      description: "Wood-fired everything in a small room with an open kitchen. Get the charred cabbage.",
      hostNote: "Book two weeks out for a weekend table, or sit at the bar at 5:30.",
      distance: "1.2 mi", driveTime: "5 min", price: "$$$",
      address: "210 Mill Street", website: "https://example.com/ember-rye", phone: "+15415550190", image: "", imageLabel: "Restaurant photo — dining room or signature dish" },
    { name: "Second Sun Coffee", category: "Coffee", badges: ["Host Favorite", "Walking Distance"],
      description: "Small-batch roaster with a sunny patio and very good cardamom buns.",
      hostNote: "Our morning walk. Six minutes on foot down Juniper.",
      distance: "0.3 mi", driveTime: "6 min walk", price: "$",
      address: "44 Juniper Lane", website: "https://example.com/second-sun", phone: "+15415550171", image: "", imageLabel: "Coffee shop photo" },
    { name: "Marlow's Diner", category: "Breakfast", badges: ["Best Breakfast", "Family Friendly"],
      description: "Counter service, enormous pancakes, coffee that never stops coming.",
      hostNote: "Go before 8:30 on weekends or expect a wait.",
      distance: "1.8 mi", driveTime: "7 min", price: "$$",
      address: "905 Ridge Road", website: "https://example.com/marlows", phone: "+15415550133", image: "", imageLabel: "Diner photo" },
    { name: "Tortilla Sur", category: "Lunch", badges: ["Local Favorite"],
      description: "Order at the window, eat at a picnic table. Al pastor tacos and horchata.",
      hostNote: "Cash goes faster than the card reader.",
      distance: "2.1 mi", driveTime: "8 min", price: "$",
      address: "1330 Cedar Avenue", website: "https://example.com/tortilla-sur", phone: "+15415550155", image: "", imageLabel: "Taco stand photo" },
    { name: "The Hollow", category: "Drinks", badges: ["Date Night"],
      description: "Dim cocktail bar behind an unmarked green door. Ten seats, no menu — tell them what you like.",
      hostNote: "Ring the bell. It looks closed; it isn't.",
      distance: "1.4 mi", driveTime: "6 min", price: "$$$",
      address: "18 Alder Court", website: "https://example.com/the-hollow", phone: "", image: "", imageLabel: "Cocktail bar photo" },
    { name: "Pine Street Pizza", category: "Family", badges: ["Family Friendly", "Local Favorite"],
      description: "Thin crust by the slice, arcade in the back, pitchers of root beer.",
      hostNote: "The easiest dinner with kids in town. They deliver here.",
      distance: "1.6 mi", driveTime: "6 min", price: "$$",
      address: "77 Pine Street", website: "https://example.com/pine-street", phone: "+15415550122", image: "", imageLabel: "Pizza shop photo" },
    { name: "Northbound Brewing", category: "Nightlife", badges: ["Local Favorite"],
      description: "Twelve taps, long tables, food truck out front most nights. Dogs everywhere.",
      hostNote: "Trivia on Wednesdays. The hazy IPA is the one.",
      distance: "2.6 mi", driveTime: "9 min", price: "$$",
      address: "500 Depot Way", website: "https://example.com/northbound", phone: "+15415550166", image: "", imageLabel: "Brewery photo" },
    { name: "Rowan Market", category: "Dinner", badges: ["Walking Distance"],
      description: "Deli counter and hot bar with an excellent roast chicken to take home.",
      hostNote: "Our rescue plan for the night nobody wants to cook.",
      distance: "0.5 mi", driveTime: "10 min walk", price: "$$",
      address: "120 Juniper Lane", website: "https://example.com/rowan", phone: "+15415550108", image: "", imageLabel: "Market photo" }
  ],

  activities: [
    { name: "Larkspur Falls Trail", category: "Outdoors", badges: ["Host Favorite"],
      description: "Three miles round trip along the river to a wide waterfall. Shaded most of the way.",
      hostNote: "Go early — the small lot fills by 9am on weekends.",
      distance: "6.4 mi", driveTime: "14 min", cost: "Free",
      website: "https://example.com/larkspur", image: "", imageLabel: "Trail photo" },
    { name: "Old Mill Kayak Rentals", category: "Outdoors", badges: [],
      description: "Hourly kayaks and paddleboards on a slow, flat stretch of river.",
      hostNote: "Two hours is plenty. Life jackets included.",
      distance: "2.9 mi", driveTime: "10 min", cost: "$25 / hour",
      website: "https://example.com/oldmill", image: "", imageLabel: "Kayak rental photo" },
    { name: "High Desert Museum", category: "Family", badges: ["Family Friendly"],
      description: "Indoor and outdoor exhibits, raptor talks, otters. Good rainy-day plan.",
      hostNote: "The birds of prey show at 11 is worth planning around.",
      distance: "8.1 mi", driveTime: "16 min", cost: "$20 adults",
      website: "https://example.com/museum", image: "", imageLabel: "Museum photo" },
    { name: "Saturday Riverside Market", category: "Shopping", badges: ["Local Favorite"],
      description: "Produce, bread, makers and a very good breakfast burrito cart. Saturdays 9–1.",
      hostNote: "Bring a tote — there's one hanging in the hall closet.",
      distance: "1.9 mi", driveTime: "7 min", cost: "Free",
      website: "https://example.com/market", image: "", imageLabel: "Farmers market photo" },
    { name: "Cascade Overlook Drive", category: "Things To Do", badges: ["Host Favorite"],
      description: "A 40-minute loop with three pullouts. Best light an hour before sunset.",
      hostNote: "Second pullout has the view everyone photographs.",
      distance: "12 mi", driveTime: "22 min", cost: "Free",
      website: "", image: "", imageLabel: "Scenic overlook photo" },
    { name: "Juniper Lanes", category: "Family", badges: ["Family Friendly"],
      description: "Six lanes of bowling, arcade tokens, surprisingly good burgers.",
      hostNote: "Cheap after 8pm and never busy on weeknights.",
      distance: "2.2 mi", driveTime: "8 min", cost: "$6 / game",
      website: "https://example.com/lanes", image: "", imageLabel: "Bowling alley photo" }
  ],

  localEssentials: [
    { icon: "local_grocery_store", name: "Rowan Market", type: "Grocery", note: "Open 7am–10pm", distance: "0.5 mi", address: "120 Juniper Lane" },
    { icon: "local_pharmacy", name: "Ridge Pharmacy", type: "Pharmacy", note: "Open until 9pm", distance: "1.7 mi", address: "902 Ridge Road" },
    { icon: "local_gas_station", name: "Depot Fuel", type: "Gas", note: "24 hours", distance: "1.1 mi", address: "480 Depot Way" },
    { icon: "local_hospital", name: "St. Cascade Medical", type: "Hospital", note: "24h emergency room", distance: "4.3 mi", address: "1800 Medical Center Drive" },
    { icon: "medical_services", name: "Juniper Urgent Care", type: "Urgent Care", note: "8am–8pm daily", distance: "2.4 mi", address: "615 Cedar Avenue" },
    { icon: "local_cafe", name: "Second Sun Coffee", type: "Coffee", note: "6:30am–3pm", distance: "0.3 mi", address: "44 Juniper Lane" },
    { icon: "storefront", name: "Corner Stop", type: "Convenience", note: "24 hours", distance: "0.8 mi", address: "300 Juniper Lane" },
    { icon: "fitness_center", name: "Basecamp Fitness", type: "Gym", note: "Day passes $12", distance: "2.0 mi", address: "55 Mill Street" },
    { icon: "local_atm", name: "Cascade Credit Union ATM", type: "ATM", note: "No fee, 24h lobby", distance: "1.3 mi", address: "210 Ridge Road" }
  ],

  emergency: {
    hospital: { name: "St. Cascade Medical Center", detail: "24h ER — 1800 Medical Center Drive, 4.3 mi", phone: "+15415550911" },
    urgentCare: { name: "Juniper Urgent Care", detail: "8am–8pm — 615 Cedar Avenue, 2.4 mi", phone: "+15415550700" },
    fireExtinguisher: "Under the kitchen sink, and in the garage by the door.",
    firstAid: "Top shelf of the hallway linen closet, in the white box.",
    exits: "Side door off the kitchen, sliding door to the back deck, and the front door. Basement bedroom exits through the stairwell.",
    gasShutoff: "Left side of the house behind the gate, marked with a yellow tag.",
    waterShutoff: "Basement utility room, valve on the wall behind the water heater.",
    hostEmergency: "Call or text Dana first. If there's no answer within 10 minutes, call Marcus."
  },

  settings: {
    showWifi: true,
    showRestaurants: true,
    showActivities: true,
    showEssentials: true,
    showHouseGuide: true,
    showHouseRules: true,
    showEmergency: true,
    showCheckIn: true,
    showCheckOut: true,
    showCoHost: true,
    showPoweredBy: false,
    poweredByText: "Guest guide by Stay Guide",
    exploreCategories: ["Host Favorites", "Breakfast", "Coffee", "Lunch", "Dinner", "Drinks", "Family", "Outdoors", "Shopping", "Nightlife", "Things To Do"]
  }
};

if (typeof window !== "undefined") window.propertyData = propertyData;
if (typeof module !== "undefined" && module.exports) module.exports = { propertyData };

})();
