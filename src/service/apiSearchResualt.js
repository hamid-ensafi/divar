import supabase from "./supabase";

async function getResualt(query) {
  let { data: Ads, error } = await supabase
    .from("Ads")
    .select("*")
    .ilike('title', `%${query}%`)
  if (error) {
    throw new Error(' some thing wrong')
  }
  
  return  Ads
}
export default getResualt;
