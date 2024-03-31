let BestFriend = "/assets/audio/Laufey - Best Friend (Official Audio).mp3"
let Bewitched = '/assets/audio/Laufey - Bewitched (Official Music Video).mp3';
let ChristmasDreaming = '/assets/audio/Laufey - Christmas Dreaming (Official Audio).mp3';
let DearSoulmate = '/assets/audio/Laufey - Dear Soulmate (Official Audio).mp3';
let Dreamer = '/assets/audio/Laufey - Dreamer (Official Audio).mp3';
let EverythingIKnowAboutLove = '/assets/audio/Laufey - Everything I Know About Love (Official Video).mp3';
let FallingBehind = '/assets/audio/Laufey - Fragile (Official Audio).mp3';
let Fragile = '/assets/audio/Laufey - Fragile (Official Audio).mp3';
let FromTheStart = '/assets/audio/Laufey - From The Start (Official Music Video).mp3';
let IWishULove = '/assets/audio/Laufey - I Wish You Love (Official Audio)(1).mp3';
let Lettertomy13YearOldSelf = '/assets/audio/Laufey - Letter To My 13 Year Old Self (Official Audio).mp3';
let LikeTheMovies = '/assets/audio/Laufey - Like The Movies (Official Audio).mp3';
let LoveToKeepMeWarm = '/assets/audio/Laufey - Love To Keep Me Warm.mp3';
let LoveSick = '/assets/audio/Laufey - Lovesick (Official Audio).mp3';
let Magnolia = '/assets/audio/Laufey - Magnolia (Official Audio).mp3';
let _Promise = '/assets/audio/Laufey - Promise (Official Audio).mp3';
let SecondBest = '/assets/audio/Laufey - Second Best (Official Audio).mp3';
let StreetByStreet = '/assets/audio/Laufey - Street by Street  (Official Audio).mp3';
let Valentine = '/assets/audio/Laufey - Valentine (Official Audio).mp3';


var sourceAudio = document.querySelector("audio");
function testAudio()
{
    console.log("Test");
    sourceAudio.src = promise;
    

}
//console.log("Test");


function selectSong(name)
{
    sourceAudio.src = name
    sourceAudio.play;
}