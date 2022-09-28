
-----------------------
SELECT * FROM funcionarios 
	JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento
-----------------------
SELECT * FROM funcionarios 
	JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento
 WHERE funcionarios.id_funcionario = 2
 -----------------------
 SELECT 
    departamentos.nome, 
    departamentos.cpf, 
    funcionarios.descricao 
    FROM funcionarios as f
	    JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento
        
        WHERE funcionarios.id_funcionario = 2
-----------------------
 SELECT 
    f.nome, 
    f.cpf, 
    d.descricao 
    FROM funcionarios as f
	    JOIN departamentos as d ON d.id_dept = f.id_departamento
-----------------------
 SELECT 
    f.nome as "Name", 
    f.cpf as "CPF", 
    d.descricao as "Descrição"
    FROM funcionarios as f
	    JOIN departamentos as d ON d.id_dept = f.id_departamento
        
        WHERE f.id_funcionario = 2
-------------------
 SELECT *
    FROM funcionarios as f
	    LEFT OUTER JOIN departamentos as d ON d.id_dept = f.id_departamento
---------------------
 SELECT *
    FROM departamentos as d
	    LEFT OUTER JOIN funcionarios as f ON d.id_dept = f.id_departamento