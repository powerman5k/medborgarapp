create table if not exists public.wrong_answers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id int not null,
  created_at timestamp with time zone default now(),
  unique (user_id, question_id)
);

alter table public.wrong_answers enable row level security;

grant select, insert, delete on public.wrong_answers to authenticated;

drop policy if exists "Users can view their own wrong answers" on public.wrong_answers;
drop policy if exists "Users can insert their own wrong answers" on public.wrong_answers;
drop policy if exists "Users can delete their own wrong answers" on public.wrong_answers;

create policy "Users can view their own wrong answers"
on public.wrong_answers
for select
to authenticated
using (
  auth.uid() is not null
  and auth.uid() = user_id
);

create policy "Users can insert their own wrong answers"
on public.wrong_answers
for insert
to authenticated
with check (
  auth.uid() is not null
  and auth.uid() = user_id
);

create policy "Users can delete their own wrong answers"
on public.wrong_answers
for delete
to authenticated
using (
  auth.uid() is not null
  and auth.uid() = user_id
);

create index if not exists wrong_answers_user_created_at_idx
on public.wrong_answers (user_id, created_at desc);
