const { Matchup } = require('../models');

module.exports = {
    Query: {
        allTechs: () => {},
        allMatchups: async () => {
            const allMatchups = await Matchup.find({});

            return allMatchups;
        },
        matchup: async (_, args) => {
            const matchup = await Matchup.findOne({ _id: args.id });

            return matchup;
        },
    },
    Mutation: {
        createVote: async (_, args) => {
            const vote = await Matchup.findOneAndUpdate(
                { _id: args._id },
                { $inc: { [`tech${args.techNum}_votes`]: 1 } },
                { new: true }
            );

            return vote;
        },
    },
};