import {client} from "./client";
import {MessageCreateListener} from "./counter/messageCreateListener";


client.on("ready", async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    MessageCreateListener()
});
