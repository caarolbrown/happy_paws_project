# happy_paws_project

updateAnimals, deleteAnimals
Animal - Sickness
Ref: "animals"."id" <> "animal_sickness"."id_animals"

Ref: "animal_sickness"."id_sickness" <> "sickness"."id"

Animal – Treatment
Ref: "animals"."id" <> "animal_treatment"."id_animals"

Ref: "animal_treatment"."id_treatment" <> "treatment"."id"

User – Tasks
Ref: "users"."id" <> "tasks"."id"

DEFINIR ENDPOINTS
Se tiene que hacer lo de abajo con cada una de las tablas menos con las intermedias

### Members Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |
