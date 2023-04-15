exports.seed = (knex) => {
  return knex('users').insert([
    {
      id: 1,
      user_name: 'Ke123',
      bio: 'A true crunchy extravaganza - sure to delight even the most diehard smooth fans!',
      email: 'maxeipk@gmail.com',
      auth0_id: 'kjuh1kj23sd',
      photo_url:
        'https://st2.depositphotos.com/1071909/6630/i/450/depositphotos_66306151-stock-photo-programmer-click-on-keypad-api.jpg',
      singed_up_at: new Date(1681441450040 / 1000),
    },
    {
      id: 2,
      user_name: 'frank332',
      bio: 'Garlic to the max - we really outdid ourselves here.',
      email: 'fank_hall@gmail.com',
      auth0_id: '12341d88',
      photo_url:
        'https://st2.depositphotos.com/1071909/6630/i/450/depositphotos_66306151-stock-photo-programmer-click-on-keypad-api.jpg',
      singed_up_at: new Date(1681451450040 / 1000),
    },
  ])
}
