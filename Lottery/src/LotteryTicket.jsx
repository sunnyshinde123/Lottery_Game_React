import LotteryNum from "./LotteryNum"
import './LotteryTicket.css'

export default function LotteryTicket({ticket}){
    return(
        <>
        <div className="ticket">
        {ticket.map((ele, idx)=> <LotteryNum key={idx} num={ele} ></LotteryNum> )}
        </div>
        
        </>
    )
}