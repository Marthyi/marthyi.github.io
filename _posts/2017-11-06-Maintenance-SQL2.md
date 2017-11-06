﻿---
tag: Sql-Server
---


## Liste des requêtes sql en cours
```` sql
SELECT  spid,
        sp.[status],
        loginame [Login],
        hostname, 
        blocked BlkBy,
        sd.name DBName, 
        cmd Command,
        cpu CPUTime,
        physical_io DiskIO,
        last_batch LastBatch,
        [program_name] ProgramName   
FROM dbo.sysprocesses sp 
JOIN dbo.sysdatabases sd ON sp.dbid = sd.dbid
ORDER BY CPUTime DESC
````
## Kill une requête
```` sql
KILL 108 # 108
````