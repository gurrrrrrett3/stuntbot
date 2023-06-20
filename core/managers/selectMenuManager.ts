import { Client, InteractionType, StringSelectMenuInteraction } from "discord.js";

export default class SelectMenuManager {
  public menus: Map<string, Function> = new Map();

  constructor(private client: Client) {
    this.client.on("interactionCreate", (menu) => {
      if (!menu.isStringSelectMenu()) return;

      const menuId = menu.customId;
      const menuFunc = this.menus.get(menuId);
      if (!menuFunc) return;
      menuFunc(menu);
    });
  }

  public registerMenu(id: string, callback: (interaction: StringSelectMenuInteraction) => Promise<any>) {
    console.log(`Registering menu: ${id}`);
    this.menus.set(id, callback);
  }

  public unregisterMenu(id: string) {
    this.menus.delete(id);
  }
}
