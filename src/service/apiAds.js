import supabase from "./supabase";

async function getAds(params) {
  let { data: Ads, error } = await supabase
    .from("Ads")
    .select(`
      *,
      cities(
        cityname
      )
    `)
    .in("cityId", params)
  if (error) {
    console.error(error.message);

    throw new Error("some thing wrong in load article please try again ");
  }
  return Ads;
}
export { getAds };
