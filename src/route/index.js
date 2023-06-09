
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





  // ================================================================

  // Підключаємо роутер до бек-ендуgi
  // router.get Створює нам один ентпоїнт

  //           ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/task31', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('task31', {
      navigation: {
        links: [
          {
            text: 'Home',
            href: 'https://github.com/',
          },
          {
            text: 'Contacts',
            href: 'https://www.google.com/',
          },
          {
            text: 'Help',
            href: 'https://www.youtube.com/',
          },
        ],
        button: {
          text: 'Lets start',
          href: 'https://nodejs.org/en/',
        },
      },
      header: {
        title: 'Welcome to Our Website',
        description:
          'We offer innovative solutions to help grow your business. Our team of experts is committed to providing tailored strategies that deliver the best results.',
        button: {
          text: 'Learn More',
          link: 'https://www.youtube.com/',
        },
      },
      city: {
        title: 'City list',
        cards: [
          {
            picture: {
              src: 'https://picsum.photos/400/200',
              alt: 'New York',
            },
            title: 'New York City',
            description:
              'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.',
            button: {
              text: 'Read',
              href: 'https://github.com/',
            },
          },
          {
            picture: {
              src: 'https://picsum.photos/400/200',
              alt: 'Paris',
            },
            title: 'Paris',
            description:
              "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, haute couture fashion houses, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
            button: {
              text: 'Read',
              href: 'https://github.com/',
            },
          },
          {
            picture: {
              src: 'https://picsum.photos/400/200',
              alt: 'Tokyo',
            },
            title: 'Tokyo',
            description:
              "Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
            button: {
              text: 'Reac',
              href: 'https://github.com/',
            },
          },
          {
            picture: {
              src: 'https://picsum.photos/400/200',
              alt: 'Sydney',
            },
            title: 'Sydney',
            description:
              "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harborfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.",
            button: {
              text: 'Reac',
              href: 'https://github.com/',
            },
          },
        ],
      },
      winner: {
        title: 'Our winners',
        table: {
          head: ['#', 'name', 'surname', 'nickname'],
          user: [
            {
              place: 1,
              name: 'Ada',
              surname: 'Lovelace',
              nickname: 'The Enchantress of Numbers',
            },
            {
              place: 2,
              name: 'Grace',
              surname: 'Hopper',
              nickname: 'Amazing Grace',
            },
            {
              place: 3,
              name: 'Katherine',
              surname: 'Johnson',
              nickname: 'The Human Computer',
            },
          ],
        },
      },
      gallery: {
        title: 'Picture history',
        cards: [
          {
            name: 'The Mona Lisa',
            items: [
              'Painting',
              'Oil on poplar panel',
              '1503-1519',
            ],
          },
          {
            name: 'The Persistence of Memory',
            items: ['Painting', 'Oil on canvas', '1931'],
          },
          {
            name: 'The Starry Night',
            items: ['Painting', 'Oil on canvas', '1889'],
          },
        ],
      },
      relaxion: {
        title: 'Relax',
        cards: [
          {
            header: 'Meditation',
            title: 'The Benefits of Meditation',
            description:
              'Meditation can help reduce stress, anxiety, and depression, and improve overall well-being. Studies have also shown that regular meditation practice can enhance cognitive function and even boost the immune system.',
          },
          {
            header: 'Hydration',
            title: 'The Importance of Hydration',
            description:
              'Drinking enough water is essential for good health. Dehydration can lead to a range of symptoms, including fatigue, headaches, and constipation. It can also increase the risk of kidney stones and other health problems.',
          },
          {
            header: 'Yoga',
            title: 'The Benefits of Yoga',
            description:
              'Yoga can improve flexibility, strength, and balance, and help reduce stress and anxiety. It has also been shown to improve heart health and promote a sense of well-being.',
          },
          {
            header: 'Sunscreen',
            title: 'The Importance of Sunscreen',
            description:
              "Protecting your skin from the sun's harmful rays is crucial for reducing the risk of skin cancer and premature aging. Experts recommend using a broad-spectrum sunscreen with an SPF of at least 30 and reapplying every two hours.",
          },
        ],
      },
      rest: {
        cards: [
          {
            header: 'Cooking',
            title: 'The Joy of Cooking',
            description:
              'Cooking is a creative outlet that can bring people together over delicious food.',
            button: 'Learn More',
            footer: 'Photo by Brooke Lark on Unsplash',
          },
          {
            header: 'Travel',
            title: 'The Benefits of Traveling',
            description:
              'Traveling broadens your perspective, provides new experiences, and creates lasting memories.',
            button: 'Explore',
            footer: 'Photo by Sime Basioli on Unsplash',
          },
        ],
      },
      proposition: {
        title: 'Proposition',
        card: [
          {
            header: 'Our Approach',
            title: 'Innovative Solutions for Your Business',
            description:
              'We create effective solutions that cater to your business needs.',
          },
          {
            header: 'Our Expertise',
            title: 'Trusted and Experienced Professionals',
            description:
              'Our team of experts delivers tailored strategies for best results.',
          },
        ],
      },
      footer: {
        title: 'Navigation',
        navigation: [
          {
            text: 'Home',
            href: 'https://github.com/',
          },
          {
            text: 'Contacts',
            href: 'https://www.google.com/',
          },
          {
            text: 'Help',
            href: 'https://www.youtube.com/',
          },
        ],
        socialMedia: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/',
          },
          {
            name: 'Instagram',
            link: 'https://www.instagram.com/',
          },
        ],
        partners: [
          {
            name: 'Acme Inc.',
            link: 'https://www.acme.com/',
          },
          {
            name: 'Globex Corporation',
            link: 'https://www.globex.com/',
          },
          {
            name: 'Stark Industries',
            link: 'https://www.starkindustries.com/',
          },
        ],
      },
    })
    //                  ↑↑ сюди вводимо JSON дані
  })


=======
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
