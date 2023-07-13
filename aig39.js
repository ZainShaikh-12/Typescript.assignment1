// Question 40
var make_album = function (artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
};
// Creating albums using the make_album function
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2", 12);
var album3 = make_album("Artist 3", "Album 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
