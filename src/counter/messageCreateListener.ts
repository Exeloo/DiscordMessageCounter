import {client} from "../client";
import * as fs from 'node:fs';

export const MessageCreateListener = () => {
    client.on("messageCreate", (msg) => {
        if (msg.guild?.id === "506202549360001053") {
            let obj: string = "{}"
            fs.readFile("output.json", 'utf8', (err, data) => {
                if (err) {
                    console.log("An error occured while reading JSON File.");
                    return console.log(err);
                }
                if (!data) return
                const tempObj = JSON.parse(data)
                if (!tempObj[msg.author.id])
                    tempObj[msg.author.id] = 0
                tempObj[msg.author.id] += 1
                obj = JSON.stringify(tempObj)

                fs.writeFile("output.json", obj, 'utf8', (err) => {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                });
            })
        }
    })
}
