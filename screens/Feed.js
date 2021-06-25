import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FlatList } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import Shop from "../components/Shop";
import useMe from "../hooks/useMe";

const FEED_QUERY = gql`
  query seeCoffeeShops($lastId: Int!) {
    seeCoffeeShops(lastId: $lastId) {
      id
      name
      latitude
      longitude
      user {
        username
        avatarURL
      }
      photos {
        id
        url
      }
      categories {
        id
        name
      }
    }
  }
`;

export default function Feed() {
  const [lastId, setLastId] = useState(0);

  const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      lastId: 0,
    },
  });

  const renderShop = ({ item: shop }) => {
    return <Shop {...shop} />;
  };
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() =>
          fetchMore({
            variables: {
              lastId: data?.seeCoffeeShops?.length,
            },
          })
        }
        refreshing={refreshing}
        onRefresh={refresh}
        style={{ width: "100%" }}
        data={data?.seeCoffeeShops}
        showsVerticalScrollIndicator={false}
        keyExtractor={(shop) => "" + shop.id}
        renderItem={renderShop}
      />
    </ScreenLayout>
  );
}
