create table quiz_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  score int not null,
  total int not null,
  mode text not null,
  created_at timestamp default now()
);
