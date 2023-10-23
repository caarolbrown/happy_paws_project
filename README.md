# happy_paws_project
**Define Project Vision**

Crear una aplicación para las personas que quieren adoptar y acoger animales abandonados o sin hogar, generando una aplicación donde puedan consultar donde están los centro de acogida y adopción, qué animales están en los refugios, facilitando así que los animales encuentren un hogar con una adopción responsable. Así como, llevar un control sobre los usuarios que quieran acceder a la aplicación, los voluntarios que ayudan al mantenimiento del cuidado de los animales (ya sea acudiendo al refugio, acogiendo animales, paseando, limpiando...)

**User Stories**

Identify user persons
Personas residentes en Gran Canaria, comprendidas entre la mayoría de edad y la capacidad de hacerse responsable del cuidado de un animal.

**Break down the vision into features - Write user stories**

**User Story 1:** 

Persona que quiere acoger, adoptar   
Aythami, desde siempre ha querido darle un hermanito pequeño a su perrito, por lo que quiere saber dónde puede acudir para darle un hogar feliz a un perro que se encuentre sin hogar. Por ello, le gustaría tener la facilidad de conocer el listado de refugios existentes así como los animales que pueden ser compatibles con el suyo.

**User Story 2:**

Persona que quiere ser voluntario   
Fernando, como persona sensibilizada y concienciada con el cuidado de los animales, le gustaría aportar su granito de arena en la mejora de la calidad de vida de los animales que no tienen hogar. Por ello, quiere saber los refugios que existen para poder contactar con ellos y saber si hay disponibilidad de voluntariado.  

**User Story 3:**

Persona que quiere ser casa de acogida
Carol, quiere tener una mascota pero nunca ha tenido y tiene miedo de no se capaz de poder hacerse cargo de forma indefinida de un animal, por lo que le gusta la idea de poder ayudar de manera temporal a los animales para ver si es posible adaptarse a esa responsabilidad y finalmente adoptar.

**ROLES DE USERS**

Admin = ASBAT

Usuarios comunes = USBAT

Trabajadores del albergue = ESBAT

Voluntarios = VBAT

**RELACIONES DE TABLAS**

**ONE TO ONE**

Animal - Cage
Ref: "animals"."id_cage" – "cage"."id"

User - Payroll 
Ref: "users"."id" – "payroll"."id_user"

User – Host_families 
Ref: "host_families"."id_user" - "users"."id"

User – Adoptive_families 
Ref: "adoptive_families"."id_user" - "users"."id"


**ONE TO MANY**

Adoptive_families - Animal
Ref: "animals"."id" > "host_families"."id_animals"

Host_families - Animal 
Ref: "animals"."id" > "adoptive_families"."id_animals"

User – Tasks
Ref: "users"."id" <> "tasks"."id"

**MANY TO MANY**

Animal - Sickness
Ref: "animals"."id" <> "animal_sickness"."id_animals"

Ref: "animal_sickness"."id_sickness" <> "sickness"."id"

Animal – Treatment
Ref: "animals"."id" <> "animal_treatment"."id_animals"

Ref: "animal_treatment"."id_treatment" <> "treatment"."id"


### Members Endpoints
**USERS**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /users                  | YES   | Admin | Get all users                | -                          | [{ user }]                         |
| GET    | /users/:userId          | YES   | Admin | Get one user                 | user_id                    | { user }                           |
| PUT    | /users/:userId          | YES   | Admin | Update user                  | user_id                    | "User updated"                     |
| POST   | /users                  | YES   | Admin | Create one user              | req.body                   | "User created"                     |
| DELETE | /users/:userId          | YES   | Admin | Remove one user              | user_id                    | "User deleted"                     |


**ANIMALS**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /animals                  | YES   | User | Get all animals                | -                          | [{ animal }]                     |  
| GET    | /animals/:animalId        | YES   | User | Get one animal                 | animal_id                  | { animal }                       |
| PUT    | /animals/:animalId        | YES   | Admin | Update animals                | animal_id                  | "Animal updated"                 |
| POST   | /animals                  | YES   | Admin | Create one animal             | req.body                   | "Animal created"                 |
| DELETE | /animals/:animalId        | YES   | Admin | Remove one animal             | animal_id                  | "Animal deleted"                 |

