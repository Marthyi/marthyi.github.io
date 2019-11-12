---
tags: Sql-Server
---

## Définition
**LOGIN** tuple (login,password) permettant une connexion  
**USER** compte associé à un serveur ou une base de données  
**ROLE** ensemble de persmissions d'accès à une base ou un server  


## Gestion des Logins

```sql
USE master;
GO;
CREATE LOGIN <login> WITH PASSWORD = '<enterStrongPasswordHere>';
DROP LOGIN <login>
`````

### Accès serveur

- Pour permettre à l'utilisateur de voir toutes les bases du serveur il faut créer le compte utilisateur depuis la base master

```sql
USE <master|base specificque>;
GO;
CREATE USER <user_name> FOR LOGIN <login> WITH DEFAULT_SCHEMA = dbo
`````

### Gestion des roles pour une base
- ne pas oublier d'ajouter l'utilisateur à la base avant de lui spécifier ses droits

```sql
ALTER ROLE <database_role> ADD MEMBER <user_name>
ALTER ROLE <database_role> DROP MEMBER user_name
`````
### Restreindre les droits à un schéma
```sql
GRANT SELECT ON SCHEMA::<schema_name> TO <user_name>;
````



Références de l'article:
- [CREATE LOGIN (Transact-SQL)](https://docs.microsoft.com/fr-fr/sql/t-sql/statements/create-login-transact-sql?view=sql-server-ver15)  
- [User Role server](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15)
- [User Role database](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver15)





