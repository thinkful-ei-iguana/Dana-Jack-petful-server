const queue = require('./queue');

let cats = new queue();
cats.enqueue({
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
});
cats.enqueue({
    imageURL: 'https://cdn2.thecatapi.com/images/TnwHiS7nO.jpg',
    imageDescription: 'Adam thinks about what snuffles would like',
    name: 'Adam',
    sex: 'Male',
    age: 7,
    breed: 'Fluffy',
    story: 'Loves his toys more than his previous owners'
});
cats.enqueue({
    imageURL: 'https://cdn2.thecatapi.com/images/bWSZ-4wVI.jpg',
    imageDescription: 'Debra being cute and chunky',
    name: 'Debra',
    sex: 'Female',
    age: 10,
    breed: 'Calico',
    story: 'Ate too much for her previous owner'
});
cats.enqueue({
    imageURL: 'https://cdn2.thecatapi.com/images/40m.jpg',
    imageDescription: 'Garfield 2 hoping for playtime soon',
    name: 'Garfield 2',
    sex: 'Male',
    age: 4,
    breed: 'Orange',
    story: 'Not zen enough for his old home'
});
cats.enqueue({
    imageURL: 'https://cdn2.thecatapi.com/images/ckn.jpg',
    imageDescription: 'Tiger getting a pet',
    name: 'Tiger',
    sex: 'Female',
    age: 1,
    breed: 'Tabby',
    story: 'Too small. Too pure'
});


let dogs = new queue();
dogs.enqueue({
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
});
dogs.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/stbernard/n02109525_11732.jpg',
    imageDescription: 'Greg enjoying his time at the beach',
    name: 'Greg',
    sex: 'Male',
    age: 8,
    breed: 'St Bernard',
    story: 'Owner Lost at sea'
});
dogs.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/mountain-bernese/n02107683_5840.jpg',
    imageDescription: 'Daisy all grown up!',
    name: 'Daisy',
    sex: 'Female',
    age: 4,
    breed: 'Mountain Bernese',
    story: 'Got too big for her home'
});
dogs.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/malinois/n02105162_694.jpg',
    imageDescription: 'A good boye on his walk in the snow',
    name: 'Babaduke',
    sex: 'Male',
    age: 6,
    breed: 'Malinois',
    story: 'Found as a stray'
});
dogs.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/collie-border/n02106166_401.jpg',
    imageDescription: 'Sandra stalking her prey',
    name: 'Sandra',
    sex: 'Female',
    age: 4,
    breed: 'Border Collie',
    story: 'Owner wanted a hunting dog and she is too playful'
});

module.exports = {cats, dogs};