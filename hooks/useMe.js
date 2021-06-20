import { useQuery, useReactiveVar, gql } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
  query me {
    me {
      username
      avatarURL
    }
  }
`;

export default function useMe() {
  const hasToken = useReactiveVar(isLoggedInVar);

  const { data } = useQuery(ME_QUERY, {
    skip: !hasToken,
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);

  return data;
}
