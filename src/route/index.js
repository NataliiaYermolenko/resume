
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



router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {
    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

module.exports = router
