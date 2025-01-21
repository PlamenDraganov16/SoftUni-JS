function aquarium (duljina, shirina, height, percent)
{
    let volume = duljina * shirina * height;
    let volumeInLitres = volume / 1000 // delim na hilqda zashtoto 1 sm = 1 ml na tazi shema 299625 ml trqbva da stane l.
    let filled = percent / 100; // namirame procenta zapulnen akvarium.
    let requiredLitres = volumeInLitres * (1-filled);
    console.log(requiredLitres);
}

aquarium(85, 75, 47, 17)