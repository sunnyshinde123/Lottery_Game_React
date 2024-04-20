import { useState } from "react"
import LotteryTicket from "./LotteryTicket"
import LotteryButton from "./LotteryButton";

function randomNum(n){
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

function LotteryPart({n, isWin}){
    let [num, setNum]=useState(randomNum(n));

    let handleTicket = () =>{
        setNum(randomNum(n))
    }

    let isWinning=isWin(num);
    return (
        <>
        <h1>Lottery Game</h1>
        <LotteryTicket ticket={num}></LotteryTicket>
        <br />
        <LotteryButton action={handleTicket}></LotteryButton>
        {isWinning && <h3>Congratulation, you won lottery !</h3>}
        </>
    )
}

export {LotteryPart, sum};