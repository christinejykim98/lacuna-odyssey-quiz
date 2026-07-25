-- Lacuna · "Your Hero's Journey" — submissions table
-- Run this in the Supabase SQL editor (Lovable can connect Supabase for you).

create table if not exists public.submissions (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  source       text,          -- 'chart' or 'quiz'
  birth_date   date,
  birth_time   text,
  birth_place  text,
  sun          text,
  north_node   text,
  saturn       text,
  midheaven    text,
  traveler     text,          -- quiz result character
  email        text
);

-- Row-level security: allow ONLY anonymous inserts (safe to ship the anon key publicly).
alter table public.submissions enable row level security;

create policy "allow anon inserts"
  on public.submissions
  for insert
  to anon
  with check (true);
