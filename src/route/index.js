
// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Leha',
    lastname: 'Doob'
  },
  position: 'Student Fullstack JS Developer',
  salary: '$600 per month',
  address: 'Ukraine, New Vasyuki',
}
var footer = {
  social: {
    email: {
      text: 'loh_007@mail.com',
      href: 'mailto:loh_007@mail.com'
    },
    phone: {
      text: '+380101010101',
      href: 'tel:++380101010101'
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/Loh_007-test',
    }

  }
}
// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `I don't know anything and I can't do anything.
           Non-contact. I don't want to study.
           I will destroy the team.
           I am rude to customers.
           Give money for bread`,
      },
      experience: {
        title: 'Other experience',
        text: `I have not completed a homemade project 
          for parsing sport betting data from different 
          platforms (odds ) and sport statistics 
          (tournament position, goals etc), analyzing
           by simple mathematics models and preparing 
           probabilityfor such events like:money line
            - first win / draw / second win,totals etc.`
      },
    },

    footer,

  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / Skills',
    },
    header,

    main: {
      skills: [

        {
          name: 'HNML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlbars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'GIT & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },

      ],
      hobbies: [
        {
          name: 'drunkenness',
          isMain: true
        },
        {
          name: 'porn sites',
          isMain: true
        },
        {
          name: 'help mom',
          isMain: false
        },
      ]
    },

    footer,

  })
})


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / education',
    },
    header,

    main: {
      education: [
        {
          name: 'Kindergarten',
          isEnd: true
        },
        {
          name: 'Near the school',
          isEnd: false
        },
        {
          name: 'Police station',
          isEnd: true
        },
        {
          name: 'Uncle Petya',
          isEnd: true
        },
        {
          name: 'Friend left',
          isEnd: false
        },
      ],
      cretificates: [
        {
          name: 'Timesheet',
          id: 1242
        },
        {
          name: 'Diploma',
          id: 5678
        },
        {
          name: 'Sertificate',
          id: 9344,
        },
      ]

    },

    footer,
  })
})


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume / work',
    },
    header,

    main: {
      work: [
        {
          position: 'night watchman',
          company: {
            name: 'cafe dumplings',
            url: 'https//all-dumplings.com.ua/',
          },
          duration: {
            from: '01.01.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'memory of letters on the keyboard',

              stacksAmount: 3,
              stacks: [
                {
                  name: 'Plankalkül',
                },
                {
                  name: 'Short Code',
                },
                {
                  name: 'Fortran',
                },
              ],
              awardsAmount: 2,
              awards: [
                {
                  name: 'good fellow',
                },
                {
                  name: 'best son',
                },
              ]
            }
          ]
        }
      ]


    },

    footer,
  })
})


  /
  // ================================================================

  //             

  router.get('/program', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program', {
      layout: 'program',
      program: {
        excursion: {
          name: 'Cultural Tour',
          location: {
            city: 'Paris',
            country: 'France',
          },
          date: '2023-06-15',
          program: [
            {
              name: 'Museum Visit',
              type: 'Art',
              duration: 3,
              details: {
                museum: {
                  name: 'The Louvre',
                  location: {
                    address: 'Rue de Rivoli',
                    city: 'Paris',
                    country: 'France',
                  },
                  exhibits: [
                    {
                      name: 'Mona Lisa',
                      artist: 'Leonardo da Vinci',
                      description: 'Iconic portrait painting',
                      audio_guide: true,
                    },
                    {
                      name: 'Winged Victory of Samothrace',
                      artist: null,
                      description:
                        'Ancient Greek statue of Nike, the goddess of victory',
                      audio_guide: true,
                    },
                  ],
                },
                guide: {
                  name: 'Francois',
                  language: 'French',
                  rating: 4.8,
                },
              },
            },
            {
              name: 'Cultural Show',
              type: 'Music and Dance',
              duration: 2,
              details: {
                venue: {
                  name: 'Moulin Rouge',
                  location: {
                    address: '82 Boulevard de Clichy',
                    city: 'Paris',
                    country: 'France',
                  },
                },
                performers: [
                  {
                    name: 'Mireille Mathieu',
                    type: 'Chanson singer',
                  },
                  {
                    name: "Ballet de l'Opéra National de Paris",
                    type: 'Classical ballet company',
                  },
                ],
                guide: {
                  name: 'Sophie',
                  language: 'English',
                  rating: 4.6,
                },
              },
            },
          ],
        },
      },
    })
  })


// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router


