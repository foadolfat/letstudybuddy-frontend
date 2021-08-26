import * as React from "react"
import { Resizable } from "re-resizable";
// import { useResizeDetector } from 'react-resize-detector';
// import { useTransition, animated } from 'react-spring';
// import {Rnd} from 'react-rnd';

function Chat(){

    return(

        <Resizable
            defaultSize={{
                width:400,
                height:"90vh",
            }}
            minWidth={400}
            maxWidth={"50vw"}
            enable={{
                top:false,
                right:true,
                left:false,
                bottom:false,
            }}
        >
            <div className="flex flex-col chat text-on-primary text-xl font-bold">
                
                <Resizable
                    minHeight={200}
                    maxHeight={"70vh"}
                    bounds="parent"
                    enable={{
                        top:false,
                        right:false,
                        left:false,
                        bottom:true,
                    }}
                >
                <div className="flex flex-col w-full h-full bg-primary rounded-md shadow-lg p-4 justify-between">
                        Chat area
                        <input type="text" placeholder="Chat" className="w-full h-5 text-base rounded-sm shadow-lg p-4 bg-background focus:outline-none"/>
                        </div>
        
                </Resizable>
                <div className="flex flex-col flex-grow-1 friends h-full w-full bg-primary rounded-md shadow-lg mt-2 p-4 justify-between">
                    Friends list
                    <input type="search" placeholder="Search name or email" className="w-full h-5 text-base rounded-sm shadow-lg p-4 bg-background focus:outline-none"/>
                    </div>
        
            </div>
        </Resizable>

    
    )
}

export default Chat