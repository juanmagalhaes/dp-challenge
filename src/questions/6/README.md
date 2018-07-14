# Question - 6 Automotive Assembly

## Entity relationship

With the following model it is possible to fulfill all of the application requirements.

![DB Model](https://github.com/juanmagalhaes/dp-challenge/blob/master/src/questions/6/AssemblyDBModel.png)

### Multiple clients

The `Client` is the factory that initially is going to be just one but in the long term each client will have
its own data. In order to do so, all other entities are associated with the client so all users that belong
to one client will only be able to write and read data that have the same `clientId`.

Of course not all tables need to be related to client directly though this way we can avoid unnecessary
joins on queries because joins are expensive operations.

### Parts and subassembiles

The `Part` entity describe each type of possible parts used in the assembly lines and as some parts can be composed
of subassemblies, I created a self relationship with the `subassemblyOf` field so a part will say if it is a component
to another part.

### Vehicle types and dependent parts

The `Vehicle specification` entity describes all the details regarding a type of vehicle. To know what parts compose a
vehicle type, I created the `Vehicle specification parts` entity, so each row on this table specifies a part that is
needed to build a vehicle like that and the amount needed. `Vehicle specification parts` is a many to many relationship
with `Vehicle specification` and `Parts` so parts can be used to create different vehicles and vehicles can be composed
of several parts.

As parts can be composed of several parts, I would create the application in a way that vehicle types would preferably
be associated with final parts (not subassemblies) unless some it only needs one subassembly instead of a final part.

### Vehicles being assembled

The `Vehicles` table is a vehicle in some of the states of assembly states. It has a vehicle type so that we can know
what vehicle is being build and the status field would have values that describes if the vehicle is will yet start
the assemblement process, if it is in progress or done.

### Multiple assembly lines

Each assembly line that a factory has will be a row in the `Assembly line` table.

### Workflow

The `Workflow` table is where we tell the state of the assembly line. With it, it is possible to know if a `Part` is in stock
or not with `StockStatus`, if it is being used in some assembly line and what `Vehicle` is go to use it.

The `Availability` status will tell if the part is "in transit" was "backordered" or any other possible availability status.

The reservation (check in, check out) could be separated in different tables but in order to avoid unnecessary joins I decided
to leave it as a part of the workflow table so, there are some fields to handle reservation like, `reservationStatus` to tell
if the part was checked in or out, when and by whom.

Many of the foreign keys in this table are optional, a `part` may not be reserved to be used in any vehicle yet, and it also
my not have been checked in or out by any user, and it is not being used in any assembly line yet.

There could have been just one status, but as I don't have enough information of all the possible status and if some of the
possible status can be happening at the same time, I decided to create three, `Availability`, `Stock` and `Reservation`.

### Users and roles

Users will have a role that will tell what they can do on the application. The database does not enforce this rules of who can
do what, the application should have a layer or a service dedicated to implement these rules. Even though I created roles as
a table, it could also be an Enum since we are assuming fixed roles.

### Auditing and timeline management

All tables have the fields `createdAt`, `updated`, `deletedAt` and `enabled`, this way is possible to keep track of when things
happened, though we only have the last update time. If we need keep track of every update on the tables then our database should
have some auditing feature for us to enable. In order to avoid loosing data and have good metrics to collect, I'm assuming that
data would never be deleted, every time some data were to be deleted it would have `enable` field set to false instead and
`deletedAt` would have the "deletion" time.

I would assure that the application would have some abstractions to always handle these rules.
