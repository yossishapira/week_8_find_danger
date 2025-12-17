import { question } from "readline-sync";

export function Menu() {
    const menu = question(`
Get People List press 1 
Get Call Records/Transcriptions press 2 
Search People by Name press 3
Search People by Age press 4
Find Dangerous People press 5
Exit 6
`)
    return menu}