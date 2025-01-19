// import { createClient } from '@/utils/supabase/server';
import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types';

export default async function Elegance() {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: elegance } = await supabase.from("elegance").select();

  return <pre>{JSON.stringify(elegance, null, 2)}</pre>
}
