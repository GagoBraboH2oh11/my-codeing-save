import './style.css'
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import calc from './calc';
import cssindex from './index.css';

document.querySelector('#app').innerHTML = `

<div>
<header>
        <h4>?+?</h4>
    </header>

    <div id="conteriner">
        <div class="conteriner__imgs">
            <img src="img/download.png" alt="" srcset="">
            <h1><span>+</span></h1>
            <img src="img/download.png" alt="" srcset="">
        </div>

        <div id="calc">
            <div class="calc__op">
                <button id="calc__button" onclick="calc()">Calc:
                </button>
            </div>
        </div>

    </div>
</div>

`

setupCounter(document.querySelector('#counter'))
