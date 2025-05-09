
-- Create a new table for quote requests
create table if not exists public.quote_requests (
  id uuid not null default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  project_type text,
  budget text,
  timeline text,
  created_at timestamp with time zone default now() not null
);

-- Enable RLS
alter table public.quote_requests enable row level security;

-- RLS policies
create policy "Allow insert for anonymous users" on public.quote_requests
  for insert
  to anon
  with check (true);
  
create policy "Admin can read quote requests" on public.quote_requests
  for select
  to authenticated
  using (auth.role() = 'admin');
