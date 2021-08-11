import foo from './foo';
import { A } from 'src/a.ts';
import { Cell } from 'src/components/cell/Cell';
import './assets/styles/index.scss';
import svgIcon from './components/svg-icon/SvgIcon';

function main() {
    console.log('main' , foo);
    console.log(A.statusToString());
    let table = document.createElement('div');
    table.classList.add('test');
    table.appendChild(svgIcon({ class: 'iconlogo' }));
    new Cell();
    let map = new Map([['a',1],['name',33]])
    console.log(map)
    return table;
}

window.main = main;

export default main;
