This Server is for a FIFO pet adoption

Team: Jack Pupel and Dana Nanosh

the only two endpoints are '/api/dog' and '/api/cat'
These endpoints have a get/delete functionality. 
Get returns imageURL, imageDescription, name, sex, age, breed, and story
ie: GET /api/dog will return:
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'

Delete will remove that pet from the queue (and reload the queue for the purposes of not having to restart the server)

Technologies used: express, cors
