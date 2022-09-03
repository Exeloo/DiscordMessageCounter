import {Client} from "discord.js";
import {config} from "./config";

export const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ],
});

const login = () => {
    client.login(config.token);
};

client.on("disconnect", () => {
    login();
});

login();
