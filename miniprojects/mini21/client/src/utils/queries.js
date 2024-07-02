import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query allMatchups {
    allMatchups {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_MATCHUP = gql`
query Matchup($matchupId: ID!) {
  matchup(id: $matchupId) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}`;