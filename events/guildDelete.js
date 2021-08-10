// This event executes when a guild (server) is left.

const Event = require("../base/Event");

module.exports = class guildDelete extends Event {
  constructor(client) {
    super(client, {
      name: "guildDelete"
    });
  }

  async run(guild) {
    // Set the bot's activity, updating when ever it is invited to a server.
    this.client.user.setActivity(`${this.client.settings.get("default").prefix}help | ${this.client.guilds.cache.size} Servers`);

    // Well they're gone. Let's remove them from the settings and log it!
    this.client.settings.delete(guild.id);

    // Log the event.
    this.client.logger.cmd(`[GUILD JOIN] ${guild.id} added the bot. Owner: ${guild.ownerId}`);
  }
}

