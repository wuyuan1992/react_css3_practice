import React, { Component } from 'react';

import Star from './star';

function random(min, max){
    return Math.floor(min + Math.random()*(max-min+1));
}

function createStar(count){
    return Array.from({length: count}).map(el=>{
        return {
            size: random(1, 3),
            position:{
                x: random(2, 98),
                y: random(2, 98)
            },
            rotate:random(30, 60),
            classNames : 'shine'
        };
    });
}

export default class Stars extends Component{
    constructor(props){
        super(props);
        this.timer = null;

        this.state = {
            starsArr: []
        }
    }

    componentWillMount(){
        let starsArr = createStar(50);
        
        this.setState({  starsArr }, this.replaceStar);
    }

    replaceStar(){
        this.timer = setInterval(()=>{
            let starsArr = this.state.starsArr;

            starsArr = starsArr.splice(0,15).concat(createStar(15));

            // console.log(starsArr.length);

            this.setState({
                starsArr
            })
        }, 2000);
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    render(){
        return (
            <div className="stars">
                {
                    this.state.starsArr.map((starsArr,index)=>{
                        return (
                            <Star key={ `star-${index}` } {...starsArr} />
                        )
                    })
                }
            </div>
        )
    }
}