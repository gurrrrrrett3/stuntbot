import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Colors, EmbedBuilder, PermissionFlagsBits } from "discord.js";
import SlashCommandBuilder from "../../../core/loaders/objects/customSlashCommandBuilder";

const Command = new SlashCommandBuilder()
  .setName("tickets-embed")
  .setDescription("Sends the ticket embed")
  .setDMPermission(false)
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
  .setFunction(async (interaction) => {
    const embed = new EmbedBuilder()
      .setTitle("Stunt Derby Tickets")
      .setColor(Colors.Blue)
      .setDescription("Click the button below to open a ticket! A team member will be with you shortly.")
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("open-ticket")
        .setLabel("Open Ticket")
        .setStyle(ButtonStyle.Primary)
    );

    interaction.channel?.send({
      embeds: [embed],
      components: [row],
    });

    interaction.reply({
      ephemeral: true,
      content: "Embed sent!",
    });
  })

export default Command;