const typeDefs = `
type Techs {
    bar: String
}

type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
}

type Query {
    allTechs: [Techs]
    allMatchups: [Matchup]
    matchup(id: ID!): Matchup!
}

type Mutation {
    createVote(_id: String, techNum: Int): Matchup
}
`;

module.exports = typeDefs;