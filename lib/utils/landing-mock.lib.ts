// create a list of 20 static readable usernames between 9 to 15 characters and between a-z and 0-9
export const usernames = () => Array.from({ length: 20 }, (_, i) => {
  const username = Array.from({ length: Math.floor(Math.random() * 7) + 9 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  ).join('')

  return `${username}${i}`
})

// create a list of 40 real english sentences that can make a title for an NFT. Vary the length of the sentence between 3 to 4 words and variation in the length of the words between 3 to 10 characters
export const titles = () => Array.from({ length: 40 }, () => {
  const title = Array.from({ length: Math.floor(Math.random() * 2) + 1 }, () =>
    Array.from({ length: 2 }, () =>
      ['The', 'Quick', 'Brown', 'Fox', 'Elephant', 'Jumps', 'Over', 'The', 'Lazy', 'Fly', 'Sky', 'of', 'on', 'the', 'the', 'James', 'Jessie', 'Neutral', 'Neutral', 'Jane', 'John', 'HotDog', 'Dunk', 'Extreme', 'Faceless', 'Dog', 'a', 'an', 'the', 'and', 'in', 'on', 'at', 'to', 'from', 'of', 'off', 'with', 'without', 'for', 'Cat', 'Boots', 'Shoes', 'Sky', 'Dunk', 'Air', 'Snake', 'Bird', 'Fish', 'The',]
      [Math.floor(Math.random() * 50)]
    ).join(' ')
  ).join(' ')

  return title
})
      


export const landingAssets = {
  'cinema_🎥': [
    '/images/generated-nft/movie1.png',
    '/images/generated-nft/movie2.png',
    '/images/generated-nft/movie3.png',
    '/images/generated-nft/movie4.png',
    '/images/generated-nft/movie5.png',
    '/images/generated-nft/movie6.png',
    '/images/generated-nft/movie7.png',
    '/images/generated-nft/movie8.png',
    '/images/generated-nft/movie10.png',
    '/images/generated-nft/movie11.png',
    '/images/generated-nft/movie12.png',
    'https://bestaiprompts.art/img/cine102.jpeg',
    'https://bestaiprompts.art/img/cine103.jpeg',
    '/images/generated-nft/movie9.png',
  ],
  'video_games_🎮': [
    '/images/generated-nft/game1.png',
    '/images/generated-nft/game2.png',
    '/images/generated-nft/game3.png',
    '/images/generated-nft/game4.png',
    '/images/generated-nft/game5.png',
    '/images/generated-nft/game6.png',
    '/images/generated-nft/game7.png',
    'https://bestaiprompts.art/img/game81.jpeg',
    'https://bestaiprompts.art/img/game34.jpeg',
    'https://bestaiprompts.art/img/game90.jpeg',
    'https://bestaiprompts.art/img/game19.jpeg',
    'https://bestaiprompts.art/img/game70.jpeg',
    'https://bestaiprompts.art/img/game96.jpeg',
    'https://bestaiprompts.art/img/game99.jpeg',

  ],
  'graphic_design_🌁': [
    '/images/generated-nft/graphic1.png',
    '/images/generated-nft/graphic2.png',
    '/images/generated-nft/graphic3.png',
    '/images/generated-nft/graphic4.png',
    '/images/generated-nft/graphic5.png',
    '/images/generated-nft/graphic6.png',
    '/images/generated-nft/graphic7.png',
    '/images/generated-nft/graphic8.png',
    '/images/generated-nft/graphic9.png',
    '/images/generated-nft/graphic10.png',
    '/images/generated-nft/graphic11.png',
  ],
  'illustration_🎨': [
    '/images/generated-nft/illu1.png',
    '/images/generated-nft/illu2.png',
    '/images/generated-nft/illu3.png',
    '/images/generated-nft/illu4.png',
    '/images/generated-nft/illu5.png',
    '/images/generated-nft/illu6.png',
    '/images/generated-nft/illu7.png',
    '/images/generated-nft/illu8.png',
    '/images/generated-nft/illu9.png',
    '/images/generated-nft/illu10.png',
    '/images/generated-nft/illu11.png',
    '/images/generated-nft/illu12.png',
    '/images/generated-nft/illu13.png',
    '/images/generated-nft/illu14.png',
  ],
  'interior_design_🏠': [
    '/images/generated-nft/interior1.png',
    '/images/generated-nft/interior2.png',
    '/images/generated-nft/interior3.png',
    '/images/generated-nft/interior4.png',
    '/images/generated-nft/interior5.png',
    '/images/generated-nft/interior6.png',
    '/images/generated-nft/interior7.png',
    '/images/generated-nft/interior8.png',
    '/images/generated-nft/interior9.png',
    '/images/generated-nft/interior10.png',
    '/images/generated-nft/interior11.png',
    '/images/generated-nft/interior12.png',
  ],
  'fashion_design_👗': [
    '/images/generated-nft/fashion1.png',
    '/images/generated-nft/fashion2.png',
    '/images/generated-nft/fashion3.png',
    '/images/generated-nft/fashion4.png',
    '/images/generated-nft/fashion5.png',
    '/images/generated-nft/fashion6.png',
    '/images/generated-nft/fashion7.png',
    '/images/generated-nft/fashion8.png',
    '/images/generated-nft/fashion9.png',
    '/images/generated-nft/fashion10.png',
    '/images/generated-nft/fashion11.png',
    '/images/generated-nft/fashion12.png',
    '/images/generated-nft/fashion13.png',
    '/images/generated-nft/fashion14.png',
    '/images/generated-nft/fashion15.png',
  ]
}


export const gallery = [
  {
    title: 'Doodles',
    icon: '/images/doodles-logo.png',
    items: [
      {
        asset: '/images/nft/doodles-fan-nft1.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft2.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft3.png',
        avatar: '/images/avatars/ballerz-profile1.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft4.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft5.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft6.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft7.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft8.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft9.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft10.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft11.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/doodles-fan-nft11.png',
        avatar: '/images/avatars/doodles-profile3.png',
      },
    ]
  },
  {
    title: '',
    icon: '/images/top-shot-logo.png',
    items: [
      {
        asset: '/images/nft/nba-fan-nft3.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft4.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft5.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft6.png',
        avatar: '/images/avatars/flunk-profile1.png',
      },
      {
        asset: '/images/nft/nba-fan-nft7.png',
        avatar: '/images/avatars/flovatar-profile3.png',
      },
      {
        asset: '/images/nft/nba-fan-nft8.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft9.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft10.png',
        avatar: '/images/avatars/flovatar-profile7.png',
      },
      {
        asset: '/images/nft/nba-fan-nft11.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
      {
        asset: '/images/nft/nba-fan-nft12.png',
        avatar: '/images/avatars/ballerz-profile1.png',
      },
      {
        asset: '/images/nft/nba-fan-nft13.png',
        avatar: '/images/avatars/flovatar-profile3.png',
      },
      {
        asset: '/images/nft/nba-fan-nft14.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft15.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft16.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft17.png',
        avatar: '/images/avatars/flunk-profile1.png',
      },
      {
        asset: '/images/nft/nba-fan-nft18.png',
        avatar: '/images/avatars/flovatar-profile3.png',
      },
      {
        asset: '/images/nft/nba-fan-nft19.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft20.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/nba-fan-nft21.png',
        avatar: '/images/avatars/flovatar-profile7.png',
      },
      {
        asset: '/images/nft/nba-fan-nft22.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
    ]
  },
  {
    title: '',
    icon: '/images/nfl-allday-logo.png',
    items: [
      {
        asset: '/images/nft/nfl-fan-nft1.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft2.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft3.png',
        avatar: '/images/avatars/ballerz-profile1.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft4.png',
        avatar: '/images/avatars/evolution-profile1.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft5.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft6.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft7.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft8.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft9.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft10.png',
        avatar: '/images/avatars/evolution-profile3.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft11.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/nfl-fan-nft12.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
    ]
  },
  {
    title: '',
    icon: '/images/ufc-strike-logo.png',
    items: [
      {
        asset: '/images/nft/ufc-fan-nft1.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft2.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft3.png',
        avatar: '/images/avatars/ballerz-profile1.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft4.png',
        avatar: '/images/avatars/evolution-profile1.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft5.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft6.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft7.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft8.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft9.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft10.png',
        avatar: '/images/avatars/evolution-profile3.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft11.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/ufc-fan-nft12.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
    ]
  },
  {
    title: '',
    icon: '/images/laliga-logo.png',
    items: [
      {
        asset: '/images/nft/laliga-fan-nft1.png',
        avatar: '/images/avatars/evolution-profile1.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft2.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft3.png',
        avatar: '/images/avatars/flovatar-profile8.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft4.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
      {
        asset: '/images/nft/laliga-fan-nft5.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft6.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft7.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft8.png',
        avatar: '/images/avatars/evolution-profile1.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft9.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft10.png',
        avatar: '/images/avatars/flovatar-profile8.png',
      },
      {
        asset: '/images/nft/laliga-fan-nft11.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
      {
        asset: '/images/nft/laliga-fan-nft12.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
    ]
  },
  {
    title: '',
    icon: '/images/evo-logo.png',
    items: [
      {
        asset: '/images/nft/evolution-fan-nft1.png',
        avatar: '/images/avatars/evolution-profile1.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft2.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft3.png',
        avatar: '/images/avatars/flovatar-profile8.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft4.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
      {
        asset: '/images/nft/evolution-fan-nft5.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft6.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft7.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft8.png',
        avatar: '/images/avatars/flovatar-profile8.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft9.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
      {
        asset: '/images/nft/evolution-fan-nft10.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft11.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft12.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft13.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
      {
        asset: '/images/nft/evolution-fan-nft14.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft15.png',
        avatar: '/images/avatars/ballerz-profile2.png',
      },
      {
        asset: '/images/nft/evolution-fan-nft16.png',
        avatar: '/images/avatars/ballerz-profile1.png',
      },
    ]
  },
  {
    title: 'Flunks',
    icon: '/images/flunks-os-logo-large.png',
    items: [
      {
        asset: '/images/nft/flunk-fan-nft1.png',
        avatar: '/images/avatars/flovatar-profile3.png',
      },
      {
        asset: '/images/nft/flunk-fan-nft2.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/flunk-fan-nft3.png',
        avatar: '/images/avatars/flovatar-profile8.png',
      },
      {
        asset: '/images/nft/flunk-fan-nft4.png',
        avatar: '/images/avatars/flunk-profile1.png',
      },
      {
        asset: '/images/nft/flunk-fan-nft5.png',
        avatar: '/images/avatars/flovatar-profile5.png',
      },
      {
        asset: '/images/nft/flunk-fan-nft6.png',
        avatar: '/images/avatars/flunk-profile2.jpg',
      },
      {
        asset: '/images/nft/flunk-fan-nft7.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/flunk-fan-nft8.png',
        avatar: '/images/avatars/flovatar-profile4.png',
      },
    ]
  },
  {
    title: '',
    icon: '/images/flovatar-logo.png',
    items: [
      {
        asset: '/images/nft/flovatar-fan-nft1.png',
        avatar: '/images/avatars/flovatar-profile1.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft2.png',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft3.png',
        avatar: '/images/avatars/doodles-profile3.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft4.png',
        avatar: '/images/avatars/doodles-profile2.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft5.png',
        avatar: '/images/avatars/doodles-profile1.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft6.png',
        avatar: '/images/avatars/flovatar-profile2.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft7.png',
        avatar: '/images/avatars/flovatar-profile3.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft8.png',
        avatar: '/images/avatars/flovatar-profile4.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft9.png',
        avatar: '/images/avatars/flovatar-profile5.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft10.png',
        avatar: '/images/avatars/flovatar-profile6.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft11.png',
        avatar: '/images/avatars/flovatar-profile7.png',
      },
      {
        asset: '/images/nft/flovatar-fan-nft12.png',
        avatar: '/images/avatars/flovatar-profile8.png',
      },
    ]
  },
  {
    title: 'You May Also Like',
    icon: '',
    items: [
      {
        asset: '/images/nft/custom-fan-nft1.webp',
        avatar: '/images/avatars/evolution-profile1.png',
      },
      {
        asset: '/images/nft/custom-fan-nft2.webp',
        avatar: '/images/avatars/evolution-profile2.png',
      },
      {
        asset: '/images/nft/custom-fan-nft3.webp',
        avatar: '/images/avatars/evolution-profile3.png',
      },
      {
        asset: '/images/nft/custom-fan-nft4.jpg',
        avatar: '/images/avatars/doodles-profile4.png',
      },
      {
        asset: '/images/nft/custom-fan-nft5.png',
        avatar: '/images/avatars/flunk-profile1.png',
      },
    ]
  },
]