import alpaca from './svg/alpaca.svg'
import arbuz from './svg/arbuz.svg'
import bananas from './svg/bananas.svg'
import squirrel from './svg/squirrel.svg'
import vishnya from './svg/vishnya.svg'
import vilka from './svg/vilka.svg'
import gnezdo from './svg/gnezdo.svg'
import golub from './svg/golub.svg'

type imagesList = {
    [key: string]: {
        title: string,
        cathegory: "animals"|"fruit"|"backaly"|"berry"|'kitchen'|"home",
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
    ]
}