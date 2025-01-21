function gramophone(name, album, song)
{
    let duration = (album.length * name.length) * song.length / 2 
    let rotation = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');