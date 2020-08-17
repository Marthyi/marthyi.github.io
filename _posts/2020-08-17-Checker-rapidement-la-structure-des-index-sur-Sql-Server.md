---
tags: Sql-Server
---

```sql
DECLARE @tablename NVARCHAR(256) = 'XXX';



SELECT i.name AS index_name  
    ,COL_NAME(ic.object_id,ic.column_id) AS column_name  
    --,ic.index_column_id  
    ,ic.key_ordinal  [index_order]
,CASE ic.is_included_column  
	WHEN 0 THEN ''
	WHEN 1 THEN 'OUI'
	END [column_incluse]
FROM sys.indexes AS i  
INNER JOIN sys.index_columns AS ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id  
inner join sys.tables t on t.OBJECT_ID = i.object_id
where t.name = @tablename
order by index_name, index_column_id
````


Références de l''article:
- [MSDN | sys.index_columns (Transact-SQL)](https://docs.microsoft.com/fr-fr/sql/relational-databases/system-catalog-views/sys-index-columns-transact-sql) 




