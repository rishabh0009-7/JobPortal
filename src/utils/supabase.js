import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;



const supabaseClient = async(supbaseAcessToken)=>{
    const supabase = createClient(supabaseUrl, supabaseKey,{
        global:{
            headers:{
                Authorization:Bearer  ${supbaseAcessToken },
            },
        },
    });
    return supabase;

};


export default supabaseClient;
