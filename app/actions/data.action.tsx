"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { BACKEND_API } from "../global";

export const fetchData = async (page: number) => {
  const response = await fetch(
    `${BACKEND_API}/api/animes?page=${page}&limit=8`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
