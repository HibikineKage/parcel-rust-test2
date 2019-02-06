import { add } from './hello.rs';
import 'twemoji'
import a from './empty.vue'
import './a.scss'
import * as React from 'react'
import * as dom from 'react-dom'

class A extends React.Component {
  render() {
    return <div>a</div>
  }
}


(()=>{console.log(add(2, 3));
console.log(add);})()
dom.render(<div>Hello!</div>, document.getElementById('hoge'))