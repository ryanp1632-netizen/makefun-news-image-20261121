// Saturday 21 November 2026. Every story below happened, or was first reported, on 21 November; the source named
// beside each one carried it that day (checked to 11:00 UTC). `at` is [longitude, latitude] for the map pin.
// Claims by one side are written as claims ("says", "reports").

export const day = {
  date: 'Saturday 21 November 2026',
  dateUpper: 'SATURDAY 21 NOVEMBER 2026',
  deck: 'Houthi missiles downed over Riyadh · M6.7 quake shakes Peru · COP31 deadlocked past its deadline · Iran claims a US drone',

  figures: [
    { big: '3', small: 'Houthi ballistic missiles downed over Riyadh' },
    { big: 'M6.7', small: 'quake in Junín, Peru, 108 km deep, 00:09 UTC' },
    { big: '58th', small: 'US MQ-9 drone Iran says it has shot down' },
    { big: '146', small: 'safe after Air Niugini jet lands in Davao' },
    { big: '$55,830', small: 'bitcoin, lowest since Sept 2024' },
    { big: '486-4', small: 'India lead New Zealand by 118 in Wellington' },
  ],

  leads: [
    {
      place: 'Riyadh, Saudi Arabia', region: 'Middle East', cat: 'war', at: [46.7, 24.7],
      scene: 'riyadh', stamp: 'RIYADH: MISSILES', sub: '3 shot down', credit: 'Coalition statement · Reuters, AJ',
      head: 'Three Houthi missiles shot down over Riyadh',
      sum: 'Phone alerts woke the Saudi capital in the second Houthi attack on it in days, the coalition says.',
      src: 'Reuters, AJ',
    },
    {
      place: 'Junín, Peru', region: 'Americas', cat: 'planet', at: [-76.0, -10.9],
      scene: 'peru', stamp: 'PERU: QUAKE 6.7', sub: '108 km deep', credit: 'USGS · IGP',
      head: 'Magnitude 6.7 earthquake shakes central Peru',
      sum: 'Struck near Carhuamayo at 00:09 UTC and was felt in Lima; no deaths, minor damage reported.',
      src: 'USGS, AA',
    },
    {
      place: 'Antalya, Türkiye', region: 'Global', cat: 'planet', at: [30.7, 36.9],
      scene: 'cop', stamp: 'COP31: DEADLOCK', sub: 'Past its deadline', credit: 'UN climate talks · BBC, AJ',
      head: 'Fossil-fuel row leaves COP31 in deadlock',
      sum: 'Talks ran through the night; France and Panama want the fossil-fuel wording the draft left out.',
      src: 'BBC, Guardian',
    },
  ],

  cards: [
    {
      place: 'Strait of Hormuz', region: 'Middle East', cat: 'war', at: [56.3, 26.6], flags: ['IR', 'US'], sym: 'plane', bg: '#e0f2fe',
      caption: "HORMUZ · IRAN'S CLAIM",
      head: 'Iran says it shot down a US drone over Hormuz',
      sum: 'IRGC claims a new air-defence system hit an MQ-9.', src: 'IRIB via AJ',
    },
    {
      place: 'Kyiv', region: 'Europe', cat: 'war', at: [30.5, 50.4], flags: ['UA', 'RU'], sym: 'mic', bg: '#fef9c3',
      caption: 'KYIV · ZELENSKY',
      head: "Zelensky calls Putin a 'killer'",
      sum: 'Reply after Trump called the Russian leader a friend.', src: 'BBC',
    },
    {
      place: 'South Africa', region: 'Africa', cat: 'politics', at: [28.0, -26.2], flags: ['ZA', 'UN'], sym: 'dove', bg: '#dcfce7',
      caption: 'SOUTH AFRICA · NATION MOURNS',
      head: 'Former SA deputy president dies at 71',
      sum: 'Phumzile Mlambo-Ngcuka later led UN Women.', src: 'Reuters',
    },
    {
      place: 'Geneva', region: 'Europe', cat: 'war', at: [6.1, 46.2], flags: ['UN'], sym: 'robot', bg: '#dbe7f3',
      caption: "GENEVA · 'KILLER ROBOTS'",
      head: "Nations aim for 'killer robot' rules by 2028",
      sum: 'No firm commitment; Russia waters it down.', src: 'Reuters',
    },
    {
      place: 'Davao, Philippines', region: 'Asia', cat: 'planet', at: [125.6, 7.1], flags: ['PG', 'PH'], sym: 'plane', bg: '#e0f2fe',
      caption: 'DAVAO · ENGINE FIRE ALERT',
      head: 'Jet diverts to Davao; all 146 on board safe',
      sum: 'Air Niugini 767 evacuated by slides.', src: 'CAAP, AP',
    },
    {
      place: 'Las Vegas, US', region: 'Americas', cat: 'sport', at: [-115.2, 36.2], flags: ['NL'], sym: 'car', bg: '#fde2e2',
      caption: 'LAS VEGAS · POLE POSITION',
      head: 'Verstappen takes pole in Las Vegas',
      sum: 'Antonelli fastest but has a grid penalty.', src: 'Reuters, F1',
    },
    {
      place: 'Markets', region: 'Global', cat: 'economy', at: null, flags: [], sym: 'coin', bg: '#fef3c7',
      caption: 'BITCOIN · TWO-YEAR LOW',
      head: 'Bitcoin falls to $55,830, a two-year low',
      sum: 'Down 5% as AI-stock fears hit risk assets.', src: 'Reuters',
    },
    {
      place: 'Wellington, NZ', region: 'Oceania', cat: 'sport', at: [174.8, -41.3], flags: ['IN', 'NZ'], sym: 'cricket', bg: '#dcfce7',
      caption: 'WELLINGTON · TEST, DAY 3',
      head: "Rahul's 136 puts India 118 runs ahead",
      sum: 'Gill out for 98; India 486-4 at stumps.', src: 'Reuters',
    },
  ],

  briefs: [
    { place: 'Kryvyi Rih', region: 'Europe', cat: 'war', at: [33.4, 47.9], text: 'Double strike kills child and rescuer', src: 'AJ' },
    { place: 'Paris', region: 'Europe', cat: 'politics', at: [2.35, 48.85], text: 'Protests enter a sixth week', src: 'F24' },
    { place: 'Oslo', region: 'Europe', cat: 'life', at: [10.75, 59.9], text: 'Trafalgar Square tree cut down', src: 'BBC' },
    { place: 'Rome', region: 'Europe', cat: 'life', at: [12.5, 41.9], text: 'Trevi fee cuts coins for charity', src: 'Guardian' },
    { place: 'Basra', region: 'Middle East', cat: 'planet', at: [47.8, 30.5], text: 'Power plant fire kills four', src: 'INA' },
    { place: 'Gaza', region: 'Middle East', cat: 'war', at: [34.4, 31.5], text: 'Israeli strikes kill six, rescuers say', src: 'AFP' },
    { place: 'Jerusalem', region: 'Middle East', cat: 'politics', at: [35.2, 31.8], text: 'Likud: Netanyahu must be sole PM', src: 'ToI' },
    { place: 'Blue Nile', region: 'Africa', cat: 'war', at: [34.4, 11.8], text: 'Sudan army claims the initiative', src: 'AA' },
    { place: 'Aswan', region: 'Africa', cat: 'politics', at: [32.9, 24.1], text: 'Sisi opens Africa forum', src: 'Ahram' },
    { place: 'Kenya', region: 'Africa', cat: 'planet', at: [37.9, -0.5], text: 'Seven hippo deaths probed', src: 'Inform' },
    { place: "Cox's Bazar", region: 'Asia', cat: 'life', at: [92.0, 21.4], text: 'Rohingya hail ICJ genocide ruling', src: 'AP' },
    { place: 'Manipur', region: 'Asia', cat: 'life', at: [93.9, 24.8], text: 'Toxic liquor kills 11, 180 in hospital', src: 'AJ' },
    { place: 'Pyongyang', region: 'Asia', cat: 'politics', at: [125.8, 39.0], text: 'Kim tours plants after Trump snub', src: 'KCNA' },
    { place: 'Ulsan', region: 'Asia', cat: 'economy', at: [129.3, 35.5], text: "Lee: 'speed is vital' in AI race", src: 'Reuters' },
    { place: 'Singapore', region: 'Asia', cat: 'economy', at: [103.8, 1.35], text: 'Wong: 20+ deals due with China', src: 'CNA' },
    { place: 'N Sumatra', region: 'Asia', cat: 'planet', at: [98.7, 3.6], text: 'Train hits minibus at crossing', src: 'AJ' },
    { place: 'Tokyo', region: 'Asia', cat: 'economy', at: [139.7, 35.7], text: 'Honda, Toyota recall 1.6m US cars', src: 'ABC' },
    { place: 'Brasília', region: 'Americas', cat: 'politics', at: [-47.9, -15.8], text: 'Jailed Bolsonaro taken to hospital', src: 'DW' },
    { place: 'Los Angeles', region: 'Americas', cat: 'life', at: [-118.5, 34.05], text: 'Man convicted over Palisades fire', src: 'BBC' },
    { place: 'Washington', region: 'Americas', cat: 'life', at: [-77.0, 38.9], text: 'FBI probes hack of crime database', src: 'BBC' },
    { place: 'Cleveland', region: 'Americas', cat: 'sport', at: [-81.7, 41.5], text: 'Harden scores 51, passes Kobe', src: 'AJ' },
    { place: 'Sydney', region: 'Oceania', cat: 'sport', at: [151.2, -33.9], text: 'Board backs Cummins as captain', src: 'ABC' },
    { place: 'Melbourne', region: 'Oceania', cat: 'sport', at: [144.96, -37.8], text: 'Kangaroos reach 4th AFLW final', src: 'ABC' },
    { place: 'NSW', region: 'Oceania', cat: 'planet', at: [151.0, -32.5], text: 'Lightning hits 4 at a festival', src: 'ABC' },
  ],

  dateCheck: 'Made from reports published on Saturday 21 November 2026, checked to 11:00 UTC. Left out as Friday 20 Nov news: Wall Street\'s slide into correction, Russian strikes on Kyiv\'s bridges, missiles landing in Poland, the UK–EU reset deal, Denmark\'s Russian plot claim, the Paris police verdict, GTA VI\'s $3.79bn first day.',
  footLeft: 'Claims are attributed to whoever made them · counts are as reported',
  footRight: 'Drawn in code: flags, symbols and map · sources beside each story',
};
