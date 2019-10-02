import './scss/main.scss'
import {gretting} from './js/modules/example'
import Person from './js/modules/person'
import Users from './js/modules/users'


console.info(gretting('Webpack'))
const p = new Person('dev',21)
console.log(p.getDataPerson())

const a = new Users()
a.getData()
