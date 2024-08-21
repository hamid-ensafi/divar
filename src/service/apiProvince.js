import supabase from "./supabase";

async function getProvince() {
  let { data: province, error } = await supabase
    .from("province")
    .select("*");

 
    if (error) {
      console.error(error.message)

      throw new Error(" some thing wrong");
    }

    return province;
}
async function getCity(query) {
  let { data: province, error } = await supabase
    .from("province")
    .select("*");

 
    if (error) {
      console.error(error.message)

      throw new Error(" some thing wrong");
    }

    return province;
}
export  {getCity,getProvince};
