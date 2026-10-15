/* EDIT THIS FILE to change the archive. No build, account or database required.
   Links left empty are shown as unavailable, never as working applications/payments.
   Lore and policies below are editable starter copy, not established canon or approved terms. */
window.IRENE = {
  site: {
    name: 'Irene Bot', edition: 'A COMPANION TO YOUR COLLECTION',
    discordUrl: 'https://discord.gg/4KUMZMQFQS ', kofiUrl: 'https://ko-fi.com/ireneS2bot/', footer: 'Made for the collectors, dreamers & keepers of little things.',
    quote: 'Each card is a mirror of the soul; what you see in it is what your inner self already knows.'
  },
  home: {
    eyebrow: 'THE WORLD OF IRENE BOT', title: 'Your choices always\ncan have consequences.',
    description: 'A quiet place for curious souls. Find your next reading, follow a divine path, and discover the stories behind your collection.',
    note: 'Your guide to the magic, one chapter at a time.',
    firstSteps: [
      { title: 'See what the destiny brings to you.', text: 'Use ,drop for a new draw. Return to ,daily and ,weekly for your next readings.', link: '#commands?category=Readings', label: 'Your first reading' },
      { title: 'See the features of your magic collection.', text: 'Explore your inventory, arrange an album, and choose the card you want to keep close on your profile.', link: '#commands?category=Collection', label: 'Build your collection' },
      { title: 'Meet the stars across the universe.', text: 'Visit the lore characters, discover their own things, and find your place in the community.', link: '#characters', label: 'Meet the divinities and witches' }
    ]
  },
  navigation: [
    {id:'home',label:'Welcome',symbol:'✧'}, {id:'commands',label:'Command grimoire',symbol:'✦'},
    {id:'lore',label:'Stories & lore',symbol:'✧'}, {id:'characters',label:'Characters',symbol:'✦'},
    {id:'rules',label:'Community rules',symbol:'✧'}, {id:'support',label:'Ko-Fi & PIX',symbol:'✦'},
    {id:'staff',label:'Join the staff',symbol:'✧'}
  ],
  pages: {
    commands:{eyebrow:'CHAPTER I · THE GRIMOIRE',title:'A little guidance,\na little magic.',description:'Find what you need, learn how it works, and follow your next curiosity. Commands begin with a comma.'},
    lore:{eyebrow:'CHAPTER II · THE STORIES',title:'There is a story\nbetween every star.',description:'Letters from a world of readings, small rituals and unlikely encounters. Stay a while.'},
    characters:{eyebrow:'CHAPTER III · CHARACTERS',title:'Every soul\nhas a little magic.',description:'Meet the witches and divinities of Irene. Five familiar faces, two divine paths, and stories waiting to be told.'},
    rules:{eyebrow:'CHAPTER IV · OUR LITTLE WORLD',title:'A kind place\nto belong.',description:'A shared world is something we look after together. Read the community and bot guidelines before beginning.'},
    support:{eyebrow:'CHAPTER V · KEEP THE MAGIC GROWING',title:'A little love\ngoes a long way.',description:'Find the membership information, read the terms, and learn how to ask about supporting Irene through Pix.'},
    staff:{eyebrow:'CHAPTER VI · THE KEEPERS',title:'Help us care\nfor this little world.',description:'Different gifts, one shared home. Discover each staff role and open the application form.'}
  },
  // Public commands only. Aliases are copied from the bot; edit when commands change.
  commands: [
    {name:'help',category:'Essentials',aliases:['h'],summary:'Find commands and guides in one place.',usage:',help',steps:['Choose Commands to explore the command guides.','Choose Guides for emoji symbolism and lore.'],note:'Administrative tools are kept out of the public help.'},
    {name:'drop',category:'Readings',aliases:['d'],summary:'Turn over a card and discover your next draw.',usage:',drop',steps:['Open your draw and turn over the card.','Use the card controls to uncover its details.'],note:'If your magic is resting, check ,cooldowns.'},
    {name:'daily',category:'Readings',aliases:['dy'],summary:'Return for your daily reading.',usage:',daily',steps:['Run the command to claim your available daily reading.','Choose a card from the menu to see it more closely.']},
    {name:'weekly',category:'Readings',aliases:['wk'],summary:'Uncover the cards waiting in this week\'s reading.',usage:',weekly',steps:['Run the command when your weekly reading is ready.','Explore the cards using the card menu.']},
    {name:'monthly',category:'Readings',aliases:['mo'],summary:'Claim a blessing for eligible supporters.',usage:',monthly',steps:['Your Ko-Fi or Booster role is checked automatically.','Use the panel to explore the rewards available to your membership.'],note:'You need to be a Bae Ko-Fi or Booster. Availability depends on your verified server roles.'},
    {name:'work',category:'Readings',aliases:['w'],summary:'Work as a tarot reader and earn a little magic.',usage:',work',steps:['Run the command to complete your work.','The result tells you what you earned and when to return.']},
    {name:'cooldowns',category:'Essentials',aliases:['cd'],summary:'See when your magic will be ready again.',usage:',cooldowns',steps:['Open the command to view your waiting times.'],note:'Monthly appears only for members with an eligible role.'},
    {name:'inventory',category:'Collection',aliases:['inv'],summary:'Browse the cards that belong to you.',usage:',inventory',examples:[',inv red velvet epic',',inv irene epic'],steps:['Browse your cards or add direct filters to the command.','Use the menu to look closer, the page controls to browse, or Copy page codes to receive the visible codes privately.']},
    {name:'search',category:'Collection',aliases:['s'],summary:'Find cards across the public catalogue.',usage:',search',examples:[',search red velvet rare'],steps:['Enter a name, group, era or another filter.','Choose a card to read its details.']},
    {name:'collection',category:'Collection',aliases:['col'],summary:'Discover the cards still missing from your collection.',usage:',collection',examples:[',col red velvet epic'],steps:['Filter by the collection you want to complete.','Browse the missing cards and their details.'],note:'Custom cards do not count toward group collections.'},
    {name:'progress',category:'Collection',aliases:['prog'],summary:'Follow your progress toward a complete collection.',usage:',progress',steps:['Choose your filters and check the progress bar.','The card menu lets you explore the missing cards.']},
    {name:'view',category:'Collection',aliases:[],summary:'Look closer at one of your cards by its code.',usage:',view CODE',examples:[',view IR#123'],steps:['Enter the exact card code.','The card opens directly, without a menu.'],note:'You must own a copy in your inventory or bag.'},
    {name:'album',category:'Collection',aliases:['alb'],summary:'Turn your collection into personal albums.',usage:',album',steps:['Open the album menu to choose an album or manage your own.','Use its controls to organise and explore the cards inside.']},
    {name:'wishlist',category:'Collection',aliases:['wl'],summary:'Keep track of the cards you hope to find.',usage:',wishlist',steps:['Choose to add or remove a wish.','Enter a card name, group, era, rarity, version or event.','Explore your wishes or see which ones are on the market.'],note:'Use names such as Irene or Red Velvet, not card codes.'},
    {name:'bag',category:'Trading',aliases:['b'],summary:'Store resources and cards safely.',usage:',bag',steps:['Open the bag to view its stored resources.','Use its menu to store something or bring it back.']},
    {name:'wallet',category:'Trading',aliases:['bal'],summary:'See the resources you are carrying.',usage:',wallet',steps:['Run the command to open your balance directly.'],note:'Coins are capped at 999,999 per resource. Items are capped at 999 per resource, including stored amounts.'},
    {name:'pay',category:'Trading',aliases:['send'],summary:'Share Love Quartz with another collector.',usage:',pay USER_ID AMOUNT',examples:[',pay 123456789012345678 100'],steps:['Enter the recipient\'s Discord ID and a whole-number amount.','Check the transfer result.'],note:'Pay transfers Love Quartz. It opens directly without a menu.'},
    {name:'gift',category:'Trading',aliases:['g'],summary:'Send cards to another collector.',usage:',gift USER_ID CODE QUANTITY [CODE QUANTITY …]',examples:[',gift 123456789012345678 IRPE#123 2 SEEC#456 1'],steps:['Enter the recipient\'s ID, then each card code and quantity.','Use the result\'s card menu to inspect the cards.'],note:'Up to five different cards and 100 copies of each per message. Protected or ineligible cards cannot be transferred.'},
    {name:'shop',category:'Trading',aliases:['sh'],summary:'Find decks and potions for your next reading.',usage:',shop',steps:['Choose an item from the shop.','Manage or open your decks here; an opened deck reveals its cards through a menu.']},
    {name:'market',category:'Trading',aliases:['m'],summary:'Buy and sell cards with other collectors.',usage:',market',steps:['Browse the listings and their prices.','Use the panel to buy, list a card, or manage your own listings.'],note:'Check the card, price and seller before completing a purchase.'},
    {name:'ritual',category:'Divine paths',aliases:['rt'],summary:'Fuse four cards into one of a higher rarity.',usage:',ritual',steps:['Prepare four available cards of the same eligible rarity.','Enter their codes, then review the cards and Vital Crystal cost.','Confirm the fusion to consume the ingredients and receive a new card.'],note:'Ritual is card fusion. Offer is the separate command for divine offerings.'},
    {name:'offer',category:'Divine paths',aliases:['of'],summary:'Leave an offering for a divinity.',usage:',offer',steps:['Choose a divinity and an available offering.','Read and confirm the offering before it is consumed.','Discover what your devotion brings.'],note:'Keuttalgi accepts strawberries or Vital Crystals. Grimdewbun accepts Vital Crystals or Epic card sacrifices.'},
    {name:'games',category:'Play & community',aliases:['gm'],summary:'Step into the four minigames of the witches.',usage:',games',steps:['Choose a game and follow its instructions.','Play through its rounds and read your reward at the end.']},
    {name:'events',category:'Play & community',aliases:['ev'],summary:'Visit the calendar and discover event badges.',usage:',events',steps:['Choose the calendar or badges section.','Read the event information and explore available claims.'],note:'Some event cards are reserved for eligible supporter roles.'},
    {name:'achievements',category:'Play & community',aliases:['ach'],summary:'Discover milestones and the paths to unlock them.',usage:',achievements',steps:['Browse your achievements and their explanations.','Use the dedicated menu for group and era achievements.']},
    {name:'leaderboard',category:'Play & community',aliases:['lb'],summary:'Meet the collectors at the top of each ranking.',usage:',leaderboard',steps:['Open the ranking and choose the leaderboard you want to see.','The top three positions receive their corresponding medals.'],note:'A medal can be earned once per position, per ranking.'},
    {name:'profile',category:'Essentials',aliases:['p'],summary:'Make your little corner of Irene your own.',usage:',profile',steps:['Open your profile and use its customisation menu.','Choose a title, write your description, pick a favourite card and select up to five available badges.'],note:'Ko-Fi and Booster badges are available only while the corresponding role is verified.'},
    {name:'reminders',category:'Essentials',aliases:['rm'],summary:'Choose the whispers you want to receive.',usage:',reminders',steps:['Choose which readings should send a reminder.','Turn wishlist alerts on or off in the menu.'],note:'Reminder notifications are sent through Discord DMs. Your DMs must allow messages from the bot.'}
  ],
  loreNotice: 'The chapters that makes everything in Irene.',
  lore: [
    {id:'witches',number:'I',title:'The Arrival of The Witches',subtitle:'When the five witches started they journey in the Cosmic Forest.',tag:'Beginnings',draft:false,paragraphs:['Before what we already know, the witches built everything in a Cosmic Forest after fleeing from magic hunters. The Cosmic Forest is an isolated and mysterious place, protected by Keuttalgi with the light, and Grimdewbun, with the shadows.'],quote:'The human eye needs to see\nthrough its limitations.'},
    {id:'two-paths',number:'II',title:'Two Paths to The Altar',subtitle:'One light. One shadow. Different kinds of devotion.',tag:'Divinities',draft:false,paragraphs:['Keuttalgi is a kind deity, who accept your love and devotion with simple offers. Grimdewbun is also kind, but you need to give something precious to them, and their ambition will reward you.'],quote:'What your destiny will bring is\na mystery that only you can choose.'},
    {id:'to-discover',number:'III',title:'???',subtitle:'What we still don\'t need to know...',tag:'Secret',draft:false,paragraphs:['There\'s something here that someone left behind.'],quote:'When we know everything, we lost everything.'},
  ],
  characters: [
    // Leave image empty to keep an illustration slot blank. Add a relative path when ready.
    {id:'irene',name:'Irene',kind:'Witch',epithet:'THE WITCH · IRENE',image:'assets/irene.png',description:'The familiar face at the heart of your readings. A witch whose story has a place of its own in the archive.',offerings:[],details:['Irene is a quiet tarot reader and witch. She uses her magic to guide the others between the desired path of their destiny.'],quote:'Keep calling me back for a thrilling experience. You\'re my favorite.',draft:false,guideCommand:'drop',guideLabel:'Explore the reading guide'},
    {id:'seulgi',name:'Seulgi',kind:'Witch',epithet:'THE WITCH · SHADOW DANCE',image:'assets/seulgi.png',description:'Meet Seulgi through Shadow Dance, where observation and memory guide your next move.',offerings:[],details:['Find her game in ,games.','Seulgi is a mysterious dancer and witch, who works in the shadows. She uses her magic to guide the others between the darker side of the world.'],quote:'You\'re in danger, but it\'s ok. You\'re a grown-up.',draft:false,guideCommand:'games',guideLabel:'Explore the games guide'},
    {id:'wendy',name:'Wendy',kind:'Witch',epithet:'THE WITCH · ECHOES OF THE ORACLE',image:'assets/wendy.png',description:'Meet Wendy through Echoes of the Oracle, and follow the symbols that carry her magic.',offerings:[],details:['Find her game in ,games.','Wendy is a kind singer and witch, who works in the echoes of the light. She uses her magic to guide the others between the melody of their true destiny.'],quote:'How can I rise so bright? Keep falling into the sunkiss.',draft:false,guideCommand:'games',guideLabel:'Explore the games guide'},
    {id:'joy',name:'Joy',kind:'Witch',epithet:'THE WITCH · GARDEN OF FORTUNE',image:'assets/joy.png',description:'Meet Joy through Garden of Fortune, where a little care makes room for something to bloom.',offerings:[],details:['Find her game in ,games.','Joy is a witch full of happiness, who take care of all the gardens in this little world and guide the others with the magic between the flowers.'],quote:'So, you\'re feeling the love? L-O-V-E, it\'s that!',draft:false,guideCommand:'games',guideLabel:'Explore the games guide'},
    {id:'yeri',name:'Yeri',kind:'Witch',epithet:'THE WITCH · TRICKSTER\'S TAROT',image:'assets/yeri.png',description:'Meet Yeri through Trickster\'s Tarot, and see where your intuition leads you.',offerings:[],details:['Find her game in ,games.','Yeri is also a tarot reader and witch, but her readings guides the others between their own intuition, making them search for the best in each path of their destiny.'],quote:'I said: 1, 2, 3. Play the game again!',draft:false,guideCommand:'games',guideLabel:'Explore the games guide'},
    {id:'keuttalgi',name:'Keuttalgi',epithet:'THE LIGHT PATH',image:'assets/keuttalgi.png',accent:'rose',description:'A divine path sustained by strawberries and crystalline energy. Approach the garden with an offering, and leave a little room for surprise.',offerings:['Strawberries','Vital Crystals'],details:['Use ,offer to leave an offering.','Keuttalgi is the divine who will guide you to the best of your destiny, between the light and strawberries.'],quote:'Even the worst parts of our destiny have its own little moments of happiness.',draft:false},
    {id:'grimdewbun',name:'Grimdewbun',epithet:'THE SHADOW PATH',image:'assets/grimdewbun.png',accent:'violet',description:'A divine path that asks for something precious. Vital Crystals and Epic card sacrifices become offerings to the shadows.',offerings:['Vital Crystals','Epic Card Sacrifices'],details:['Use ,offer to choose an offering.','Grimdewbun is the divine who will guide you to the desired path of your destiny, between the shadows of the most precious things.'],quote:'There\'s no need to worry about the shadows. Fall into it, carefully, and it will teach their own things to you.',draft:false}
  ],
  // Replace these starter guidelines with your approved server/bot rules.
  rules: {
    draft:false,
    introduction:'These are the guidelines for playing both in the bot and official server. Read them carefully to avoid further problems. If you need any help, please contact the Bae Team.',
    server:[
      {title:'Speak in Portuguese, English or Spanish only.',text:'We ask you to please talk only in one of the three languages mentioned, and in it\'s own channels.'},
      {title:'We are strictly a Safe for Work community.',text:'Do not talk, send or start conversations about sensitive or triggering topics such as NSFW, slurs, gore, disturbing content, and any other thing that can harm someone.'},
      {title:'Be respectful to all the players on the server and bot.',text:'We ask you to avoid any kind of discrimination, harassment, hate speech or rude behavior. Also avoid topics that can be the cause of a lot of different opinions, such as politics and religion.'},
      {title:'No doxxing. Do not expose personal information about you or anyone else on the server.',text:'Protect yourself and also do not share any kind of personal information that can be dangerous for you in the future.'},
      {title:'Use the channels correctly.', text:'We are not strictly about the right use of the playing channels, but please, do not use commands in channels intended for other things. If you need, you can check the channels\' description for more information about them.'},
      {title:'No self-promo or advertisements.', text:'Avoid topics about other bots and do not promote anything in this server.'}
    ],
    bot:[
      {title:'No alternative accounts.',text:'All players need to use Irene Bot in their main account only. Please do not create new Discord accounts to get more rewards and cards. If you\'ve lost your account or want to change it, open a ticket and contact a Bae Team member about it.'},
      {title:'No scamming.',text:'Please, be fair with your trades and sales. Do not scam anyone. If you\'ve been scammed, please open a ticket with proper proof.'},
      {title:'No bug exploiting or command spam.',text:'If you see any bugs in Irene, please, report it to the staff team through the report channels.'},
      {title:'No account-boosting.',text:'Do not invite anyone to play the bot for you. If you want to get cards and currency, just explore Irene\'s commands a little more. There are a lot of ways to be rich in this bot, so play fairly.'},
      {title:'Cross-trading is not allowed.', text:'Do not trade or sell Irene\'s cards and currency for real money and contents from another bot.'},
      {title:'Respect the players\' preferences.', text:'Please, just ping and dm players who allow it. We have a lot of preferences and collections roles, so check it whenever you need to reach someone.'}
    ]
  },
  support: {
    termsApproved:true,
    introduction:'Your support helps this little world keep growing, and you will receive a lot of rewards back!',
    membershipTitle:'Ultimate Enchantment',membershipDescription:'',
    benefits:['Exclusive Channels and Giveaways','Chance to get Ko-Fi and Booster exclusive cards in commands.','Access to the monthly command, with currency and cards as monthly rewards.','One Ko-Fi Custom Card each month of subscription.','Chance to display a Ko-Fi badge in your profile.'],
    price:'5$ dollars',
    terms:[
      {title:'Membership & Access',text:'The subscription will last for 30 days and you will receive the Bae Ko-Fi role in Irene\'s server.'},
      {title:'Benefits & Availability',text:'You can accumulate your COCs for two months if the bot doesn\'t have what you want.'},
      {title:'Cancellations, Refunds & Renewals',text:'Cancellations and Renewals are provided by Ko-Fi. We do not do refunds.'},
      {title:'Payment confirmation & Privacy',text:'We do not ask you about personal informations. Be careful with everything you share.'}
    ],
    pix:{amount:'Simples, rápido e mais acessível. Pague apenas 12 reais.',contactUrl:'https://discord.com/channels/1554278772964986911/1554983390988599347',instructions:[
      'Vá até o canal de tickets e informe que gostaria de comprar o Ko-Fi com o PIX.',
      'Sasa, Guvo ou Bea irão te passar as informações necessárias.',
      'Faça o pix e envie o comprovante no ticket.',
      'Após os trinta dias, Sasa, Guvo ou Bea entrarão em contato para garantir a renovação ou cancelamento.'
    ]}
  },
  staff: {
    introduction:'Find the role that feels like your kind of magic. Each position has its own responsibilities.',
    notice:'Positions as Moderator and Admin will only be given through rank promotion. It\'s not possible to apply for them.',
    roles:[
  
      {id:'designer',name:'Custom Card Designer',tag:'CUSTOM CARDS',symbol:'✧',description:'The ones who makes the most beautiful arts for the Custom Cards and Wonders in the bot.',responsibilities:['Do the Custom Cards requests for Booster and Ko-Fi players according to their forms.','Can also do Wonders cards, a kind of special regular rarity with a custom layout.'],requirements:['Intermediate or advanced Graphic Design skills.','A lot of creativity and interest in help Irene Bot.', 'Knows how to use Ibis Paint and Google Drive.'],formUrl:'https://forms.gle/27pcwPec6jUGkrrk8',open:true},
      {id:'regular',name:'Regular Card Designer',tag:'REGULAR CARDS',symbol:'✦',description:'The ones who fills the database with beautiful cards in a pre-made layout.',responsibilities:['Do the Epic, Rare and Common cards of the bot according to the suggestions or missing artists.'],requirements:['Basic Graphic Design skills','Knows how to use Ibis Paint and Google Drive.','A lot of interest in help Irene Bot.', 'If you don\'t know how to use Google Drive, we will teach you. So, don\'t worry about that.'],formUrl:'https://forms.gle/27pcwPec6jUGkrrk8',open:true},
      {id:'helper',name:'Bae Helper',tag:'COMMUNITY',symbol:'✦',description:'The ones who makes all the little things in the server, and can be promoted to Admin or Moderator.',responsibilities:['Can answer questions and help members.','Can contact the owners about problems.','Can make giveaways and games with Irene rewards.', 'Can assist the server when the owners aren\'t there.'],requirements:['Be calm and proactive.','Familiarity with the rules.','Availability to be agreed with the team.', 'A lot of interest in help Irene Bot.'],formUrl:'https://forms.gle/27pcwPec6jUGkrrk8',open:true},
  ]}
};
