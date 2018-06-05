var cityArray = [
    {
        name: 'atlanta',
        state: 'GA',
        country: 'United States',
        cityHop1: {
            name: 'Atlanta Botanical Garden',
            address:'1345 Piedmont Avenue, Atlanta, GA 30309',
            phone:'404-876-5859',
            site: 'http://atlantabg.org/',
            photo: "http://thestrategicfellow.com/wp-content/uploads/2018/05/atlgarden.jpg",
            gps: {
                lat: 33.7887578,
                lon: -84.3776903
            },
            category: "outdoor",
            price: 20.00,

        },
        cityHop2: {
            name: 'Atlanta United FC',
            address:'1345 Piedmont Avenue, Atlanta, GA 30309',
            phone:'404-876-5859',
            site: 'http://atlantabg.org/',
            photo: "http://thestrategicfellow.com/wp-content/uploads/2018/05/atlunited.jpg",
            gps: {
                lat: 33.754496982,
                lon: -84.400498398
            },
            category: "outdoor",
            price: 15.00,
            site: 'https://www.atlutd.com/'
        },
        cityHop3: {
            name: 'Fox Theatre',
            address:'1345 Piedmont Avenue, Atlanta, GA 30309',
            phone:'404-876-5859',
            site: 'http://atlantabg.org/',
            photo: "http://thestrategicfellow.com/wp-content/uploads/2018/05/fox-exterior-1_750xx4352-2448-0-228.jpg",
            gps: {
                lat: 33.7725845,
                lon: -84.3856028
            },
            category: "concerts & plays",
            price: 50.00,
            site: 'https://www.foxtheatre.org/'
        },
        cityHop4: {
            name: 'Atlantic Station',
            address:'1371 Market Street, Atlanta, GA  30363',
            phone:'04-410-4010',
            site: 'http://atlantabg.org/',
            photo: "http://thestrategicfellow.com/wp-content/uploads/2018/05/atlantic-station.jpg",
            gps: {
                lat: 33.79254,
                lon: -84.396322
            },
            category: "shopping & restaurants",
            price: 100.00,
            site: 'http://www.atlanticstation.com/'
        },
        pubTrans: "http://www.itsmarta.com/",
        airport:{ name: "Hartsfield–Jackson Atlanta International Airport",
            site: "http://www.atl.com/"},
        weatherURL:"https://forecast7.com/en/33d75n84d39/atlanta/?unit=us",
        cityBG: "http://thestrategicfellow.com/wp-content/uploads/2018/06/atl.jpg"

    }
]

module.exports = cityArray;
