exports.seed = (knex) => {
  return knex('games').insert([
    {
      id: 1,
      name: 'Root',
      description:
        'Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again',
      number_player: '2-4',
      play_time: '60-90 mins',
      photo_url:
        'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104',
    },
    {
      id: 2,
      name: 'Scythe',
      description:
        "gives players almost complete control over their fate. Other than each player's individual hidden objective card, the only elements of luck or variability are &quot;Encounter&quot; cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness",
      number_player: '1-5',
      play_time: '90-120 mins',
      photo_url:
        'https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922',
    },
  ])
}
