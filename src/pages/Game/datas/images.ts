import alpaca from '../svg/alpaca.svg'
import arbuz from '../svg/arbuz.svg'
import bananas from '../svg/bananas.svg'
import squirrel from '../svg/squirrel.svg'
import vishnya from '../svg/vishnya.svg'
import vilka from '../svg/vilka.svg'
import gnezdo from '../svg/gnezdo.svg'
import golub from '../svg/golub.svg'
import enot from '../svg/enot.svg'
import evang from '../svg/evang.svg'
import house from '../svg/house.svg'
import derevo from '../svg/derevo.svg'
import christmas from '../svg/christmas.svg'
import hedgehog from '../svg/hedgehog.svg'
import zebra from '../svg/zebra.svg'
import umbrella from '../svg/umbrella.svg'
import bug from '../svg/bug.svg'
import giraffe from '../svg/giraffe.svg'
import bus from '../svg/bus.svg'
import pineapple from '../svg/pineapple.svg'
import toys from '../svg/toys.svg'
import igor from '../svg/igor.jpg'
import crane from '../svg/crane.svg'
import cat from '../svg/cat.svg'
import lama from '../svg/lama.svg'
import luzha from '../svg/luzha.svg'
import york from '../svg/york.svg'
import yoghurt from '../svg/yoghurt.svg'
import night from '../svg/night.svg'
import rhino from '../svg/rhino.svg'
import icecream from '../svg/icecream.svg'
import bridge from '../svg/bridge.svg'
import palm from '../svg/palm.svg'
import window from '../svg/window.svg'
import sheep from '../svg/sheep.svg'
import cookie from '../svg/cookie.svg'
import romashka from '../svg/romashka.svg'
import roller from '../svg/roller.svg'
import snail from '../svg/snail.svg'
import duck from '../svg/duck.svg'
import tiger from '../svg/tiger.svg'
import cloud from '../svg/cloud.svg'
import cake from '../svg/cake.svg'
import tractor from '../svg/tractor.svg'
import sunny from '../svg/sunny.svg'
import dog from '../svg/dog.svg'
import yod from '../svg/yod.svg'

type imagesList = {
    [key: string]: {
        title: string,
        cathegory: "animals" | "fruit" | "backaly" | "berry" | 'kitchen' | "home" | "nature" | "auto" | "transport" | "buildings",
        svg: any,
        discription: string
    }[]
}

export const images: imagesList = {
    "A": [
        {
            title: "Альпака",
            cathegory: "animals",
            discription: "Я - альпака. Я живу в Америке",
            svg: alpaca
        },

        {
            title: "Арбуз",
            discription: "Сладкий, вкусный, спелый арбуз",
            cathegory: 'backaly',
            svg: arbuz
        },
        {
            title: "Автобус",
            discription: "Поехали кататься, Валентин!",
            cathegory: 'auto',
            svg: bus
        },
        {
            title: "Ананас",
            discription: "Большой и сладкий ананас",
            cathegory: 'fruit',
            svg: pineapple
        }
    ],
    "Be": [
        {
            title: "Белка",
            cathegory: "animals",
            discription: "Я белочка, люблю грызть орешки",
            svg: squirrel
        }, {
            title: "Банан",
            discription: "Мы бананчики, весёлые ребята",
            cathegory: 'fruit',
            svg: bananas
        }
    ],
    "Ve": [
        {
            title: "Вилка",
            cathegory: "kitchen",
            discription: "Не бойся ложки, бойся вилки",
            svg: vilka
        }, {
            title: "Вишня",
            cathegory: 'berry',
            discription: "Вишня. А могла бы быть черешней",
            svg: vishnya
        }
    ],
    'G': [
        {
            title: "Гнездо",
            cathegory: "home",
            discription: "Домик для птиц",
            svg: gnezdo
        }, {
            title: "Голубь",
            cathegory: 'animals',
            discription: "Курлык курлык дай хлеба а то что смотришь",
            svg: golub
        }
    ],
    "D": [
        {
            title: "Дом",
            cathegory: "home",
            discription: "Дом, где мы живём",
            svg: house
        }, {
            title: "Дерево",
            cathegory: 'nature',
            discription: "Большое и могучее дерево дуб",
            svg: derevo
        }
    ],
    "E": [
        {
            title: "Енот",
            cathegory: "animals",
            discription: "Крошка енот",
            svg: enot
        }, {
            title: "Евангелие от Иоанна",
            cathegory: "home",
            discription: "Евангелие от Иоанна",
            svg: evang
        }
    ],
    'Yo': [
        {
            title: "Ёлка",
            cathegory: "nature",
            discription: "Красивая, нарядная, на праздник к нам пришла",
            svg: christmas
        }, {
            title: "Ёж",
            cathegory: 'animals',
            discription: "У ежа, как и у ёлки, есть колючие иголки",
            svg: hedgehog
        }
    ],
    "Zh": [
        {
            title: "Жук",
            cathegory: "animals",
            discription: "Жук жужжит",
            svg: bug
        }, {
            title: "Жираф",
            cathegory: 'animals',
            discription: "Самое длинношеее животное",
            svg: giraffe
        }
    ],
    "Z": [
        {
            title: "Зонт",
            cathegory: 'home',
            discription: "Укроемся под зонтиком от дождя",
            svg: umbrella
        }, {
            title: "Зебра",
            cathegory: "animals",
            discription: "Как лошадка, но только с полосками",
            svg: zebra
        }
    ],
    'I': [
        {
            title: "Игрушка",
            cathegory: "home",
            discription: "С ней любой день становится веселее",
            svg: toys
        }, {
            title: "Игорь",
            cathegory: 'home',
            discription: "Иииииигоорь",
            svg: igor
        }
    ],
    'Y': [
        {
            title: "Йогурт",
            cathegory: "kitchen",
            discription: "Вкусный молочный йогурт",
            svg: yoghurt
        }, {
            title: "Йоркширский терьер",
            cathegory: 'animals',
            discription: "Просто потому что больше нет слов с Й",
            svg: york
        },
        {
            title: "Йод",
            cathegory: "home",
            discription: "Как мастер йода только без а",
            svg: yod
        }
    ],
    "K": [
        {
            title: "Кошка",
            cathegory: "animals",
            discription: "Мур мур мур мурлычет кошка",
            svg: cat
        }, {
            title: "Кран",
            cathegory: 'auto',
            discription: "Строит высокое здание",
            svg: crane
        }
    ],
    "L": [
        {
            title: "Лама",
            cathegory: 'animals',
            discription: "Чем-то отличается от альпаки, но никто не знает чем",
            svg: lama
        }, {
            title: "Лужа",
            cathegory: "nature",
            discription: "Любимое место Валентина",
            svg: luzha
        }
    ],
    "M": [
        {
            title: "Мост",
            cathegory: "buildings",
            discription: "В нашем городе всего один",
            svg: bridge
        }, {
            title: "Мороженое",
            cathegory: 'kitchen',
            discription: "Ням-ням",
            svg: icecream
        }
    ],
    "N": [
        {
            title: "Ночь",
            cathegory: 'nature',
            discription: "Темной ночью все спят",
            svg: night
        }, {
            title: "Носорог",
            cathegory: "animals",
            discription: "Таким был бы единорог, если бы существовал и любил покушать",
            svg: rhino
        }
    ],
    "O": [
        {
            title: "Овечка",
            cathegory: 'animals',
            discription: "Бе-бе-бе",
            svg: sheep
        }, {
            title: "Окно",
            cathegory: "nature",
            discription: "В нашем окне виден частный сектор",
            svg: window
        }
    ],
    "P": [
        {
            title: "Печенье",
            cathegory: "kitchen",
            discription: "Любимая еда Валентина",
            svg: cookie
        }, {
            title: "Пальма",
            cathegory: 'nature',
            discription: "Дерево такое",
            svg: palm
        }
    ],
    "R": [
        {
            title: "Ромашка",
            cathegory: 'nature',
            discription: "Полевой цветок",
            svg: romashka
        }, {
            title: "Ролики",
            cathegory: "home",
            discription: "Мама любит на них кататься",
            svg: roller
        }
    ],
    "S": [
        {
            title: "Солнце",
            cathegory: 'nature',
            discription: "Яркое и тёплое",
            svg: sunny
        }, {
            title: "Собака",
            cathegory: "animals",
            discription: "Лучший друг человека",
            svg: dog
        }
    ],
    "T": [
        {
            title: "Туча",
            cathegory: "nature",
            discription: "Если видишь тучу, значит скоро будет дождик",
            svg: cloud
        }, {
            title: "Трактор",
            cathegory: 'auto',
            discription: "Дыр Дыр едет трактор!",
            svg: tractor
        }, {
            title: "Торт",
            cathegory: 'kitchen',
            discription: "Ням ням!",
            svg: cake
        }, {
            title: "Тигр",
            cathegory: 'animals',
            discription: "Полосатый волосатый!",
            svg: tiger
        }
    ],
    "U": [
        {
            title: "Улитка",
            cathegory: 'animals',
            discription: "Живёт в своем домике",
            svg: snail
        }, {
            title: "Утка",
            cathegory: "animals",
            discription: "Тятяка",
            svg: duck
        }
    ]
}