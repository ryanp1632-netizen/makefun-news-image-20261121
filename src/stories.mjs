// Saturday 21 November 2026. Every story below happened, or was first reported, on 21 November in at least one
// time zone; the source named beside each one carried it that day. `at` is [longitude, latitude] for the map pin.
// Claims by one side are written as claims ("says", "reports").

export const day = {
  date: 'Saturday 21 November 2026',
  dateUpper: 'SATURDAY 21 NOVEMBER 2026',
  deck: 'Saudi Arabia shoots down Houthi missiles over Riyadh · A 6.7 quake shakes central Peru · COP31 runs past its deadline',

  figures: [
    { big: '3', small: 'Houthi ballistic missiles downed over Riyadh' },
    { big: 'M6.7', small: 'quake in Junín, Peru, 108 km deep, 00:09 UTC' },
    { big: '146', small: 'safe after Air Niugini jet lands in Davao' },
    { big: '$55,830', small: 'bitcoin, lowest since Sept 2024 (04:13 UTC)' },
    { big: '2028', small: "target for UN rules on 'killer robots'" },
    { big: '486-4', small: 'India lead New Zealand by 118 in Wellington' },
  ],

  leads: [
    {
      place: 'Riyadh, Saudi Arabia', region: 'Middle East', cat: 'war', at: [46.7, 24.7],
      scene: 'riyadh', stamp: 'RIYADH: MISSILES', sub: '3 shot down', credit: 'Coalition statement · Reuters, AJ',
      head: 'Three Houthi missiles shot down over Riyadh',
      sum: 'Phone alerts woke the Saudi capital: the second Houthi attack on it in days, the coalition says.',
      src: 'Reuters, Al Jazeera',
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
      scene: 'cop', stamp: 'COP31: OVERTIME', sub: 'No deal yet', credit: 'UN climate talks · AJ, CGTN',
      head: 'COP31 runs past its deadline with no deal',
      sum: 'Talks go on into Saturday over a draft critics say backs away from ending fossil fuels.',
      src: 'Al Jazeera, CGTN',
    },
  ],

  cards: [
    {
      place: 'Geneva', region: 'Europe', cat: 'war', at: [6.1, 46.2], flags: ['UN'], sym: 'robot', bg: '#dbe7f3',
      caption: "GENEVA · 'KILLER ROBOTS'",
      head: "UN talks end with pledge on 'killer robot' rules by 2028",
      sum: 'Russian opposition waters the deal down.', src: 'Reuters',
    },
    {
      place: 'Davao, Philippines', region: 'Asia', cat: 'planet', at: [125.6, 7.1], flags: ['PG', 'PH'], sym: 'plane', bg: '#e0f2fe',
      caption: 'DAVAO · ENGINE FIRE ALERT',
      head: 'Air Niugini 767 makes emergency landing; all 146 safe',
      sum: 'Hong Kong–PNG flight diverts; slides used.', src: 'CAAP, AP',
    },
    {
      place: 'Las Vegas, US', region: 'Americas', cat: 'sport', at: [-115.2, 36.2], flags: ['NL'], sym: 'car', bg: '#fde2e2',
      caption: 'LAS VEGAS · POLE POSITION',
      head: 'Verstappen takes pole for the Las Vegas Grand Prix',
      sum: 'Champion Antonelli fastest but has grid penalty.', src: 'Reuters, F1',
    },
    {
      place: 'Markets', region: 'Global', cat: 'economy', at: null, flags: [], sym: 'coin', bg: '#fef3c7',
      caption: 'BITCOIN · TWO-YEAR LOW',
      head: 'Bitcoin slides to $55,830, its lowest in two years',
      sum: 'Down 5% as AI-stock worries hit risk assets.', src: 'Reuters',
    },
    {
      place: 'Wellington, NZ', region: 'Oceania', cat: 'sport', at: [174.8, -41.3], flags: ['IN', 'NZ'], sym: 'cricket', bg: '#dcfce7',
      caption: 'WELLINGTON · 1ST TEST, DAY 3',
      head: 'KL Rahul hits 136 as India lead New Zealand by 118',
      sum: 'Gill out for 98; India 486-4 at stumps.', src: 'Reuters',
    },
    {
      place: 'Ulsan, S Korea', region: 'Asia', cat: 'economy', at: [129.3, 35.5], flags: ['KR'], sym: 'chip', bg: '#e0e7ff',
      caption: 'ULSAN · AI DATA CENTRE',
      head: "Lee: 'speed is vital' in the global AI race",
      sum: 'President tours a data centre being built.', src: 'Reuters',
    },
    {
      place: 'Brasília, Brazil', region: 'Americas', cat: 'politics', at: [-47.9, -15.8], flags: ['BR'], sym: 'hospital', bg: '#dcfce7',
      caption: 'BRAZIL · EX-PRESIDENT',
      head: 'Jailed ex-president Bolsonaro taken to hospital',
      sum: 'Son cites near-total intestinal blockage.', src: 'DW, UPI',
    },
    {
      place: "Cox's Bazar", region: 'Asia', cat: 'life', at: [92.0, 21.4], flags: ['BD', 'MM'], sym: 'scales', bg: '#ede9fe',
      caption: 'ROHINGYA CAMPS · AFTER ICJ',
      head: "Rohingya welcome genocide ruling but 'want to go home'",
      sum: 'Refugees react to the UN court verdict.', src: 'AP',
    },
    {
      place: 'Gaza', region: 'Middle East', cat: 'war', at: [34.4, 31.5], flags: ['PS'], sym: 'rain', bg: '#e5e7eb',
      caption: 'GAZA · WINTER',
      head: 'Israeli strikes kill six, Gaza civil defence says',
      sum: 'Displaced families brace for winter.', src: 'AFP, Guardian',
    },
    {
      place: 'Pyongyang', region: 'Asia', cat: 'politics', at: [125.8, 39.0], flags: ['KP'], sym: 'factory', bg: '#e0f2fe',
      caption: 'PYONGYANG · STATE MEDIA',
      head: 'Kim tours school supply works after Trump snub',
      sum: 'No Trump meeting on his Asia trip.', src: 'KCNA, Reuters',
    },
  ],

  briefs: [
    { place: 'Kyiv', region: 'Europe', cat: 'war', at: [30.5, 50.4], text: "Zelensky calls Putin a 'killer'", src: 'CNN' },
    { place: 'Kyiv', region: 'Europe', cat: 'war', at: [30.5, 50.4], text: "Crimea bridge 'will not stay': Zelensky", src: 'KI' },
    { place: 'Warsaw', region: 'Europe', cat: 'war', at: [21.0, 52.2], text: "Rutte: missiles a 'grave violation'", src: 'Guardian' },
    { place: 'Rome', region: 'Europe', cat: 'life', at: [12.5, 41.9], text: 'Trevi barrier costs charity £200,000', src: 'Guardian' },
    { place: 'Gaza', region: 'Middle East', cat: 'politics', at: [34.4, 31.4], text: 'Board of Peace may hand keys to UN', src: 'MEE' },
    { place: 'Blue Nile', region: 'Africa', cat: 'war', at: [34.4, 11.8], text: 'Sudan army says it holds the initiative', src: 'AA' },
    { place: 'Kenya', region: 'Africa', cat: 'planet', at: [37.9, -0.5], text: 'Wildlife service probes 7 hippo deaths', src: 'Inform' },
    { place: 'Jerusalem', region: 'Middle East', cat: 'politics', at: [35.2, 31.8], text: 'Likud: Netanyahu must be sole PM', src: 'ToI' },
    { place: 'Singapore', region: 'Asia', cat: 'economy', at: [103.8, 1.35], text: 'Wong: 20+ deals due with China', src: 'CNA' },
    { place: 'Jakarta', region: 'Asia', cat: 'economy', at: [106.8, -6.2], text: 'Gas to Singapore back after 18 days', src: 'Bernama' },
    { place: 'Taipei', region: 'Asia', cat: 'politics', at: [121.5, 25.0], text: '2,700 China-linked accounts flagged', src: 'TN' },
    { place: 'Hong Kong', region: 'Asia', cat: 'economy', at: [114.2, 22.3], text: 'Visitor arrivals to beat 2026 target', src: 'SCMP' },
    { place: 'Tokyo', region: 'Asia', cat: 'economy', at: [139.7, 35.7], text: 'Honda, Toyota recall 1.6m US cars', src: 'ABC' },
    { place: 'Antalya', region: 'Global', cat: 'planet', at: [30.7, 36.9], text: 'Kazakhstan signs $1.2bn COP31 deals', src: 'AT' },
    { place: 'Los Angeles', region: 'Americas', cat: 'life', at: [-118.5, 34.05], text: 'Jury convicts man over Palisades fire', src: 'BBC' },
    { place: 'Florida', region: 'Americas', cat: 'planet', at: [-80.6, 28.4], text: 'Rain keeps pounding the central coast', src: 'WESH' },
    { place: 'Washington', region: 'Americas', cat: 'politics', at: [-77.0, 38.9], text: 'Bessent: Iran squeeze will go on', src: 'AN' },
    { place: 'Sydney', region: 'Oceania', cat: 'sport', at: [151.2, -33.9], text: 'Board backs Cummins as captain', src: 'ABC' },
    { place: 'Melbourne', region: 'Oceania', cat: 'sport', at: [144.96, -37.8], text: 'Kangaroos reach 4th straight AFLW final', src: 'ABC' },
    { place: 'Melbourne', region: 'Oceania', cat: 'politics', at: [145.0, -37.85], text: 'Greens sue over vote cards', src: 'Guardian' },
    { place: 'NSW', region: 'Oceania', cat: 'planet', at: [151.0, -32.5], text: 'Lightning hits 4 at a music festival', src: 'ABC' },
  ],

  dateCheck: 'Every story here happened, or was first reported, on Saturday 21 November 2026 (checked to 07:00 UTC). Left out as Friday 20 Nov news: Wall Street falling into correction, Russian strikes on Kyiv\'s bridges, missiles crashing in Poland, the UK–EU deal, Vietnam ending the death penalty for drug trafficking, Trump urging Nvidia to take back Jensen Huang, GTA VI\'s $3.79bn first day.',
  footLeft: 'Claims are attributed to whoever made them · counts are as reported',
  footRight: 'Drawn in code: flags, symbols and map · sources beside each story',
};
