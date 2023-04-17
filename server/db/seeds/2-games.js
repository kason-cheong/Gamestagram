exports.seed = (knex) => {
  return knex('games').insert([
    {
      id: 1,
      api_id:"TAAifFP590",
      name: 'Root',
      description:
        'Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. ',
      number_player: '2-4',
      play_time: '60-90',
      photo_url:
        'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104',
    },
    {
      id: 2,
      api_id:"yqR4PtpO8X",
      name: 'Scythe',
      description:
        "Gives players almost complete control over their fate. Other than each player's individual hidden objective card, the only elements of luck or variability are Encounter cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness",
      number_player: '1-5',
      play_time: '90-120',
      photo_url:
        'https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922',
    },
    {
      id: 3,
      api_id:"OIXt3DmJU0",
      name: 'Catan',
      description:
        'The women and men of your expedition build the first two settlements. Fortunately, the land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan?',
      number_player: '3-4',
      play_time: '45-90',
      photo_url:
        'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324722072.jpg?format=webp',
    },
    {
      id: 4,
      api_id:"OCv0s54FtD",
      name: 'The Game of Life',
      description:
        "Good fortune is always around the corner. That's LIFE. Contains sturdy bi-fold game board with plastic buildings and mountains, money pad, cards, stock and insurance certificates, 8 plastic cars, pink and blue people-pegs, number board, bankers trays and rules. Two to six player game.",
      number_player: '2-6',
      play_time: '30',
      photo_url:
        'https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257516250-61As7WgB2BdL.jpg?format=webp',
    },
  ])
}
