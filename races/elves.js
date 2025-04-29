module.exports = {
    name: 'Elves',
    image: '/image/elves.jpg',
    description: 'Graceful and wise, Elves are masters of nature and ancient magic.',
    hp: 13,
    ep: 20,
    skills: [
      {
        name: 'Archery',
        cost: 15,
        type: 'attack',
        description: 'A precise ranged attack using a longbow.'
      },
      {
        name: 'Nature Speak',
        cost: 10,
        type: 'magic',
        description: 'Communicate with animals and plants for guidance.'
      },
      {
        name: 'Night Vision',
        cost: 5,
        type: 'defense',
        description: 'See clearly in total darkness.'
      },
      // ➡️ Add many more skills here
    ]
  };
  