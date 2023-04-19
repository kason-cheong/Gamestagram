exports.seed = (knex) => {
  return knex('users').insert([
    {
      id: 1,
      user_name: 'Ke123',
      bio: "A new web developer with a love for board games. Driven by my passion for learning and exploring new areas, I'm always on the lookout for exciting opportunities to grow my skills. In my free time, you can often find me deep in thought, strategizing over a game of Root or Scythe",
      email: 'maxeipk@gmail.com',
      auth0_id: 'kjuh1kj23sd',
      photo_url:
        'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/bfc32da8a7fae22a0bdc8af7d67379c2.jpeg',
      singed_up_at: new Date(1681441450040),
    },
    {
      id: 2,
      user_name: 'frank332',
      bio: "Hey, I'm Frank Hall, a Kiwi living in Auckland and a gamer at heart. I love investing in EFTs and playing video games, but lately I've discovered a new passion for board games thanks to my friends",
      email: 'fank_hall@gmail.com',
      auth0_id: '12341d88',
      photo_url:
        'https://www.pbs.org/wnet/nature/files/2015/11/636x460design_01-610x441.jpg',
      singed_up_at: new Date(1681451450040),
    },
  ])
}
