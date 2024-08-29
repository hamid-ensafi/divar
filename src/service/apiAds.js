import supabase from "./supabase";

async function getAds(params, title) {
  let query = supabase.from("Ads");

  if (title === "empty" ) {
    console.log("hame ads");
    query = await query.select(`*,cities(cityname)`).in("cityId", params);
  }

  
  if (title !== "empty" && title !== undefined) {
    console.log("fagat ttile");

    query = await query
      .select(`*,cities(cityname)`)
      .in("cityId", params)
      .eq("title", title);
  }

  const { data: Ads, error } = query;

  if (error) {
    console.error(error.message);

    throw new Error("some thing wrong in load article please try again ");
  }
  return Ads;
}
export { getAds };
