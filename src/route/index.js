
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
  // router.get Створює нам один ентпоїнт

  router.get('/mac', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('mac', {
      name: 'Apple MacBook Pro',
      description: 'The ultimate notebook for power users',
      price: 1999.99,
      category: 'Computers & Tablets',
      features: {
        processor: {
          brand: 'Intel',
          model: 'Core i9',
          speed: '2.3 GHz',
          cores: 8,
          cache: '16 MB',
        },
        memory: {
          type: 'DDR4',
          size: '32 GB',
          speed: '2666 MHz',
        },
        storage: {
          type: 'SSD',
          size: '1 TB',
        },
        display: {
          size: '16 inches',
          resolution: '3072x1920',
          technology: 'Retina',
          color_space: 'P3',
          brightness: '500 nits',
          refresh_rate: '60 Hz',
        },
        graphics: {
          brand: 'AMD',
          model: 'Radeon Pro 5500M',
          memory: '4 GB GDDR6',
        },
        ports: [
          {
            type: 'Thunderbolt 3',
            count: 4,
            features: [
              'Charging',
              'DisplayPort',
              'Thunderbolt (up to 40 Gbps)',
              'USB 3.1 Gen 2 (up to 10 Gbps)',
            ],
          },
          {
            type: 'HDMI',
            count: 1,
          },
        ],
        battery: {
          type: 'Lithium Polymer',
          capacity: '100 Wh',
          life: 'Up to 11 hours',
        },
        weight: '4.3 pounds',
        dimensions: {
          height: '0.64 inch',
          width: '14.09 inches',
          depth: '9.68 inches',
        },
        operating_system: 'macOS',
        accessories: [
          {
            name: 'Apple Magic Keyboard',
            price: 99.99,
          },
          {
            name: 'Apple Magic Mouse 2',
            price: 79.99,
          },
          {
            name: 'USB-C to USB Adapter',
            price: 19.99,
          },
        ],
      },
    })
    //                  ↑↑ сюди вводимо JSON дані
  })

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router


