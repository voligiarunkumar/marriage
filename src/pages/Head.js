import React from 'react'
import Eldhose from "../picture/eldhosevj.jpg"
import totalDay from "../componets/totalDayLeft"
import bridegroom from "../picture/bridegroom.jpeg";

 const Head=(props)=>{
const {isTyping,canShowRemainingDay}=props

const today= new Date();
const nextMonth=new Date(today.getFullYear(),today.getMonth()+1, 5);
const timeDiff=nextMonth.getTime()- today.getTime();
const daysDiff=Math.ceil(timeDiff / (1000*3600*24));
const marriageDaySentence=daysDiff==0?'Welcome to our Marraige':`There are ${daysDiff} days left for our marriage`

const classNameForType=canShowRemainingDay? "typingCompleted":"typing"
    return(<div className='head'>
<div>
    <img className='profile' src={bridegroom}  alt='not found' />
</div>
<div className={classNameForType}>
    
<h3 style={{color:"white"}}>
        {isTyping?"Typing...":canShowRemainingDay?marriageDaySentence: ""}
      </h3>

</div>
    </div>)
}
export default Head