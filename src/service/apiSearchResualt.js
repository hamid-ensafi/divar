import supabase from "./supabase";

async function getResualt(query) {
  let { data: Ads, error } = await supabase.rpc('search_ads', {search_term :query})
 
  console.log(Ads)
  if (error) {
    console.error(error.message)

    throw new Error(" some thing wrong");
  }

  return Ads;
}
export default getResualt;

