import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Colors, EmbedBuilder } from "discord.js";
import SlashCommandBuilder from "../../../core/loaders/objects/customSlashCommandBuilder";

const Command = new SlashCommandBuilder()
  .setName("wishlist")
  .setDescription("Wishlist Stunt Derby on steam!")
  .setFunction(async (interaction) => {
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Stunt Derby")
          .setDescription(
            "Wishlist Stunt Derby on Steam [here](https://store.steampowered.com/app/2026450/Stunt_Derby/)!"
          )
          .setColor(Colors.Blue),
      ],
      components: [
        new ActionRowBuilder<ButtonBuilder>().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setLabel("Steam Page")
            .setURL("https://store.steampowered.com/app/2026450/Stunt_Derby/")
        ),
      ],
    });
  });

export default Command;
