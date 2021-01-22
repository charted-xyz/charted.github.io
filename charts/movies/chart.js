let chart = {
    "width": 650,
    "height": 650,
    "padding": 40,
    "background": "#F9F9F9",
    "title": {
        "text": "Reel History",
        "subtitle": [
            "In her book 'Reel History: The World According to the Movies' Alex von Tunzelmann",
            "examines 104 movies to determine how accurate they depict historical events.",
            "She grades every movie for History and Entertainment. You can explore the data",
            "with this interactive chart. Each point represents one movie in the dataset.",
            "Hover over a point to get additional information",
            " "
        ],
        "align": "left",
        "anchor": "start",
        "font": "Ubuntu Mono",
        "subtitleFont": "Ubuntu Mono",
        "subtitleFontSize": 16,
        "fontSize": 28,
        "fontWeight": 600,
        "color": "#3E454F",
        "subtitleColor": "#3E454F",
        "frame": "group",
        "subtitlePadding": 5
    },
    "datasets": {
        "more_precise": [{ "text": "   ⟶   more accurate" }],
        "less_precise": [{ "text": "less accurate   ⟵   " }],
        "less_entertaining": [{ "text": "boring   ⟵   " }],
        "more_entertaining": [{ "text": "   ⟶   entertaining" }],
        "source": [{ "text": "Data: Alex von Tunzelmann | Viz: Charted.xyz" }],
        "rule_x": [{ "x": 6.5 }],
        "rule_y": [{ "y": 6.5 }]
    },
    "layer": [
        {
            "data": {
                "values": [
                    {
                        "title": "Queen Christina",
                        "director": "Rouben Mamoulian",
                        "release_year": 1933,
                        "entertainment": "A-",
                        "history": "B+",
                        "history_beeswarm": 11,
                        "entertainment_beeswarm": 12.15
                    },
                    {
                        "title": "The Scarlett Empress",
                        "director": "Josef von Sternberg",
                        "release_year": 1934,
                        "entertainment": "B",
                        "history": "D-",
                        "history_beeswarm": 3,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "The Private Lives of Elizabeth and Essex",
                        "director": "Michael Curtiz",
                        "release_year": 1939,
                        "entertainment": "D+",
                        "history": "B-",
                        "history_beeswarm": 9,
                        "entertainment_beeswarm": 5
                    },
                    {
                        "title": "Northwest Passage: Book I - Rogers' Rangers",
                        "director": "King Vidor",
                        "release_year": 1940,
                        "entertainment": "D",
                        "history": "C",
                        "history_beeswarm": 6.85,
                        "entertainment_beeswarm": 3.85
                    },
                    {
                        "title": "That Hamilton Woman!",
                        "director": "Alexander Korda",
                        "release_year": 1941,
                        "entertainment": "C+",
                        "history": "C",
                        "history_beeswarm": 6.85,
                        "entertainment_beeswarm": 7.85
                    },
                    {
                        "title": "Objective, Burma!",
                        "director": "Raoul Walsh",
                        "release_year": 1945,
                        "entertainment": "B+",
                        "history": "D-",
                        "history_beeswarm": 3,
                        "entertainment_beeswarm": 11
                    },
                    {
                        "title": "Bonnie Prince Charlie",
                        "director": "Anthony Kimmins",
                        "release_year": 1948,
                        "entertainment": "D-",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 3
                    },
                    {
                        "title": "Samson and Delilah",
                        "director": "Cecil B. DeMille",
                        "release_year": 1949,
                        "entertainment": "B",
                        "history": "B",
                        "history_beeswarm": 9.85,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "Land of the Pharaons",
                        "director": "Howard Hawks",
                        "release_year": 1955,
                        "entertainment": "C-",
                        "history": "D-",
                        "history_beeswarm": 3,
                        "entertainment_beeswarm": 6
                    },
                    {
                        "title": "The Ten Commandments",
                        "director": "Cecil B. DeMille",
                        "release_year": 1956,
                        "entertainment": "C+",
                        "history": "C-",
                        "history_beeswarm": 5.85,
                        "entertainment_beeswarm": 7.85
                    },
                    {
                        "title": "Paths of Glory",
                        "director": "Stanley Kubrick",
                        "release_year": 1957,
                        "entertainment": "A-",
                        "history": "C",
                        "history_beeswarm": 6.85,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "The Vikings",
                        "director": "Richard Fleischer",
                        "release_year": 1958,
                        "entertainment": "C+",
                        "history": "C-",
                        "history_beeswarm": 6,
                        "entertainment_beeswarm": 8.15
                    },
                    {
                        "title": "Ben-Hur: A Tale of the Christ",
                        "director": "William Wyler",
                        "release_year": 1959,
                        "entertainment": "B-",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 9
                    },
                    {
                        "title": "Spartacus",
                        "director": "Stanley Kubrick",
                        "release_year": 1960,
                        "entertainment": "A-",
                        "history": "C+",
                        "history_beeswarm": 8,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "El Cid",
                        "director": "Anthony Mann",
                        "release_year": 1961,
                        "entertainment": "A",
                        "history": "D",
                        "history_beeswarm": 4,
                        "entertainment_beeswarm": 13
                    },
                    {
                        "title": "Lawrence of Arabia",
                        "director": "David Lean",
                        "release_year": 1962,
                        "entertainment": "A",
                        "history": "C-",
                        "history_beeswarm": 6,
                        "entertainment_beeswarm": 13
                    },
                    {
                        "title": "Cleopatra",
                        "director": "Joseph L. Mankiewicz",
                        "release_year": 1963,
                        "entertainment": "C+",
                        "history": "A-",
                        "history_beeswarm": 12,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": "Becket",
                        "director": "Peter Glenville",
                        "release_year": 1964,
                        "entertainment": "B-",
                        "history": "D",
                        "history_beeswarm": 4,
                        "entertainment_beeswarm": 9
                    },
                    {
                        "title": "Zulu",
                        "director": "Cy Endfield",
                        "release_year": 1964,
                        "entertainment": "B+",
                        "history": "C+",
                        "history_beeswarm": 8,
                        "entertainment_beeswarm": 11.15
                    },
                    {
                        "title": "The Greatest Story Ever Told",
                        "director": "George Stevens",
                        "release_year": 1965,
                        "entertainment": "E",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 1
                    },
                    {
                        "title": "One Million Years B.C.",
                        "director": "Don Chaffey",
                        "release_year": 1966,
                        "entertainment": "D",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 4
                    },
                    {
                        "title": "Khartoum",
                        "director": "Basil Dearden",
                        "release_year": 1966,
                        "entertainment": "D+",
                        "history": "C-",
                        "history_beeswarm": 6,
                        "entertainment_beeswarm": 5
                    },
                    {
                        "title": "A Man for All Seasons",
                        "director": "Fred Zinnemann",
                        "release_year": 1966,
                        "entertainment": "B",
                        "history": "A-",
                        "history_beeswarm": 11.85,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "Camelot",
                        "director": "Joshua Logan",
                        "release_year": 1967,
                        "entertainment": "Fail",
                        "history": "E",
                        "history_beeswarm": 1,
                        "entertainment_beeswarm": 0
                    },
                    {
                        "title": "The Green Berets",
                        "director": "John Wayne and Ray Kellog",
                        "release_year": 1968,
                        "entertainment": "E+",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 2
                    },
                    {
                        "title": "The Lion in Winter",
                        "director": "Anthony Harvey",
                        "release_year": 1968,
                        "entertainment": "A-",
                        "history": "B",
                        "history_beeswarm": 9.85,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "The Charge of the Light Brigade",
                        "director": "Tony Richardson",
                        "release_year": 1968,
                        "entertainment": "D",
                        "history": "B",
                        "history_beeswarm": 10,
                        "entertainment_beeswarm": 4
                    },
                    {
                        "title": "Anne of the Thousand Days",
                        "director": "Charles Jarrot",
                        "release_year": 1969,
                        "entertainment": "C",
                        "history": "C+",
                        "history_beeswarm": 8,
                        "entertainment_beeswarm": 7
                    },
                    {
                        "title": "Butch Cassidy and the Sundance Kid",
                        "director": "George Roy Hill",
                        "release_year": 1969,
                        "entertainment": "A-",
                        "history": "B",
                        "history_beeswarm": 10.15,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "Cromwell",
                        "director": "Ken Hughes",
                        "release_year": 1970,
                        "entertainment": "C-",
                        "history": "D",
                        "history_beeswarm": 4,
                        "entertainment_beeswarm": 6
                    },
                    {
                        "title": "Waterloo",
                        "director": "Sergei Bondarchuk",
                        "release_year": 1970,
                        "entertainment": "C-",
                        "history": "A-",
                        "history_beeswarm": 12,
                        "entertainment_beeswarm": 6
                    },
                    {
                        "title": "Mary, Queen of Scots",
                        "director": "Charles Jarrot",
                        "release_year": 1971,
                        "entertainment": "C+",
                        "history": "C+",
                        "history_beeswarm": 8,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": "Nicholas and Alexandra",
                        "director": "Franklin J. Schaffner",
                        "release_year": 1971,
                        "entertainment": "C+",
                        "history": "B+",
                        "history_beeswarm": 10.85,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": 1776,
                        "director": "Peter H. Hunt",
                        "release_year": 1972,
                        "entertainment": "D",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 4.15
                    },
                    {
                        "title": "Lisztomania",
                        "director": "Ken Russel",
                        "release_year": 1975,
                        "entertainment": "Fail",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 0
                    },
                    {
                        "title": "Winstanley",
                        "director": "Kevin Brownlow",
                        "release_year": 1975,
                        "entertainment": "C+",
                        "history": "A",
                        "history_beeswarm": 13,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": "All the President's Men",
                        "director": "Alan J. Pakula",
                        "release_year": 1976,
                        "entertainment": "B+",
                        "history": "B+",
                        "history_beeswarm": 11.15,
                        "entertainment_beeswarm": 11
                    },
                    {
                        "title": "Cross of Iron",
                        "director": "Sam Peckinpah",
                        "release_year": 1977,
                        "entertainment": "C+",
                        "history": "B+",
                        "history_beeswarm": 11.15,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": "A Bridge Too Far",
                        "director": "Richard Attenborough",
                        "release_year": 1977,
                        "entertainment": "D",
                        "history": "A-",
                        "history_beeswarm": 12,
                        "entertainment_beeswarm": 4
                    },
                    {
                        "title": "Lion of the Desert",
                        "director": "Moustapha Akkad",
                        "release_year": 1981,
                        "entertainment": "B",
                        "history": "B-",
                        "history_beeswarm": 9,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "Gallipoli",
                        "director": "Peter Weir",
                        "release_year": 1981,
                        "entertainment": "A-",
                        "history": "A-",
                        "history_beeswarm": 12.15,
                        "entertainment_beeswarm": 12.15
                    },
                    {
                        "title": "Gandhi",
                        "director": "Richard Attenborough",
                        "release_year": 1982,
                        "entertainment": "B",
                        "history": "C+",
                        "history_beeswarm": 8,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "The Right Stuff",
                        "director": "Philip Kaufman",
                        "release_year": 1983,
                        "entertainment": "A-",
                        "history": "A",
                        "history_beeswarm": 13,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "The Killing Fields",
                        "director": "Roland Joffe",
                        "release_year": 1984,
                        "entertainment": "A-",
                        "history": "A-",
                        "history_beeswarm": 12.15,
                        "entertainment_beeswarm": 11.85
                    },
                    {
                        "title": "Ran",
                        "director": "Akira Kurosawa",
                        "release_year": 1985,
                        "entertainment": "A-",
                        "history": "B+",
                        "history_beeswarm": 10.85,
                        "entertainment_beeswarm": 11.85
                    },
                    {
                        "title": "Lady Jane",
                        "director": "Trevor Nunn",
                        "release_year": 1986,
                        "entertainment": "C+",
                        "history": "D+",
                        "history_beeswarm": 5,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": "The Mission",
                        "director": "Roland Joffe",
                        "release_year": 1986,
                        "entertainment": "B",
                        "history": "B",
                        "history_beeswarm": 10.15,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "Cry Freedom",
                        "director": "Richard Attenborough",
                        "release_year": 1987,
                        "entertainment": "C+",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 8.15
                    },
                    {
                        "title": "Henry V",
                        "director": "Kennet Branagh",
                        "release_year": 1989,
                        "entertainment": "A",
                        "history": "C+",
                        "history_beeswarm": 8,
                        "entertainment_beeswarm": 13
                    },
                    {
                        "title": "JFK",
                        "director": "Oliver Stone",
                        "release_year": 1991,
                        "entertainment": "B",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "Robin Hood: Prince of Thieves",
                        "director": "Kevin Reynolds",
                        "release_year": 1991,
                        "entertainment": "D+",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 5
                    },
                    {
                        "title": "Conquest of Paradise",
                        "director": "Ridley Scott",
                        "release_year": 1992,
                        "entertainment": "D",
                        "history": "D-",
                        "history_beeswarm": 3.15,
                        "entertainment_beeswarm": 4
                    },
                    {
                        "title": "Immortal Beloved",
                        "director": "Bernard Rose",
                        "release_year": 1994,
                        "entertainment": "C",
                        "history": "Fail",
                        "history_beeswarm": -0.15,
                        "entertainment_beeswarm": 7
                    },
                    {
                        "title": "The Madness of King George",
                        "director": "Nicholas Hytner",
                        "release_year": 1994,
                        "entertainment": "A-",
                        "history": "A-",
                        "history_beeswarm": 11.85,
                        "entertainment_beeswarm": 12.15
                    },
                    {
                        "title": "Braveheart",
                        "director": "Mel Gibson",
                        "release_year": 1995,
                        "entertainment": "C-",
                        "history": "Fail",
                        "history_beeswarm": -0.15,
                        "entertainment_beeswarm": 5.85
                    },
                    {
                        "title": "Pocahontas",
                        "director": "Mike Gabriel and Eric Goldberg",
                        "release_year": 1995,
                        "entertainment": "B",
                        "history": "D+",
                        "history_beeswarm": 5,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "Jefferson in Paris",
                        "director": "James Ivory",
                        "release_year": 1995,
                        "entertainment": "D",
                        "history": "C-",
                        "history_beeswarm": 6,
                        "entertainment_beeswarm": 4
                    },
                    {
                        "title": "Michael Collins",
                        "director": "Neil Jordan",
                        "release_year": 1996,
                        "entertainment": "B",
                        "history": "D",
                        "history_beeswarm": 4,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "Titanic",
                        "director": "James Cameron",
                        "release_year": 1997,
                        "entertainment": "B+",
                        "history": "B-",
                        "history_beeswarm": 9,
                        "entertainment_beeswarm": 11
                    },
                    {
                        "title": "Mrs Brown",
                        "director": "John Madden",
                        "release_year": 1997,
                        "entertainment": "B",
                        "history": "B+",
                        "history_beeswarm": 10.85,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "The Man in the Iron Mask",
                        "director": "Randall Wallace",
                        "release_year": 1998,
                        "entertainment": "B-",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 9
                    },
                    {
                        "title": "Elizabeth",
                        "director": "Shekhar Kapur",
                        "release_year": 1998,
                        "entertainment": "A-",
                        "history": "E",
                        "history_beeswarm": 1,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "Mulan",
                        "director": "Tony Bancroft and Barry Cook",
                        "release_year": 1998,
                        "entertainment": "B+",
                        "history": "E",
                        "history_beeswarm": 1,
                        "entertainment_beeswarm": 11
                    },
                    {
                        "title": "The Prince of Egypt",
                        "director": "Brenda Chapman, Steve Hickner, Simon Wells",
                        "release_year": 1998,
                        "entertainment": "A",
                        "history": "C",
                        "history_beeswarm": 6.85,
                        "entertainment_beeswarm": 13
                    },
                    {
                        "title": "Shakespeare in Love",
                        "director": "John Madden",
                        "release_year": 1998,
                        "entertainment": "A-",
                        "history": "B-",
                        "history_beeswarm": 9,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "The Patriot",
                        "director": "Roland Emmerich",
                        "release_year": 2000,
                        "entertainment": "C",
                        "history": "Fail",
                        "history_beeswarm": 0.15,
                        "entertainment_beeswarm": 7
                    },
                    {
                        "title": "U-571",
                        "director": "Jonathan Mostow",
                        "release_year": 2000,
                        "entertainment": "C-",
                        "history": "Fail",
                        "history_beeswarm": 0.15,
                        "entertainment_beeswarm": 5.85
                    },
                    {
                        "title": "Gladiator",
                        "director": "Ridley Scott",
                        "release_year": 2000,
                        "entertainment": "A",
                        "history": "C",
                        "history_beeswarm": 7.15,
                        "entertainment_beeswarm": 13
                    },
                    {
                        "title": "A Knight's Tale",
                        "director": "Brian Helgeland",
                        "release_year": 2001,
                        "entertainment": "C+",
                        "history": "C-",
                        "history_beeswarm": 6.15,
                        "entertainment_beeswarm": 7.85
                    },
                    {
                        "title": "Black Hawk Down",
                        "director": "Ridley Scott",
                        "release_year": 2001,
                        "entertainment": "C",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 7.15
                    },
                    {
                        "title": "Attila",
                        "director": "Dick Lowry",
                        "release_year": 2001,
                        "entertainment": "C-",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 6
                    },
                    {
                        "title": "Pearl Harbor",
                        "director": "Michael Bay",
                        "release_year": 2001,
                        "entertainment": "D",
                        "history": "C",
                        "history_beeswarm": 7.15,
                        "entertainment_beeswarm": 3.85
                    },
                    {
                        "title": "Asoka",
                        "director": "Santosh Sivan",
                        "release_year": 2001,
                        "entertainment": "C",
                        "history": "B-",
                        "history_beeswarm": 9,
                        "entertainment_beeswarm": 7
                    },
                    {
                        "title": "Luther",
                        "director": "Eric Till",
                        "release_year": 2003,
                        "entertainment": "D",
                        "history": "B-",
                        "history_beeswarm": 9,
                        "entertainment_beeswarm": 4
                    },
                    {
                        "title": "Troy",
                        "director": "Wolfgang Petersen",
                        "release_year": 2004,
                        "entertainment": "D",
                        "history": "D-",
                        "history_beeswarm": 2.85,
                        "entertainment_beeswarm": 4
                    },
                    {
                        "title": "The Passion of the Christ",
                        "director": "Mel Gibson",
                        "release_year": 2004,
                        "entertainment": "Fail",
                        "history": "D-",
                        "history_beeswarm": 3,
                        "entertainment_beeswarm": 0
                    },
                    {
                        "title": "Alexander",
                        "director": "Oliver Stone",
                        "release_year": 2004,
                        "entertainment": "Fail",
                        "history": "D+",
                        "history_beeswarm": 5,
                        "entertainment_beeswarm": 0
                    },
                    {
                        "title": "Hotel Rwanda",
                        "director": "Terry George",
                        "release_year": 2004,
                        "entertainment": "B+",
                        "history": "C+",
                        "history_beeswarm": 8.15,
                        "entertainment_beeswarm": 10.85
                    },
                    {
                        "title": "The Alamo",
                        "director": "John Lee Hancock",
                        "release_year": 2004,
                        "entertainment": "C-",
                        "history": "B+",
                        "history_beeswarm": 11,
                        "entertainment_beeswarm": 6
                    },
                    {
                        "title": "Downfall",
                        "director": "Oliver Hirschbiegel",
                        "release_year": 2004,
                        "entertainment": "A-",
                        "history": "A-",
                        "history_beeswarm": 11.85,
                        "entertainment_beeswarm": 11.85
                    },
                    {
                        "title": "The Motorcycle Diaries",
                        "director": "Walter Salles",
                        "release_year": 2004,
                        "entertainment": "B",
                        "history": "A-",
                        "history_beeswarm": 12.15,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "The Rising: Ballad of Mangal Pandey",
                        "director": "Ketan Mehta",
                        "release_year": 2005,
                        "entertainment": "A-",
                        "history": "D",
                        "history_beeswarm": 4,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "Kingdom of Heaven",
                        "director": "Ridley Scott",
                        "release_year": 2005,
                        "entertainment": "E",
                        "history": "C-",
                        "history_beeswarm": 6,
                        "entertainment_beeswarm": 1
                    },
                    {
                        "title": "Apocalypto",
                        "director": "Mel Gibson",
                        "release_year": 2006,
                        "entertainment": "C-",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 6.15
                    },
                    {
                        "title": "United 93",
                        "director": "Paul Greengrass",
                        "release_year": 2006,
                        "entertainment": "C",
                        "history": "C",
                        "history_beeswarm": 7.15,
                        "entertainment_beeswarm": 6.85
                    },
                    {
                        "title": "The Queen",
                        "director": "Stephen Frears",
                        "release_year": 2006,
                        "entertainment": "B-",
                        "history": "A-",
                        "history_beeswarm": 12,
                        "entertainment_beeswarm": 9
                    },
                    {
                        "title": 300,
                        "director": "Zack Snyder",
                        "release_year": 2007,
                        "entertainment": "E",
                        "history": "Fail",
                        "history_beeswarm": -0.15,
                        "entertainment_beeswarm": 1
                    },
                    {
                        "title": "Jodhaa-Akbar",
                        "director": "Ashutosh Gowariker",
                        "release_year": 2008,
                        "entertainment": "B+",
                        "history": "C+",
                        "history_beeswarm": 7.85,
                        "entertainment_beeswarm": 10.85
                    },
                    {
                        "title": "The Young Victoria",
                        "director": "Jean-Marc Vallee",
                        "release_year": 2009,
                        "entertainment": "C+",
                        "history": "B-",
                        "history_beeswarm": 9,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": "The Last Station",
                        "director": "Michael Hoffman",
                        "release_year": 2009,
                        "entertainment": "C",
                        "history": "B+",
                        "history_beeswarm": 10.85,
                        "entertainment_beeswarm": 7
                    },
                    {
                        "title": "Anonymous",
                        "director": "Roland Emmerich",
                        "release_year": 2011,
                        "entertainment": "E",
                        "history": "Fail",
                        "history_beeswarm": 0.15,
                        "entertainment_beeswarm": 1
                    },
                    {
                        "title": "The King's Speech",
                        "director": "Tom Hooper",
                        "release_year": 2011,
                        "entertainment": "A-",
                        "history": "B+",
                        "history_beeswarm": 11.15,
                        "entertainment_beeswarm": 11.85
                    },
                    {
                        "title": "Argo",
                        "director": "Ben Affleck",
                        "release_year": 2012,
                        "entertainment": "A-",
                        "history": "C",
                        "history_beeswarm": 7.15,
                        "entertainment_beeswarm": 12
                    },
                    {
                        "title": "Les Miserables",
                        "director": "Tom Hooper",
                        "release_year": 2012,
                        "entertainment": "C",
                        "history": "C",
                        "history_beeswarm": 6.85,
                        "entertainment_beeswarm": 6.85
                    },
                    {
                        "title": "The Iron Lady",
                        "director": "Phyllida Loyd",
                        "release_year": 2012,
                        "entertainment": "C+",
                        "history": "C",
                        "history_beeswarm": 7.15,
                        "entertainment_beeswarm": 7.85
                    },
                    {
                        "title": "Lincoln",
                        "director": "Steven Spielberg",
                        "release_year": 2012,
                        "entertainment": "B+",
                        "history": "B+",
                        "history_beeswarm": 10.85,
                        "entertainment_beeswarm": 11
                    },
                    {
                        "title": "47 Ronin",
                        "director": "Carl Rinsch",
                        "release_year": 2013,
                        "entertainment": "E",
                        "history": "D-",
                        "history_beeswarm": 3,
                        "entertainment_beeswarm": 1
                    },
                    {
                        "title": "Diana",
                        "director": "Oliver Hirschbiegel",
                        "release_year": 2013,
                        "entertainment": "Fail",
                        "history": "C",
                        "history_beeswarm": 7,
                        "entertainment_beeswarm": 0
                    },
                    {
                        "title": "Mandela: Long Walk to Freedom",
                        "director": "Justin Chadwick",
                        "release_year": 2013,
                        "entertainment": "B",
                        "history": "B+",
                        "history_beeswarm": 11.15,
                        "entertainment_beeswarm": 10
                    },
                    {
                        "title": "The Fifth Estate",
                        "director": "Bill Condon",
                        "release_year": 2013,
                        "entertainment": "C",
                        "history": "B+",
                        "history_beeswarm": 11.15,
                        "entertainment_beeswarm": 7
                    },
                    {
                        "title": "Twelve Years a Slave",
                        "director": "Steve McQueen",
                        "release_year": 2013,
                        "entertainment": "A",
                        "history": "A",
                        "history_beeswarm": 13,
                        "entertainment_beeswarm": 13
                    },
                    {
                        "title": "The Imitation Game",
                        "director": "Morten Tyldum",
                        "release_year": 2014,
                        "entertainment": "C+",
                        "history": "Fail",
                        "history_beeswarm": 0,
                        "entertainment_beeswarm": 8
                    },
                    {
                        "title": "American Sniper",
                        "director": "Clint Eastwood",
                        "release_year": 2014,
                        "entertainment": "D+",
                        "history": "D-",
                        "history_beeswarm": 3,
                        "entertainment_beeswarm": 5
                    },
                    {
                        "title": "Selma",
                        "director": "Ava DuVernay",
                        "release_year": 2014,
                        "entertainment": "B+",
                        "history": "A",
                        "history_beeswarm": 13,
                        "entertainment_beeswarm": 11
                    }
                ]
            },
            "selection": {
                "director": {
                    "type": "single",
                    "on": "click",
                    "fields": ["director"],
                    "empty": "all",
                    "nearest": false
                }
            },
            "mark": { "type": "circle", "size": 200 },
            "encoding": {
                "x": {
                    "field": "history_beeswarm",
                    "type": "quantitative",
                    "scale": { "domain": [-0.5, 13.5], "nice": false },
                    "axis": { "title": null }
                },
                "y": {
                    "field": "entertainment_beeswarm",
                    "type": "quantitative",
                    "scale": { "domain": [-0.5, 13.5], "nice": false },
                    "axis": { "title": null }
                },
                "color": {
                    "condition": { "selection": "director", "value": "#D11349" },
                    "value": "#81858C"
                },
                "tooltip": [
                    { "field": "title", "type": "nominal", "title": "movie title" },
                    { "field": "director", "type": "nominal", "title": "directed by" },
                    { "field": "release_year", "type": "nominal", "title": "released in" },
                    {
                        "field": "entertainment",
                        "type": "nominal",
                        "title": "entertainment grade"
                    },
                    { "field": "history", "type": "nominal", "title": "history grade" }
                ]
            }
        },
        {
            "data": { "name": "more_precise" },
            "mark": {
                "type": "text",
                "align": "right",
                "color": "#3A3F4A",
                "dx": 325,
                "dy": -335,
                "font": "Ubuntu Mono",
                "size": 14
            },
            "encoding": {
                "text": { "type": "nominal", "field": "text", "axis": { "title": null } }
            }
        },
        {
            "data": { "name": "less_precise" },
            "mark": {
                "type": "text",
                "align": "left",
                "color": "#3A3F4A",
                "dx": -325,
                "dy": -335,
                "font": "Ubuntu Mono",
                "size": 14
            },
            "encoding": {
                "text": { "type": "nominal", "field": "text", "axis": { "title": null } }
            }
        },
        {
            "data": { "name": "less_entertaining" },
            "mark": {
                "type": "text",
                "align": "left",
                "angle": 270,
                "color": "#3A3F4A",
                "dx": -300,
                "dy": -340,
                "font": "Ubuntu Mono",
                "size": 14
            },
            "encoding": {
                "text": { "type": "nominal", "field": "text", "axis": { "title": null } },
                "opacity": { "value": 1 }
            }
        },
        {
            "data": { "name": "more_entertaining" },
            "mark": {
                "type": "text",
                "align": "right",
                "angle": 270,
                "color": "#3A3F4A",
                "dx": 300,
                "dy": -340,
                "font": "Ubuntu Mono",
                "size": 14
            },
            "encoding": {
                "text": { "type": "nominal", "field": "text", "axis": { "title": null } },
                "opacity": { "value": 1 }
            }
        },
        {
            "data": { "name": "rule_x" },
            "mark": "rule",
            "encoding": {
                "x": { "type": "quantitative", "field": "x", "axis": { "title": null } },
                "opacity": { "value": 1 }
            }
        },
        {
            "data": { "name": "rule_y" },
            "mark": "rule",
            "encoding": {
                "y": { "type": "quantitative", "field": "y", "axis": { "title": null } },
                "opacity": { "value": 1 }
            }
        },
        {
            "data": { "name": "source" },
            "mark": {
                "type": "text",
                "align": "right",
                "color": "#3A3F4A",
                "dx": 325,
                "dy": 350,
                "font": "Ubuntu Mono",
                "size": 14
            },
            "encoding": {
                "text": { "field": "text", "type": "nominal" },
                "href": {
                    "value": "https://www.amazon.com/Reel-History-World-According-Movies/dp/1782396489"
                }
            }
        }
    ],
    "config": {
        "view": { "strokeOpacity": 0 },
        "axis": {
            "title": false,
            "domain": false,
            "labels": false,
            "ticks": false,
            "gridColor": "#81858C",
            "gridDash": [0.25, 1, 0.25]
        }
    }
};