alter table public.quiz_results
alter column user_id set default auth.uid();

alter table public.quiz_results enable row level security;

grant select, insert on public.quiz_results to authenticated;

drop policy if exists "Users can view their own quiz results" on public.quiz_results;
drop policy if exists "Users can insert their own quiz results" on public.quiz_results;

create policy "Users can view their own quiz results"
on public.quiz_results
for select
to authenticated
using (
  auth.uid() is not null
  and auth.uid() = user_id
);

create policy "Users can insert their own quiz results"
on public.quiz_results
for insert
to authenticated
with check (
  auth.uid() is not null
  and auth.uid() = user_id
);

create index if not exists quiz_results_user_created_at_idx
on public.quiz_results (user_id, created_at desc);
