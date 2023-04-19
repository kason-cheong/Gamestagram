exports.seed = (knex) => {
  return knex('events').insert([
    {
      id: 1,
      host_id: 2,
      event_name: 'ke home party',
      description:
        "Join us for an exciting evening of strategy and competition as we play Root, the popular board game that's taking the gaming world by storm. This game night will take place at my house, so be prepared for some cozy fun!",
      game_id: 'TAAifFP590',
      location: '20 Kingdon Street, Newmarket, Auckland 1023',
      time: '20-04-2023 21:00',
      number_ppl_playing: '2-4',
      created_at: new Date(1681450450040),
      status: 'open',
    },
    {
      id: 2,
      host_id: 1,
      event_name: 'Borad game is the best',
      description:
        'Conquer Europe in a night of intense strategy and resource management. Join us for a Scythe game night and experience the thrill of immersive gameplay, beautifully crafted miniatures, and fierce competition. RSVP now to secure your spot and dominate the continent',
      game_id: 'yqR4PtpO8X',
      location: '457 Mount Eden Road, Mount Eden, Auckland 1024',
      time: '11-02-2023 21:00',
      number_ppl_playing: '2-4',
      created_at: new Date(1681453450040),
      status: 'open',
    },
    {
      id: 3,
      host_id: 1,
      event_name: 'Settlers of Catan Day',
      description:
        "Join us for Settlers of Catan Day and explore the world of trading, strategy, and diplomacy! Whether you're a seasoned player or a beginner, this game is sure to captivate you with its endless possibilities. Build your empire, trade with others, and become the most prosperous settlement on the island. With a mix of luck and skill, every game is unique and exciting. Don't miss out on the fun - come join us and discover why Settlers of Catan is a classic!",
      game_id: 'OIXt3DmJU0',
      location: 'Beyond Radiology 110 Grafton Road, Grafton, Auckland 1010',
      time: '22-01-2023 21:00',
      number_ppl_playing: '2-4',
      created_at: new Date(1681453450040),
      status: 'open',
    },
    {
      id: 4,
      host_id: 2,
      event_name: "Life's a Game - Let's Play!",
      description:
        "Join us for a game day featuring the classic board game, the game of life. Take on the role of a professional athlete, a rock star, or a doctor as you navigate through life's many twists and turns. With snacks and friendly competition, it's the perfect way to spend a lazy afternoon with friends or family. Come on down and let's play!",
      game_id: 'OCv0s54FtD',
      location: '66 Stamford Park Road, Mount Roskill, Auckland 1041',
      time: '21-03-2023 21:00',
      number_ppl_playing: '2-4',
      created_at: new Date(1681453450040),
      status: 'open',
    },
  ])
}
