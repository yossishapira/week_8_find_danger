import { Console } from "console";
import fs from "fs"
import { question } from "readline-sync";

export async function GetPeopleList() {
    try {
        const res = await fetch("https://spiestestserver-onjv.onrender.com/people", {
            method: "GET",
        })
        const data = await res.text()
        fs.writeFile("PEOPLE.json", data, (arr) => {
            if (arr) {
                console.log(arr)
            }
            else {
                console.log("File written successfully")
            }

        })



    } catch (error) {
        console.error(error)

    }
}


export async function GetCallRecords() {
    try {
        const res = await fetch("https://spiestestserver-onjv.onrender.com/transcriptions", {
            method: "GET",

        })
        const data = await res.text()
        fs.writeFile("TRANSCRIPTIONS.json", data, (arr) => {
            if (arr) {
                console.log(arr)
            }
            else {
                console.log("File written successfully")
            }

        })



    } catch (error) {
        console.error(error)

    }
}

export function ReadJsonFile() {
    const p = new Promise((resolve, reject) => {
        fs.readFile("PEOPLE.json", "utf8", (err, data) => {
            resolve(data)
            reject(err)
        }
        )
    })
    return p
}

export async function SearchPeoplebyName() {
    const inputName = question("Enter a name to search: ")
    const Objects = await ReadJsonFile()
    const name = JSON.parse(Objects).filter((obj) => obj.name === inputName)
    if (name.length > 0) {
        console.log(name)
    }
    else {
        console.log("The person is not found")
    }

}

export async function SearchPeoplebyAge() {
    const inputAge = Number(question("Enter a Age to search: "))
    const Objects = await ReadJsonFile()
    const age = JSON.parse(Objects).filter((obj) => obj.age === inputAge)
    if (age.length > 0) {
        console.log(age)
    }
    else {
        console.log("The person is not found")
    }

}

export async function FindingHazard() {
    const Objects = await ReadJsonFile()
    const DangerousCalls = JSON.parse(Objects)
    let Listofdangerous = []
    for (let i = 0; i < DangerousCalls.length; i++) {
        DangerousCalls[i].content.forEach(circumcision => {
            if(circumcision === "death" || circumcision === "knife" || circumcision === "bomb" || circumcision === "attack"){
                Listofdangerous.push(DangerousCalls[i])
                if(content[i].danger && content[i].danger >0){
                    content[i].danger+=1
                }
                else{
                    content[i].danger = 1
                }
            }
        })
        console.log(Listofdangerous)  
}}