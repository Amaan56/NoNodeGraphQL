let user = new Query('user');
let profilePicture = new Query('profilePicture');

let queryProfilepicture = profilePicture.find(['uri', 'width', 'height']);

let query = user.find(['name', 'email', queryProfilepicture]);

console.log(query.toString());
