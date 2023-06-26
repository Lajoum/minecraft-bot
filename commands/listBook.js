const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const Book = require("../database/models/Book.js");
// on exporte ici le data, l'autocomplete (qui permet de compléter les arguments du string book) et le execute (ce qui va etre exécuté en gros)
module.exports = {
     data: new SlashCommandBuilder()
        .setDefaultMemberPermissions(Discord.PermissionFlagsBits.Administrator)
        .setName('listbook') // le nom de la commande
        .setDescription('Liste des livres réservés'), // la description 


    async execute(interaction) { // l'exécution de la commande
        await interaction.deferReply({ephemeral: true}); // on dit au bot d'attendre avant de répondre
    
        
        for (let i = 0; i < number; i++) { // pour chaque nombre on crée un livre dans la base de données
          await Book./*A REMPLIR*/({
            username: /*A REMPLIR*/(),
            id: /*A REMPLIR*/,
            reserved: true
          }).then(Book.sync());
        }
        // on renvoie une réponse
        return interaction.editReply({ content: `${number} livre(s) ${book} de niveau ${level} a/ont bien été ajouté(s).`/*A COMPLETER*/, ephemeral: true });
    },
}; 