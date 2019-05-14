import React, { Component } from 'react';
import FlowerSpinner from '@bit/bondz.react-epic-spinners.flower-spinner';
import {Link} from 'react-router-dom';

import showdown from 'showdown' 
import Prism from 'prismjs'
import './preStyle.css' 
let interval

const style=
"*{\n  -webkit-transition: all .8s;\n  transition: all .8s;\n}\nhtml {\n  background: #5F5F5F; \n}\n.token.comment{ \n    color: white \n}\n\n\n/* Welcome to the website of fate.\n What leads you here?\n*/\n\n.myth{\n  color: #608CFF; \n  top:0;\n  overflow: auto;\n  background: #474747;\n  border: 1px solid #ccc;\n  max-height: 90%;\n  width: 35%;\n  font-size: 14px;\n  font-family: monospace;\n  padding: 10px 10px 20px;\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n  white-space: pre-wrap;\n  outline: 0;\n}\n/* \n* Don't panic, \n* I'm just trying to communicate with you.\n* I need to set it up a little bit. \n*/\n\n\n.token.comment{ color: white; font-size: 18px; font-style: italic; }\n.token.selector{ color: #E69F0F; }\n.token.property{ color: #64D5EA; }\n.token.punctuation{ color: #64D5EA; }\n.token.function{ color: #BE84F2; }\n\n/*\n* I am a witch that cursed to live in the computer.*/\n/* I had sins.*/\n/* But now I am paying my debt.*/\n\n\n.myth {\n  -webkit-transform: translateX(170%);\n  transform:translateX(170%); position:fixed;\n}\n\n/*\n* Young people, */ \n/* Do you want to know your fate?*/\n/* Let's contemplate a poem first. \n*/\n.poem{\n  position:fixed;\n  top:50;\n  padding: .5em;  margin: .5em;\n  background: white; color: #222;\n  width: 40vw; height:500px; \n  border: 1px solid;\n  overflow: auto;\n  color: #8C8C8C; \n  background: #A7A7A7;\n}\n"
const poem =
"The rose is a rose, \n\nAnd was always a rose. \n\nBut the theory now goes \n\nThat the apple’s a rose, \n\nAnd the pear is, and so’s \n\nThe plum, I suppose. \n\nThe dear only knows \n\nWhat will next prove a rose. \n\nYou, of course, are a rose – \n\nBut were always a rose. \n\n ...";
const style2=
"\n\n/* Ah... Love... */\n\n/* Do you want to know how your love will go? */\n\n/* Give me the names... */\n\n/* I can show you... */\n\n/* Scroll down and then you can see the entrance... */\n\n"


const wirteChars = (that, nodeName, char) => new Promise((resolve) => {
    setTimeout(() => {
        if (nodeName == 'myth') {
            const origin = that.state.DOMStyleText + char
            const html = Prism.highlight(origin, Prism.languages.css)
            that.setState({
                styleText: html,
                DOMStyleText: origin
            })
            
            that.contentNode.scrollTop = that.contentNode.scrollHeight
        } else if (nodeName == 'poem') {
            const originpoem = that.state.poemText + char
            const converter = new showdown.Converter()
            const markdownpoem = converter.makeHtml(originpoem)
            that.setState({
                poemText: originpoem,
                DOMpoemText: markdownpoem
            })
            that.poemNode.scrollTop = that.poemNode.scrollHeight
        }
        if (char == "?" || char == "," || char == '!') {
            interval = 500
        } else if (nodeName == 'poem' || char == '.'){
            interval = 30
        }
        else {
            interval = 2
        }
        resolve()
    }, interval)
})

const writeTo = async (that, nodeName, index, text) => {
    let speed = 1
    let char = text.slice(index, index + speed)
    index += speed
    if (index > text.length) {
        return
    }
    await wirteChars(that, nodeName, char)
    await writeTo(that, nodeName, index, text)
}



class Home extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            styleText: ``,
            DOMStyleText: ``,
            poemText: ``,
            DOMpoemText: ``
        }

    }
    componentDidMount() {
        (async (that) => {
            await writeTo(that, 'myth', 0, style)
            await writeTo(that, 'poem', 0, poem)
            await writeTo(that, 'myth', 0, style2)
        })(this)
    }

    render() {
        return (
            <div>
                <div style={{height: '600px'}}>
                <div
                    className='myth'
                    ref={(node) => { this.contentNode = node }}
                >
                    <div dangerouslySetInnerHTML={{ __html: this.state.styleText }}></div>
                    <style dangerouslySetInnerHTML={{ __html: this.state.DOMStyleText }}></style>
                </div>
                <div
                    className='poem'
                    dangerouslySetInnerHTML={{ __html: this.state.DOMpoemText }}
                    ref={(node) => { this.poemNode = node }}
                >
                </div>
                
                </div>
                {/* <div>
                    <FlowerSpinner style={{ margin: 'auto' }}
                        color='#ffffff'
                        size='200'
                    />
                </div> */}
                <div style={{paddingLeft:'46%', paddingTop:'200px'}}>
                <Link to="/Love">
                    <wired-button style={{margin: 'auto', color:'white'}} >
                        LOVE TEST
					</wired-button>
                    <br />
                    <br />
                </Link>
                </div>
            </div>
        );
    }

}

export default Home;