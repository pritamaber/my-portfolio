---
title: "Cards and Props in React"
date: "2025-05-31"
author: "Pritam Das"
tags: ["coding", "react", "cards", "clean-code", "best-practices"]
---

## What are cards components

In react application you may sometime have to show information of something properly structure for that we use cards , suppose you have to create an app where you have to show 5 students details in a structured manner , their names , roll number , standard , subject enrolled . you will not create five cards and hard code each values instead you will create single card component and pass the data of students the in props .

## Syntax

In the below project we will use a free nasa api , to fetch astronomy pictures of the day , we will create a card component called `PhotoCard.jsx` which will have place holder for the api data, title , image url , and explanation
`PhotoCard.jsx`

    export default function PhotoCard({ title, date, image, explanation }) {
      return (
        <div className="photo-card">
          <h2 className="photo-title">{title}</h2>
          <p className="photo-date">{date}</p>
          <img src={image} alt={title} className="photo-img" />
          <p className="photo-description">{explanation}</p>
        </div>
      );
    }

Notice the curly braces {title}, {date}, {explanation}. Now we will use the card component in `App.jsx`

    import { useEffect, useState } from "react";
    import PhotoCard from "./components/PhotoCard";

    export default function App() {
      const [photo, setPhoto] = useState(null);

      useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
          .then((res) => res.json())
          .then((data) => {
            setPhoto({
              title: data.title,
              date: data.date,
              image: data.url,
              explanation: data.explanation,
            });
          });
      }, []);

      return (
        <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
            🌌 NASA Picture of the Day
          </h1>
          {photo ? (
            <PhotoCard {...photo} />
          ) : (
            <p className="text-center text-gray-600">Loading...</p>
          )}
        </div>
      );
    }

use use

    useEffect(() => {
            fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
              .then((res) => res.json())
              .then((data) => {
                setPhoto({
                  title: data.title,
                  date: data.date,
                  image: data.url,
                  explanation: data.explanation,
                });
              });
          }, []);

here the data is fetched from the api , then it is converted to json then it is set in the variable using the usestate hook , after that we pass the data as props into the card component

    return (
        <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
            🌌 NASA Picture of the Day
          </h1>
          {photo ? (
            <PhotoCard {...photo} />
          ) : (
            <p className="text-center text-gray-600">Loading...</p>
          )}
        </div>
      );
    }

This code

     {photo ? (
            <PhotoCard {...photo} />
          ) : (
            <p className="text-center text-gray-600">Loading...</p>
          )}

checks wether the variable phot is empty or not here we use ternary operator , if phot is empty it will show loading... else pass the data as props to the card component through object destructuring `{...photo}`

view the output of this code live at [codesandbox](https://4wh52c.csb.app/)
