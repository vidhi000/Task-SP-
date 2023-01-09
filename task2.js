let nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

  //answers
  //1

  function addSpeaker(speakername){
     nestedObject.speakers.push({
        name : speakername
     })
  }

  console.log(addSpeaker('Mike'));

  //2
  function addLanguage(language,helloInLanguage){
    nestedObject.data.languages[language] = {
       hello : helloInLanguage
    }
  }
  console.log(addLanguage("gujrati","krm cho?"));

  //3

  function addCountry (name,capital,population){
    nestedObject.data.continents.europe.countries[name] = {
        capital : capital,
        population : population
    }
  }

  console.log(addCountry("india","Delhi",80000000));
