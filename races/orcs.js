module.exports = {
    name: 'Orcs',
    image: '/image/orcs.jpg',
    description: 'Fierce warriors of the mountains, known for unmatched strength.',
    hp: 15,
    ep: 12,
    skills: [
      {
        name: 'Berserk Rage',
        cost: 25,
        type: 'attack',
        description: 'Double strength for a short time, but lose defense.'
      },
      {
        name: 'Heavy Smash',
        cost: 20,
        type: 'attack',
        description: 'Crush enemies with a heavy weapon.'
      },
      {
        name: 'Fire Resistance',
        cost: 10,
        type: 'defense',
        description: 'Reduce fire damage greatly.'
      },
    ]
  };
  