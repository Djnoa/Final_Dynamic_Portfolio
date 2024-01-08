import React from 'react';



const Monitor = (props) => {

    return (
        <div>
            <svg viewBox="0 0 123 123" {...props}>
                <defs>
                    <style dangerouslySetInnerHTML={{ __html: ".cls-1{fill-rule:evenodd;}" }} />
                </defs>
                <title>computer-monitor</title>
                <path
                    className="cls-1"
                    d="M3.34,0h116.2a3.35,3.35,0,0,1,3.34,3.34v77a3.35,3.35,0,0,1-3.34,3.34H3.34A3.35,3.35,0,0,1,0,80.32v-77A3.35,3.35,0,0,1,3.34,0Zm43,88.27h30.3c.08,5.24,2.24,9.94,8.09,13.63H38.2c4.68-3.39,8.11-7.51,8.09-13.63Zm-39-83.5H115.56a3,3,0,0,1,3,3V68a3,3,0,0,1-3,3H7.33a3,3,0,0,1-2.95-3V7.72a3,3,0,0,1,3-2.95Z" />     
                <circle id="circle1" cx="25" cy="15" r="3" fill="gray" />

                    <circle id="circle2" cx="33" cy="15" r="3" fill="gray" />

                    <circle id="circle3" cx="41" cy="15" r="3" fill="gray"/>

                    <circle id="circle4" cx="49" cy="15" r="3" fill="gray"/>

                    <circle id="circle5" cx="57" cy="15" r="3" fill="gray" />

                            <rect id="contentLine1" x="20" y="23" width="50%" height="1%" fill="lightgray" />
                            <rect id="contentLine2" x="20" y="28" width="57%" height="1%" fill="lightgray" />
                            <rect id="contentLine3" x="20" y="33" width="40%" height="1%" fill="lightgray" />
                            <rect id="contentLine4" x="20" y="43" width="47%" height="1%" fill="lightgray" />
                            <rect id="contentLine5" x="20" y="48" width="42%" height="1%" fill="lightgray" />
                            <rect id="contentLine6" x="20" y="53" width="38%" height="1%" fill="lightgray" />
                            <rect id="contentLine7" x="20" y="58" width="50%" height="1%" fill="lightgray" />
            </svg>
        </div>
    );
}

export default Monitor;