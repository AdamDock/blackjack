import React, {useState, useEffect} from "react";
import styles from '../index.module.css';
import Decision from "../components/decision";
import Betting from '../components/betting';
import Menu from './menu';


export default function Table(){
    const [score, setScore] = useState<number>(0);
    const getWinTotal = (winTotalFromChild: number): void =>{
        setScore(winTotalFromChild+ score);
    }
    return (
        <>
        <div className={styles.table}>
            <Menu score={score}/>
            <Decision getWinnings={getWinTotal}/>
            <h1></h1>
         </div>
        </>
    )
}