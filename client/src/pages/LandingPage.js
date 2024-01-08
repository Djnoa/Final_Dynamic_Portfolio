import React, {useEffect} from 'react';
import gsap from 'gsap';
import { SplitText } from '../plugins/SplitText.js';
import './LandingPage.css';
import Monitor from '../components/Monitor';
import KAPOW from '../components/KAPOW.js';
 
 
 
gsap.registerPlugin(SplitText);
 
const LandingPage = () => {
 
    
    
    
 
    const createTextTimeline = () => {
        const text1 = document.querySelector('.welcome-text');
        const text2 = document.querySelector('.instruction-text');
        const splittedText1 = new SplitText(text1, { type: "chars, words" });
        const splittedText2 = new SplitText(text2, { type: "chars, words" });
        const textTimeline = gsap.timeline();
        textTimeline
            .staggerFromTo(splittedText1.chars, 0.5, 
                { rotateZ: 360, opacity: 0 },
                { rotateZ: 0, opacity: 1 },
                0.02  
            )
            .staggerTo(splittedText1.chars, 0.5, 
                { rotateZ: 360, opacity: 0 },
                0.02,
                "+=2" 
            )
            .staggerFromTo(splittedText2.chars, 0.5, 
                { rotateZ: 360, opacity: 0 },
                { rotateZ: 0, opacity: 1 },
                0.02  
            );
        return textTimeline;
    };
 
    useEffect(() => {
        const textTimeline = createTextTimeline();
        const masterTimeline = gsap.timeline();
        masterTimeline
            .set(['.kapow'], {scale: 0, opacity: 0})
            .set(['#circle1', '#circle2', '#circle3', '#circle4', '#circle5'], { opacity: 0 })
            .set(['#contentLine1', '#contentLine2', '#contentLine3', '#contentLine4', '#contentLine5', '#contentLine6', '#contentLine7'], { scaleX: 0, transformOrigin: 'left' })
            .to(['#circle1', '#circle2', '#circle3', '#circle4', '#circle5'], {
                duration: 0.5,
                opacity: 1, 
                stagger: 0.1,
                ease: 'power1.inOut'
            })
            .to(['#contentLine1', '#contentLine2', '#contentLine3', '#contentLine4', '#contentLine5', '#contentLine6', '#contentLine7'], {
                duration: 0.7,
                scaleX: 1, 
                stagger: 0.1,
                ease: 'power1.inOut'
            })
            .to(['#circle1', '#circle2', '#circle3', '#circle4', '#circle5'], {
                duration: 0.5,
                y: -3, 
                repeat: 1, 
                yoyo: true,
                ease: 'power1.inOut',
                stagger: {
                    each: 0.2,
                    yoyo: true,
                    repeat: 1
                },
                delay: 0.4 
            })
            .to(['#contentLine1', '#contentLine2', '#contentLine3', '#contentLine4', '#contentLine5', '#contentLine6', '#contentLine7'], {
                duration: 0.8,
                stagger: 0.1,
                opacity: 0
            }, '+=0.3')
            .to(['.svg-container'], {
                opacity: 0,
                duration: 0.3,
                delay: 0.3
            })
            .to(['.svg-container'], {
                display: '0'
            })
            .to('.landing-page', {
                duration: 0.2,
                backgroundColor: '#87CEEB',
                ease: 'power1.inOut',
            }) 
            .to('.comic-background', {
                duration: 0.3,
                opacity: 1,
                ease: 'power1.inOut',
            }) 
            .to('.kapow', {
                scale: 1.5, 
                opacity: 1, 
                duration: 0.33, 
                ease: 'back.out(1.7)',
                delay: 0.6
            })
            
            .add(textTimeline.delay(2))
 
    }, []);
 
 
    return (
        <div className="landing-page">
           
            <div className="svg-container">
                <Monitor width="300" height="300" />
            </div>
 
            <KAPOW/> 
            <div className="comic-background" style={{ opacity: 0, zIndex: 1, position: 'absolute' }}></div>
 
            <h1  style={{ zIndex: 2}}className="spin-text welcome-text">Welcome to Dominic's Websites...</h1>
            <h1  style={{ zIndex: 2}} className="spin-text instruction-text">Click on a letter... any letter</h1>
        </div>
    );
};
 
export default LandingPage;