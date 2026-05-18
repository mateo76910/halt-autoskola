-- Halt Autoškola — Supabase schema
-- Run this in the Supabase SQL editor.

create table if not exists public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  exam_id text not null,
  exam_slug text not null,
  exam_title text not null,
  started_at timestamptz not null,
  finished_at timestamptz not null default now(),
  duration_seconds integer not null,
  total_score integer not null,
  max_score integer not null,
  points_to_pass integer not null,
  passed boolean not null,
  failed_due_to_elimination boolean not null default false,
  answers jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists exam_attempts_user_id_idx
  on public.exam_attempts (user_id, finished_at desc);

alter table public.exam_attempts enable row level security;

drop policy if exists "Users read own attempts" on public.exam_attempts;
create policy "Users read own attempts"
  on public.exam_attempts for select
  using (auth.uid() = user_id);

drop policy if exists "Users insert own attempts" on public.exam_attempts;
create policy "Users insert own attempts"
  on public.exam_attempts for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users delete own attempts" on public.exam_attempts;
create policy "Users delete own attempts"
  on public.exam_attempts for delete
  using (auth.uid() = user_id);
