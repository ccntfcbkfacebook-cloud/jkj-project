-- Run this in Supabase SQL Editor.
-- Then create your admin account in Authentication > Users and give it
-- app_metadata: { "role": "admin" }. Do not use user_metadata for permissions.

create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  city text not null,
  price text not null,
  property_type text not null default 'Apartment',
  bedrooms integer not null default 0,
  bathrooms integer not null default 0,
  area text not null default '',
  tag text not null default 'NEW LISTING',
  image_url text not null,
  image_path text not null,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.properties enable row level security;
grant select on public.properties to anon, authenticated;
grant insert, update, delete on public.properties to authenticated;

drop policy if exists "Public can view published properties" on public.properties;
create policy "Public can view published properties"
  on public.properties for select to anon, authenticated
  using (is_published or (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can insert properties" on public.properties;
create policy "Admins can insert properties"
  on public.properties for insert to authenticated
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can update properties" on public.properties;
create policy "Admins can update properties"
  on public.properties for update to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can delete properties" on public.properties;
create policy "Admins can delete properties"
  on public.properties for delete to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('property-images', 'property-images', true, 10485760, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Admins upload property images" on storage.objects;
create policy "Admins upload property images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'property-images' and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins update property images" on storage.objects;
create policy "Admins update property images"
  on storage.objects for update to authenticated
  using (bucket_id = 'property-images' and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check (bucket_id = 'property-images' and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins delete property images" on storage.objects;
create policy "Admins delete property images"
  on storage.objects for delete to authenticated
  using (bucket_id = 'property-images' and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
