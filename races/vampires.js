module.exports = {
    name: 'Vampires',
    image: '/image/vampires.jpg',
    description: '',
    hp: 12,
    ep: 15,
    skills: [
      {
        name: 'Blood swipe',
        cost: 2,
        type: 'attack',
        description: 'An attack that is thrown from the users palm as it does great damage to the opponent removing 4Hp'
      },
      {
        name: 'Blood control',
        cost: 3,
        type: 'attack',
        description: 'An attack that can not be used at the beginig of the match only at the middle,the spilt blood is then turned into sharp objects and thrown at the opponent,it gives a damage of 6hp'
      },
      {
        name: 'Blood wall',
        cost: 2,
        type: 'attack',
        description: 'the user creates a blood wall as it can block an attack up to 6 hp,note if the attack is more than 6hp,the wall absorbs 6 hp and the remainig damage goees to the user'
      },
    ]
};