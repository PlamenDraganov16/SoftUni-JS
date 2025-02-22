function songs(data)
{
    let result = [];

    class Song
    {
        constructor(name, time, typeList)
        {
            this.name = name;
            this.time = time;
            this.typeList = typeList;
        }
    }

    let countSongs = Number(data.shift());

    for(let i = 0; i < countSongs; i++)
    {
        let[typeList, name, time] = data[i].split("_");

        let mySong = new Song(name, time, typeList);

        result.push(mySong);
    }

    let playListType = data[data.length - 1];

    if(playListType === 'all')
    {
        result.forEach(song => console.log(song.name))
    }
    else
    {
        let filterSongs = result.filter(song => song.typeList === playListType)

        filterSongs.forEach(song => console.log(song.name))
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )