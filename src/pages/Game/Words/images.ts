import alpaca from './svg/alpaca.svg'
import arbuz from './svg/arbuz.svg'
import bananas from './svg/bananas.svg'
import squirrel from './svg/squirrel.svg'
import vishnya from './svg/vishnya.svg'
import vilka from './svg/vilka.svg'
import gnezdo from './svg/gnezdo.svg'
import golub from './svg/golub.svg'
import enot from './svg/enot.svg'
import evang from './svg/evang.svg'
import house from './svg/house.svg'
import derevo from './svg/derevo.svg'
import christmas from './svg/christmas.svg'
import hedgehog from './svg/hedgehog.svg'
import zebra from './svg/zebra.svg'
import umbrella from './svg/umbrella.svg'
import grasshopper from './svg/grasshopper.svg'
import giraffe from './svg/giraffe.svg'

type imagesList = {
    [key: string]: {
        title: string,
        cathegory: "animals"|"fruit"|"backaly"|"berry"|'kitchen'|"home"|"nature",
        svg: any,
        discription: string
    }[]
}

export const images: imagesList = {
    "A": [
        {
            title: "Альпака",
            cathegory: "animals",
            discription:"Я - альпака. Я живу в Америке",
            svg: alpaca}, 
            
            {
            title: "Арбуз",
            discription:"Сладкий, вкусный, спелый арбуз",
            cathegory: 'backaly',
            svg: arbuz}    
    ],
    "Be": [
        {
            title: "Белка",
            cathegory: "animals",
            discription:"Я белочка, люблю грызть орешки",
            svg: squirrel}, {
            title: "Банан",
            discription:"Мы бананчики, весёлые ребята",
            cathegory: 'fruit',
            svg: bananas}  
    ],
    "Ve": [
        {
            title: "Вилка",
            cathegory: "kitchen",
            discription:"Не бойся ложки, бойся вилки",
            svg: vilka}, {
            title: "Вишня",
            cathegory: 'berry',
            discription:"Вишня. А могла бы быть черешней",
            svg: vishnya}  
    ],
    'G': [
        {
            title: "Гнездо",
            cathegory: "home",
            discription:"Домик для птиц",
            svg: gnezdo}, {
            title: "Голубь",
            cathegory: 'animals',
            discription:"Курлык курлык дай хлеба а то что смотришь",
            svg: golub}  
    ],
    "D": [
        {
            title: "Дом",
            cathegory: "home",
            discription:"Дом, где мы живём",
            svg: house}, {
            title: "Дерево",
            cathegory: 'nature',
            discription:"Большое и могучее дерево дуб",
            svg: derevo}  
            ],
    "E": [
        {
            title: "Енот",
            cathegory: "animals",
            discription:"Крошка енот",
            svg: enot}, {
            title: "Евангелие от Иоанна",
            cathegory: "home",
            discription:"Евангелие от Иоанна",
            svg: evang}  
            ],
            'Yo': [
                {
                    title: "Ёлка",
                    cathegory: "nature",
                    discription:"Красивая, нарядная, на праздник к нам пришла",
                    svg: christmas}, {
                    title: "Ёж",
                    cathegory: 'animals',
                    discription:"У ежа, как и у ёлки, есть колючие иголки",
                    svg: hedgehog}  
            ],
            "Zh": [
                {
                    title: "Жук",
                    cathegory: "animals",
                    discription:"Жук жужжит",
                    svg: grasshopper}, {
                    title: "Жираф",
                    cathegory: 'animals',
                    discription:"Самое длинношеее животное",
                    svg: giraffe}  
                    ],
            "Z": [
                {
                    title: "Зонт",
                    cathegory: 'home',
                    discription:"Укроемся под зонтиком от дождя",
                    svg: umbrella}, {
                    title: "Зебра",
                    cathegory: "animals",
                    discription:"Как лошадка, но только с полосками",
                    svg: zebra}  
                    ]
}