import MovieCard from "./components/MovieCard.jsx"

function App() {

  const blogItems = [
    { imageUrl: "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg", title: "Bright", year: 2017, author: "David Ayer", minutes: 117, type: "Action, Crime, Fantasy", content: "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.", blur: "blur_back bright_back" },
    { imageUrl: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg", title: "Tomb Raider", year: 2018, author: "Roar Uthaug", minutes: 125, type: "Action, Fantasy", content: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.", blur: "blur_back tomb_back" },
    { imageUrl: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg", title: "Black Panther", year: 2018, author: "Ryan Coogler", minutes: 134, type: "Action, Adventure, Sci-Fi", content: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.", blur: "blur_back ave_back" },
    { imageUrl: "https://www.movieposters.com/cdn/shop/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_1024x1024.jpg?v=1573618694", title: "Inception", year: 2010, author: "Christopher Nolan", minutes: 148, type: "Action, Sci-Fi, Thriller", content: "A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.", blur: "blur_back inception_back" },
    { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDqif26isd2akLZ3dJbTQpvU4R3Foo29hzA&s", title: "Dune: Part One", year: 2021, author: "Denis Villeneuve", minutes: 155, type: "Adventure, Drama, Sci-Fi", content: "Paul Atreides, a brilliant and gifted young man born into a great destiny, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.", blur: "blur_back dune_back" },

  ]

  return (
    <>
      <h1>Movie List</h1>

      {blogItems.map(blog => <MovieCard key={blog.title} imageUrl={blog.imageUrl} title={blog.title} year={blog.year} author={blog.author} minutes={blog.minutes} type={blog.type} content={blog.content} blur={blog.blur} />)}
    </>
  )
}

export default App
