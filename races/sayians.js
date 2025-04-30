module.exports = {
    name: 'Saiyans',
    image: '/image/saiyans.jpg',
    description: '',
    hp: 18,
    ep: 15,
    skills: [
        {
          name: 'Ki Blast',
          cost: 1,
          type: 'attack',
          description: 'A basic energy projectile fired from the hands, gives a damage of 3hp'
        },
        {
          name: 'Finger Beam',
          cost: 2,
          type: 'attack',
          description: 'A concentrated energy beam shot from a fingertip,gives a damage of 4hp'
        },
        {
          name: 'Energy Wave',
          cost: 2,
          type: 'attack',
          description: 'A continuous wave of energy fired from the palms,gives a damage of 4hp'
        },
        {
          name: 'Kamehameha',
          cost: 4,
          type: 'attack',
          description: 'A powerful energy wave charged between the hands and unleashed with force,gives a damage of 6hp'
        },
        {
          name: 'Destructo Disc',
          cost: 4,
          type: 'attack',
          description: 'A sharp, spinning energy disc capable of cutting through nearly anything,gives a damage of 5hp,cannot be blocked'
        },
        {
          name: 'Spirit Bomb',
          cost: 6,
          type: 'magic',
          description: 'A massive energy sphere created from the energy of living beings,gives a damage of 7hp'
        },
        {
          name: 'Gravity Bash',
          cost: 3,
          type: 'physical',
          description: 'A heavy, gravity-enhanced strike that knocks opponents down,gives a damage of 4hp'
        },
        {
          name: 'Full Power Energy Blast',
          cost: 3,
          type: 'attack',
          description: 'An all-out blast of concentrated energy with explosive impact,gives a damage of 5hp'
        },
        {
          name: 'Dragon Blast',
          cost: 2,
          type: 'magic',
          description: 'A fiery energy attack shaped like a dragon charging at the enemy,gives a damage of 3hp'
        },
        {
          name: 'Energy Shield',
          cost: 2,
          type: 'defense',
          description: 'A barrier of energy that blocks incoming attacks.'
        },
        {
          name: 'God Bind',
          cost: 5,
          type: 'control',
          description: 'A divine technique that makes the opponent skip automatically removing 2hp and makes you give the next mo ve'
        },
        {
          name: 'Super God Fist',
          cost: 4,
          type: 'physical',
          description: 'A powerful, divine punch that delivers massive impact.'
        },
        {
          name: 'Double Axe Handle',
          cost: 2,
          type: 'physical',
          description: 'A two-handed overhead strike that crushes opponents with brute force,,gives a damage of 4hp'
        },
        {
          name: 'Celestial Whirlwind',
          cost: 5,
          type: 'magic',
          description: 'A spinning energy storm that surrounds and damages all nearby foes,can be used as defense or an attack if 5hp.'
        },
        {
          name: 'Instant Transmission',
          cost: 3,
          type: 'utility',
          description: 'Teleports the user instantly to a target location or ally,used to dodge an attack'
        }      
    ]
};