**CAGES**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /cages                  | YES   | Volunteer | Get all cages                | -                        | [{ cage }]                     |  
| GET    | /cages/:cageId          | YES   | Volunteer | Get one cage                 | cage_id                  | { cage }                       |
| PUT    | /cages/:cageId          | YES   | Admin | Update cages                     | cage_id                  | "Cage updated"                 |
| POST   | /cages                  | YES   | Admin | Create one cage                  | req.body                 | "Cage created"                 |
| DELETE | /cages/:cageId          | YES   | Admin | Remove one cage                  | cage_id                  | "Cage deleted"                 |


**PAYROLLS**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /payrolls                  | YES   | Employee | Get all payrolls                | -                        | [{ payroll }]                 | 
| GET    | /payrolls/:payrollId       | YES   | Employee | Get one payroll                 | payroll_id               | { payroll }                   |
| PUT    | /payrolls/:payrollId       | YES   | Admin | Update payrolls                    | payroll_id               | "Payroll updated"             |
| POST   | /cages                     | YES   | Admin | Create one payroll                 | req.body                 | "Payroll created"             |
| DELETE | /payrolls/:payrollId       | YES   | Admin | Remove one payroll                 | payroll_id               | "Payroll deleted"             |

**SICKNESS**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /sickness                  | YES   | Volunteer | Get all sickness           | -                        | [{ sickness }]                   |  
| GET    | /sickness/:sicknessId      | YES   | Volunteer | Get one sickness           | sickness_id              | { sickness }                     |
| PUT    | /sickness/:sicknessId      | YES   | Admin | Update sickness                | sickness_id              | "Sickness updated"               |
| POST   | /sickness                  | YES   | Admin | Create one sickness            | req.body                 | "Sickness created"               |
| DELETE | /sickness/:sicknessId      | YES   | Admin | Remove one sickness            | sickness_id              | "Sickness deleted"               |

**TREATMENT**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /treatment                 | YES   | Volunteer | Get all treatments          | -                       | [{ treatment }]                   | 
| GET    | /treatment/:treatmentId    | YES   | Volunter | Get one treatment            | treatment_id            | { treatment }                     |
| PUT    | /treatment/:treatmentId    | YES   | Admin | Update treatments               | treatment_id            | "Treatments updated"               |
| POST   | /treatment                 | YES   | Admin | Create one treatment            | req.body                | "Treatment created"               |
| DELETE | /treatment/:treatmentId    | YES   | Admin | Remove one treatment            | treatment_id            | "Treatment deleted"               |

**TASKS**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /tasks                 | YES       | Volunteer   | Get all tasks          | -                        | [{ tasks }]                   | 
| GET    | /tasks/:tasksId        | YES       | Volunter    | Get one task           | task_id                  | { tasks }                     |
| PUT    | /tasks/:tasksId        | YES       | Admin       | Update tasks           | task_id                  | "Tasks updated"               |
| POST   | /tasks                 | YES       | Admin       | Create one task        | req.body                 | "Task created"                |
| DELETE | /tasks/:tasksId        | YES       | Admin       | Remove one task        | task_id                  | "Tasks deleted"               |

**HOST_FAMILIES**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /host_families                   | YES   | Volunteer| Get all host_families   | -                  | [{ host_families }]                  | 
| GET    | /host_families/:host_familiesId  | YES   | Volunter | Get one host_familie    | host_families_id   | { host_families }                    |
| PUT    | /host_families/:host_familiesId  | YES   | Admin    | Update host_familie     | host_families_id   | "Host_families updated"              |
| POST   | /host_families                   | YES   | Admin    | Create one host_familie | req.body           | "Host_families created"              |
| DELETE | /host_families/:host_familiesId  | YES   | Admin    | Remove one host_familie | host_families_id   | "Host_families  deleted"             |


**ADOPTIVE_FAMILIES**

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /adoptive_families                             | YES       | Volunteer   | Get all adoptive_families          | -                        | [{ adoptive_families }]                   | 
| GET    | /adoptive_families/:adoptive_familiesId        | YES       | Volunter    | Get one adoptive_familie           | adoptive_families_id     | { adoptive_families }                     |
| PUT    | /adoptive_families/:adoptive_familiesId        | YES       | Admin       | Update adoptive_families           | adoptive_families_id     | "Adoptive_families updated"               |
| POST   | /adoptive_families                             | YES       | Admin       | Create one adoptive_familie        | req.body                 | "Adoptive_families created"               |
| DELETE | /adoptive_families/:adoptive_familiesId        | YES       | Admin       | Remove one adoptive_familie        | adoptive_families_id     | "Adoptive_families deleted"               |
