alter table "user" add column "firstName" text not null;

alter table "user" add column "lastName" text not null;

alter table "user" add column "termsAccepted" integer not null;

alter table "user" add column "privacyAccepted" integer not null;

alter table "user" add column "role" text;

alter table "user" add column "lang" text;