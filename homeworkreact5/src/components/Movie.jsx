import { useParams } from "react-router-dom";

const Movies = [
    {
        id: 1,
        Name: "Fight Club",
        Genre: "Thriller, Adventure",
        Description: "In the shadowy world of Fight Club, a disenchanted office worker and a charismatic soapmaker forge an unusual bond. Their journey through an underground fight club becomes a twisted exploration of identity, rebellion, and the darkness within us all.",
        Year: 1999,
        Director: "David Fincher",
        IMDbRating: 8.8,
      },
      {
        id: 2,
        Name: "Saving Private Ryan",
        Genre: "War, History",
        Description: "Steven Spielberg's masterpiece follows Captain John Miller and his squad as they brave the horrors of World War II to save Private James Francis Ryan. This gripping tale of heroism and sacrifice paints a vivid picture of the triumphs and tragedies of war.",
        Year: 1998,
        Director: "Steven Spielberg",
        IMDbRating: 8.6,
      },
      {
        id: 3,
        Name: "Alexander",
        Genre: "War, History",
        Description: "Oliver Stone's epic chronicles the remarkable life of Alexander the Great, from his meteoric rise to power to his conquest of vast empires. It's a sweeping saga of ambition, courage, and the pursuit of immortality through conquest.",
        Year: 2004,
        Director: "Oliver Stone",
        IMDbRating: 5.6,
      },
      {
        id: 4,
        Name: "Troy",
        Genre: "War, History",
        Description: "Wolfgang Petersen's 'Troy' transports us to the ancient world, where gods and mortals collide in a battle for honor, love, and power. With stunning visuals and legendary heroes, it's an epic tale of destiny, courage, and the price of ambition.",
        Year: 2004,
        Director: "Wolfgang Petersen",
        IMDbRating: 7.2,
      },
        {
          id: 5,
          Name: "The Shawshank Redemption",
          Genre: "Drama, Crime",
          Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          Year: 1994,
          Director: "Frank Darabont",
          IMDbRating: 9.3,
        },
        {
          id: 6,
          Name: "Pulp Fiction",
          Genre: "Crime, Drama",
          Description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          Year: 1994,
          Director: "Quentin Tarantino",
          IMDbRating: 8.9,
        },
        {
          id: 7,
          Name: "The Godfather",
          Genre: "Crime, Drama",
          Description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          Year: 1972,
          Director: "Francis Ford Coppola",
          IMDbRating: 9.2,
        },
        {
          id: 8,
          Name: "Forrest Gump",
          Genre: "Drama, Romance",
          Description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
          Year: 1994,
          Director: "Robert Zemeckis",
          IMDbRating: 8.8,
        },
        {
          id: 9,
          Name: "Inception",
          Genre: "Action, Sci-Fi",
          Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          Year: 2010,
          Director: "Christopher Nolan",
          IMDbRating: 8.8,
        },
        {
          id: 10,
          Name: "The Dark Knight",
          Genre: "Action, Crime",
          Description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          Year: 2008,
          Director: "Christopher Nolan",
          IMDbRating: 9.0,
        },
        {
          id: 11,
          Name: "The Matrix",
          Genre: "Action, Sci-Fi",
          Description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
          Year: 1999,
          Director: "The Wachowskis",
          IMDbRating: 8.7,
        },
        {
          id: 12,
          Name: "Gladiator",
          Genre: "Action, Drama",
          Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
          Year: 2000,
          Director: "Ridley Scott",
          IMDbRating: 8.5,
        },
        {
          id: 13,
          Name: "The Silence of the Lambs",
          Genre: "Crime, Drama",
          Description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          Year: 1991,
          Director: "Jonathan Demme",
          IMDbRating: 8.6,
        },
        {
          id: 14,
          Name: "Schindler's List",
          Genre: "Biography, Drama",
          Description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
          Year: 1993,
          Director: "Steven Spielberg",
          IMDbRating: 8.9,
        },
        {
            id: 15,
            Name: "Inglourious Basterds",
            Genre: "Adventure, Drama",
            Description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theater owner's vengeful plans for the same.",
            Year: 2009,
            Director: "Quentin Tarantino",
            IMDbRating: 8.3,
          },
          {
            id: 16,
            Name: "The Lord of the Rings: The Fellowship of the Ring",
            Genre: "Adventure, Fantasy",
            Description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the One Ring and the Dark Lord Sauron.",
            Year: 2001,
            Director: "Peter Jackson",
            IMDbRating: 8.8,
          },
          {
            id: 17,
            Name: "Eternal Sunshine of the Spotless Mind",
            Genre: "Drama, Romance, Sci-Fi",
            Description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories. But as they forget each other, they realize what they had.",
            Year: 2004,
            Director: "Michel Gondry",
            IMDbRating: 8.3,
          },
          {
            id: 18,
            Name: "The Grand Budapest Hotel",
            Genre: "Adventure, Comedy, Crime",
            Description: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
            Year: 2014,
            Director: "Wes Anderson",
            IMDbRating: 8.1,
          },
          {
            id: 19,
            Name: "The Departed",
            Genre: "Crime, Drama",
            Description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
            Year: 2006,
            Director: "Martin Scorsese",
            IMDbRating: 8.5,
          },
          {
            id: 20,
            Name: "The Godfather Part II",
            Genre: "Crime, Drama",
            Description: "The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
            Year: 1974,
            Director: "Francis Ford Coppola",
            IMDbRating: 9.0,
          }
      ];
      
 
  
  export const Movie = () => {
    const { id } = useParams();
    const movie = Movies.find((m) => m.id === parseInt(id));
  
    return (
      <div>
        <h3>Movie: {movie.Name}</h3>
        <p>Director: {movie.Director}</p>
        <p>Year: {movie.Year}</p>
        <p>Imdb Rating: {movie.IMDbRating}</p>
        <p>Description: {movie.Description}</p>
      </div>
    );
  };