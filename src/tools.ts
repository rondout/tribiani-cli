/*
 * @Author: shufei.han
 * @Date: 2024-10-24 18:18:24
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-10-24 18:41:58
 * @FilePath: \tribiani-cli\src\tools.ts
 * @Description: 
 */

import chalk from "chalk";
import { Colors } from "./theme";

export const log = (a:string) => {
    console.log(a);
}

log.purple = (...data: any) => {
    // console.log(chalk.hex(Colors.PURPLE)(...data));
    console.log(chalk.hex);
    
}