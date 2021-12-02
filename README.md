# IMDB-API

IMDB-API is an unofficial API to scrape data from IMDB site...

# How to get data

You can get the data by using two methods.

1. Searching By IMDB ID. It looks something like `tt0848228`

```
/api/id/{ID}
```
2. Searching By Movie Name.

```
/api/title/{movie_name}
```

## Example of search by id
Request
```
$ /api/id/avengers
```
Response
```json
[
    {
        "name": "The Avengers",
        "year": "2012",
        "rating": "8.0",
        "genre": "ActionAdventureSci-Fi",
        "plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        "director": "Joss Whedon"
    }
]
```

# Live Demo

Go to `https://imdb-api.fixalis706.repl.co/api/id/${IMDB_ID}` to search by IMDB ID 

or 
`https://imdb-api.fixalis706.repl.co/api/title/${Movie_Name}` to search by movie title

### You can fork this repo and deploy it to your server or you can deploy it on Heroku easily by clicking the below button  

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

---