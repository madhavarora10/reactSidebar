import { AiFillAccountBook } from "react-icons/ai";
import { AiFillBank } from "react-icons/ai";
export const item=[
    {
        type:1,
        label:'button 1',
        icon:<AiFillAccountBook/>,
        link:'/'
    },
    {
        type:1,
        label:'button 2',
        icon:<AiFillAccountBook/>,
        link:'/'
    },
    {
        type:2,
        label:'button 3',
        icon:<AiFillBank/>,
        dropdown:[
            {
                label:'dropDown1',
                link:'/'
            },
            {
                label:'dropDown1',
                link:'/'
            },
            {
                label:'dropDown1',
                link:'/'
            }
        ]
    }];